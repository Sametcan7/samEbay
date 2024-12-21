import { Outlet } from "react-router-dom";

import { createContext, useEffect, useState } from "react";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { Product } from "./types.tsx";

interface FilteredProductsContextType {
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface ProductContextType {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export const ProductsContext = createContext<Product[]>([]);
export const FilteredProductsContext = createContext<
  FilteredProductsContextType | undefined
>(undefined);
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  async function BringProducts() {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const { products } = await data.json();
    setProducts(products.flat());
  }

  useEffect(() => {
    BringProducts();
  }, []);

  return (
    <FilteredProductsContext.Provider
      value={{ filteredProducts, setFilteredProducts }}
    >
      <ProductsContext.Provider value={products}>
        <ProductContext.Provider value={{ product, setProduct }}>
          <div className="max-w-[1440px]  h-screen mx-auto bg-white">
            <Header />
            <main className="bg-white font-robotoCondensed">
              <Outlet />
            </main>
            <Footer />
          </div>
        </ProductContext.Provider>
      </ProductsContext.Provider>
    </FilteredProductsContext.Provider>
  );
}
