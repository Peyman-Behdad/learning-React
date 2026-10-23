function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => {
        // ستارهٔ کامل: شمارهٔ ستاره از امتیاز بیشتر نیست (مثلاً ستارهٔ 3 برای امتیاز 3.5)
        if (star <= rating) {
          return (
            <i
              key={star}
              className="ri-star-fill text-amber-300 text-lg mr-1"
            ></i>
          );
        }
        // نیم‌ستاره: امتیاز از ستارهٔ قبلی بیشتر است ولی به این ستاره نرسیده (مثلاً ستارهٔ 4 برای امتیاز 3.5)
        if (star - 1 < rating) {
          return (
            <i
              key={star}
              className="ri-star-half-fill text-amber-300 text-lg"
            ></i>
          );
        }
        // بقیهٔ ستاره‌ها نمایش داده نمی‌شوند (مثل قبل)
        return null;
      })}
    </div>
  );
}

export default StarRating;
