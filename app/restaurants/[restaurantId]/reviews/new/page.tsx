import CreateReview from "@/app/components/forms/CreateReview"
import { getCurrentUser } from "@/app/actions/getCurrentUser"
import { getRestaurant } from "@/app/actions/getRestaurant"
import NotFound from "@/app/components/ui/NotFound"
import Title from "@/app/components/ui/Title"

interface IParams {
    restaurantId: string
  }

const Review = async({params}: {params: IParams}) => {
    const resturant = await getRestaurant(params);
    const user = await getCurrentUser();

    if(!resturant.id) return (
        <NotFound
        text="Restaurant Not Found"
         />
    )

    if(user?.id === resturant.ownerId) return (
        <NotFound
        text="You are the owner of this restaurant"
        />
    )

    if(!user) return (
        <NotFound
        text="You must be logged in to leave a review"
        />
    )

  return (
    <section
    className="flex flex-col space-y-4"
    >
        <Title 
        title={`Leave a Review for ${resturant.name}`} 
        className="text-gray-900 text-4xl" />
        <CreateReview restaurantId={resturant.id} />
    </section>
  )
}

export default Review