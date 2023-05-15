import Link from "next/link"
import { IconType } from "react-icons"

interface Props {
    text: string
    route: string
    className?: string
    icon?: IconType
    closeMenu?: () => void
}

const MenuItem = ({route, text, className="", icon: Icon, closeMenu }: Props) => {
  return (
    <li
    onClick={closeMenu}
    className={`${className} text-base md:text-lg font-semibold text-gray-800 px-2 py-2 rounded-md hover:bg-gray-100 transition duration-200 ease-in-out w-full`}
    >
        <Link
        className="flex items-center space-x-4"
        href={route}
        >
          {Icon && <Icon />}
          <span>{text}</span>
        </Link>
    </li>
  )
}

export default MenuItem