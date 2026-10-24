import StarRating from "./StarRating";

function CustomersBox({ rating, name, isVerified, review }) {
  return (
    <figure className="h-full border border-gray-200 rounded-2xl p-5 space-y-2">
      <StarRating rating={rating} />
      <figcaption className="flex gap-1 items-center">
        <p className="font-semibold text-lg">{name}</p>
        {isVerified && (
          <span className="text-green-600 text-xl">
            <i className="ri-checkbox-circle-fill" aria-hidden="true"></i>
            <span className="sr-only">Verified customer</span>
          </span>
        )}
      </figcaption>
      <blockquote className="text-sm text-gray-500/80">
        &ldquo;{review}&rdquo;
      </blockquote>
    </figure>
  );
}

export default CustomersBox;
