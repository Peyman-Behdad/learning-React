import BrandImages from "./BrandImages";
import calvin from "../assets/images/brands/calvin-klein.svg";
import gucci from "../assets/images/brands/gucci.svg";
import prada from "../assets/images/brands/prada.svg";
import zara from "../assets/images/brands/zara.svg";
import versace from "../assets/images/brands/versace.svg";

function Brands() {
  return (
    <div className="bg-black py-10 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full xl:gap-x-0 gap-x-10 xl:justify-between flex-wrap gap-y-10">
          <BrandImages address={versace} />
          <BrandImages address={zara} />
          <BrandImages address={gucci} />
          <BrandImages address={prada} />
          <BrandImages address={calvin} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
