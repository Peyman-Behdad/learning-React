import StarRating from "./StarRating";

// Created once at module level, not on every render.
const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function ProductBox({ image, title, price, oldPrice, rating }) {
  // Derived data: calculated from the prices, not stored in the data files.
  const hasDiscount = oldPrice > price;
  const discountPercent = hasDiscount
    ? Math.round((1 - price / oldPrice) * 100)
    : 0;

  return (
    <article className="space-y-4">
      <img
        src={image}
        alt={title}
        width={295}
        height={298}
        loading="lazy"
        className="w-full h-auto"
      />
      <div className="space-y-0.5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm">
            {rating}/<span className="text-gray-400">5</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">{priceFormatter.format(price)}</p>
          {hasDiscount && (
            <>
              <p className="text-2xl font-semibold line-through text-gray-400">
                {priceFormatter.format(oldPrice)}
              </p>
              <span className="text-xs bg-red-200/50 text-red-500 px-2 py-1 rounded-full">
                -{discountPercent}%
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductBox;
