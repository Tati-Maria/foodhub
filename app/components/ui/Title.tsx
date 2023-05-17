import {Outfit} from "next/font/google";

const outfit = Outfit({
    subsets: ['latin']
})

interface TitleProps {
    className?: string
    title: string
}

const Title = ({className="", title}: TitleProps) => {
  return (
    <h2
    className={`mb-3 text-2xl font-bold text-white ${outfit.className}  ${className}`}
    >
        {title}
    </h2>
  )
}

export default Title