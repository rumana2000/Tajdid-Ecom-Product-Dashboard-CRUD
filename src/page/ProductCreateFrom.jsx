import img from "../assets/Image/product9.jpg"
import document from "../assets/Image/document.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ValidationErrorMsg from "../component/ValidationErrorMsg";
import axios from "axios"
import {toast} from "react-toastify"
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().required("Name is requrid"),
  price: yup.number().typeError('Amount must be a number').required('Price is required'),
  description: yup.string().max(275).required("275 character left"),
}).required();

export default function ProductCreateFrom() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

  let storeProduct = async (reqeustData) => {
    let res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/products`, { reqeustData })
    return res.status == 200;
  }

  const onSubmitHandler = async (data) => {
    let created = storeProduct(data)
    if (created) {
      toast.info("Prodcut has beed created successfully!")
    } else {
      toast.error('Opps! Something went wrong.')
    } 
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="p-10 divide-y divide-gray-100">
          <div class="flex justify-between h-24">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 capitalize">Create product</h2>
              <h3 className="text-md text-gray-400 capitalize">Upload your product photo and details here.</h3>
            </div>
            <div className="flex justify-between gap-4">
              <NavLink to="/products"><button type="button" className="text-md capitalize w-[76px] h-[40px] bg-white shadow rounded">cancel</button></NavLink>
              <button type="submit" className="text-md capitalize w-[76px] h-[40px] bg-blue-700 rounded text-white">create</button>
            </div>
          </div>
          <div className="flex gap-4 py-5 items-start">
            <div className="w-1/4">
              <label className=" text-gray-800 text-xl capitalize">Title</label>
            </div>
            <div className="w-2/4">
              <input type="text" {...register("title")} className={` w-full bg-white rounded-md shadow border p-3 focus:outline-none items-center focus:bg-white ${errors.title ? 'border border-red-500' : 'border-bg-white'}`} />
              {errors.title && <ValidationErrorMsg message={errors.title?.message} />}
            </div>
          </div>
          <div className="flex gap-4 py-5">
            <div className="w-1/4">
              <label className="text-gray-800 text-xl capitalize">Price</label>
            </div>
            <div className="w-2/4">
              <input type="number" {...register("price")} className={` w-full bg-white rounded-md shadow border p-3 focus:outline-none items-center focus:bg-white ${errors.title ? 'border border-red-500' : 'border-bg-white'}`}/>
              {errors.price && <ValidationErrorMsg message={errors.price?.message} />}
            </div>
          </div>
          <div className="flex py-5 h-48 min-h-full max-h-full">
            <div className="w-1/4">
              <h2 className="text-gray-800 text-xl capitalize">Product photo</h2>
              <h3 className="text-gray-400 text-md capitalize">This will be displayed on your product</h3>
            </div>
            <div className="w-2/4 bg-white rounded-lg">
              <div className="flex gap-6">
                <div className="w-1/3 max-h-full  border border-gray-200">
                  <img src={img} alt="img" className="w-full h-full items-center bg-white" />
                </div>
                <div className="w-2/3 max-h-full border border-gray-200 rounded-lg">
                  <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full min-h-full border-1 border-bg-white  rounded-lg cursor-pointer">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex justify-center items-center">
                          <img src={document} alt="document" className="w-5 h-5" />
                        </div>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><a class="text-blue-600 font-bold">Click to upload</a> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 py-5">
            <div className="w-1/4">
              <h2 className="text-gray-800 text-xl capitalize">Description</h2>
              <h3 className="text-gray-400 text-md capitalize">Write a short introduction.</h3>
            </div>
            <div className="w-2/4">
              <textarea rows="4" {...register("description")} className={` w-full bg-white rounded-md shadow border p-3 focus:outline-none items-center focus:bg-white ${errors.title ? 'border border-red-500' : 'border-bg-white'}`}></textarea>
              {errors.description && <ValidationErrorMsg message={errors.description?.message} />}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}