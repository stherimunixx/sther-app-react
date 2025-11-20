"use client";

/**
 * This hook setup allows a floating navigation menu to respond to different events.
 *
 * Example 1: Fade in the menu when scrolling past a certain point:
 * const navRef = useToggleOnEvent<HTMLDivElement>({
 *   trigger: "scroll-past",
 *   className: "fade-in-active",
 *   amount: 50,
 * });
 *
 * Example 2: Toggle menu expansion when clicking a trigger element:
 * const burgerRef = useRef<HTMLDivElement | null>(null);
 * useToggleOnEvent<HTMLDivElement>({
 *   trigger: "click",
 *   className: "myNavbar_active",
 *   targetRef: navRef,
 *   triggerRef: burgerRef,
 * });
 *
 * Example HTML structure:
 *
 * <nav ref={navRef} className="myNavbar fixed top-5 right-5 z-30 fade-in">
 *   <ul className="m-5 text-2xl">
 *     <li><a href="">01. Haz tu pedido.</a></li>
 *     <li><a href="">02. Nuestras tartas.</a></li>
 *     <li><a href="">03. Servicios.</a></li>
 *     <li><a href="">04. Contáctanos.</a></li>
 *   </ul>
 *
 *   <div className="logo mb-[40px] md:mb-[80px]">
 *     <SvgLogo className="w-[170px] md:w-[170px] icon icon--logo m-5" />
 *   </div>
 *
 *   <div ref={burgerRef} className="hamburguer absolute">
 *     <span></span>
 *     <span></span>
 *   </div>
 * </nav>
 *
 * Together, these hooks control the visibility and interactive state of the floating menu,
 * allowing it to fade in when scrolling and expand/collapse when the hamburger button is clicked.
 */

 /**
 * Important note:
 * A single element should not have two separate `transition` properties defined in CSS.
 * If you define multiple transitions separately (e.g., one in `.myNavbar` and another in `.fade-in`),
 * only the last one will take effect, and some animations (like width/height) may not run as expected.
 *
 * To ensure all transitions work correctly, define a single `transition` on the base element
 * with all the properties you want to animate, for example:
 *
 * transition: width 1s ease, height 1s ease, opacity 0.5s ease, transform 0.5s ease;
 *
 * Then you can toggle classes or change properties without overriding or breaking transitions.
 */


import { useEffect, useRef, RefObject } from "react";

type Trigger =
  | "scroll-down"
  | "scroll-up"
  | "scroll-past"
  | "enter-viewport"
  | "exit-viewport"
  | "click";

interface Options<T extends HTMLElement = HTMLElement> {
  trigger: Trigger;
  className: string;
  amount?: number; // solo para scroll-past
  targetRef?: RefObject<T | null>;    // elemento que recibe la clase
  triggerRef?: RefObject<HTMLElement | null>; // elemento que dispara el evento
}

export function useToggleOnEvent<T extends HTMLElement = HTMLElement>({
  trigger,
  className,
  amount = 100,
  targetRef,
  triggerRef,
}: Options<T>) {
  const defaultRef = useRef<T | null>(null);
  const ref = targetRef ?? defaultRef;
  const lastY = useRef(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    let triggerEl: HTMLElement | Window = window;
    if (triggerRef?.current) triggerEl = triggerRef.current;

    /* ---------------- SCROLL EVENTS ---------------- */
    const handleScroll = () => {
      const y = window.scrollY;

      switch (trigger) {
        case "scroll-down":
          if (y > lastY.current) target.classList.add(className);
          else target.classList.remove(className);
          break;

        case "scroll-up":
          if (y < lastY.current) target.classList.add(className);
          else target.classList.remove(className);
          break;

        case "scroll-past":
          if (y > amount) target.classList.add(className);
          else target.classList.remove(className);
          break;
      }

      lastY.current = y;
    };

    if (trigger.startsWith("scroll")) {
      window.addEventListener("scroll", handleScroll);
    }

    /* ---------------- INTERSECTION OBSERVER ---------------- */
    let observer: IntersectionObserver | null = null;

    if (trigger === "enter-viewport" || trigger === "exit-viewport") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (trigger === "enter-viewport" && entry.isIntersecting) {
              entry.target.classList.add(className);
            }
            if (trigger === "exit-viewport" && !entry.isIntersecting) {
              entry.target.classList.add(className);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(target);
    }

    /* ---------------- CLICK ---------------- */
    const handleClick = () => {
      if (trigger === "click") {
        target.classList.toggle(className);
      }
    };

    if (trigger === "click" && triggerEl instanceof HTMLElement) {
      triggerEl.addEventListener("click", handleClick);
    }

    /* ---------------- CLEANUP ---------------- */
    return () => {
      if (trigger.startsWith("scroll")) {
        window.removeEventListener("scroll", handleScroll);
      }
      if (observer) observer.disconnect();
      if (trigger === "click" && triggerEl instanceof HTMLElement) {
        triggerEl.removeEventListener("click", handleClick);
      }
    };
  }, [trigger, className, amount, targetRef, triggerRef]);

  return ref as RefObject<T | null>;
}
