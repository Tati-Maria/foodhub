import prisma from "@/app/lib/prima"
import { revalidatePath, revalidateTag } from "next/cache";
import {RiDeleteBin6Line} from "react-icons/ri";

interface Props {
    reviewId: string | undefined;
    restaurantId: string | undefined;
}

const DeleteReview = ({reviewId, restaurantId}: Props) => {
    async function deleteReview() {
        "use server";
        const review = await prisma.review.delete({
            where: {
                id: reviewId as string,
            }
        });
        revalidatePath(`/profile`);
    }

    return (
        <form
        action={deleteReview}
        >
            <button
            className="btn-primary"
            type="submit"
            >
                <RiDeleteBin6Line />
            </button>
        </form>
    )
};


export default DeleteReview;

