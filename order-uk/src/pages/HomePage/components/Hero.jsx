import Input from "../../../components/ui/Input";
import HeroSide from "../../../assets/images/hero/hero-side.svg";
import HeroPersonBg from "../../../assets/images/hero/hero-person-bg.svg";
import HeroPerson from "../../../assets/images/hero/hero-person.svg";

const inputData = [
  {
    text: "search",
    placeholder: "e.g EC4R 3TE",
    btnClassName: "bg-orange-400 md:px-15 py-3.5 text-white",
  },
];

function Hero() {
  return (
    <div className="mx-auto container">
      <div className="bg-[#FBFBFB] overflow-hidden w-full py-10 lg:pb-0 lg:pt-10  lg:pl-10 border border-gray-200/70 rounded-lg relative">
        <div className="flex lg:justify-between justify-center items-center h-full text-center lg:text-start">
          <div className="lg:space-y-10 space-y-4">
            <div className="space-y-2">
              <p className="md:text-sm text-xs">
                Order Restaurant food, takeaway and groceries.
              </p>
              <p className="md:text-5xl text-4xl font-semibold lg:leading-14">
                Feast Your Senses,
                <span className="block text-orange-400">Fast and Fresh</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs">Enter a postcode to see what we deliver</p>
              <Input
                text={inputData[0].text}
                placeholder={inputData[0].placeholder}
                btnClassName={inputData[0].btnClassName}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <img className=" w-100 xl:w-135" src={HeroSide} />
          </div>
        </div>
        <img
          className="hidden lg:block absolute left-[60%] bottom-0 -translate-x-1/2 z-20 w-70 xl:w-100"
          src={HeroPerson}
          alt=""
        />
        <img
          className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-110 xl:w-170"
          src={HeroPersonBg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
