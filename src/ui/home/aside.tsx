import { useContext, useEffect, useState } from "react";
import { FaSearchDollar, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckmark } from "react-icons/io";
import { FilteredProductsContext, ProductsContext } from "../../App";

const categories: string[] = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export default function Aside() {
  const [isCategory, setIsCategory] = useState<boolean>(true);
  const [IsPrice, setIsPriceF] = useState<boolean>(true);
  const [IsRating, setIsRating] = useState<boolean>(true);
  const starterProducts = useContext(ProductsContext);

  const filtered = useContext(FilteredProductsContext);
  if (!filtered) {
    throw new Error("ProductContext is not provided.");
  }

  const { setFilteredProducts } = filtered;

  const toggleVisibility = (target: string): void => {
    if (target === "category") {
      setIsCategory((prev) => !prev);
    } else if (target === "price") {
      setIsPriceF((prev) => !prev);
    } else if (target === "rating") {
      setIsRating((prev) => !prev);
    }
  };

  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [price, setPrice] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const [evaluationScore, setEvaluationScore] = useState<number | null>(null);

  useEffect(() => {
    if (starterProducts) setProducts(starterProducts);
  }, [starterProducts]);

  useEffect(() => {
    if (
      category.length > 0 ||
      price[0] !== null ||
      price[1] !== null ||
      evaluationScore
    ) {
      const filteredProducts = starterProducts.filter((product: any) => {
        const isRatingValid = evaluationScore
          ? product.rating >= evaluationScore
          : true;
        const isCategoryValid =
          category.length > 0 ? category.includes(product.category) : true;
        const isPriceValid =
          (price[0] !== null ? product.price >= price[0] : true) &&
          (price[1] !== null ? product.price <= price[1] : true);

        return isRatingValid && isCategoryValid && isPriceValid;
      });
      setFilteredProducts(filteredProducts);
      if (filteredProducts.length === 0) setFilteredProducts([]);
    } else {
      setFilteredProducts([]);
    }
  }, [
    products,
    category,
    price,
    starterProducts,
    evaluationScore,
    setFilteredProducts,
  ]);

  const toggleCategory = (cat: string): void => {
    setCategory((prevCategory) =>
      prevCategory.includes(cat)
        ? prevCategory.filter((item) => item !== cat)
        : [...prevCategory, cat]
    );
  };

  const DeleteScore = (): void => {
    setEvaluationScore(null);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const min = e.target.value ? parseInt(e.target.value) : null;
    setPrice([min, price[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const max = e.target.value ? parseInt(e.target.value) : null;
    setPrice([price[0], max]);
  };

  return (
    <aside className="bg-[#f2f2f2] rounded-lg lg:sticky top-10 left-0 h-fit">
      <div className="lg:w-[250px] font-robotoCondensed">
        <p className="font-bold text-lg m-4">Filter</p>
        {/* Category Filter */}
        <div className="bg-white m-1 p-2 rounded-lg">
          <div
            onClick={() => toggleVisibility("category")}
            className="cursor-pointer flex items-center justify-between hover:bg-[#f2f2f2] p-2 rounded-lg "
          >
            <p className="font-semibold hover:bg-[#f2f2f2]">Category</p>
            <span className={`${isCategory ? "hidden" : "inline"}`}>
              <IoIosArrowDown />
            </span>
            <span className={`${!isCategory ? "hidden" : "inline"}`}>
              <IoIosArrowUp />
            </span>
          </div>
          <div className={`${!isCategory ? "hidden" : "block p-2"}`}>
            <ul className="max-h-[300px] overflow-y-scroll">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`p-2 m-1 cursor-pointer rounded-lg hover:bg-[#f2f2f2] flex items-center justify-between ${
                    category.includes(cat)
                      ? "bg-[#d1e7e8] hover:bg-[#e99292]"
                      : ""
                  }`}
                  onClick={() => toggleCategory(cat)}
                >
                  <span>{cat}</span>
                  <span>
                    {category.includes(cat) && (
                      <IoIosCheckmark className="size-8 text-[#5ECCD9]" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Filter */}
        <div className="bg-white m-1 p-2 rounded-lg">
          <div
            onClick={() => toggleVisibility("price")}
            className="cursor-pointer flex items-center justify-between hover:bg-[#f2f2f2] p-2 rounded-lg "
          >
            <p className="font-semibold hover:bg-[#f2f2f2]">Price</p>
            <span className={`${IsPrice ? "hidden" : "inline"}`}>
              <IoIosArrowDown />
            </span>
            <span className={`${!IsPrice ? "hidden" : "inline"}`}>
              <IoIosArrowUp />
            </span>
          </div>
          <div className={`${!IsPrice ? "hidden" : "block p-1"}`}>
            <div className="flex mt-2 items-center gap">
              <div>
                <div className="flex items-center">
                  <input
                    placeholder="min"
                    className="border-2 border-[#f2f2f2] w-1/2 rounded-lg pl-2 mr-2"
                    type="number"
                    onChange={handleMinChange}
                  />
                  <input
                    placeholder="max"
                    className="border-2 border-[#f2f2f2] w-1/2 rounded-lg pl-2"
                    type="number"
                    onChange={handleMaxChange}
                  />
                  <span>
                    <FaSearchDollar className="size-6 mx-2 text-[#5ECCD9]" />
                  </span>
                </div>
                <p className="py-2">
                  Price Range: {price[0]} - {price[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="bg-white m-1 p-2 rounded-lg">
          <div
            onClick={() => toggleVisibility("rating")}
            className="cursor-pointer flex items-center justify-between hover:bg-[#f2f2f2] p-2 rounded-lg "
          >
            <p className="font-semibold hover:bg-[#f2f2f2]">Rating</p>
            <span className={`${IsRating ? "hidden" : "inline"}`}>
              <IoIosArrowDown />
            </span>
            <span className={`${!IsRating ? "hidden" : "inline"}`}>
              <IoIosArrowUp />
            </span>
          </div>
          <button
            onClick={DeleteScore}
            className={`ml-auto block ${
              evaluationScore ? "text-red-500 text-right p-2 " : "hidden"
            }`}
          >
            Clear
          </button>
          <div className={`${!IsRating ? "hidden" : "block"}`}>
            <label>
              <div className="flex items-center gap-2 py-1 pl-2">
                <input
                  checked={evaluationScore === 4}
                  type="radio"
                  onChange={(e) => setEvaluationScore(parseInt(e.target.value))}
                  name="star"
                  value="4"
                />
                <FaStar /> <span>4 Star And Above</span>
              </div>
            </label>
            <label>
              <div className="flex items-center gap-2 py-1 pl-2">
                <input
                  checked={evaluationScore === 3}
                  type="radio"
                  onChange={(e) => setEvaluationScore(parseInt(e.target.value))}
                  name="star"
                  value="3"
                />
                <FaStar /> <span>3 Star And Above</span>
              </div>
            </label>
            <label>
              <div className="flex items-center gap-2 py-1 pl-2">
                <input
                  checked={evaluationScore === 2}
                  type="radio"
                  onChange={(e) => setEvaluationScore(parseInt(e.target.value))}
                  name="star"
                  value="2"
                />
                <FaStar /> <span>2 Star And Above</span>
              </div>
            </label>
            <label>
              <div className="flex items-center gap-2 py-1 pl-2">
                <input
                  checked={evaluationScore === 1}
                  type="radio"
                  onChange={(e) => setEvaluationScore(parseInt(e.target.value))}
                  name="star"
                  value="1"
                />
                <FaStar /> <span>1 Star And Above</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
