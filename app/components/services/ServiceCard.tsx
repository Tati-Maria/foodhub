import Image from "next/image"
import TextView from "../ui/TextView"
import Link from "next/link"
import {BsArrowRight} from "react-icons/bs"

interface ServiceCardProps {
    name: string
    description: string
    image: string
    link: string
}
const ServiceCard = ({name, description,image, link}: ServiceCardProps) => {
  return (
    <li
    className="flex flex-col items-start space-y-4 rounded-md p-6 shadow-md bg-gray-50"
    >
      <figure
      className="relative w-full h-28"
      >
        <Image
        className="rounded-md object-contain w-full h-full"
        alt="Food Delivery"
        src={image}
        width={50}
        height={50}
        priority
         />
      </figure>
      <div
      className="flex flex-col items-start space-y-2"
      >
        <h3 className="text-gray-900 font-bold text-lg">{name}</h3>
        <TextView
        text={description}
        className="text-gray-500 sm:text-base" 
        />
      </div>
      <Link href={link} className="text-red-500 text-sm hover:text-red-600 flex items-center space-x-2">
        <span>
          Know More
        </span>
        <span>
          <BsArrowRight size={18} className="text-red-500" />
        </span>
      </Link>
    </li>
  )
}

export default ServiceCard;