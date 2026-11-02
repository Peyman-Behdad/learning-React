import First from "../../../assets/images/popularRestaurants/first.svg";
import Second from "../../../assets/images/popularRestaurants/second.svg";
import Third from "../../../assets/images/popularRestaurants/third.svg";
import Fourth from "../../../assets/images/popularRestaurants/fourth.svg";
import Fifth from "../../../assets/images/popularRestaurants/fifth.svg";
import Sixth from "../../../assets/images/popularRestaurants/sixth.svg";

import BoxCategories from "../../../components/layout/BoxCategories";

const restaurantsItems = [
  {
    id: 1,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold py-2",
  },
  {
    id: 2,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: Second,
    imageClassName: "",
    title: "Salads",
    titleClassName: "font-bold py-2",
  },
  {
    id: 3,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: Third,
    imageClassName: "",
    title: "Pasta & Casuals",
    titleClassName: "font-bold py-2",
  },
  {
    id: 4,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: Fourth,
    imageClassName: "",
    title: "Pizza",
    titleClassName: "font-bold py-2",
  },
  {
    id: 5,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: Fifth,
    imageClassName: "",
    title: "Breakfast",
    titleClassName: "font-bold py-2",
  },
  {
    id: 6,
    boxClassName:
      "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58 ",
    image: Sixth,
    imageClassName: "",
    title: "Soups",
    titleClassName: "font-bold py-2",
  },
];

function PopularRestaurants() {
  return (
    <div>
      <BoxCategories
        categoriesItems={restaurantsItems}
        title={"Popular Restaurants"}
        variant="swiper"
      />
    </div>
  );
}

export default PopularRestaurants;
