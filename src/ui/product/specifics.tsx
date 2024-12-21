import { useState } from "react";
import EvaluationScoreStar from "../evaluationScoreStar";
import { Review } from "../../types";

interface SpecificsProps {
  description: string;
  reviews: Review[];
}

export default function Specifics({ description, reviews }: SpecificsProps) {
  const [sectionName, setSectionName] = useState("description");

  return (
    <div className="mt-8 border-2 rounded-lg border-[#E5E9EE]">
      <div className="border-b-2  border-b-[#E5E9EE]">
        <div className="flex flex-row gap-4 h-full px-4">
          <button
            onClick={() => setSectionName("description")}
            className={`p-4 first-letter:${
              sectionName === "description"
                ? "text-[#2BBCCC] border-b-2   border-b-[#2BBCCC]"
                : "text-[#747E89]"
            }`}
          >
            Descriptions
          </button>
          <button
            onClick={() => setSectionName("reviews")}
            className={`p-4 first-letter:${
              sectionName === "reviews"
                ? "text-[#2BBCCC] border-b-2   border-b-[#2BBCCC]"
                : "text-[#747E89]"
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="p-4">
        <div
          className={`${sectionName === "description" ? "block" : "hidden"}`}
        >
          <h2 className="font-bold pb-4">Detail</h2>
          <p>{description}</p>
        </div>
        <div className={`${sectionName === "reviews" ? "block" : "hidden"}`}>
          <h2 className="font-bold pb-4">Reviews</h2>
          <div>
            {reviews.map((review, i) => (
              <Reviews key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReviewsProps {
  review: Review; // review objesinin tipi Review
}

function Reviews({ review }: ReviewsProps) {
  const dateS = new Date(review.date);

  const day = dateS.getDate();
  const month = dateS.getMonth() + 1;
  const year = dateS.getFullYear();

  return (
    <div className=" rounded-lg p-4 bg-[#E5E9EE] my-2">
      <div className="flex gap-4 justify-between">
        <div>
          <p>
            Reviewer : <span className="font-bold">{review.reviewerName}</span>
          </p>
          <p>
            <EvaluationScoreStar rating={review.rating} />
          </p>
        </div>
        <div>
          <p className="flex">
            {day}/{month}/{year}
          </p>
        </div>
      </div>
      <p className="bg-white rounded-lg p-2 mt-2">{review.comment}</p>
    </div>
  );
}
