import prisma from "../lib/prima";

export async function getReviews() {
    const reviews = await prisma.review.findMany({
        include: {
            restaurant: true,
            user: true,
        },
        orderBy: {
            rating: "desc",
        }
    });

    const serializedReviews = reviews.map((review) => ({
        ...review,
        restaurant: review.restaurant.id,
        user: review.user.id,
    }));

    return serializedReviews;
}