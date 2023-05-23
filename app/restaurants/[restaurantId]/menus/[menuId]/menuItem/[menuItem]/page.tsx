import { getMenuItem } from "@/app/actions/getMenuItem"
import Title from "@/app/components/ui/Title"
import Image from "next/image"


interface IParams {
    restaurantId: string
    menuId: string
    id: string
}

const MenuItem = async (
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
        </div>
        <figure>
            <Image
            alt="Menu Item Image"
            src={menuItem?.image || '/images/menu-item-placeholder.webp'}
            width={500}
            height={300}
            loading="lazy"
            />
        </figure>
    </div>
  )
}

export default MenuItem