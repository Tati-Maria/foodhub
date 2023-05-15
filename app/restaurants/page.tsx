import { Suspense } from "react";
import { getRestaurants } from "../actions/getRestaurants";
import Grid from "../components/containers/Grid";
import Title from "../components/ui/Title";
import RestaurantCard from "../components/resturants/RestaurantCard";


const RestaurantHome = async() => {
  const restaurants = await getRestaurants();
  
  return (
    <section>
      <Title title="Restaurants" className="text-gray-900 text-4xl" />
      {/* filter restaurants inputs */}
      {/* restaurants list */}
      <Grid
      className="py-10"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </section>
  )
}

export default RestaurantHome;