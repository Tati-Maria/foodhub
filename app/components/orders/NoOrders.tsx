import Link from "next/link";

interface NoOrdersProps {
    isRestaurant?: boolean;
}

const NoOrders = ({isRestaurant=false}: NoOrdersProps) => {
  return (
    <div
    className="flex flex-col items-center justify-center gap-4"
    >
        <h3
        className="font-bold text-xl"  
        >
            No orders yet!
        </h3>
        {!isRestaurant && (
            <p>Go to the <Link className="btn-primary" href="/restaurants">Restaurants</Link> page to order something!</p>
        )}
    </div>
  )
}

export default NoOrders