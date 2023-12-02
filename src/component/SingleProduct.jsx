import img from "../assets/Image/product9.jpg"
import Rating from "./Rating"
import deleteImg from "../assets/Image/delete.png"

export default function SingleProduct() {
  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="border-b-1 border-gray-500">
          <a href="#" className="">
            <img class="rounded-t-lg" src={img} alt="product image" />
          </a>
        </div>
        <div class="px-5 py-5 pb-5">
          <div class="flex justify-between gap-6">
            <div class="">
              <span class="font-bold text-gray-900 dark:text-white">$599</span>
              <Rating />
            </div>
            <div className="w-10 h-10 rounded-md shadow relative">
              <img src={deleteImg} alt="deleteImg" className="absolute w-6 h-6 top-2 left-2" />
            </div>
          </div>
          <div>
            <p className="text-cardBase text-md">Opna Women's Short Sleeve Moisture</p>
          </div>
        </div>
      </div>
    </>
  )
}