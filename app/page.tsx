import Image from "next/image";
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import FloatingMenu from "./components/floating_menu";
import OurProduct from "./sections/our_product";
import MakeOrder from "./sections/make_order";

export default function Landing() {
  return (
    <>
    <FloatingMenu />
    <Navbar />
    <Hero />
    <OurProduct />
    <MakeOrder />
    </>
  );
}
