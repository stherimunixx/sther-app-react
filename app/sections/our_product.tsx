import ProductBox01 from "../components/product_box_01";

export default function OurProduct() {
  return ( 
    <section className="section our_product">
      <div 
        className="
          flex-4-2-1
          ">
        <ProductBox01 imageSrc="images/our_product/milhojas.png" text="Repostería hojaldrada." />
        <ProductBox01 imageSrc="images/our_product/milhojas.png" text="Repostería hojaldrada." />
        <ProductBox01 imageSrc="images/our_product/milhojas.png" text="Repostería hojaldrada." />
        <ProductBox01 imageSrc="images/our_product/milhojas.png" text="Repostería hojaldrada." />
      </div>   
    </section>
  );
}