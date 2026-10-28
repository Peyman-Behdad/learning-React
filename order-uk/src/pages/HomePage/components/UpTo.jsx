import DisCount from "../../../features/DisCount/DisCount";
import FirstBox from "../../../assets/images/upto/first.svg";
import SecondBox from "../../../assets/images/upto/second.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DisCountItems = [
  {
    id: 1,
    image: FirstBox,
    title: "Restaurant",
    paragraph: "Chef Burgers London",
    discount: "-40%",
    addItem: false,
  },
  {
    id: 2,
    image: SecondBox,
    title: "Restaurant",
    paragraph: "Grand Ai Cafe London",
    discount: "-20%",
    addItem: false,
  },
  {
    id: 3,
    image: FirstBox,
    title: "Restaurant",
    paragraph: "Butterbrot Cafe London",
    discount: "-20%",
    addItem: false,
  },
  {
    id: 4,
    image: SecondBox,
    title: "Restaurant",
    paragraph: "Grand Ai Cafe London",
    discount: "-20%",
    addItem: false,
  },
];

function UpTo() {
  return (
    <div className="container mx-auto lg:my-10 my-5 px-2 md:px-0">
      <div className="flex justify-between items-center pb-8">
        <div>
          <p className="lg:text-3xl md:text-2xl text-xl font-bold">
            Up to -40%{" "}
            <span className="hidden lg:inline-block">
              order.uk exclusive deals
            </span>
            <span className="inline-block lg:hidden">Discount offers</span>
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-5 lg:gap-10">
            <li className="hidden lg:inline-block cursor-pointer">
              <a href="#">Vegan</a>
            </li>
            <li className="hidden lg:inline-block cursor-pointer">
              <a href="#">Sushi</a>
            </li>
            <li className="text-orange-400 border border-orange-400 rounded-full md:px-10 md:py-4 px-5 py-2 cursor-pointer">
              <a href="#">Pizza & Fast food</a>
            </li>
            <li className="hidden lg:inline-block cursor-pointer">
              <a href="#">others</a>
            </li>
          </ul>
        </div>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={14} className="mySwiper">
        {DisCountItems.map((item) => (
          <SwiperSlide key={item.id} className="lg:w-100! md:w-110! w-50!">
            <DisCount
              image={item.image}
              title={item.title}
              paragraph={item.paragraph}
              discount={item.discount}
              addItem={item.addItem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UpTo;
