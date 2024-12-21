import { lazy, Suspense } from "react";
import Aside from "./aside";
import Loading from "../loading";

const Products = lazy(() => {
  console.log("Loading Product component");
  return import("./products");
});

export default function ProductsAndFilter() {
  return (
    <div>
      <div className="flex max-lg:flex-col p-8  max-lg:p-2 max-lg:gap-2 gap-8">
        <Aside />
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
