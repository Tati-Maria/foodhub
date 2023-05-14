import ServiceCard from "./ServiceCard"

const services = [
    {
        id: 1,
        name: "Food Delivery",
        description: "With our food delivery service, you can enjoy your favorite meals from a wide range of restaurants, delivered right to your doorstep.",
        image: "/images/delivery.jpg"
    },
    {
        id: 2,
        name: "Marketing and Advertising",
        description: "Market your restaurant with us and get more customers. We offer a variety of marketing services to help you grow your business.",
        image: "/images/marketing.jpg"
    },
    {
        id: 3,
        name: "Restaurant Discovery",
        description: "Find restaurants near you with our restaurant discovery service. We’ll help you find the perfect place to eat.",
        image: "/images/discovery.jpg"
    },
    {
        id: 4,
        name: "Discounts and Offers",
        description: "Get discounts and offers from your favorite restaurants. We offer a variety of discounts and offers to help you save money on your next meal.",
        image: "/images/offers.jpg"
    }
]

const ServiceList = () => {
  return (
    <ul
    className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4 py-6"
    >
        {services.map(service => (
            <ServiceCard 
            key={service.id} 
            name={service.name}
            description={service.description}
            image={service.image}
             />
        ))}
    </ul>
  )
}

export default ServiceList