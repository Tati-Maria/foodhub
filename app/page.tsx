import CarouselContainer from "./components/containers/CarouselContainer";
import Hero from "./components/home/Hero";
import Service from "./components/services/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      {/* @ts-expect-error Async Server Component */}
      <CarouselContainer />
    </>
  )
}
