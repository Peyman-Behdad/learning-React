import StarRating from "./StarRating";

function ProductBox({
  image,
  title,
  score,
  totalScore,
  price,
  rating,
  discount,
  percentage,
}) {
  return (
    <div className="space-y-4 cursor-pointer">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="space-y-0.5">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center gap-2">
          <span>
            <StarRating rating={rating} />
          </span>
          <span className="text-sm">
            {score}/<span className="text-gray-400">{totalScore}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">{price}</p>
          {discount && (
            <>
              <p className="text-2xl font-semibold line-through text-gray-400">
                {discount}
              </p>
              <span className="text-xs bg-red-200/50 text-red-500 px-2 py-1 rounded-full">
                {percentage}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
