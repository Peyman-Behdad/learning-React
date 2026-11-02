import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import PopularRestaurants from "./components/PopularRestaurants";
import UpTo from "./components/UpTo";

function HomePage() {
  return (
    <div>
      <GetDiscount />
      <Navbar />
      <Hero />
      <UpTo />
      <PopularCategories />
      <PopularRestaurants />
      <GetApp/>
    </div>
  );
}

export default HomePage;
