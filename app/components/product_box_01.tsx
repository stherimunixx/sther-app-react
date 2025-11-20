import FilterOverlay from "./filter_overlay";

interface ProductBox01Props {
  imageSrc: string;
  text: string
}

export default function ProductBox01({ imageSrc, text }: ProductBox01Props) {
  return (
    <div
      className="
        relative
        product_box_01
        aspect-video
        bg-cover
        bg-center
      "
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
        <FilterOverlay opacity="0.4" />
        <div 
            className="
                absolute
                h-full
                w-full
                flex
                justify-center
                items-center
            ">
            <h2
            className="
                text-2xl
            ">{ text }</h2>
        </div>
    </div>
  );
}
