import BackgroundScreenVideo from "../components/background_screen_video";

export default function Hero() {
  return ( 
    <section className="section hero relative">
      <div 
        className="
          absolute
          flex
          items-center
          inset-0
          z-10
        
      ">
        <div
          className="
            p-[50px]
          ">
          <h1 
            className="
              text-6xl lg:text-9xl
              lg:w-[800px]
            ">Pedidos online disponibles.
          </h1>
          <button 
            className="
              mt-10"
            >Haz tu pedido</button>
        </div>
      </div>      
      <div className="">
        <BackgroundScreenVideo videoSrc="/videos/hero-video.mp4" opacity="0.4" />
      </div>
    </section>
  );
}