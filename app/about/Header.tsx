import Image from "next/image"
import Tagline from "../components/ui/Tagline"
import Title from "../components/ui/Title"
import Link from "next/link"

const Header = () => {
  return (
    <section
    className="grid grid-cols-1 py-10 md:grid-cols-2 md:py-20"
    >
        <figure>
            <Image
            src="/images/about.jpg"
            alt="Foodhub"
            width={500}
            height={500}
            className="object-cover"
            />
        </figure>
        <article>
            <Tagline
            text="We deliver food to you." 
            />
            <Title
            title="About Foodhub" 
            />
           <div
              className="space-y-4"
           >
            <p>
                    Foodhub is fictional food delivery service. Build with Next.js, TailwindCSS, TypeScript, Prisma and Supabase.
                    This project is for learning purposes only and is not intended to be used in production.
                    I do not own any of the images used in this project. All images are from <Link className="text-rose-500 underline hover:text-rose-600" target="_blank" href="https://www.pexels.com/">Pexels</Link> and <Link className="text-rose-500 underline hover:text-rose-600" href="https://www.freepik.com/" target="_blank">Freepik</Link>. The restaurant data is from ChatGPT and is not real. 
                </p>
                <p>
                    This project is open source and you can find the source code on <Link className="text-rose-500 underline hover:text-rose-600" href="#">Here</Link>.
                    You can also find the data used <Link className="text-rose-500 underline hover:text-rose-600" href="#">Here</Link>.
                </p>
                <p>
                    If you have any questions or concerns, please contact me at <Link className="text-rose-500 underline hover:text-rose-600" href="mailto:rosatati14@gmail.com">Maria</Link>.
                </p>
                <p>
                    This project is still in development and is not yet complete. New features will be added in the future like searching for restaurants, ordering food, and more.
                </p>
                <p>
                    Thank you for visiting Foodhub!
                </p>
           </div>
        </article>
    </section>
  )
}

export default Header