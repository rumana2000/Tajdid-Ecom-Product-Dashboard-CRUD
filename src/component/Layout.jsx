import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
export default function Layout({children}) {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          <Sidebar />
          <div className="col-span-3">
           <Outlet>{children}</Outlet>
          </div>
        </div>
      </div>
    </>
  )
}