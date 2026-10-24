import HeroImage from "../assets/images/hero/Subject.png";
import StatusBox from "./StatusBox";

const statusItems = [
  {
    number: "200+",
    title: "International Brands",
  },
  {
    number: "2,000+",
    title: "High-Quality Products",
  },
  {
    number: "30,000+",
    title: "Happy Customers",
  },
];

function Hero() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="container mx-auto">
        <div className="flex-col md:pt-20 pt-10 pb-0 xl:pb-20 justify-between gap-10 xl:gap-0 xl:flex-row flex relative px-4">
          <div className="space-y-10 md:pt-10">
            <div className="space-y-8">
              <h1 className="md:text-7xl text-5xl max-sm:text-4xl font-extrabold md:w-130">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="md:w-129 text-black/60 text-sm">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <a
                href="#"
                className="inline-block text-center bg-black text-white rounded-full px-15 py-3 text-sm cursor-pointer max-sm:block max-sm:w-full"
              >
                Shop Now
              </a>
            </div>
            <div className="flex items-center max-sm:justify-center gap-y-5 lg:gap-x-18 gap-x-10 lg:gap-5 flex-wrap">
              {statusItems.map((item) => (
                <StatusBox
                  key={item.title}
                  number={item.number}
                  title={item.title}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center lg:absolute sticky lg:bottom-0 lg:right-0 ">
            <img src={HeroImage} className="md:w-150 w-130" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
