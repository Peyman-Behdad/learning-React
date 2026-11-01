function PopularBox({
  boxClassName,
  image,
  imageClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
}) {
  return (
    <div
      className={`${boxClassName} cursor-pointer group hover:shadow-xl shadow-gray-200 duration-150 overflow-hidden`}
    >
      <div>
        <img
          src={image}
          className={`${imageClassName} group-hover:scale-108 duration-150`}
          alt=""
        />
      </div>
      <div className="px-5 py-2">
        <p className={`${titleClassName}`}>{title}</p>
        <p className={`${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
}

export default PopularBox;
