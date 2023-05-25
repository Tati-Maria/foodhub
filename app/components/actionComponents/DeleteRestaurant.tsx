import prisma from "@/app/lib/prima";
import { revalidatePath, revalidateTag } from "next/cache";
import { TiDelete } from "react-icons/ti";

interface Props {
    restaurantId: string | undefined;
}

const DeleteRestaurant: React.FC<Props> = ({ restaurantId }) => {
    async function deleteRestaurant() {
        "use server";
        const restaurant = await prisma.restaurant.delete({
            where: {
                id: restaurantId,
            },
        });
        revalidateTag(`/restaurants/${restaurantId}`);
        revalidatePath(`/restaurants`);
    }

    return (
        <form 
        onSubmit={deleteRestaurant}
        >
            <input type="hidden" name="restaurantId" value={restaurantId} />
            <button
            title="Delete Restaurant"
            type="submit"
            className="text-red-500 hover:text-red-600 hover:underline"
            >
                <TiDelete
                size={25} 
                />
            </button>
        </form>
    );
};

export default DeleteRestaurant;