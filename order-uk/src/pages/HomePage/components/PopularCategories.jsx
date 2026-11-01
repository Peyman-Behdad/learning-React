import First from "../../../assets/images/popularCategories/first.svg";
import PopularBox from "../../../components/layout/PopularBox";

const categoriesItems = [
  {
    id: 1,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 2,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 3,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 4,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 5,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
  {
    id: 6,
    boxClssName: "bg-gray-100 rounded-xl border border-gray-200",
    image: First,
    imageClassName: "",
    title: "Burgers & Fast food",
    titleClassName: "font-bold",
    decription: "21 Restaurants",
    decriptionClassName: "text-sm text-orange-400",
  },
];

function PopularCategories() {
  return (
    <div className="container mx-auto overflow-hidden px-2 md:px-0">
      <div>
        <p className="lg:text-3xl md:text-2xl text-xl font-bold">
          Popular Categories
        </p>
      </div>
      <div className="my-10 flex items-center gap-y-3 justify-between flex-wrap">
        {categoriesItems.map((item) => (
          <PopularBox
            boxClassName={item.boxClssName}
            image={item.image}
            imageClassName={item.imageClassName}
            title={item.title}
            titleClassName={item.titleClassName}
            description={item.decription}
            descriptionClassName={item.decriptionClassName}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
