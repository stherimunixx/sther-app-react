interface HeroVideoProps {
  videoSrc: string;
}

export default function HeroVideo({ videoSrc }: HeroVideoProps) {
  return (
    <div
      className="
        hero_video
        relative
        w-screen
        h-screen
        overflow-hidden
      "
    >
      <video
        className="
          absolute
        "
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
