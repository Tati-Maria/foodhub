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
  userID: string | undefined;
};

const RestaurantMenus = (
  { menus}: ComponentProps,
) => {
  
  return (
    <div>
      {menus?.map((menu) => (
        /* @ts-expect-error Async Component */
        <MenuCard
        key={menu.id}
        id={menu.id}
        restaurantId={menu.restaurantId}
        name={menu.name}
        description={menu.description}
        menuItem={menu.menuItems}
        menuOwner={menu.userId}
        /> 
      ))}
    </div>
  )
}

export default RestaurantMenus