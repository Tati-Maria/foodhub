'use client'
import { SafeRestaurant } from "@/app/types";
import {Options, Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import RestaurantCard from "../resturants/RestaurantCard";

const options: Options = {
    pagination: false,
    perPage: 4,
    gap: "1rem",
    breakpoints: {
        768: {
            //tablet
            perPage: 3,
            gap: "1rem"
        },
        568: {
            //mobile landscape
            perPage: 2,
            gap: "20px"
        },
        480: {
            //mobile portrait
            perPage: 1,
            gap: "20px"
        }
    },
    arrows: true,
}

interface CarouselProps {
    restaurants: SafeRestaurant[];
}


const Carousel = ({restaurants}: CarouselProps) => {
    return (
        <div 
        className="splide__container"
        >
            <Splide
            options={options}
            className="splide"
            aria-label="Carousel of restaurants"
            >
                {restaurants.map((restaurant) => (
                    <SplideSlide
                    key={restaurant.id}
                    >
                        <RestaurantCard
                        restaurant={restaurant} 
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}

export default Carousel;