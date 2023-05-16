import { SafeMenu } from '@/app/types'
import React from 'react'
import MenuCard from '../ui/MenuCard'

interface Props {
  menus: SafeMenu[]
}

const RestaurantMenus = ({menus}: Props) => {
  
  return (
    <div>
      {menus.map((menu) => (
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