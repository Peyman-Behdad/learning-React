import { useState } from "react";
import logo from "../assets/images/logo.svg";

const menuLinks = ["Shop", "On Sale", "New Arrivals", "Brands"];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // On mobile the menu is a sidebar. `invisible` hides it from keyboard and
  // screen readers too, not just visually (unlike a zero width alone).
  const sidebarState = sidebarOpen
    ? "max-md:w-60 max-md:pl-5"
    : "max-md:invisible max-md:w-0 max-md:overflow-hidden";

  return (
    <header className="container">
      <div className="py-8 flex items-center gap-15 justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            aria-expanded={sidebarOpen}
            aria-controls="main-menu"
            className="cursor-pointer block md:hidden"
          >
            <i className="ri-menu-line text-2xl" aria-hidden="true"></i>
          </button>
          <a href="#">
            <img src={logo} className="w-30 md:w-40" alt="Shop.co" />
          </a>
        </div>
        <nav
          id="main-menu"
          aria-label="Main"
          className={`z-999 relative sm:text-sm ${sidebarState} max-md:fixed top-0 bottom-0 left-0 max-md:min-h-screen max-md:h-full max-md:flex-col max-md:bg-black max-md:text-white max-md:pt-20 flex gap-5 transition-all`}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-white text-lg font-semibold absolute right-5 top-4 cursor-pointer block md:hidden"
          >
            <i className="ri-close-large-line" aria-hidden="true"></i>
          </button>
          <ul className="flex items-center gap-5 max-md:flex-col max-md:items-start">
            {menuLinks.map((label) => (
              <li key={label}>
                <a href="#" className="flex items-center gap-1">
                  {label}
                  {label === "Shop" && (
                    <i
                      className="ri-arrow-down-s-line text-xl"
                      aria-hidden="true"
                    ></i>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 bg-[#F0F0F0] py-3 px-4 rounded-full hidden items-center gap-3 lg:flex">
          <i
            className="ri-search-line text-2xl text-black/40 font-semibold"
            aria-hidden="true"
          ></i>
          <input
            type="search"
            aria-label="Search for products"
            className="outline-none w-full text-lg"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <a href="#" aria-label="Search" className="block lg:hidden">
            <i className="ri-search-line" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Cart">
            <i className="ri-shopping-cart-line" aria-hidden="true"></i>
          </a>
          <a href="#" aria-label="Account">
            <i className="ri-user-line" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
