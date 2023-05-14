import {Baskervville} from "next/font/google";

const baskervville = Baskervville({
    weight: ['400'],
    subsets: ['latin']
})

interface TitleProps {
    className?: string
    title: string
}

const Title = ({className="", title}: TitleProps) => {
  return (
    <h2
    className={`mb-3 text-2xl font-semibold ${baskervville.className}  ${className}`}
    >
        {title}
    </h2>
  )
}

export default Title