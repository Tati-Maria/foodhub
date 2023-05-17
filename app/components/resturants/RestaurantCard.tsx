import { SafeRestaurant } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import {FaStar} from 'react-icons/fa'
import {VscVerified} from 'react-icons/vsc'
import {GrLocation} from 'react-icons/gr'
import { getReviews } from "@/app/actions/getReviews"

interface RestaurantCardProps {
    restaurant: SafeRestaurant
}

const RestaurantCard = async({restaurant}: RestaurantCardProps) => {
    // const reviews = await getReviews();

    // function calculateRestaurantRating() {
    //     const restaurantReviews = reviews.filter((review) => review.restaurantId === restaurant.id);
    //     const totalReviews = restaurantReviews.length;
    //     const totalRating = restaurantReviews.reduce((acc, review) => acc + review.rating, 0);
    //     const averageRating = totalRating / totalReviews;
    //     return averageRating;
    // }


  return (
    <div
    className="rounded-md p-6 hover:shadow-md transition duration-200 ease-in-out bg-[#02001b]/50"
    >
        <Link
        className="flex flex-col space-y-2"
        href={`/restaurants/${restaurant.id}`}
        >
            <figure>
                <Image
                className="rounded-md object-cover w-full h-full"
                alt={restaurant.name}
                src={restaurant.image}
                width={300}
                height={200}
                priority
                />
            </figure>
            <div
            className="flex flex-col items-start space-y-2"
            >
                <h3 className="text-gray-100 font-semibold text-lg underline lg:no-underline">{restaurant.name}</h3>
                <p
                className="text-gray-200 text-sm space-x-2 flex items-center"
                >
                    <span>
                        {restaurant.priceRange} •
                    </span>
                    <span
                    className="flex items-center"
                    >
                        <FaStar  className="text-yellow-500 mr-1" />
                        {restaurant.rating} •
                    </span>
                    <span>
                        <VscVerified size={20} className="text-green-500" />
                    </span>
                </p>
                <p
                className="text-gray-200 text-sm space-x-2 flex items-center"
                >
                    <GrLocation className="mr-1" />
                    <span>
                        {restaurant.address}
                    </span>
                </p>
            </div>
        </Link>
    </div>
  )
}

export default RestaurantCard