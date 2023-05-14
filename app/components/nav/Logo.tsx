import {MdFastfood} from 'react-icons/md'
import { Darker_Grotesque } from 'next/font/google'
import Link from 'next/link'

const darker = Darker_Grotesque({
    weight: ['700'],
    subsets: ['latin-ext']
})

interface Props {
  className?: string
}

const Logo = ({className}: Props) => {
  return (
    <Link href={'/'}
    className={`flex items-center justify-center space-x-2`}
    >
        <MdFastfood
        className={`text-2xl text-red-500`} 
        />
        <span
        className={`text-xl font-bold text-gray-800 ${darker} sm:text-2xl ${className}`}
        >
            Foodhub
        </span>
    </Link>
  )
}

export default Logo