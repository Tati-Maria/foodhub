interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({className, children}: ContainerProps) => {
  return (
    <div
    role="container"
    className={`max-w-7xl mx-auto px-4 ${className}`}
    >
        {children}
    </div>
  )
}

export default Container