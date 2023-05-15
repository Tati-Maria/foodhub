import prisma from "@/app/lib/prima";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request, {params}: {params: {id: string}}) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const json = await request.json();

    const cart = await prisma.cart.create({
        data: {
            ...json,
            
        }
    })
}