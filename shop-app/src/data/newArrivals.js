import TShirt from "../assets/images/products/1.svg";
import Jeans from "../assets/images/products/2.svg";
import Shirt from "../assets/images/products/3.svg";
import StripedTShirt from "../assets/images/products/4.svg";

// price: current price. oldPrice: optional price before the discount.
// The discount percentage is calculated in ProductBox, so it can't go out of sync.
export const newArrivalsProducts = [
  {
    id: 1,
    image: TShirt,
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    image: Jeans,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
  },
  {
    id: 3,
    image: Shirt,
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    image: StripedTShirt,
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
  },
];
