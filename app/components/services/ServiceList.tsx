import ServiceCard from "./ServiceCard"

const services = [
    {
        id: 1,
        name: "Food Delivery",
        description: "Get your favorite food delivered to your door. We offer a variety of delivery options to suit your needs.",
        image: "/icons/delivery-bike.png",
        link: "/about"
    },
    {
        id: 2,
        name: "Marketing and Advertising",
        description: "Market your restaurant with us and get more customers. We offer a variety of marketing services to help you.",
        image: "/icons/loudspeaker.png",
        link: "/about"
    },
    {
        id: 4,
        name: "Discounts and Offers",
        description: "Get discounts and offers from your favorite restaurants. We offer a variety of discounts and offers to help you.",
        image: "/icons/discount.png",
        link: "/about"
    }
]

const ServiceList = () => {
  return (
    <ul
    className="grid grid-cols-1 gap-10 md:grid-cols-3 py-10 "
    >
        {services.map(service => (
            <ServiceCard 
            key={service.id} 
            name={service.name}
            description={service.description}
            image={service.image}
            link={service.link}
             />
        ))}
    </ul>
  )
}

export default ServiceList