import shopLogo from "../assets/Image/game-icons_ubisoft-sun.png"
import shopName from "../assets/Image/SunSolutions.png"
import Layers from "../assets/Image/3Layers.png"
import Analytics from "../assets/Image/Analytics.png"
import home from "../assets/Image/home.png"
import user from "../assets/Image/user.png"
import logOut from "../assets/Image/logOut.png"
import dollarSign from "../assets/Image/dollarSign.png"
import arrowDown from "../assets/Image/arrowDown.png"
import vector from "../assets/Image/Vector.png"

export default function Sidebar() {
  return (
    <>
    <div class="col-span-1 items-start">
      <div class="h-full shadow overflow-hidden bg-white relative">
          <div className="flex justify-center items-center p-10 gap-1">
            <img src={shopLogo} alt="shopLogo" className="w-5 h-5" />
            <img src={shopName} alt="shopName" className="w-20h-20" />
          </div>
          <div className="">
            <ul class="space-y-2 font-medium">
              <li className="bg-sky-100 border-l-4 border-blue-600 ">
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900  dark:text-white">
                    <img src={Layers} alt="Layers" className="w-4 h-4" />
                    <span class="ms-3 capitalize">product</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                    <img src={Analytics} alt="Analytics" className="w-4 h-4" />
                    <span class="flex-1 ms-3 capitalize">analytic</span>
                    <img src={arrowDown} alt="arrowDown" className="w-3 h-2" />
                  </a>
                </div>
              </li>
              <li>
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                    <img src={dollarSign} alt="dollarSign" className="w-4 h-4" />
                    <span class="flex-1 ms-3 whitespace-nowrap capitalize">billing</span>
                    <img src={arrowDown} alt="arrowDown" className="w-3 h-2" />
                  </a>
                </div>
              </li>
              <li>
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                    <img src={home} alt="home" className="w-4 h-4" />
                    <span class="flex-1 ms-3 whitespace-nowrap capitalize">company</span>
                    <img src={arrowDown} alt="arrowDown" className="w-3 h-2" />
                  </a>
                </div>
              </li>
              <li>
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                    <img src={user} alt="user" className="w-4 h-4" />
                    <span class="flex-1 ms-3 whitespace-nowrap capitalize">admin</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="px-6">
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white">
                    <img src={logOut} alt="logOut" className="w-4 h-4" />
                    <span class="flex-1 ms-3 whitespace-nowrap capitalize">logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-100 absolute p-2 inset-x-0 bottom-0">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full top-7 bg-white shadow relative">
                <img src={vector} alt="vector" className="absolute w-[32px] h-[32px] left-[12px] top-[12px]" />
              </div>
            </div>
            <div className="bg-sky-100 border rounded-lg border-lg py-10">
              <h2 className="text-xl font-bold text-gray-800 text-center capitalize mt-2">Help Center</h2>
              <p className="text-gray-400 text-base mt-2 text-center capitalize p-2">Getting trouble on Simplebook? Reach out and solve your problem</p>
              <div className="flex items-center justify-center mt-5">
                <button className="border border-blue-500 bg-blue-700 py-3.5 px-[22px] text-white text-xl text-center rounded-md capitalize">Consult Now</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}