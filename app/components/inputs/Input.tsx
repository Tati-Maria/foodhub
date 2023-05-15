'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type Props = {
    className?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


const Input = ({className, ...rest}: Props) => {
    return (
        <input
        className={`${className}`}
        {...rest}
        />
    )
}

export default Input;