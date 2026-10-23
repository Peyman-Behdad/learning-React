import Brands from "./components/Brands";
import Customers from "./components/Customers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignInBanner from "./components/SignInBanner";

import { customersBox } from "./data/customers";
import { newArrivalsProducts } from "./data/newArrivals";
import { topSellingProducts } from "./data/topSelling";

function App() {
  return (
    <>
      <SignInBanner />
      <Navbar />
      <Hero />
      <Brands />
      <Products title="NEW ARRIVALS" products={newArrivalsProducts} />
      <Products title="TOP SELLING" products={topSellingProducts} />
      <Customers customers={customersBox} />
    </>
  );
}

export default App;
