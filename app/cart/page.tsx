import Image from "next/image";
import { getCart } from "../actions/getCart"
import { getCurrentUser } from "../actions/getCurrentUser"
import Title from "../components/ui/Title";
import Article from "../components/ui/Article";
import DeleteCart from "../components/actionComponents/RemoveFromCart";
import Button from "../components/ui/Button";
import DeleteItemCart from "../components/actionComponents/DeleteItemCart";

export const metadata = {
    title: 'Cart',
    description: 'User Cart, add, remove, update items in cart',
}


const Cart = async () => {
    const cart = await getCart()
    const user = await getCurrentUser();

    if (!user) {
        return (
            <div className="text-center opacity-30 text-3xl font-bold my-10">Please login to see your cart</div>
        )
    }
    

    
  return (
    <div>
        <Title
        className="text-center text-3xl font-bold my-10"
        title="Cart" 
        />
        {cart?.length === 0 && (<div className="text-center opacity-30 text-3xl font-bold my-10">Cart is empty</div>)}
        <section className="grid grid-cols-1">
        {cart?.map((item) => (
            <div 
            key={item.id} 
            className="flex flex-col border-dashed border-2 border-gray-200 rounded-md p-4 my-4 "
            >
                <Article
                className="text-gray-500"
                >
                    <h3 className="text-left">
                        Order ID: #{item.id.substring(0, 5)}
                    </h3>
                </Article>
                <ul
                className="my-4 space-y-2"
                >
                    {item.items.map((item) => (
                        <li key={item.id} className="">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">Order Name: <span className="text-primary">{item.name}</span></h4>
                                <div className="space-x-4">
                                    <span className="font-medium">Quantity: {item.quantity}</span>
                                    <span className="font-bold text-gray-400">Price: {item.price} €</span>
                                </div>
                                <DeleteItemCart cartItemId={item.id} />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-200 self-center flex items-center pt-1 flex-col">
                    <p>Total: {item.total.toFixed(2)} €</p>
                    <DeleteCart
                    cartId={item.id}
                    userId={user.id}
                    />
                </div>
            </div>
        ))}
        </section>
        <div className="bg-white text-gray-950 w-1/4 rounded-lg p-2">
            <h3 className="font-bold text-lg">
                Total: {cart?.reduce((acc, item) => acc + item.total, 0).toFixed(2)} €
            </h3>
            <Button
            type="button"
            className="btn-secondary w-full mt-2"
            text="Checkout" 
            />
        </div>
    </div>
  )
}

export default Cart;