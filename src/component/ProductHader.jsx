import { NavLink } from "react-router-dom"
import loginUser from "../assets/Image/Avatar.png"
import arrowDown from "../assets/Image/arrowDown.png"


export default function ProductHeader() {
  return (
    <>
      <div className="flex justify-between h-24">
        <h2 className="text-3xl font-bold text-gray-800 capitalize">products</h2>
        <div className="flex justify-between gap-4">
         <NavLink to="/create-product"> <button type="button" className="text-md capitalize w-[132px] h-10 bg-blue-700 rounded text-white">create new</button></NavLink>
          <div className="flex gap-2">
            <div>
              <img src={loginUser} alt="loginUser" className="w-10 h-10 rounded-full" />
            </div>
            <h3 className="flex">
              <div>
                <span className="text-md text-gray-800 capitalize">Andrew Kyu</span>
                <p>User</p>
              </div>
              <img src={arrowDown} alt="arrowDown" className="mt-2 ml-2 w-2 h-2" />
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}