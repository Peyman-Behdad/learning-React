function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star) => {
        if (star === Math.floor(rating) + 1 && rating % 1 !== 0) {
          return (
            <i
              key={star}
              className="ri-star-half-fill text-amber-300 text-lg"
            ></i>
          );
        }
        if (star <= rating) {
          return (
            <i
              key={star}
              className="ri-star-fill text-amber-300 text-lg mr-1"
            ></i>
          );
        }
      })}
    </div>
  );
}

export default StarRating;
