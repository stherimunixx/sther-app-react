import FilterOverlay from "./filter_overlay";

interface filteredScreenBackgroundImageProps {
  imageSrc: string;
  opacity: string;
}

export default function FilteredScreenBackgroundImage({ imageSrc, opacity }: filteredScreenBackgroundImageProps) {
  return (
    <div
      className="
        filtered_screen_background_image
        relative
        w-full
        bg-cover
        bg-center 
      "
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
        <FilterOverlay opacity={opacity} />
    </div>
  );
}
