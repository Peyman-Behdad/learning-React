import People from "../../../assets/images/getApp/people.svg";
import AppStore from "../../../assets/images/getApp/appstore.svg";
import PlayStore from "../../../assets/images/getApp/playstore.svg";
import Logo from "../../../assets/images/logo.svg";

function GetApp() {
  return (
    <div className="mx-auto container mt-15 mb-10">
      <div className="relative bg-gray-200 rounded-lg lg:h-120 pt-10 pr-10 flex lg:flex-row gap-y-10 flex-col-reverse items-center justify-between">
        <div>
          <img
            className="xl:w-167 lg:w-145 md:w-120 w-100 lg:absolute xl:-top-10 bottom-0"
            src={People}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-center">
            <img className="xl:w-52 lg:w-45 md:w-40 w-35" src={Logo} alt="" />
            <span className="font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
              ing is more
            </span>
          </div>
          <div className="bg-[#03081F] rounded-full py-3 text-center overflow-hidden">
            <p className="text-white xl:text-4xl lg:text-3xl text-xl">
              <span className="text-orange-400 underline cursor-pointer">
                Perdonalised
              </span>
              & Instant
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p>Download the Order.uk app for faster ordering</p>
            <div className="flex gap-5 items-center">
              <img
                className="w-35 xl:w-40 cursor-pointer"
                src={AppStore}
                alt=""
              />
              <img
                className="w-35 xl:w-40 cursor-pointer"
                src={PlayStore}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetApp;
