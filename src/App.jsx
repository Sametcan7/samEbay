import { Outlet } from "react-router-dom";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);
export const FilteredProductsContext = createContext();
export const ProductContext = createContext({});

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [product, setProduct] = useState([]);
  console.log("evet", filteredProducts);
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
