'use client'
import {Options, Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Article from "../ui/Article";
import { RestaurantReviewProps } from "@/app/types";
import ReviewCard from "../ui/ReviewCard";
import Title from "../ui/Title";


const options: Options = {
    pagination: false,
    perPage: 3,
    gap: "2rem",
    arrows: false,
    breakpoints: {
        768: {
            //tablet
            perPage: 2,
            gap: "1rem"
        },
        568: {
            //mobile landscape
            perPage: 1,
            gap: "20px"
        },
        480: {
            //mobile portrait
            perPage: 1,
            gap: "20px"
        }
    },
}

interface Props {
    reviews: RestaurantReviewProps
}

const RestaurantReview = (
    {reviews}: Props
) => {


    if(reviews?.length === 0) {
        return (
            <Article>
                <span className="text-center text-gray-300">
                    No reviews yet.
                </span>
            </Article>
        )
    }

    
  return (
    <div className="my-20">
        <Article
        className="text-center mb-10 space-y-3 pb-5 border-b border-gray-100/20"
        >
            <Title
            className="text-4xl text-gray-50"
            title="Reviews"
             />
        </Article>
        <Splide
        options={options}
        aria-label="restaurant reviews"
        >
            {reviews?.map((review) => (
                <SplideSlide
                key={review.id}
                >
                    <ReviewCard
                    body={review.body}
                    rating={review.rating}
                    title={review.title}
                    />
                </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default RestaurantReview;