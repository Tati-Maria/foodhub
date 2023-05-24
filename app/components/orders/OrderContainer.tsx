interface Props {
  children: React.ReactNode
}

const OrderContainer = ({children}: Props) => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
      {children}
   </div>
  )
}

export default OrderContainer