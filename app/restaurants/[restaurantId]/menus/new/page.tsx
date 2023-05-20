import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getRestaurant } from "@/app/actions/getRestaurant";
import CreateMenus from "@/app/components/forms/CreateMenu";
import NotFound from "@/app/components/ui/NotFound";
import Title from "@/app/components/ui/Title";

export const generateMetadata = async ({params}: {params: {restaurantId: string}}) => {
  const restaurant = await getRestaurant(params);
  if(!restaurant.id) {
    return {
      title: 'Restaurant Not Found',
      description: 'Restaurant Not Found',
    }
  } 

  return {
    title: `Create Menu for ${restaurant.name}`,
    description: `Create Menu for ${restaurant.name}`,
  }
}

interface IParams {
  restaurantId: string
}

const CreateMenu = async ({params}: {params: IParams}) => {
  const resturant = await getRestaurant(params);
  const user = await getCurrentUser();
  const restaurantId = resturant.id;

  if(!restaurantId) return (
    <NotFound
    text="Restaurant Not Found"
     />
  )

  if(user?.id !== resturant.ownerId) return (
    <NotFound
    text="You are not the owner of this restaurant"
    />
  )

  return (
    <section>
      <Title title={`Create Menu for ${resturant.name}`} 
      className="text-gray-900 text-4xl" 
      />
      <CreateMenus restaurantId={restaurantId} />
    </section>
  )
}

export default CreateMenu;