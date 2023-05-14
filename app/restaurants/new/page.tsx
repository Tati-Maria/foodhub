import Form from '@/app/components/inputs/Form';
import Title from '@/app/components/ui/Title';
import React from 'react'

const CreateRestaurant = () => {
  return (
    <section>
      <Title title="Create Restaurant" className="text-gray-900 text-4xl" />
      <Form />
    </section>
  )
}

export default CreateRestaurant;