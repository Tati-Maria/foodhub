import CarouselContainer from "./components/containers/CarouselContainer";
import CTA from "./components/home/CTA";
import Hero from "./components/home/Hero";
import Hiring from "./components/home/Hiring";
import Service from "./components/services/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      {/* @ts-expect-error Async Server Component */}
      <CarouselContainer />
      <CTA />
      <Hiring />
    </>
  )
}
