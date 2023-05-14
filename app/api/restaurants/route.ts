import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const restaurant = await prisma.restaurant.create({
        data: {
            ...json,
           ownerId: currentUser.id,
        }
    });

    return NextResponse.json(JSON.stringify(restaurant), {
        status: 201,
    });
}