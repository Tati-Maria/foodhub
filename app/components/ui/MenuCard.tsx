import Article from "./Article";
import Button from "./Button";
import TextView from "./TextView";
import Link from "next/link";

interface MenuCardProps {
    id: string
    restaurantId: string
    name: string
    description: string
    menuItem: any;
}

const MenuCard = ({id, restaurantId, description, name, menuItem}: MenuCardProps) => {
  return (
    <section>
        <Article className="text-center">
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <TextView text={description} />
        </Article>
        <Link 
        href={`/restaurants/${restaurantId}/menus/${id}/new`}
        >
            Add Menu Item
        </Link>
    </section>
  )
}

export default MenuCard