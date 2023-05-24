import Title from "@/app/components/ui/Title"
import { getRestaurantOrders } from "@/app/actions/getRestaurantOrders";
import OrderContainer from "@/app/components/orders/OrderContainer";
import OrderCard from "@/app/components/orders/OrderCard";
import NoOrders from "@/app/components/orders/NoOrders";

interface IParams {
    restaurantId: string;
}

const OrderPage = async (
    {params}: {params: IParams}
) => {

    const restaurantOrders = await getRestaurantOrders(params);



  return (
    <section>
        <Title
        title="Orders"
        />
        {restaurantOrders.length === 0 && (<NoOrders isRestaurant />)}
        <OrderContainer
        >
            {restaurantOrders.map((order) => (
                <OrderCard
                key={order.id}
                total={order.total}
                items={order.items}
                user={order.user.name}
                orderId={order.id}
                />
            ))}
        </OrderContainer>
    </section>
  )
}

export default OrderPage