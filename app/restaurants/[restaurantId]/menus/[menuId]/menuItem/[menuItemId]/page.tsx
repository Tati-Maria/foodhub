import { getMenuItem } from "@/app/actions/getMenuItem"
import AddToCart from "@/app/components/actionComponents/AddToCart"
import Title from "@/app/components/ui/Title"
import Image from "next/image"

interface IParams {
    menuItemId: string
}

export const generateMetadata = async ({params}: {params: IParams}) => {
    const menuItem = await getMenuItem(params);
    if(!menuItem?.id) {
        return {
            title: 'Menu Item Not Found',
            description: 'Menu Item Not Found',
        }
    }

    return {
        title: menuItem?.name,
        description: menuItem?.description,
    }
}


const MenuItem = async(
    {params}: {params: IParams}
) => {
    const menuItem = await getMenuItem(params);

    
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-2 gap-10"
    >
        <div
        className="flex flex-col gap-4 justify-center"
        >
            <Title title={menuItem?.name} />
            <p>
                {menuItem?.description}
            </p>
            <span>
                {menuItem?.price} €
            </span>
            {/* @ts-expect-error  */}
            <AddToCart 
            itemId={menuItem?.id}
            price={menuItem?.price}
            restaurantId={menuItem?.menu?.restaurantId}
            />
        </div>
        <figure>
            <Image
            alt="Menu Item Image"
            src={menuItem?.image || '/images/menu-item-placeholder.webp'}
            width={500}
            height={300}
            loading="lazy"
            className="aspect-auto w-auto h-auto"
            />
        </figure>
    </div>
  )
}

export default MenuItem