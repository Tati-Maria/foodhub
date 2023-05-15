interface ArticleProps {
    className?: string
    children: React.ReactNode
}

const Article = ({className, children}: ArticleProps) => {
  return (
    <article
    className={`flex flex-col items-center justify-center ${className}`}
    >
        {children}
    </article>
  )
}

export default Article