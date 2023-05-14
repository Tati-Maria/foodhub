interface Props {
    className?: string
    htmlFor: string
    text: string
}

const Label = ({className, htmlFor, text}: Props) => {
    return (
        <label
        htmlFor={htmlFor}
        className={`text-sm text-gray-500 font-medium ${className}`}
        >
            {text}
        </label>
    )
}

export default Label;