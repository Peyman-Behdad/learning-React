import First from "../../../assets/images/popularCategories/first.svg";
import Second from "../../../assets/images/popularCategories/second.svg";
import Third from "../../../assets/images/popularCategories/third.svg";
import Fourth from "../../../assets/images/popularCategories/fourth.svg";
import Fifth from "../../../assets/images/popularCategories/fifth.svg";
import Sixth from "../../../assets/images/popularCategories/sixth.svg";

import BoxCategories from "../../../components/layout/BoxCategories";

const categoriesItems = [
  {
    id: 1,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 2,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: Second,
    imageClassName: "",
    title: "Salads",
    titleClassName: "font-bold",
    decription: "32 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 3,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: Third,
    imageClassName: "",
    title: "Pasta & Casuals",
    titleClassName: "font-bold",
    decription: "4 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 4,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: Fourth,
    imageClassName: "",
    title: "Pizza",
    titleClassName: "font-bold",
    decription: "32 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 5,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: Fifth,
    imageClassName: "",
    title: "Breakfast",
    titleClassName: "font-bold",
    decription: "4 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 6,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    image: Sixth,
    imageClassName: "",
    title: "Soups",
    titleClassName: "font-bold",
    decription: "32 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
];

function PopularCategories() {
  return (
    <div>
      <BoxCategories
        categoriesItems={categoriesItems}
        title={"Popular Categories"}
        box={true}
      />
    </div>
  );
}

export default PopularCategories;
