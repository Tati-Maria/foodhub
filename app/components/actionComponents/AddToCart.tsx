

import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { Prisma } from "@prisma/client";
import prisma from "@/app/lib/prima";


interface Props {
    itemId: string | undefined;
    price: string | undefined;
    menuItem: {
        id: string;
        name: string;
        description: string;
        image: string;
        price: string;
    } | null
}

const AddToCart = async ({price, menuItem}: Props) => {
    const user = await getCurrentUser();
    const userId = user?.id;
    async function addToCart(data: FormData) {
        "use server";
        const quantity = data.get("quantity");
        const create = await prisma.cart.create({
            data: {
                total: new Prisma.Decimal(+price! * +quantity!),
                userId: userId as string,
            },
            include: {
                items: true,
            }
        });
    }
  return (
    <form
    className="flex flex-col gap-2" 
    action={addToCart}
    >
        <label htmlFor="quantity">Quantity</label>
        <input 
        type="number" 
        name="quantity" 
        id="quantity" 
        className="text-gray-900 p-2 rounded-md w-20"
        min={1}
        max={10}
        defaultValue={1} 
        />
        <button
        className="w-max bg-red-500 text-white rounded-md p-2 hover:bg-red-700 transition duration-200 ease-in-out active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
        type="submit"
        >
            Add To Cart
        </button>
    </form>
  )
}

export default AddToCart;