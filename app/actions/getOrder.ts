import prisma from "../lib/prima";
import { getCurrentUser } from "./getCurrentUser";

interface IParams {
   orderId: string;
}

export async function getOrder({orderId}: IParams) {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            return null;
        }

        const order = await prisma.order.findUnique({
            where: {
                id: orderId,
            }
        });

        if(!order) {
            return null;
        }

        return order;
    } catch (error: any) {
        
    }
}