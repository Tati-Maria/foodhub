import prisma from "@/app/lib/prima"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/app/actions/getCurrentUser";


export async function POST(request: Request, {params}: {params: {restaurantId: string}}) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error()
    }

    const json = await request.json();


    const created = await prisma.menu.create({
        data: {
            ...json,
            user: {
                connect: {
                    id: currentUser.id
                }
            },
            restaurant: {
                connect: {
                    id: params.restaurantId
                }
            }
        }
    })

    return new NextResponse(JSON.stringify(created), {
        status: 201
    })
}