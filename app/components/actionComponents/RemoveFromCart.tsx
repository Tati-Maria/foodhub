import prisma from "@/app/lib/prima"
import { revalidatePath } from "next/cache";
import {RiDeleteBin6Line} from "react-icons/ri";

type Props = {
    cartId: string | undefined;
    userId: string | undefined;
}

const DeleteCart = ({cartId, userId}: Props) => {
    async function deleteCart() {
        "use server";

        if(!cartId) return;
        if(!userId) return;

        const cart = await prisma.cart.delete({
            where: {
                id: cartId as string,
            }
        });

        revalidatePath(`/cart`);
    }

    return (
        <form
        action={deleteCart} 
        >
            <button
            className="border-2 border-red-500 rounded-md p-2 focus:outline-none hover:bg-red-500 hover:text-white transition-all active:bg-red-700"
            type="submit"
            >
                Cancel Order
            </button>
        </form>
    )
}

export default DeleteCart;