import SingleProduct from "../component/SingleProduct"
import ProductHeader from "../component/ProductHader"
import Pagination from "../component/Pagination"
import { useEffect, useState } from "react"
import axios from "axios"
import ShimmerEffect from "../component/ShimmerEffect"
import DeleteConfirmPopup from "../component/DeleteConfirmPopup"
import { toast } from "react-toastify"


export default function Product() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null)

  const handleDeleteClick = (id) => {
    setDeleteProductId(id)
    setIsDeleteDialogOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleConfirmDelete = (id) => {
    let deleted = deleteProduct(deleteProductId)
    if (deleted) {
      fetchAllProducts()
      toast.info('item(s) have been deleted !')
    }
    setIsDeleteDialogOpen(false);
    setDeleteProductId(null)
  };

  let fetchAllProducts = async () => {
    setLoading(true)
    let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
    setProducts(res.data)
    setLoading(false)
  }

  let deleteProduct = async (productId) => {
    let res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/products/${productId}`)
    return res.status == 200
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])
  return (
    <>
      <div className="col-span-3">
        <div className="p-10">
          <ProductHeader />
          {loading && <ShimmerEffect />}
          <div className="grid grid-cols-3 mb-5 items-center gap-6">
            {products && products.map((product) => <SingleProduct deleteProductHandler={handleDeleteClick} key={product.id} productInfo={product} />)}
          </div>
          <div className="flex justify-center border-t-2 bg-white lg:px-0 sm:px-6 px-4">
            <Pagination />
          </div>
        </div>
      </div>

      <DeleteConfirmPopup
        isOpen={isDeleteDialogOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  )
}