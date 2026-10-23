import { useState } from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="py-8 md:px-0 px-3 flex items-center gap-15 justify-between ">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="cursor-pointer block md:hidden"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
          <a href="#">
            <img src={logo} className="w-30 md:w-40" alt="Shop.co" />
          </a>
        </div>
        <div
          className={`z-999 relative sm:text-sm ${!sidebarOpen ? "max-md:w-0 overflow-hidden" : "max-md:w-60 max-md:pl-5"} max-md:fixed top-0 bottom-0 left-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-black max-md:text-white max-md:pt-20 flex gap-5 transition-all`}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-white text-lg font-semibold absolute right-5 top-4 cursor-pointer block "
          >
            <i className="ri-close-large-line"></i>
          </button>
          <ul className="flex items-center gap-5 max-md:flex-col max-md:items-start">
            <li className="relative">
              <a href="#" className="flex items-center gap-1">
                Shop <i className="ri-arrow-down-s-line text-xl"></i>
              </a>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-[#F0F0F0] py-3 px-4 rounded-full hidden items-center gap-3 lg:flex">
          <i className="ri-search-line text-2xl cursor-pointer text-black/40 font-semibold"></i>
          <input
            type="text"
            className="outline-none w-full text-lg"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <a href="#" className="block lg:hidden">
            <i className="ri-search-line"></i>
          </a>
          <a href="#">
            <i className="ri-shopping-cart-line"></i>
          </a>
          <a href="#">
            <i className="ri-user-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
