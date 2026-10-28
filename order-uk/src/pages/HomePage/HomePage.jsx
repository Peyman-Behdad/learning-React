import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";
import UpTo from "./components/UpTo";

function HomePage() {
  return (
    <div>
      <GetDiscount />
      <Navbar />
      <Hero />
      <UpTo/>
    </div>
  );
}

export default HomePage;
