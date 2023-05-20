import { getRestaurants } from "../actions/getRestaurants";
import Title from "../components/ui/Title";
import RestaurantFilter from "./RestaurantFilter";
import NotFound from "../components/ui/NotFound";
import { getReviews } from "../actions/getReviews";


export const metadata = {
  title: "Restaurants",
  description: "Find restaurants near you",
}


const RestaurantHome = async() => {
  const restaurants = await getRestaurants();
  const reviews = await getReviews();

  function calculateRestaurantRating(rating: string | null) {
    const restaurantReviews = reviews.filter(review => review.restaurantId === rating);
    const totalReviews = restaurantReviews.length;
    const totalRating = restaurantReviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / totalReviews;
    return averageRating;
  }
  
  return (
    <section>
      <Title title="Restaurants" className="text-gray-900 text-4xl" />
      {/* filter restaurants inputs */}
      {restaurants.length > 0 && (<RestaurantFilter restaurants={restaurants} />)}
      {restaurants.length === 0 && (<NotFound text="No Restaurants Found" />)}
    </section>
  )
}

export default RestaurantHome;