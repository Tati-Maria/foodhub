import Article from "../ui/Article"
import TextView from "../ui/TextView"
import Title from "../ui/Title"
import ServiceList from "./ServiceList"


const Service = () => {
  return (
    <section
    className="my-20"
    id="services"
    >
      <Article
      className="text-center space-y-2"
      >
        <Title
        className="text-2xl text-gray-900 md:text-4xl"
        title="We are ready to serve your needs"
        />
        <TextView
        className="text-base max-w-md mx-auto"
        text="At Foodhub, we offer a wide range of services to our customers. We are committed to providing the best services to our customers." 
        />
      </Article>
      <ServiceList />
    </section>
  )
}

export default Service