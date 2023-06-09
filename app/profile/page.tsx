import { getCurrentUser } from "../actions/getCurrentUser";
import { getUserRestaurants } from "../actions/getUserRestaurants";
import DeleteRestaurant from "../components/actionComponents/DeleteRestaurant";
import {FiEdit2} from "react-icons/fi";
import {RiRestaurant2Fill} from "react-icons/ri";
import Article from "../components/ui/Article";
import TextView from "../components/ui/TextView";
import Title from "../components/ui/Title";
import Link from "next/link";
import { getReviews } from "../actions/getReviews";
import {IoAddCircleSharp} from "react-icons/io5";
import DeleteReview from "../components/actionComponents/DeleteReview";
import { getUserOrders } from "../actions/getUserOrders";


export const metadata = {
  applicationName: "Foodhub",
  title: "Dashboard",
  description: "Manage your restaurants and orders",
  category: "Food",
}

const NoRestaurants = () => {
  return (
    <div className="text-center text-gray-500 my-10 text-xl">
      <h2>
          You have no restaurants.
      </h2>
    </div>
  )
}

const Home = async () => {
  const user = await getCurrentUser();
  const userRestaurants = await getUserRestaurants();
  const reviews = await getReviews();
  const myOrders = await getUserOrders();

  //get current user reviews
  const currentUserReviews = reviews.filter(review => review.userId === user?.id);


  return (
    <section className="space-y-10">
      <Article
      className="space-y-4"
      >
        <div>
          <Title
          title={`Welcome ${user?.name}`} 
          />
          <TextView
          className="text-gray-500"
          text="Manage your restaurants and orders" 
          />
        </div>
        <div>
        <Link
        title="Create a restaurant" 
        href="/restaurants/new"
        className="btn-primary"
        >
        Create a restaurant <RiRestaurant2Fill size={20} className="inline-block ml-2" />
      </Link>
        </div>
      </Article>
  
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Menus</th>
            <th className="text-left">Nº Items</th>
            <th className="text-left">Nº Orders</th>
            <th className="text-left">Nº Reviews</th>
            <th className="text-left">Av Rating</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* If there is no restaurants */}
          {userRestaurants?.length === 0 && (
            <tr>
              <td colSpan={6}>
                <NoRestaurants 
                />
              </td>
            </tr>
          )}
          {/* If there are restaurants */}
          {userRestaurants?.map((restaurant) => (
            <tr key={restaurant.id}>
              <td data-label={restaurant.name} className="text-left">
                <Link href={`/restaurants/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </td>
              <td data-label="Menus" className="text-left">{restaurant.menus.length}</td>
              <td data-label="Items" className="text-left">{
                restaurant.menus.reduce((acc, menu) => acc + menu.menuItems.length, 0)
              }</td>
              <td data-label="Orders" className="text-left">{restaurant.orders.length}</td>
              <td data-label="Reviews" className="text-left">{restaurant.reviews.length}</td>
              <td data-label="Ratings" className="text-left">{restaurant.reviews.reduce((acc, review) => acc + review.rating, 0)}</td>
              <td data-label="Actions" className="text-left flex items-center gap-4">
                <DeleteRestaurant restaurantId={restaurant.id} />
                <Link title="Edit Restaurant" href={`/restaurants/${restaurant.id}/edit`}>
                  <FiEdit2 size={20} className="text-primary hover:text-primary/80" />
                </Link>
                <Link title="Add Menu" href={`/restaurants/${restaurant.id}/menus/new`}>
                  <IoAddCircleSharp size={20} className="text-blue-500 hover:text-blue-600 active:text-blue-600 focus:text-blue-600 focus-visible:text-blue-600" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Article
      >
        <Title
        title="Reviews you have made"
        />
      </Article>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Restaurant</th>
            <th className="text-left">Rating</th>
            <th className="text-left">Comment</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUserReviews?.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-gray-500 my-10 text-xl">
                <h2>
                  You have no reviews.
                </h2>
              </td>
            </tr>
          )}
          {currentUserReviews?.map((review) => (
            <tr key={review.id}>
              <td data-label={review.restaurant.name} className="text-left">{review.restaurant.name}</td>
              <td data-label="Rating" className="text-left">{review.body}</td>
              <td data-label="Comment" className="text-left">{review.body}</td>
              <td data-label="Actions" className="text-left">
                <DeleteReview reviewId={review.id} restaurantId={review.restaurantId} />
                <Link title="Edit Review" href={`/restaurants/${review.restaurantId}/reviews/${review.id}/edit`}>
                  <FiEdit2 size={20} className="text-primary hover:text-primary/80" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Title 
        title="Your Past Orders"
        className="mb-4 text-center" 
        />
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Restaurant</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order) => (
              <tr key={order.id}>
                <td data-label={order.restaurant.name} className="text-left">{order.restaurant.name}</td>
                <td data-label="Total" className="text-left">{order.total} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </section>
  )
}

export default Home