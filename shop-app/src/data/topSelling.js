import StripedShirt from "../assets/images/products/5.svg";
import GraphicTShirt from "../assets/images/products/6.svg";
import Shorts from "../assets/images/products/7.svg";
import Jeans from "../assets/images/products/8.svg";

// price: current price. oldPrice: optional price before the discount.
// The discount percentage is calculated in ProductBox, so it can't go out of sync.
export const topSellingProducts = [
  {
    id: 1,
    image: StripedShirt,
    title: "Vertical Striped Shirt",
    rating: 5,
    price: 212,
    oldPrice: 232,
  },
  {
    id: 2,
    image: GraphicTShirt,
    title: "Courage Graphic T-shirt",
    rating: 4,
    price: 145,
  },
  {
    id: 3,
    image: Shorts,
    title: "Loose Fit Bermuda Shorts",
    rating: 3.5,
    price: 80,
  },
  {
    id: 4,
    image: Jeans,
    title: "Faded Skinny Jeans",
    rating: 4.5,
    price: 210,
  },
];
