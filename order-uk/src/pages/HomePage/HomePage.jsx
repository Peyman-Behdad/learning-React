import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";

function HomePage() {
  return (
    <div>
      <GetDiscount />
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
