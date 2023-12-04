import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className="container xxl:mx-auto">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 items-start">
            <Sidebar />
          </div>
          <div className="col-span-3">
            <Outlet>{children}</Outlet>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
      </div>

    </>
  )
}