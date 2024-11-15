import EvaluationScoreStar from "../evaluationScoreStar";

export default function Details({
  brand,
  title,
  rating,
  stock,
  price,
  discountPercentage,
  shippingInformation,
}) {
  return (
    <div className="max-lg:w-full w-3/5">
      <div>
        <p className="bg-[#43C3D1] inline-block text-white p-2 mb-4 rounded-lg">
          {brand}
        </p>
        <p className="font-bold text-3xl">{title}</p>
      </div>

      <div className="my-2">
        <EvaluationScoreStar rating={rating} />
      </div>
      <div>Stock: {stock}</div>
      <div>
        <p className="font-bold text-xl">Price: {price} </p>
        <p className="text-red-600 text-xs">Discount: {discountPercentage}%</p>
      </div>
      <div className="bg-gray-200 p-[0.5px] my-4"></div>
      <div className="my-4">
        <p className="font-bold my-2">Qty</p>
        <div className="flex items-center">
          <button className="border-[2px] border-gray-300 size-8 rounded-lg">
            -
          </button>
          <p className="mx-2">1</p>
          <button className="border-[2px] border-gray-300 size-8 rounded-lg">
            +
          </button>
        </div>
        <div className="flex my-2">
          <p className="text-gray-400 mr-1">Goods Arrival:</p>
          {shippingInformation}
        </div>
      </div>
      <div>
        <button className="bg-[#43C3D1] text-white max-lg:px-20 px-28 py-2 rounded-lg">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
