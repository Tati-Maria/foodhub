import Link from "next/link"

interface Props {
    text: string
    route: string
}

const MenuItem = ({route, text}: Props) => {
  return (
    <li>
        <Link
        className="text-gray-800 hover:text-gray-600 transition-colors duration-300 font-medium" 
        href={route}
        >
            {text}
        </Link>
    </li>
  )
}

export default MenuItem