"use client";

import SvgLogo from "@/app/svg/logo";
import { useToggleOnEvent } from "../hooks/use_toggle_on_event";

export default function Navbar() {
  const ref01 = useToggleOnEvent({
      trigger: "scroll-down",
      className: "rotate-back-and-disappear-active",
    });
  return (    
    <nav
      ref={ref01}
      className="
        rotate-back-and-disappear
        navbar
        hidden md:block
        absolute
        w-full
        p-[50px]
        z-20">
        <div
          className="
            flex
            space-between
            ">
            <ul
              className="
                text-xl
                inline-flex
                items-center
                gap-10
              ">
              <li><a href="">
                  <SvgLogo 
                    className="
                    h-[30px]
                    fill-white
                    "/>
              </a></li>
              <li><a href="">Pedidos</a></li>
              <li><a href="">Nosotras</a></li>
              <li><a href="">Servicio</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
            <ul>
            </ul>
        </div>
    </nav>
  );
}
