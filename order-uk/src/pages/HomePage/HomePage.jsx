import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import AboutUs from "./components/AboutUs";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import PopularRestaurants from "./components/PopularRestaurants";
import Status from "./components/Status";
import UpTo from "./components/UpTo";
import WithUs from "./components/WithUs";

function HomePage() {
  return (
    <div>
      <GetDiscount />
      <Navbar />
      <Hero />
      <UpTo />
      <PopularCategories />
      <PopularRestaurants />
      <GetApp />
      <WithUs />
      <AboutUs />
      <Status/>
    </div>
  );
}

export default HomePage;
