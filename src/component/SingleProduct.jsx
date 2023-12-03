import Rating from "./Rating"
import deleteImg from "../assets/Image/delete.png"

export default function SingleProduct({ productInfo, deleteProductHandler }) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <a href="#" className="">
            <div className="flex justify-center">
              <img src={productInfo.image} alt="product image" className="object-fill h-48 max-h-full rounded-md p-2 " />
            </div>
          </a>
        </div>
        <div className="px-5 py-5 border border-t-gray-100 pb-5 h-32 min-h-full">
          <div className="flex justify-between gap-6">
            <div className="">
              <span className="font-bold text-gray-900 dark:text-white">$ {productInfo.price}</span>
              <Rating productInfo={productInfo} />
            </div>
            <div onClick={() => {deleteProductHandler(productInfo.id)}}>
              <button type="button" className="w-10 h-10 rounded-md shadow relative">
                <img src={deleteImg} alt="deleteImg" className="absolute w-6 h-6 top-2 left-2" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-cardBase text-md">{productInfo.title.length > 40 ? productInfo.title.substring(0, 40) + '...' : productInfo.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}