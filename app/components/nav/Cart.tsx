import { getCart } from '@/app/actions/getCart';
import Link from 'next/link';
import {BsFillBasket2Fill} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'

const Cart = async() => {
    const cart = await getCart();
    const cartItems = cart?.map((item) => item.items.length).reduce((a, b) => a + b, 0);
  return (
    <Link 
    href={`/cart`}
    className='fixed right-4 bottom-4 rounded-full bg-white h-16 w-16 shadow-md flex items-center justify-center text-gray-950 active:bg-gray-950 active:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950 z-50'
    >
        <span
        className='absolute top-0 right-0 bg-primary font-medium text-gray-950 rounded-full w-5 h-5 flex items-center justify-center text-base'
        >
            {cartItems}
        </span>
        <GiShoppingCart
        size={35}
        />
    </Link>
    )
}

export default Cart