import DisCount from "../../../features/DisCount/DisCount";
import FirstBox from "../../../assets/images/upto/first.svg";
import SecondBox from "../../../assets/images/upto/second.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DropDown from "../../../components/ui/DropDown";

const DisCountItems = [
  {
    id: 1,
    mainBoxClassName: "cursor-pointer md:w-100 md:h-67 w-45 h-45",
    image: FirstBox,
    badgeText: "-40%",
    badgeTextClassName:
      "bg-black text-white font-semibold px-3.5 py-4 text-sm rounded-b-xl",
    parentBadgeClassName: "text-center top-3 right-6",
    textParent: "hidden md:block",
    title: "Restaurant",
    titleClassName: "text-sm",
    description: "Chef Burgers London",
    descriptionClassName: "text-2xl font-bold",
    secondTextParent: "block md:hidden pt-3 px-2",
    secondTitle: "Restaurant",
    secondTitleClassName: "text-sm",
    secondDescription: "Chef Burgers London",
    secondDescriptionClassName: "font-bold",
  },
  {
    id: 2,
    mainBoxClassName: "cursor-pointer md:w-100 md:h-67 w-45 h-45",
    image: SecondBox,
    badgeText: "-20%",
    badgeTextClassName:
      "bg-black text-white font-semibold px-3.5 py-4 text-sm rounded-b-xl",
    parentBadgeClassName: "text-center top-3 right-6",
    textParent: "hidden md:block",
    title: "Restaurant",
    titleClassName: "text-sm",
    description: "Grand Ai Cafe London",
    descriptionClassName: "text-2xl font-bold",
    secondTextParent: "block md:hidden pt-3 px-2",
    secondTitle: "Restaurant",
    secondTitleClassName: "text-sm",
    secondDescription: "Grand Ai Cafe London",
    secondDescriptionClassName: "font-bold",
  },
  {
    id: 3,
    mainBoxClassName: "cursor-pointer md:w-100 md:h-67 w-45 h-45",
    image: FirstBox,
    badgeText: "-20%",
    badgeTextClassName:
      "bg-black text-white font-semibold px-3.5 py-4 text-sm rounded-b-xl",
    parentBadgeClassName: "text-center top-3 right-6",
    textParent: "hidden md:block",
    title: "Restaurant",
    titleClassName: "text-sm",
    description: "Butterbrot Cafe London",
    descriptionClassName: "text-2xl font-bold",
    secondTextParent: "block md:hidden pt-3 px-2",
    secondTitle: "Restaurant",
    secondTitleClassName: "text-sm",
    secondDescription: "Butterbrot Cafe London",
    secondDescriptionClassName: "font-bold",
  },
  {
    id: 4,
    mainBoxClassName: "cursor-pointer md:w-100 md:h-67 w-45 h-45",
    image: SecondBox,
    badgeText: "-20%",
    badgeTextClassName:
      "bg-black text-white font-semibold px-3.5 py-4 text-sm rounded-b-xl",
    parentBadgeClassName: "text-center top-3 right-6",
    textParent: "hidden md:block",
    title: "Restaurant",
    titleClassName: "text-sm",
    description: "Grand Ai Cafe London",
    descriptionClassName: "text-2xl font-bold",
    secondTextParent: "block md:hidden pt-3 px-2",
    secondTitle: "Restaurant",
    secondTitleClassName: "text-sm",
    secondDescription: "Grand Ai Cafe London",
    secondDescriptionClassName: "font-bold",
  },
];

const dropdownItems = ["Vegan", "Sushi", "Pizza & Fast food", "Others"];

function UpTo() {
  return (
    <div className="container mx-auto lg:my-10 my-5 px-2 md:px-0">
      <div className="flex justify-between items-center pb-8">
        <div>
          <p className="lg:text-3xl md:text-2xl text-xl font-bold">
            Up to -40%{" "}
            <span className="hidden lg:inline-block">Exclusive Deals</span>
            <span className="inline-block lg:hidden">Discount offers</span>
          </p>
        </div>
        <div className="">
          <ul className="hidden lg:flex items-center gap-5 lg:gap-10">
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
          <div className="block lg:hidden">
            <DropDown
              options={dropdownItems}
              mainClassName={
                "text-orange-400 border border-orange-400 rounded-full md:px-10 md:py-4 px-5 py-2 cursor-pointer"
              }
              mainBoxClassName={
                "bg-orange-400/95 px-2 py-2 top-15 right-0 rounded-xl text-white"
              }
              itemsClassName={"hover:bg-orange-300 duration-150 rounded-full"}
            />
          </div>
        </div>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={14} className="mySwiper">
        {DisCountItems.map((item) => (
          <SwiperSlide key={item.id} className="lg:w-100! md:w-110! w-50!">
            <DisCount
              mainBoxClassName={item.mainBoxClassName}
              image={item.image}
              badgeText={item.badgeText}
              badgeTextClassName={item.badgeTextClassName}
              parentBadgeClassName={item.parentBadgeClassName}
              textParent={item.textParent}
              title={item.title}
              titleClassName={item.titleClassName}
              description={item.description}
              descriptionClassName={item.descriptionClassName}
              secondTextParent={item.secondTextParent}
              secondTitle={item.secondTitle}
              secondTitleClassName={item.secondTitleClassName}
              secondDescription={item.secondDescription}
              secondDescriptionClassName={item.secondDescriptionClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UpTo;
