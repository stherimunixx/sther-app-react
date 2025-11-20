"use client";
import { useRef } from "react";
import SvgLogo from "../svg/logo";
import { useToggleOnEvent } from "../hooks/use_toggle_on_event";

export default function FloatingMenu() {
  const navRef = useToggleOnEvent<HTMLDivElement>({
    trigger: "scroll-past",
    className: "fade-in-active",
    amount: 50,
  });

  const burgerRef = useRef<HTMLDivElement | null>(null);

  useToggleOnEvent<HTMLDivElement>({
    trigger: "click",
    className: "myNavbar_active",
    targetRef: navRef,
    triggerRef: burgerRef,
  });

  return (
    <nav ref={navRef} 
      className="
        myNavbar
        fade-in 
        fixed 
        top-5 
        right-5 
        z-30
        ">
      <ul className="m-5 text-2xl">
        <li><a href="">01. Haz tu pedido.</a></li>
        <li><a href="">02. Nuestras tartas.</a></li>
        <li><a href="">03. Servicios.</a></li>
        <li><a href="">04. Contáctanos.</a></li>
      </ul>

      <div className="logo mb-[40px] md:mb-[80px]">
        <SvgLogo className="w-[170px] md:w-[170px] icon icon--logo m-5" />
      </div>

      <div ref={burgerRef} className="hamburguer absolute">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
