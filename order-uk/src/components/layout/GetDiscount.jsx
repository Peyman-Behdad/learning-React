import {
  ArrowDown,
  Check,
  CircleStar,
  MapPin,
  ShoppingBasket,
} from "lucide-react";

function GetDiscount({
  itemCount = 23,
  total = 79.89,
  currency = "GBP",
  onOpen,
}) {
  return (
    <div className="mx-auto container hidden xl:block">
      <div className="flex justify-between items-center text-sm overflow-hidden bg-[#FAFAFA] border-b border-l border-r border-gray-300 rounded-bl-2xl rounded-br-2xl pl-7">
        <div className="flex items-center gap-x-4">
          <CircleStar size={27} color="gold" />
          <p>
            Get 5% off your first order,{" "}
            <a
              href="#"
              className="text-orange-400 underline font-bold cursor-pointer"
            >
              Promo:ORDER5
            </a>
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <MapPin />
          <p>
            Regent Street, <span>A4</span>, A4201, London
          </p>
          <a href="#" className="text-orange-400 underline">
            Change Location
          </a>
        </div>
        {/* <div className="bg-green-700 px-10 flex items-center text-white gap-x-5">
          <div className="border-r py-4">
            <ShoppingBasket size={45} color="white" />
          </div>
          <div className="border-r py-4">
            <p>23 Items</p>
          </div>
          <div className="border-r">
            <p>GBP 79,89</p>
          </div>
          <div>
            <CircleArrowDown size={45} color="white" />
          </div>
        </div> */}
        <div className="inline-flex h-16 items-stretch divide-x divide-white/20 overflow-hidden rounded-bl-xl bg-green-700 text-sm font-semibold text-white">
          {/* Basket icon with check badge */}
          <div className="flex items-center px-5">
            <div className="relative">
              <ShoppingBasket className="size-9" strokeWidth={1.8} />
              <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-white ring-2 ring-[#0a7b3c]">
                <Check className="size-3 text-[#0a7b3c]" strokeWidth={4} />
              </span>
            </div>
          </div>

          {/* Item count */}
          <div className="flex items-center whitespace-nowrap px-5">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </div>

          {/* Price */}
          <div className="flex items-center whitespace-nowrap px-5">
            {currency} {total.toFixed(2)}
          </div>

          {/* Arrow button */}
          <button
            type="button"
            onClick={onOpen}
            aria-label="Open cart"
            className="flex items-center px-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a7b3c]">
              <ArrowDown className="size-5" strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetDiscount;
