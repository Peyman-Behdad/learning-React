import Logo from "../../assets/images/logo.svg";
import AppStore from "../../assets/images/appStore.svg";
import PlayStore from "../../assets/images/playstore.svg";
import Facebook from "../../assets/images/footer/Facebook.svg";
import Inestagram from "../../assets/images/footer/Instagram.svg";
import Tiktok from "../../assets/images/footer/TikTok.svg";
import Snapchat from "../../assets/images/footer/Snapchat.svg";
import Input from "../ui/Input";

const inputData = [
  {
    text: "subscribe",
    placeholder: "youremail@gmail.com",
    btnClassName: "bg-orange-400 md:px-10 py-3.5 text-white",
  },
];

const icons = [Facebook, Inestagram, Tiktok, Snapchat];

const legalPages = [
  "Terms and conditions",
  "Privacy",
  "Cookies",
  "Modern Slavery Statement",
];

const importantLinks = [
  "Get help",
  "Add your restaurant",
  "Sign up to deliver",
  "Create a business account",
];

function Footer() {
  return (
    <div className="bg-gray-200 mt-10">
      <div className="container mx-auto py-20">
        <div className="flex max-md:items-center lg:items-center justify-between flex-col lg:flex-row gap-y-10">
          <div className="space-y-5">
            <img src={Logo} alt="" />
            <div className="flex items-center gap-1">
              <img className="w-35" src={AppStore} alt="" />
              <img className="w-35" src={PlayStore} alt="" />
            </div>
            <p className="w-75 text-sm">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>
          <div className="flex items-center gap-10 flex-col md:flex-row">
            <div className="space-y-7">
              <p className="font-bold">Get Exclusive Deals in your Inbox</p>
              <div className="space-y-1">
                <Input
                  text={inputData[0].text}
                  placeholder={inputData[0].placeholder}
                  btnClassName={inputData[0].btnClassName}
                />
                <p className="text-sm pl-5">
                  we wont spam, read our{" "}
                  <span className="underline cursor-pointer">email policy</span>
                </p>
              </div>
              <div className="flex items-center gap-3 pl-5">
                {icons.map((icon) => (
                  <img className="w-11 cursor-pointer" src={icon} alt="" />
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-10 max-md:text-center">
              <ul className="space-y-5">
                <li className="text-lg font-bold">Legal Pages</li>
                {legalPages.map((item) => (
                  <li className="underline font-light cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-5">
                <li className="text-lg font-bold">Important Links</li>
                {importantLinks.map((item) => (
                  <li className="underline font-light cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
