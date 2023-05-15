import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request, {params}: {params: {restaurantId: string}}) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const review = await prisma.review.create({
        data: {
            ...json,
            user: {
                connect: {
                    id: currentUser.id,
                }
            },
            restaurant: {
                connect: {
                    id: params.restaurantId,
                }
            },
            rating: Number(json.rating),
        }
    });

    return NextResponse.json(JSON.stringify(review), {
        status: 201,
    });
}