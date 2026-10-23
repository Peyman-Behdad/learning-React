import StarRating from "./StarRating";

function CustomersBox({ rating, title, checked, paragraph }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
      <div>
        <StarRating rating={rating} />
      </div>
      <div className="space-y-2">
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-lg">{title}</p>
          <span
            className={`text-green-600 text-xl ${checked ? "block" : "hidden"}`}
          >
            <i class="ri-checkbox-circle-fill"></i>
          </span>
        </div>
        <div className="w-80">
          <p className="text-sm text-gray-500/80">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomersBox;
