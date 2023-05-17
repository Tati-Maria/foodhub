import {BsGlobe} from 'react-icons/bs';
import {BiMessageDots} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import {HiStar} from 'react-icons/hi';
import {GrLocation} from 'react-icons/gr';
import { IoWarningOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';



interface HeaderProps {
    image: string | undefined;
    name: string | undefined;
    priceRange: string | undefined;
    rating: number | undefined;
    address: string | undefined;
    website: string | null | undefined;
    phone: string | undefined;
    description: string | undefined;
    hours: string | undefined;
}

const RestaurantHeader = ({
  image,
  name,
  priceRange,
  rating,
  address,
  website,
  phone,
  hours,
  description,
}: HeaderProps) => {
  return (
    <div className='flex items-start gap-y-6 flex-col md:gap-x-6 md:flex-row md:items-center border-b border-gray-100/20 pb-6'>
      <figure>
        <Image
        src={image || '/images/restaurant-placeholder.jpg'}
        alt={name || 'Restaurant Image'}
        width={150}
        height={150}
        className='rounded-full ring-2 ring-red-500'
        />
      </figure>
      <div className='flex flex-col space-y-2'>
        <h2 className='font-semibold text-red-600 text-lg capitalize md:text-xl'>
          {name}
        </h2>
        <div className="flex items-center text-gray-400">
          <span className='font-bold'>
            {priceRange} •
          </span>
          <div className='flex items-center gap-1'>
            <HiStar size={19} className='text-yellow-400' />
            <span>{rating}</span> •
          </div>
          <div className='flex items-center gap-1'>
            <GrLocation size={19} />  
            <span>{address}</span> •
          </div>
          <div className='flex items-center gap-1'>
            <IoCallOutline size={19} />  
            <span>{phone}</span>
          </div>
        </div>
        {/* Other Details */}
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default RestaurantHeader;