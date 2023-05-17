import ServiceCard from "./ServiceCard"
import {CiDiscount1} from "react-icons/ci";
import {FaBicycle, FaBullhorn} from "react-icons/fa";

const services = [
    {
        id: 1,
        name: "Food Delivery",
        description: "Get your favorite food delivered to your door. We offer a variety of delivery options to suit your needs.",
        link: "/about",
        icon: <FaBicycle size={50} className="text-primary" />
    },
    {
        id: 2,
        name: "Marketing and Advertising",
        description: "Market your restaurant with us and get more customers. We offer a variety of marketing services to help you.",
        link: "/about",
        icon: <FaBullhorn size={50} className="text-primary" />
    },
    {
        id: 4,
        name: "Discounts and Offers",
        description: "Get discounts and offers from your favorite restaurants. We offer a variety of discounts and offers to help you.",
        link: "/about",
        icon: <CiDiscount1 size={50} className="text-primary" />
    }
]

const ServiceList = () => {
  return (
    <ul
    className="grid grid-cols-1 gap-10 lg:grid-cols-3 py-5 px-10 bg-[#02001b]/50 rounded-md mt-10"
    >
        {services.map(service => (
            <ServiceCard 
            key={service.id} 
            name={service.name}
            description={service.description}
            link={service.link}
            icon={service.icon}
             />
        ))}
    </ul>
  )
}

export default ServiceList