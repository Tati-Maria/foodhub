import Image from "next/image"

interface ServiceCardProps {
    name: string
    description: string
    image: string
}
const ServiceCard = ({name, description,image}: ServiceCardProps) => {
  return (
    <li
    className="flex flex-col items-start space-y-4 border-dashed border-2 border-gray-100 rounded-md p-6"
    >
      <figure
      className="relative w-full h-48"
      >
        <Image
        className="rounded-md object-cover w-full h-full"
        alt="Food Delivery"
        src={image}
        width={300}
        height={200}
        priority
         />
      </figure>
      <div
      className="flex flex-col items-start space-y-2"
      >
        <h3 className="text-gray-900 font-bold text-lg">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

export default ServiceCard;