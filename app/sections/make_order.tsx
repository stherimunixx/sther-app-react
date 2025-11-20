import FilteredScreenBackgroundImage from "../components/filtered_screen_background_image";

export default function MakeOrder() {
  return ( 
    <section className="section make_order relative">
        <FilteredScreenBackgroundImage imageSrc="images/make_order/background.png" opacity="0.4" />
        <div
          className="
          absolute
          z-10
          top-0
          h-full
          w-full
          p-[50px]
          flex
          items-center
          ">
          <div className="
            flex
            flex-col
            gap-10
          ">
            <h1 className="
              text-6xl lg:text-9xl
              lg:w-[1200px]
            ">
              Encarga tu tarta online o en el <br/><a href="">747 41 88 20</a>.
            </h1>
            <button className="w-fit">Haz tu pedido.</button>
          </div>
        </div>
    </section>
  );
}