'use client'

import { useRestaurant } from "@/app/hooks/useRestaurant"
import FormGroup from "./FormGroup"
import TextArea from "./Textarea"
import Select from "./Select"
import Button from "../ui/Button"
import ImageUpload from "./ImageUpload"
import { IoWarningOutline } from "react-icons/io5"
import Label from "./Label"


const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    name,
    description,
    image,
    phone,
    website,
    priceRange,
    hours,
    address,
    setCustomValue
  } = useRestaurant();

  const inputClass = `py-2 px-4 border border-gray-300 rounded-md focus:outline-none
  focus:ring-2 focus:ring-red-500 focus:border-transparent
  ${errors.name ? "ring-2 ring-red-500 border-red-500" : "focus:ring-gray-500"}`

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col space-y-4"
    >
      <FormGroup
      double
      >
        <div
        className="flex flex-col space-y-1"
        >
          <Label
          htmlFor="name"
          text="Name"
          />
          <input
          id="name"
          type="text"
          placeholder=""
          value={name}
          disabled={isSubmitting}
          className={inputClass}
          {...register('name', {required: true})}
          />
          {errors.name && (
            <div
            className="flex items-center space-x-1 text-sm text-red-500"
            >
                <IoWarningOutline size={20} />
                <span>{errors.name.message}</span>
            </div>
          )}
        </div>
        <div
        className="flex flex-col space-y-1"
        >
          <Label
          htmlFor="address"
          text="Address"
          />
          <input
          id="address"
          type="text"
          placeholder=""
          value={address}
          disabled={isSubmitting}
          className={inputClass}
          {...register('address', {required: true})}
          />
          {errors.address && (
            <div
            className="flex items-center space-x-1 text-sm text-red-500"
            >
                <IoWarningOutline size={20} />
                <span>{errors.address.message}</span>
              </div>
          )}
        </div>
      </FormGroup>
      <TextArea
      id="description"
      label="Description"
      register={register}
      required
      placeholder="eg. We are a fast food restaurant that sells burgers, fries, and shakes."
      value={description}
      error={errors}
      disabled={isSubmitting}
      />
      <FormGroup
      triple
      >
        <div
        className="flex flex-col space-y-1"
        >
          <Label
          htmlFor="phone"
          text="Phone Number"
          />
          <input
          id="phone"
          {...register('phone', {required: true})}
          type="text"
          placeholder=""
          value={phone}
          disabled={isSubmitting}
          className={inputClass}
          />
          {errors.phone && (
            <div
            className="flex items-center space-x-1 text-sm text-red-500"
            >
              <IoWarningOutline size={20} />
              <span>{errors.phone.message}</span>
              </div>
          )}
        </div>
        <div
        className="flex flex-col space-y-1"
        >
          <Label
          htmlFor="website"
          text="Website"
          />
          <input
          id="website"
          {...register('website', {required: true})}
          type="text"
          placeholder="eg. https://www.mcdonalds.com/"
          value={website}
          disabled={isSubmitting}
          className={inputClass}
          />
          {errors.website && (
            <div
            className="flex items-center space-x-1 text-sm text-red-500"
            >
              <IoWarningOutline size={20} />
              <span>{errors.website.message}</span>
              </div>
          )}
        </div>
        <Select
        label="Price Range"
        value={priceRange}
        error={errors}
        required
        register={register}
        id="priceRange" 
        />
        <div
        className="flex flex-col space-y-1"
        >
          <Label
          htmlFor="hours"
          text="Hours" 
          />
          <input
          id="hours"
          {...register('hours', {required: true})}
          type="text"
          placeholder="eg. 8:00 AM - 9:00 PM"
          value={hours}
          disabled={isSubmitting}
          className={inputClass}
          />
          {errors.hours && (
            <div
            className="flex items-center space-x-1 text-sm text-red-500"
            >
              <IoWarningOutline size={20} />
              <span>{errors.hours.message}</span>
            </div>
          )}
        </div>
      </FormGroup>
      <ImageUpload
      htmlFor="image"
      label="Restaurant Image"
      onUpload={(url) => setCustomValue('image', url)}
      value={image}
      />
      <Button
      className="bg-red-500 hover:bg-red-600 rounded text-white"
      type="submit"
      loading={isSubmitting}
      disabled={isSubmitting}
      text="Create Restaurant" 
      />
    </form>
  )
}

export default Form