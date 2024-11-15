import { useContext, useEffect, useRef, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { ProductContext, ProductsContext } from "../App";

export default function Header() {
  return (
    <header className="py-4 font-robotoCondensed">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-8 max-lg:mx-2 flex max-lg:flex-col max-lg:gap-4">
          <div className="flex items-center flex-1">
            <Link to="/">
              <h1 className="text-brand text-3xl font-rubikMoonrocks">
                sam<span className="font-bold">E</span>bay
              </h1>
            </Link>
            <div className="w-full">
              <Search />
            </div>
          </div>
          <div className="flex items-center max-lg:justify-center">
            <div className="flex gap-2">
              <CiShoppingCart className="text-2xl" />
              <CiHeart className="text-2xl" />
            </div>
            <div className="h-full border-[1px]  border-gray-200 mx-4"></div>
            <div>
              <div className="flex gap-3 items-center">
                <div className="bg-[#EAEDF0] inline-block p-2 rounded-full w-[50px] h-[50px] relative">
                  <span className="text-black font-bold absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    SCA
                  </span>
                </div>
                <div>
                  <p className="text-gray-400">Welcome Back!</p>
                  <p className="font-bold">Samet Can A.</p>
                </div>

                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Search() {
  const { setProduct } = useContext(ProductContext);
  const products = useContext(ProductsContext);

  const handleProduct = (id) => {
    const product = products.find((product) => product.id === id);
    setProduct(product);
  };

  const [isFocused, setIsFocused] = useState(false);

  const starterProducts = useContext(ProductsContext);

  const [result, setResult] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const formRef = useRef();

  function HandleClick(e) {
    if (!formRef.current.contains(e.target)) setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", HandleClick);
    return () => {
      document.removeEventListener("mousedown", HandleClick);
    };
  });

  function handleSearch(e) {
    let query = e.target.value.toLowerCase();
    if (!query.length) {
      setResult([]);
      return;
    }
    let result = starterProducts.filter((product) =>
      product.description.toLowerCase().includes(query)
    );
    setResult(result);
  }

  return (
    <form ref={formRef} className="max-lg:mx-2 mx-4 max-lg:mr-2 mr-12 relative ">
      <div
        className={`flex  items-center border-2 border-gray-300   rounded-lg ${
          isFocused && "border-gray-600"
        }`}
      >
        <CiSearch className="mx-2 text-2xl" />
        <input
          onClick={() => setIsOpen(true)}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => handleSearch(e)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-8 rounded-lg focus:outline-none rel"
          placeholder="What Are You Looking For?"
        />
        {result.length > 0 && isOpen && (
          <div className="absolute z-10 max-h-[426px] w-full top-full overflow-y-auto rounded-lg border-2 border-text-color bg-white">
            {result.map((res) => (
              <Link
                onClick={() => {
                  setIsOpen(false);
                  handleProduct(res.id);
                }}
                key={res.id}
                to={`/product/${res.id}`}
              >
                <div className="m-2 flex rounded-lg bg-primary-color p-2">
                  <img
                    className="rounded-lg"
                    width={80}
                    height={0}
                    src={res.thumbnail}
                    alt=""
                  />

                  <div className="mx-2 flex flex-col">
                    <p className="text-text-color">{res.title}</p>
                    <p>Price: {res.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
