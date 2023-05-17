import Article from "../ui/Article"
import Button from "../ui/Button"


const Hiring = () => {
  return (
    <Article
    className="my-20"
    >
        <h3 className="text-2xl font-semibold text-center">We are hiring</h3>
        <p className="text-center text-gray-400">We are looking for a full-time and part-time delivery person</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <Button
            className="w-full md:w-auto border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-md"
            type="button"
            text="Apply Now" 
            />
            <Button
            className="btn btn-outline-primary w-full md:w-auto"
            type="button"
            text="Learn More"
            />
        </div>
    </Article>
  )
}

export default Hiring