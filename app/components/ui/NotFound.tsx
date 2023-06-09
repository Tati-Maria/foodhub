interface NotFoundProps {
    text: string
}

const NotFound = ({text}: NotFoundProps) => {
  return (
    <div
    className="flex flex-col items-center justify-center h-screen"
    >
        <p
        className="text-3xl font-medium text-gray-500"
        >
            {text || "Not Found"}
        </p>
    </div>
  )
}

export default NotFound