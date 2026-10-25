import { CircleUser, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.svg";
import Button from "../ui/Button";
import { useState } from "react";

const buttonData = [
  {
    id: 1,
    icon: <CircleUser />,
    iconClassName: "text-orange-400 text-sm max-lg:text-[#03081F]",
    text: "Login/Signup",
    className: "bg-[#03081F] text-white max-lg:bg-orange-400",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto container my-8">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-40" src={logo} alt="" />
        </div>
        <div
          className={`
          fixed top-0 right-0 z-50 h-full w-64 pl-4 pt-15
          flex flex-col items-start gap-6 bg-[#03081F] text-white text-sm
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:p-0
          lg:flex-row lg:items-center lg:gap-5
          lg:bg-transparent lg:text-black lg:text-base
        `}
        >
          <div className="block lg:hidden absolute top-4 right-5">
            <X size={30} onClick={() => setIsOpen(false)} />
          </div>
          <ul className="flex items-start lg:items-center gap-x-5 text-sm font-semibold max-lg:flex-col max-lg:gap-y-5">
            <li className="bg-orange-400 text-white px-8 py-2 rounded-full ">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Menu</a>
            </li>
            <li>
              <a href="#">Special Offers</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
          <div>
            <Button
              key={buttonData[0].id}
              icon={buttonData[0].icon}
              text={buttonData[0].text}
              className={buttonData[0].className}
              iconClassName={buttonData[0].iconClassName}
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <Menu size={50} onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
