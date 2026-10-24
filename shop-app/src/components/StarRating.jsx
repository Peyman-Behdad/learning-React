const STARS = [1, 2, 3, 4, 5];

// Returns the icon class for one star, or null when the star should not be shown.
function getStarIcon(star, rating) {
  // Full star: the star's number is not greater than the rating (star 3 for rating 3.5)
  if (star <= rating) return "ri-star-fill";
  // Half star: the rating passed the previous star but not this one (star 4 for rating 3.5)
  if (star - 1 < rating) return "ri-star-half-fill";
  // Empty stars are not displayed.
  return null;
}

function StarRating({ rating }) {
  return (
    // The icons are decorative, so the label gives screen readers the real meaning.
    <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex gap-1">
      {STARS.map((star) => {
        const icon = getStarIcon(star, rating);
        if (!icon) return null;
        return (
          <i
            key={star}
            aria-hidden="true"
            className={`${icon} text-amber-300 text-lg`}
          ></i>
        );
      })}
    </div>
  );
}

export default StarRating;
