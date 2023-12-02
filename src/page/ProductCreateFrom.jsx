import img from "../assets/Image/product9.jpg"
import document from "../assets/Image/document.png"

export default function ProductCreateFrom() {
  return (
    <>
      <div className="p-10 divide-y divide-gray-100">
        <div class="flex justify-between h-24">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 capitalize">Create product</h2>
            <h3 className="text-md text-gray-400 capitalize">Upload your product photo and details here.</h3>
          </div>
          <div className="flex justify-between gap-4">
            <button type="button" className="text-md capitalize w-[76px] h-[40px] bg-white shadow rounded">cancel</button>
            <button type="button" className="text-md capitalize w-[76px] h-[40px] bg-blue-700 rounded text-white">create</button>
          </div>
        </div>
        <div className="flex gap-4 py-5 items-start">
          <div className="w-1/4">
            <h2 className="text-gray-800 text-xl capitalize">Title</h2>
          </div>
          <div className="w-2/4">
            <input type="text" className="w-full bg-white rounded-md shadow border p-3 focus:outline-none items-center focus:bg-white border-bg-white" placeholder="Oliva" />
          </div>
        </div>
        <div className="flex gap-4 py-5">
          <div className="w-1/4">
            <h2 className="text-gray-800 text-xl capitalize">Price</h2>
          </div>
          <div className="w-2/4">
            <input type="text" className="w-full bg-white rounded-md shadow border p-3 focus:outline-none items-center focus:bg-white border-bg-white" placeholder="$ 13.5" />
          </div>
        </div>
        <div className="flex py-5 h-48 min-h-full max-h-full">
          <div className="w-1/4">
            <h2 className="text-gray-800 text-xl capitalize">Product photo</h2>
            <h3 className="text-gray-400 text-md capitalize">This will be displayed on your product</h3>
          </div>
          <div className="w-2/4 bg-white rounded-lg">
            <div className="flex gap-6">
              <div className="w-1/3 max-h-full border border-gray-200">
                <img src={img} alt="img" className="p-3 bg-white" />
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
                    <input id="dropzone-file" type="file" class="hidden" />
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
            <textarea rows="8" className="border border-gray-100 w-full p-3 rounded shadow bg-white focus:outline-none" placeholder="Write Somthing About Your Products... "></textarea>
            <p className="text-sm capitalize text-gray-400">275 character left</p>
          </div>
        </div>
      </div>
    </>
  )
}