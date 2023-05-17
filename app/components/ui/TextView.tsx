

type TextViewProps = {
    text: string
    className?: string
} 

const TextView = ({text, className}: TextViewProps) => {
  return (
    <p
    className={`${className}`}
    >
        {text}
    </p>
  )
}

export default TextView