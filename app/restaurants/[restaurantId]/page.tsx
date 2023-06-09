import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getRestaurant } from '@/app/actions/getRestaurant'
import RestaurantHeader from '@/app/components/restaurant/RestaurantHeader';
import RestaurantMenus from '@/app/components/restaurant/RestaurantMenus';
import RestaurantReview from '@/app/components/restaurant/RestaurantReview';
import NotFound from '@/app/components/ui/NotFound';
import Article from '@/app/components/ui/Article';
import Link from 'next/link';
import React from 'react'
import RestaurantFooter from '@/app/components/restaurant/RestaurantFooter';

interface IParams {
    restaurantId: string
}
//generateMetadata for SEO
export async function generateMetadata({params}: {params: {restaurantId: string}}) {
  try {
    const restaurant = await getRestaurant(params);
    if(!restaurant.id) {
      return {
        title: 'Restaurant Not Found',
        description: 'Restaurant Not Found',
      }
    } 

    return {
      title: `${restaurant.name} - ${restaurant.address}`,
      description: restaurant.description,
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}


const Restaurant = async ({params}: {params: IParams}) => {
  const user = await getCurrentUser();
  const resturant = await getRestaurant(params);
  const menus = resturant.menus;
  const reviews = resturant.reviews;

  if(!resturant.id) return (
    <section>
      <NotFound
      text="Restaurant Not Found" 
      />
    </section>
  )

  const calcRating = (rating: number | undefined) => {
    const restaurantReviews = reviews!.filter(review => review.restaurantId === resturant.id);
    const totalReviews = restaurantReviews.length;
    const totalRating = restaurantReviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / totalReviews;

    return averageRating;
    }

  return (
    <section>
        <RestaurantHeader
        image={resturant.image}
        name={resturant.name}
        priceRange={resturant.priceRange}
        rating={calcRating(resturant.rating)}
        address={resturant.address}
        phone={resturant.phone}
        description={resturant.description}
        />
        {menus?.length === 0 && (
          <Article>
            <NotFound text="Looks Like the owner has not added any menu yet 🥴" />
            {user?.id === resturant.ownerId && (
              <Link href={`/restaurants/${resturant.id}/menus/new`}>
                Add Menu
              </Link>
            )}
          </Article>
        )}
        <RestaurantMenus menus={menus} restaurantId={resturant.id} userID={user?.id} />
        <RestaurantReview reviews={reviews} user={user?.id} restaurantOwner={resturant.ownerId} restaurantId={resturant.id} />
        <RestaurantFooter website={resturant.website} hours={resturant.hours} />
    </section>
  )
}

export default Restaurant;