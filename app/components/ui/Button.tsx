'use client'
import { IconType } from "react-icons"

type ButtonProps = {
    text?: string
    onClick?: () => void
    loading?: boolean
    disabled?: boolean
    className?: string
    icon?: IconType
    type: 'button' | 'submit' | 'reset'
}

const Button = ({
    text,
    onClick,
    loading,
    disabled,
    className,
    icon: Icon,
}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`
    flex items-center justify-center py-2 px-6 font-medium transition-colors duration-300
    ${className} ${disabled && 'opacity-50 cursor-not-allowed'} ${loading && 'cursor-wait'} 
    `}
    >
        {Icon && <Icon />}
        {text && <span>{text}</span>}
    </button>
  )
}

export default Button