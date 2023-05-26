'use client'
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import {FiArrowRight} from "react-icons/fi"

const Hero = () => {
    const router = useRouter();
  return (
    <div className="hero relative h-[75vh]" style={{ backgroundImage: `url("/images/hero.jpg")` }}>
    <div className="hero-overlay bg-opacity-60 -z-0"></div>
        <div className="hero-content text-center text-white">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">
                Foodhub
            </h1>
            <p className="mb-5 text-base md:text-lg drop-shadow-lg">
            No time to cook? No problem. With FoodHub, you can enjoy restaurant-quality meals delivered straight to your doorstep. Whether you&#39;re in the mood for pizza, sushi, or something in between, we&#39;ve got you covered.
            </p>
            <Button
            text="Order Now"
            onClick={() => router.push('/restaurants')}
            type="button"
            className="bg-red-500 hover:bg-red-600 mx-auto rounded-full px-8 py-3 text-lg font-bold shadow-lg flex flex-row-reverse items-center gap-2" 
            icon={FiArrowRight}
            />
        </div>
    </div>
</div>
  )
}

export default Hero;