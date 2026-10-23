import BrandImages from "./BrandImages";
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
    <div className="bg-black py-10 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full xl:gap-x-0 gap-x-10 xl:justify-between flex-wrap gap-y-10">
          {brands.map((brand) => (
            <BrandImages key={brand.name} src={brand.logo} alt={brand.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
