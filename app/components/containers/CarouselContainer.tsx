import { getRestaurants } from "@/app/actions/getRestaurants"
import Title from "../ui/Title";
import Tagline from "../ui/Tagline";
import Carousel from "../carousel";

const CarouselContainer = async () => {
    const restaurants = await getRestaurants();
    //get only 6 restaurants
    const topRestaurants = restaurants.slice(0, 6);
    
  return (
    <section>
        <article
        className="pb-10 space-y-1"
        >
            <Tagline text="Find the best restaurants near you" />
            <Title
            className="text-gray-900 text-4xl" 
            title="Top Restaurants" 
            />
        </article>
        {topRestaurants && <Carousel restaurants={topRestaurants} />}
    </section>
  )
}

export default CarouselContainer