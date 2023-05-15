

type TextViewProps = {
    text: string
    className?: string
} 

const TextView = ({text, className}: TextViewProps) => {
  return (
    <p
    className={`text-gray-500 ${className}`}
    >
        {text}
    </p>
  )
}

export default TextView