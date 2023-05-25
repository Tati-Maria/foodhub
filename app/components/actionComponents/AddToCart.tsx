import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { Prisma } from "@prisma/client";
import prisma from "@/app/lib/prima";
import { revalidatePath } from "next/cache";


interface Props {
    itemId: string | undefined;
    price: number | undefined;
    restaurantId: string | undefined;
}

const AddToCart = async ({price, restaurantId, itemId}: Props) => {
    const user = await getCurrentUser();
    const userId = user?.id;
    async function addToCart(data: FormData) {
        "use server";
        if(!user && !userId) {
            return {
                error: "You must be logged in to add items to your cart",
            }
        }
        const quantity = data.get("quantity");
        let cartId = null;
        const existingCart = await prisma.cart.findFirst({
            where: {
                userId: userId as string,
            }
        });

    

        if(!existingCart) {
            const cart = await prisma.cart.create({
                data: {
                    user: {
                        connect: {
                            id: userId as string,
                        },
                    },
                    total: new Prisma.Decimal(Number(price) * Number(quantity)),
                }
            });
            cartId = cart.id;
        } else {
            const currentTotal = existingCart.total;
            const newTotal = new Prisma.Decimal(Number(currentTotal) + Number(price) * Number(quantity));

            await prisma.cart.update({
                where: {
                    id: existingCart.id,
                },
                data: {
                    total: newTotal,
                }
            });

            cartId = existingCart.id;
        }

      

        const order = await prisma.order.create({
            data: {
                user: {
                    connect: {
                        id: userId as string,
                    }
                },
                total: new Prisma.Decimal(Number(price) * Number(quantity)),
                restaurant: {
                    connect: {
                        id: restaurantId as string,
                    }
                }
            }
        });

        if(order) {
            const updatedOrder = await prisma.order.update({
                where: {
                    id: order.id,
                },
                data: {
                    user: {
                        connect: {
                            id: userId as string,
                        }
                    },
                    total: new Prisma.Decimal(Number(price) * Number(quantity)),
                    restaurant: {
                        connect: {
                            id: restaurantId as string,
                        }
                    }
                }
            })
        }

        const orderId = order.id;

        const orderItem = await prisma.cartItem.create({
            data: {
                cart: {
                    connect: {
                        id: cartId as string,
                    }
                },
                order: {
                    connect: {
                        id: orderId as string,
                    }
                },
                quantity: Number(quantity),
                user: {
                    connect: {
                        id: userId as string,
                    }
                },
                menuItem: {
                    connect: {
                        id: itemId as string,
                    }
                },
            }
        });

        if(orderItem) {
            const updatedOrderItem = await prisma.cartItem.update({
                where: {
                    id: orderItem.id,
                },
                data: {
                    cart: {
                        connect: {
                            id: cartId as string,
                        }
                    },
                    order: {
                        connect: {
                            id: orderId as string,
                        }
                    },
                    quantity: Number(quantity),
                    user: {
                        connect: {
                            id: userId as string,
                        }
                    },
                    menuItem: {
                        connect: {
                            id: itemId as string,
                        }
                    },
                }
            })
        }

        revalidatePath("/cart");
    }
  return (
    <form
    className="flex flex-col gap-2" 
    action={addToCart}
    >
        <label htmlFor="quantity">Quantity</label>
        <input 
        type="number" 
        name="quantity" 
        id="quantity" 
        className="text-gray-900 p-2 rounded-md w-20"
        min={1}
        max={10}
        defaultValue={1} 
        />
        <button
        className="btn-primary"
        type="submit"
        >
            Add To Cart
        </button>
    </form>
  )
}

export default AddToCart;