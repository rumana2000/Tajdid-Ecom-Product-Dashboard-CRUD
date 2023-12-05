export default function DeleteConfirmPopUp({ isOpen, onCancel, onConfirm }) {
  const overlayStyles = isOpen ? 'fixed inset-0 bg-opacitybg opacity-50' : 'hidden';
  const dialogStyles = isOpen ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 overflow-y-auto overflow-x-hidden w-[400px] rounded-lg' : 'hidden';

  return (
    <>
      <div className={overlayStyles}></div>
      <div className={dialogStyles}>
        <div className="">
          <div className="flex">
            <div className="">
              <h2 className="text-gray-800 font-semibold text-xl">Delete product</h2>
              <span className="text-gray-600 text-sm">Are you sure you want to delete “Opna Women's Short Sleeve Moisture” from your lists?</span>
            </div>
            <button onClick={onCancel} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <button onClick={onCancel} type="button" className="w-1/2 py-2.5 px-[18px] text-gray-600 text-sm font-medium  bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:outline-none  hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Cancel
            </button>
            <button onClick={onConfirm} type="submit" className="w-1/2 py-2.5 px-[18px] text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700  focus:outline-none  dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}