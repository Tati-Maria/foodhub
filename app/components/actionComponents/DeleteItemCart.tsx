import prisma from "@/app/lib/prima"
import { revalidatePath } from "next/cache";
import {RiDeleteBin6Line} from "react-icons/ri";

interface Props {
    cartItemId: string;
}

const DeleteItemCart = (
    {cartItemId}: Props
) => {

    async function handleDeleteItemCart() {
        "use server";
        const cartItem = await prisma.cartItem.delete({
            where: {
                id: cartItemId,
            }
        });

        revalidatePath(`/cart`);
    }

  return (
    <form action={handleDeleteItemCart}>
        <button
        className="btn-primary"
        type="submit"
        >
            <RiDeleteBin6Line />
        </button>
    </form>
  )
}

export default DeleteItemCart