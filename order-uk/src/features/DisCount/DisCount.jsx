import { CirclePlus } from "lucide-react";

function DisCount({ image, title, paragraph, discount, addItem }) {
  return (
    <div>
      <div
        className={`bg-cover bg-center md:w-100 md:h-67 w-45 h-45 rounded-xl relative px-8 py-5 flex items-end overflow-hidden shadow cursor-pointer`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute right-5 top-3">
          <span className="text-sm font-semibold text-white bg-black py-4 px-3 rounded-b-lg">
            {discount}
          </span>
        </div>
        <div className="hidden md:block">
          <p className="text-orange-400">{title}</p>
          <p className="text-white font-bold text-2xl">{paragraph}</p>
        </div>
        {addItem && (
          <div className="absolute right-0 bottom-0 z-20 cursor-pointer">
            <span className="bg-white px-4 py-3 rounded-tl-4xl block">
              <CirclePlus size={35} />
            </span>
          </div>
        )}
      </div>
      <div className="block md:hidden pt-3 px-2">
        <p className="text-orange-400">{title}</p>
        <p className="text-black font-bold text-lg">{paragraph}</p>
      </div>
    </div>
  );
}

export default DisCount;
