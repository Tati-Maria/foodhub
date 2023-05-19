import {MdFastfood} from 'react-icons/md'
import { Darker_Grotesque } from 'next/font/google'
import Link from 'next/link'

const darker = Darker_Grotesque({
    weight: ['700'],
    subsets: ['latin-ext']
})

interface Props {
  className?: string
  icon?: string
}

const Logo = ({className, icon}: Props) => {
  return (
    <Link href={'/'}
    className={`flex items-center justify-center space-x-2`}
    >
        <MdFastfood
        className={`text-3xl text-primary ${icon}`} 
        />
        <span
        className={`text-2xl font-bold text-white ${darker} md:text-3xl ${className}`}
        >
            Foodhub
        </span>
    </Link>
  )
}

export default Logo