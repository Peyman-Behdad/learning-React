import DisCount from "../../../features/DisCount/DisCount";
import First from "../../../assets/images/withUs/first.svg";
import Second from "../../../assets/images/withUs/second.svg";

const withUsItems = [
  {
    id: 1,
    mainBoxClassName: "h-90 py-7 px-15",
    image: First,
    parentBadgeClassName: "top-2 left-8",
    badgeText: "Earn more with lower fees",
    badgeTextClassName:
      "bg-white text-black text-xs sm:text-sm font-bold px-7 py-4 rounded-b-xl",
    title: "Signup as a business",
    description: "Partner with us",
    descriptionClassName: "text-4xl font-bold",
    buttonText: "Get Started",
    buttonClassName: "bg-orange-400 text-white px-11 py-2.5 rounded-full mt-8",
  },
  {
    id: 2,
    mainBoxClassName: "h-90 py-7 px-15",
    image: Second,
    parentBadgeClassName: "top-2 left-8",
    badgeText: "Avail exclusive perks",
    badgeTextClassName:
      "bg-white text-black text-xs sm:text-sm font-bold px-10 py-4 rounded-b-xl",
    title: "Signup as a rider",
    description: "Ride with us",
    descriptionClassName: "text-4xl font-bold",
    buttonText: "Get Started",
    buttonClassName: "bg-orange-400 text-white px-11 py-2.5 rounded-full mt-8",
  },
];

function WithUs() {
  return (
    <div className="mx-auto container">
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-10">
        {withUsItems.map((item) => (
          <div key={item.id} className="flex-1">
            <DisCount
              mainBoxClassName={item.mainBoxClassName}
              image={item.image}
              parentBadgeClassName={item.parentBadgeClassName}
              badgeText={item.badgeText}
              badgeTextClassName={item.badgeTextClassName}
              title={item.title}
              titleClassName={item.titleClassName}
              description={item.description}
              descriptionClassName={item.descriptionClassName}
              buttonText={item.buttonText}
              buttonClassName={item.buttonClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithUs;
