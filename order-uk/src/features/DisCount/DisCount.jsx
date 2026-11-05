import { CirclePlus } from "lucide-react";

function DisCount({
  mainBoxClassName,
  image,
  badgeText,
  badgeTextClassName,
  parentBadgeClassName,
  textParent,
  title,
  titleClassName,
  description,
  descriptionClassName,
  buttonText,
  buttonClassName,
  secondTextParent,
  secondTitle,
  secondTitleClassName,
  secondDescription,
  secondDescriptionClassName,
  parentAddItemClassName,
  addItemClassName,
}) {
  return (
    <>
      <div
        className={`${mainBoxClassName} bg-cover bg-center rounded-xl relative px-8 py-5 flex items-end overflow-hidden shadow cursor-pointer`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${parentBadgeClassName} absolute`}>
          <span className={`${badgeTextClassName}`}>{badgeText}</span>
        </div>
        <div className={`${textParent}`}>
          <p className={`${titleClassName} text-orange-400`}>{title}</p>
          <p className={`${descriptionClassName} text-white`}>{description}</p>
          {buttonText && (
            <button className={`${buttonClassName}`}>{buttonText}</button>
          )}
        </div>
        {addItemClassName && (
          <div className={`${parentAddItemClassName} absolute`}>
            <CirclePlus className={`${addItemClassName}`} size={70} />
          </div>
        )}
      </div>
      <div>
        <div className={`${secondTextParent}`}>
          <p className={`${secondTitleClassName} text-orange-400`}>
            {secondTitle}
          </p>
          <p className={`${secondDescriptionClassName} text-black`}>
            {secondDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default DisCount;
