import prisma from "@/app/lib/prima"
import { revalidatePath } from "next/cache";
import {RiDeleteBin6Line} from "react-icons/ri";

type Props = {
    orderId: string | undefined;
    restaurantId: string | undefined;
}

const DeleteOrder = ({orderId, restaurantId}: Props) => {
    async function deleteOrder() {
        "use server";
        const order = await prisma.order.delete({
            where: {
                id: orderId as string,
            }
        });

        revalidatePath(`/restaurants/${restaurantId}/orders`);
    }
  return (
    <form 
    action={deleteOrder}
    >
        <button
        className="btn-primary"
        type="submit"
        >
            <RiDeleteBin6Line />
        </button>
    </form>
  )
}

export default DeleteOrder