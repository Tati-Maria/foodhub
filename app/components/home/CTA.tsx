import Link from "next/link"
import Title from "../ui/Title"


const CTA = () => {
  return (
    <div className="hero h-[50vh] my-20 rounded-md" style={{backgroundImage: `url("/images/footer.jpg")`}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
            <div className="max-w-md">
                <Title
                className="text-4xl font-bold drop-shadow-lg"
                title="Ready to order from your favorite restaurant?" 
                />
                <Link
                className="bg-red-500 hover:bg-red-600 mx-auto rounded px-4 py-2 mt-5"
                href="/restaurants"
                >
                    View Restaurants
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CTA