import Link from "next/link"

export const metadata = {
    title: "Page Not Found",
    description: "Page Not Found",
}


const NotFound = () => {
  return (
    <section
    className="flex flex-col space-y-4 items-center justify-center h-screen border-2 border-primary p-5"
    >
        <p className="font-bold text-5xl lg:text-9xl">404</p>
        <h2 className="text-4xl lg:text-7xl">
            Page Not Found
        </h2>
        <p className="text-xl text-gray-300">
            The page you are looking for does not exist or has been moved.
        </p>
        <Link 
        className="text-primary font-bold hover:underline text-xl"
        href="/"
        >
            Back to Home
        </Link>
    </section>
  )
}

export default NotFound;