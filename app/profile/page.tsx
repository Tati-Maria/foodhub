import { getCurrentUser } from "../actions/getCurrentUser";
import { getUserRestaurants } from "../actions/getUserRestaurants";
import Grid from "../components/containers/Grid";
import RestaurantCard from "../components/resturants/RestaurantCard";
import Article from "../components/ui/Article";
import TextView from "../components/ui/TextView";
import Title from "../components/ui/Title";
import Link from "next/link";


export const metadata = {
  applicationName: "Foodhub",
  title: "Dashboard",
  description: "Manage your restaurants and orders",
  category: "Food",
}

const NoRestaurants = () => {
  return (
    <div className="text-center text-gray-500 my-10 text-xl">
      <h2>
          You have no restaurants.
      </h2>
      <Link 
      href="/restaurants/new"
      className="text-primary font-bold hover:underline text-xl px-4 py-2 border border-primary rounded-md mt-6 inline-block"
      >
        Create a restaurant
      </Link>
    </div>
  )
}

const Home = async () => {
  const user = await getCurrentUser();
  const userRestaurants = await getUserRestaurants();

  return (
    <section>
      <Article>
        <Title
        title={`Welcome ${user?.name}`} 
        />
        <TextView
        className="text-gray-500"
        text="Manage your restaurants and orders" 
        />
      </Article>
      {userRestaurants?.length === 0 && <NoRestaurants />}
      <Grid
      className="py-10"
      >
        {userRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
      <Article
      >
        <Title
        title="Your Reviews"
        />
      </Article>
    </section>
  )
}

export default Home