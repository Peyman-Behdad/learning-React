import DisCount from "../../../features/DisCount/DisCount";
import First from "../../../assets/images/withUs/first.svg";
import Second from "../../../assets/images/withUs/second.svg";

const withUsItems = [
  {
    id: 1,
    boxClassName: "h-90",
    image: First,
    title: "Signup as a business",
    paragraph: "Partner with us",
    badgeText: "Earn more with lower fees",
    badgeTextClassName: "bg-white text-black! px-7",
    parentbadgeTextClassName: "right-85 top-2!",
    button: "Get Started",
    buttonClassName: "px-10",
  },
  {
    id: 2,
    boxClassName: "h-90",
    image: Second,
    title: "Signup as a rider",
    paragraph: "Ride with us",
    badgeText: "Earn more with lower fees",
    badgeTextClassName: "bg-white text-black! px-7",
    parentbadgeTextClassName: "right-85 top-2!",
    button: "Get Started",
    buttonClassName: "px-10",
  },
];

function WithUs() {
  return (
    <div className="mx-auto container">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
        {withUsItems.map((item) => (
          <div className="">
            <DisCount
              key={item.id}
              boxClassName={item.boxClassName}
              image={item.image}
              title={item.title}
              paragraph={item.paragraph}
              badgeText={item.badgeText}
              badgeTextClassName={item.badgeTextClassName}
              parentbadgeTextClassName={item.parentbadgeTextClassName}
              button={item.button}
              buttonClassName={item.buttonClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithUs;
