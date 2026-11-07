import AboutUsCard from "./AboutUsCard";
import placeOrder from "../../../assets/images/aboutUsSection/place-order.svg";
import getOrder from "../../../assets/images/aboutUsSection/get-order.svg";
import track from "../../../assets/images/aboutUsSection/track.svg";
import { useState } from "react";

const list = [
  "Frequent Questions",
  "Who we are?",
  "Partner Program",
  "Help & Support",
];

const faq = [
  "How does Order.UK work?",
  "What payment methods are accepted?",
  "Can I track my order in real-time?",
  <>
    Are there any special discounts or <br />
    promotions available?
  </>,
  "Is Order.UK available in my area?",
];

const cardItems = [
  {
    id: 1,
    title: "Place an Order!",
    image: placeOrder,
    description: "Place order through our website or Mobile app",
  },
  {
    id: 2,
    title: "Track Progress",
    image: track,
    description: "Your can track your order status with delivery time",
  },
  {
    id: 3,
    title: "Get your Order!",
    image: getOrder,
    description: "Receive your order at a lighting fast speed!",
  },
];

function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeList, setActiveList] = useState(0);
  return (
    <div className="container mx-auto my-5 lg:my-10">
      <div className="bg-white md:bg-gray-100 p-10 lg:p-20 xl:p-25 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <p className="font-extrabold lg:text-2xl text-xl">
            Know more about us!
          </p>
          <ul className="hidden md:flex items-center text-sm mt-4 lg:mt-0">
            {list.map((item, index) => (
              <li
                key={item.key}
                onClick={() => setActiveList(index)}
                className={`duration-150 px-5 xl:px-8 py-3 cursor-pointer rounded-full ${activeList === index ? "border border-orange-400 font-bold" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-md mt-0 md:mt-8 lg:mt-10 py-8 md:py-13 px-8 grid grid-cols-12 space-x-10 xl:space-x-20 space-y-10 lg:space-y-0">
          <div className="lg:col-span-5 col-span-12 max-lg:w-full">
            <ul className="text-center space-y-5 text-sm font-bold">
              {faq.map((item, index) => (
                <li
                  key={item.key}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer duration-150 py-3 ${activeIndex === index ? "bg-orange-400 rounded-full" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {cardItems.map((item) => (
                <AboutUsCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
            <div className="text-center flex items-center justify-center mt-7">
              <p className="text-xs w-117">
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
