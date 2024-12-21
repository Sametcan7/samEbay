import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Image from "../ui/product/image";
import Details from "../ui/product/details";
import Specifics from "../ui/product/specifics";
import { useContext } from "react";
import { ProductContext } from "../App";

export default function Product() {
  const { product } = useContext(ProductContext);

  if (product.length === 0)
    return (
      <div className="px-8 py-8 text-center font-bold text-2xl">No Product</div>
    );

  return (
    <div className="px-8 py-8">
      <div className="mb-4">
        <p>
          Product &gt;
          <span className="text-brand">{product.title}</span>
        </p>
      </div>
      <div className="max-lg:flex-col flex gap-10">
        <Image images={product.images} />
        <Details
          brand={product.brand}
          title={product.title}
          rating={product.rating}
          price={product.price}
          stock={product.stock}
          discountPercentage={product.discountPercentage}
          shippingInformation={product.shippingInformation}
        />
      </div>
      <Specifics description={product.description} reviews={product.reviews} />
    </div>
  );
}