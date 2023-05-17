import {FaStar} from "react-icons/fa"

interface ReviewCardProps {
  title: string;
  body: string;
  rating: number;
}

const ReviewCard = ({title, body, rating}: ReviewCardProps) => {
  return (
    <div
    className="flex flex-col space-y-2 bg-[#02001b]/50 rounded-md p-6"
    >
      <h3
      className="text-gray-100 text-lg font-semibold"
      >
        {title}
      </h3>
      <p
      className="text-gray-200 text-sm"
      >
        {body}
      </p>
      <div className="flex items-center space-x-2">
        <small>
          <FaStar className="text-yellow-500" />
        </small>
        <span>
          {rating} / 5
        </span>
      </div>
    </div>
  )
}

export default ReviewCard