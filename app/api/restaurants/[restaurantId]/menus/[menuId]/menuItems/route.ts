import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prima";
import { NextResponse } from "next/server";



export async function POST(
request: Request, {params}: {params: {menuId: string}}
) {
 
    try {
        const json = await request.json();
        const currentUser = await getCurrentUser();

    const created = await prisma.menuItem.create({
        data: {
            ...json,
            menu: {
                connect: {
                    id: params.menuId,
                }
            },
            user: {
                connect: {
                    id: currentUser?.id,
                }
            },
            price: Number(json.price),
        }
    });

    return NextResponse.json(created)
    } catch (error: any) {
        throw new Error(error.message);
    }

}