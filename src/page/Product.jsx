import SingleProduct from "../component/SingleProduct"
import ProductHeader from "../component/ProductHader"
import Pagination from "../component/Pagination"

export default function Product() {
  return (
    <>
      <div class="col-span-3">
        <div class="p-10">
          <ProductHeader />
          <div className="grid grid-cols-3 items-center gap-6">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
          <div class="flex items-center justify-center border-t mt-5 bg-white py-8 lg:px-0 sm:px-6 px-4">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}