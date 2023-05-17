import Grid from "../containers/Grid";
import Article from "./Article";
import Button from "./Button";
import MenuItemCard from "./MenuItemCard";
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
    <section className="my-20">
        <Article className="text-center mb-3">
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <TextView text={description} />
        </Article>
        <Link
        className="flex justify-center underline mb-5" 
        href={`/restaurants/${restaurantId}/menus/${id}/new`}
        >
            Add Menu Item
        </Link>
        <Grid
        className="my-10"
        >
          {menuItem.map((item: any) => (
            <MenuItemCard
            key={item.id}
            itemId={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image} 
            />
          ))}
        </Grid>
    </section>
  )
}

export default MenuCard