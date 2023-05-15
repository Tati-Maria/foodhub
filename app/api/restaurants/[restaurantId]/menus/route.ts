import prisma from "@/app/lib/prima"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/app/actions/getCurrentUser";


export async function POST(request: Request, {params}: {params: {id: string}}) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error()
    }

    const json = await request.json();


    const created = await prisma.menu.create({
        data: {
            ...json,
            restaurantId: Number(params.id),
            userId: currentUser.id
        }
    })

    return new NextResponse(JSON.stringify(created), {
        status: 201
    })
}