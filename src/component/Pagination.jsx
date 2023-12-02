import arrowLeft from "../assets/Image/arrowLeft.png"
import arrowRight from "../assets/Image/arrowRight.png"

export default function Pagination() {
  return (
    <>
      <div class="lg:w-11/12 w-full flex items-center justify-between">
        <div class="flex items-center justify-center gap-2 text-gray-600  cursor-pointer">
          <img src={arrowLeft} alt="arrowLeft" className="w-4 h-4" />
          <p class="text-sm w-[60px] h-[20px] mt-2 font-medium leading-none ">Previous</p>
        </div>
        <div class="flex">
          <p class="text-sm font-medium cursor-pointer text-blue-600 bg-sky-100 rounded-md py-2 pt-3 mr-4 px-4">1</p>
          <p class="text-sm font-medium cursor-pointer text-gray-600  pt-3 mr-4 px-2">2</p>
          <p class="text-sm font-medium cursor-pointer text-gray-600  pt-3 mr-4 px-2">3</p>
          <p class="text-sm font-medium  cursor-pointer pt-3 mr-4 px-2">...</p>
          <p class="text-sm font-medium cursor-pointer text-gray-600  pt-3 mr-4 px-2">8</p>
          <p class="text-sm font-medium cursor-pointer text-gray-600  pt-3 mr-4 px-2">9</p>
          <p class="text-sm font-medium cursor-pointer text-gray-600  pt-3 mr-4 px-2">10</p>
        </div>
        <div class="flex items-center pt-3cursor-pointer">
          <p class="text-sm font-medium leading-none mr-3">Next</p>
          <img src={arrowRight} alt="arrowRight" className="w-4 h-4" />
        </div>
      </div>
    </>
  )
}