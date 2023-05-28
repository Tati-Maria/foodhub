import Image from "next/image";
import Link from "next/link";
import { getCart } from "../actions/getCart"
import { getCurrentUser } from "../actions/getCurrentUser"
import {BsArrowLeftShort} from "react-icons/bs"
import Title from "../components/ui/Title";
import Article from "../components/ui/Article";
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
        <table
        className="table-auto w-full" 
        >
            <thead
            className="bg-black text-white p-2 text-center"
            >
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody
            className="text-center"
            >
                {cart?.length === 0 && (
                    <tr>
                        <td colSpan={5} className="p-2">No items in cart</td>
                    </tr>
                )}
                {cart?.map((item) => {
                    return item.items.map((i) => (
                        <tr
                        className="text-gray-950 border-b-2 border-black/30 odd:bg-gray-100 even:bg-white"
                        key={i.id}>
                            <td className="p-2">
                                <Article
                                className="flex items-center"
                                >
                                    <Image 
                                    src={i.image}
                                    alt={i.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                    loading="lazy"
                                    />
                                    <div className="ml-2">
                                        <h3 className="font-bold">{i.name}</h3>
                                        <p className="text-gray-500">{i.description.substring(0, 10)}</p>
                                    </div>
                                </Article>
                            </td>
                            <td className="p-2">{i.price} €</td>
                            <td className="p-2">{i.quantity}</td>
                            <td className="p-2">{(i.price * i.quantity).toFixed(2)} €</td>
                            <td className="p-2">
                                <DeleteItemCart
                                cartItemId={i.id}
                                />
                            </td>
                        </tr>
                    ))
                })}
            </tbody>
        </table>
        <div className="bg-white text-gray-950 w-full mt-10 p-2 flex items-center justify-between">
            <div
            className="underline hover:text-primary"
            >
                <BsArrowLeftShort className="inline-block mr-2" />
                <Link 
                href={`/restaurants`}>
                    Back to restaurants
                </Link>
            </div>
            <div
            className="flex items-center justify-center gap-10"
            >
                <p className="font-bold text-lg">
                    Total: {
                        cart?.reduce((acc, item) => acc + item.items.reduce((acc, item) => acc + item.price * item.quantity, 0), 0).toFixed(2)
                    } €
                </p>
                <Button
                type="button"
                className="btn-secondary w-full"
                text="Checkout" 
                />
            </div>
        </div>
    </div>
  )
}

export default Cart;