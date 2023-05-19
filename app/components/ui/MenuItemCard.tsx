'use client'

import Decimal from "decimal.js/decimal"
import Button from '../ui/Button'
import TextView from './TextView'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    itemId: string
    name: string
    description: string
    price: number
    image: string
}

const MenuItemCard = ({itemId, name, price, description, image}: Props) => {
    // transform price(decimal) to number
    const priceDecimal = new Decimal(price);
    // transform price currency depending on locale euro
    const priceCurrency = priceDecimal.toDecimalPlaces(2).toNumber().toLocaleString("eu-EU", {
        style: "currency",
        currency: "EUR",
    });
    
  return (
    <Link
    href={`/menuItems/${itemId}`}
    className="flex flex-col gap-4 p-4 rounded-md shadow-md bg-white" 
    >
        <figure>
            <Image
            src={image}
            className="rounded-md object-cover w-full h-full"
            width={300}
            height={200}
            alt='Menu Item Image' 
            />
        </figure>
        <div
        className="flex flex-col gap-2"
        >
            <h4
            className="text-red-900 font-bold text-lg"
            >
                {name}
            </h4>
            <TextView
            text={description}
            className="text-gray-500 text-sm"
            />
            <div
            className="flex items-center justify-between"
            >
                <span
                className="text-gray-900 font-bold text-lg"
                >
                    {priceCurrency}
                </span>
                <Button
                type='button'
                text='Add to Cart'
                className="text-sm bg-green-500 rounded-md text-white  hover:bg-green-600 transition-colors" 
                />
            </div>
        </div>
    </Link>
  )
}

export default MenuItemCard