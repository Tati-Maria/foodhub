import Title from "../ui/Title"
import ServiceList from "./ServiceList"


const Service = () => {
  return (
    <section
    className="my-20"
    id="services"
    >
      <Title className="text-gray-900 text-4xl" title="Our Services" />
      <ServiceList />
    </section>
  )
}

export default Service