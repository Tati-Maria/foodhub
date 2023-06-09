import Decimal from "decimal.js/decimal"
import TextView from './TextView'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    itemId: string
    name: string
    description: string
    price: number
    image: string
    restaurantId: string
    menuId: string
}

const MenuItemCard = ({itemId, name, price, description, image, restaurantId, menuId}: Props) => {
    // transform price(decimal) to number
    const priceDecimal = new Decimal(price);
    // transform price currency depending on locale euro
    const priceCurrency = priceDecimal.toDecimalPlaces(2).toNumber().toLocaleString("eu-EU", {
        style: "currency",
        currency: "EUR",
    });
    
  return (
    <Link
    href={`/restaurants/${restaurantId}/menus/${menuId}/menuItem/${itemId}`}
    className="flex flex-col gap-4 p-4 rounded-md shadow-md bg-white hover:bg-red-50 transition ease-in-out duration-300" 
    >
        <figure>
            <Image
            src={image}
            className="rounded-md object-cover w-full h-full"
            width={250}
            height={150}
            alt='Menu Item Image'
            loading="lazy" 
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
                className="text-gray-900 font-bold text-base md.text-lg"
                >
                    {priceCurrency}
                </span>
            </div>
        </div>
    </Link>
  )
}

export default MenuItemCard