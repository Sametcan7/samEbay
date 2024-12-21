import { FaStar, FaStarHalf } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

export default function EvaluationScoreStar({ rating }: RatingProps) {
  let star = [...Array(Math.floor(rating))];

  let half = Number(rating.toString().split(".")[1]) > 3;

  return (
    <div className="flex items-center bg-black w-fit rounded-lg px-2">
      {star.map((_, index) => (
        <FaStar
          key={index}
          style={{
            color: "yellow",
          }}
        />
      ))}
      {half && <FaStarHalf style={{ color: "yellow" }} />}
      <p className="pl-2">
        <span className="font-semibold text-yellow-400">{rating}</span>
      </p>
    </div>
  );
}
