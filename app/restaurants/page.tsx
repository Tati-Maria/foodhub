import { getRestaurants } from "../actions/getRestaurants";
import Title from "../components/ui/Title";
import RestaurantFilter from "./RestaurantFilter";
import NotFound from "../components/ui/NotFound";


const RestaurantHome = async() => {
  const restaurants = await getRestaurants();
  
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