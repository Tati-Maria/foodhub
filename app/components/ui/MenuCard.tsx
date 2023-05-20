import Grid from "../containers/Grid";
import Article from "./Article";
import MenuItemCard from "./MenuItemCard";
import TextView from "./TextView";
import Link from "next/link";
import Decimal from "decimal.js/decimal";
import { getCurrentUser } from "@/app/actions/getCurrentUser";


type MenuCardProps = {
  menuOwner: string;
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  menuItem: {
    menu: string;
    id: string;
    name: string;
    description: string;
    image: string;
    price: Decimal;
    menuId: string;
    userId: string;
  }[]
}

const MenuCard = async (
  {id, restaurantId, name, description, menuItem, menuOwner}: MenuCardProps,
) => {

  const user = await getCurrentUser();

  return (
    <section className="my-20">
        <Article className="text-center mb-3 space-y-3 pb-5 border-b border-gray-100/20">
            <h3 className="text-xl font-bold uppercase">{name}</h3>
            <TextView text={description} className="text-gray-300" />
            {user && user.id === menuOwner && (
              <Link
              className="flex justify-center underline mb-5" 
              href={`/restaurants/${restaurantId}/menus/${id}/new`}
              >
                  Add Menu Item
              </Link>
            )}
        </Article>
        <Grid
        className="my-10 grid-cols-2"
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