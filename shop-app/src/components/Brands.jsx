import calvin from "../assets/images/brands/calvin-klein.svg";
import gucci from "../assets/images/brands/gucci.svg";
import prada from "../assets/images/brands/prada.svg";
import zara from "../assets/images/brands/zara.svg";
import versace from "../assets/images/brands/versace.svg";

const brands = [
  { name: "Versace", logo: versace },
  { name: "Zara", logo: zara },
  { name: "Gucci", logo: gucci },
  { name: "Prada", logo: prada },
  { name: "Calvin Klein", logo: calvin },
];

function Brands() {
  return (
    <section aria-label="Our brands" className="bg-black py-10">
      <ul className="container flex items-center justify-center w-full xl:gap-x-0 gap-x-10 xl:justify-between flex-wrap gap-y-10">
        {brands.map((brand) => (
          <li key={brand.name}>
            <img src={brand.logo} alt={brand.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brands;
