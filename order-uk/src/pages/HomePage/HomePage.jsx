import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import UpTo from "./components/UpTo";

function HomePage() {
  return (
    <div>
      <GetDiscount />
      <Navbar />
      <Hero />
      <UpTo/>
      <PopularCategories/>
    </div>
  );
}

export default HomePage;
