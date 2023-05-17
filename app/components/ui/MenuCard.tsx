import { SafeMenu} from "@/app/types";
import Grid from "../containers/Grid";
import Article from "./Article";
import MenuItemCard from "./MenuItemCard";
import TextView from "./TextView";
import Link from "next/link";
import Decimal from "decimal.js/decimal";

type SafeMenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: Decimal;
  menuId: string;
  userId: string;
  restaurantId: string;
  menus: SafeMenu[];
};

type MenuCardProps = {
  menuItem: SafeMenuItem;
}

const MenuCard = ({menuItem}: MenuCardProps) => {
  return (
    <section className="my-20">
        <Article className="text-center mb-3 space-y-3 pb-5 border-b border-gray-100/20">
            <h3 className="text-xl font-bold uppercase">{menuItem.name}</h3>
            <TextView text={menuItem.description} className="text-gray-300" />
            <Link
            className="flex justify-center underline mb-5" 
            href={`/restaurants/${menuItem.restaurantId}/menus/${menuItem.menuId}/new`}
            >
                Add Menu Item
            </Link>
        </Article>
        <Grid
        className="my-10"
        >
          {menuItem.menus.map((item: any) => (
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