import { useContext, useState } from "react";
import {
  FilteredProductsContext,
  ProductContext,
  ProductsContext,
} from "../../App";
import Product from "./product";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const { setProduct } = useContext(ProductContext);
  const products = useContext(ProductsContext);
  const { filteredProducts } = useContext(FilteredProductsContext);

  const paginatedProducts =
    filteredProducts?.length > 0 ? filteredProducts : products;

  const itemsPerPage = 20;
  const totalPages = Math.ceil(paginatedProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems =
    paginatedProducts[0] === "notfound"
      ? "notfound"
      : paginatedProducts.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tekli Sayfaya Ürün Gönder
  const handleClick = (id) => {
    const product = products.find((product) => product.id === id);
    setProduct(product);
  };
  console.log(currentItems);
  return (
    <section className="w-full">
      <div className="grid justify-center  auto-rows-max max-sm:grid-cols-[repeat(1,_minmax(0,max-content))] max-lg:grid-cols-[repeat(2,_minmax(0,max-content))] grid-cols-[repeat(3,_minmax(0,max-content))] gap-8 max-lg:gap-2">
        {currentItems === "notfound" ? (
          <div className="font-bold text-center text-lg">NOT FOUND</div>
        ) : (
          currentItems.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              stock={product.stock}
              rating={product.rating}
              thumbnail={product.thumbnail}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
      <div
        className={`${
          currentItems === "notfound" && "hidden"
        } flex justify-center my-4 max-lg:flex-wrap`}
      >
        <button
          className="bg-[#f2f2f2] p-2 rounded-lg m-2"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`bg-[#f2f2f2] m-2 p-2 px-3 rounded-lg ${
              currentPage === index + 1 && "border-2 border-black"
            }`}
            key={index}
            onClick={() => changePage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="bg-[#f2f2f2] p-2 rounded-lg m-2"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

// function Product({ title, price, id, stock, thumbnail, handleClick }) {
//   return (
//     <Link to={`/product/${id}`} onClick={() => handleClick(id)}>
//       <div className=" rounded-lg p-2">
//         <div className="bg-[#f2f2f2] rounded-lg">
//           <img className="rounded-lg" src={thumbnail} />
//         </div>
//         <div>
//           <p className="font-bold my-2">{title}</p>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-[#0E74FF] ">Price {price}</p>
//           <p className="text-[#E95841] text-sm">{stock} Items Left!</p>
//         </div>
//       </div>
//     </Link>
//   );
// }
