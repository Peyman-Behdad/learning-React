function AboutUsCard({ title, image, description }) {
  return (
    <div
      className={`bg-gray-300 py-4 px-2 rounded-lg flex flex-col items-center justify-center gap-y-3 h-53 xl:h-60 w-60`}
    >
      <p className="font-extrabold text-sm">{title}</p>
      <img className="w-20 xl:w-25" src={image} alt="" />
      <p className="text-xs xl:text-sm text-center">{description}</p>
    </div>
  );
}

export default AboutUsCard;
