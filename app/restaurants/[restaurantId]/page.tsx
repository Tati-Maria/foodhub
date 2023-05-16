import { getRestaurant } from '@/app/actions/getRestaurant'
import RestaurantHeader from '@/app/components/resturants/RestaurantHeader';
import RestaurantMenus from '@/app/components/resturants/RestaurantMenus';
import React from 'react'

interface IParams {
    restaurantId: string
}

const Restaurant = async ({params}: {params: IParams}) => {
    const resturant = await getRestaurant(params);
    const menus = resturant.menus;


  return (
    <section>
        <RestaurantHeader
        hours={resturant.hours} 
        image={resturant.image}
        name={resturant.name}
        priceRange={resturant.priceRange}
        rating={resturant.rating}
        address={resturant.address}
        website={resturant.website}
        phone={resturant.phone}
        description={resturant.description}
        />
        <RestaurantMenus menus={menus} restaurantId={resturant.id} />
    </section>
  )
}

export default Restaurant;