interface GridProps {
    className?: string
    children: React.ReactNode
}

const Grid = ({className, children}: GridProps) => {
  return (
    <div
    role="grid"
    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ${className}`}
    >
        {children}
    </div>
  )
}

export default Grid