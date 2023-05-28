import Link from "next/link";
import Title from "../ui/Title";

interface Props {
  website: string | null | undefined;
  hours: string | undefined;

}

const RestaurantFooter = ({website, hours}: Props) => {
  return (
    <div className="hero relative h-[30vh] my-10" style={{backgroundImage: "url('/images/delivery.jpg')"}}>
      <div className="hero-overlay bg-opacity-60 -z-0"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Title title="Order Now" />
          <p>
            <span className="font-bold">Visit our website: </span>
            <span className="underline">
              <Link href={website!} target="_blank" rel="noreferrer">{website}</Link>
            </span>
          </p>
          <p>
            <span className="font-bold">Working Hours: </span>
            <time>{hours}</time>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantFooter