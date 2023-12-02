import SingleProduct from "../component/SingleProduct"
import ProductHeader from "../component/ProductHader"
import Pagination from "../component/Pagination"
import { useEffect, useState } from "react"
import axios from "axios"
import ShimmerEffect from "../component/ShimmerEffect"


export default function Product() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let allProducts = async ()  => {
      setLoading(true)
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
      setProducts(res.data)
      setLoading(false)
    } 
    allProducts()
  },[] )
  // console.log(products);
  return (
    <>
      <div className="col-span-3">
        <div className="p-10">
          <ProductHeader />
          {loading && <ShimmerEffect/>}
          <div className="grid grid-cols-3 items-center gap-6">
             {products && products.map(product => <SingleProduct productInfo = {product} />)}
          </div>
          <div className="flex items-center justify-center border-t mt-5 bg-white py-8 lg:px-0 sm:px-6 px-4">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}