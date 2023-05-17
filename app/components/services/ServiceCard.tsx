import TextView from "../ui/TextView"
import Link from "next/link"

interface ServiceCardProps {
    name: string
    description: string
    link: string
    icon: JSX.Element
}
const ServiceCard = ({name, description, link, icon}: ServiceCardProps) => {
  return (
    <li
    className="flex flex-col items-center text-center space-y-4 p-6 border-b-2 lg:border-r-2 border-gray-300/30 last:border-b-0 lg:last:border-r-0 lg:border-b-0"
    >
      <div>
        {icon}
      </div>
      <div
      className="flex flex-col space-y-2"
      >
        <h3 className="text-gray-50 font-bold text-lg">{name}</h3>
        <TextView
        text={description}
        className="sm:text-base text-gray-400" 
        />
      </div>
      <Link href={link} className="text-primary text-sm hover:text-red-600 flex items-center space-x-2">
        <span>
          Know More
        </span>
      </Link>
    </li>
  )
}

export default ServiceCard;