'use client'
import Button from "../ui/Button";
import { useRouter } from "next/navigation";


const Hero = () => {
    const router = useRouter();
  return (
    <div className="hero relative h-[70vh]" style={{ backgroundImage: `url("/images/hero.jpg")` }}>
    <div className="hero-overlay bg-opacity-40 -z-0"></div>
        <div className="hero-content text-center text-white drop-shadow-lg">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">
                Foodhub
            </h1>
            <p className="mb-5 text-base md:text-lg">
            No time to cook? No problem. With FoodHub, you can enjoy restaurant-quality meals delivered straight to your doorstep. Whether you&#39;re in the mood for pizza, sushi, or something in between, we&#39;ve got you covered.
            </p>
            <Button
            text="Get Started"
            onClick={() => router.push('/restaurants')}
            type="button"
            className="bg-red-500 hover:bg-red-600 mx-auto rounded" 
            />
        </div>
    </div>
</div>
  )
}

export default Hero;