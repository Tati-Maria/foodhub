import React from 'react'
import MenuCard from '../ui/MenuCard'
import Decimal from 'decimal.js/decimal';

type SafeMenu = {
  restaurant: string;
  menuItems: {
    menu: string;
    id: string;
    name: string;
    description: string;
    image: string;
    price: Decimal;
    menuId: string;
    userId: string;
  }[];
  id: string;
  name: string;
  description: string;
  userId: string;
  restaurantId: string;
};

type ComponentProps = {
  menus: SafeMenu[] | undefined;
  restaurantId: string | undefined;
};

const RestaurantMenus = (
  { menus, restaurantId }: ComponentProps,
) => {
  
  return (
    <div>
      {menus?.map((menu) => (
        <MenuCard
        key={menu.id}
        id={menu.id}
        restaurantId={menu.restaurantId}
        name={menu.name}
        description={menu.description}
        menuItem={menu.menuItems}
        /> 
      ))}
    </div>
  )
}

export default RestaurantMenus