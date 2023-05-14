// Autor: Maria Tati
interface TitleProps {
    className?: string
    title: string
}

const Title = ({className="", title}: TitleProps) => {
  return (
    <h2
    className={`mb-3 text-2xl font-semibold ${className}`}
    >
        {title}
    </h2>
  )
}

export default Title