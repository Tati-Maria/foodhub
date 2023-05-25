'use client'
import { useRouter, useSearchParams } from "next/navigation"

const Edit = () => {
  const router = useRouter()
  const params = useSearchParams()
  const restaurantId = params.get('restaurantId');


  return (
    <div>
      Not implemented yet!!
    </div>
  )
}

export default Edit