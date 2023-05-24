import { getCart } from "../actions/getCart"
import { getCurrentUser } from "../actions/getCurrentUser"
import Title from "../components/ui/Title";

export const metadata = {
    title: 'Cart',
    description: 'User Cart, add, remove, update items in cart',
}


const Cart = async () => {
    const cart = await getCart()
    const user = await getCurrentUser();

    if (!user) {
        return {
            redirect: {
            destination: '/login',
            permanent: false,
            },
        }
    }
    

    
  return (
    <div>
        <Title
        className="text-center text-3xl font-bold my-10"
        title="Cart" 
        />
        {cart?.length === 0 && (<div className="text-center opacity-30 text-3xl font-bold my-10">Cart is empty</div>)}
    </div>
  )
}

export default Cart;