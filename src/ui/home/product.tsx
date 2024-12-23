import { Link } from "react-router-dom";
import EvaluationScoreStar from "../evaluationScoreStar";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  handleClick: (id: number) => void;
}
export default function Product({
  id,
  title,
  price,
  rating,
  stock,
  thumbnail,
  handleClick,
}: ProductProps) {
  return (
    <Link to={`/product/${id}`} onClick={() => handleClick(id)}>
      <div className=" rounded-lg p-2">
        <div className="bg-[#f2f2f2] rounded-lg relative  ">
          <img className="rounded-lg" src={thumbnail} />
          <div className="absolute top-0 right-0">
            <EvaluationScoreStar rating={rating} />
          </div>
        </div>
        <div>
          <p className="font-bold my-2">{title}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#0E74FF] ">Price {price}</p>
          <p className="text-[#E95841] text-sm">{stock} Items Left!</p>
        </div>
      </div>
    </Link>
  );
}
