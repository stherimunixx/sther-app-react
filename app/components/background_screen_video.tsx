import FilterOverlay from "../components/filter_overlay";

export interface backgroundScreenVideoProps {
  videoSrc: string;
  opacity: string;
}

export default function BackgroundScreenVideo( { videoSrc, opacity }: backgroundScreenVideoProps) {
  return ( 
    <div
      className="
        background_screen_video
        relative
        flex
        justify-center
        ">
        <video src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="
                
        ">
        
        </video>
        <FilterOverlay opacity={opacity} />
    </div>
  );
}