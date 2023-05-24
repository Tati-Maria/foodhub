import DeleteOrder from "../actionComponents/DeleteOrder";
import Image from "next/image";

type Items = {
    menuItem: {
        id: string;
        name: string;
        price: string;
        quantity: number;
        image: string;
        description: string;
        menuId: string;
        userId: string;
        };
        id: string;
        quantity: number;
        userId: string;
        cartId: string;
        orderId: string;
        menuItemId: string;
    }[]


interface OrderCardProps {
    total: string;
    user: string | null;
    items: Items;
    orderId: string;
}

const OrderCard = ({total, user, orderId, items}: OrderCardProps) => {

  return (
    <div
    className="border-2 border-dashed border-gray-300 p-4 flex flex-row justify-between items-center gap-4 rounded-md"
    >
        <div
        className="flex flex-col gap-4 flex-grow"
        >
            <h3 className="font-bold text-primary">Order Id: #{orderId.substring(0, 5)}</h3>
            <div>
                <h4
                className="font-bold text-primary"
                >Items</h4>
                <ul
                className="flex flex-col gap-4"
                >
                    {items.map((item) => (
                        <li
                        className="flex flex-col gap-2" 
                        key={item.menuItem.id}
                        >
                            <h5>{item.menuItem.name}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.menuItem.price} €</p>
                            <div>
                                <Image
                                src={item.menuItem.image}
                                alt={item.menuItem.name}
                                width={100}
                                height={100}
                                loading="lazy"
                                className=""
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div
        className="self-end flex flex-col gap-2 text-end"
        >
            <h4 className="font-bold">Total: {total} €</h4>
            <small>
                {user ? `Ordered by: ${user}` : "Ordered by: Guest"}
            </small>
            <DeleteOrder
            orderId={orderId}
            restaurantId={items[0].menuItem.menuId}
            />
        </div>
    </div>
  )
}

export default OrderCard