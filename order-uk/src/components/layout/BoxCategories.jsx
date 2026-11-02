import { Swiper, SwiperSlide } from "swiper/react";
import PopularBox from "./PopularBox";

function BoxCategories({ categoriesItems, title, variant = "box" }) {
  const renderItem = (item) => (
    <PopularBox
      boxClassName={item.boxClassName}
      image={item.image}
      imageClassName={item.imageClassName}
      title={item.title}
      titleClassName={item.titleClassName}
      description={item.description}
      descriptionClassName={item.descriptionClassName}
    />
  );

  return (
    <div className="container mx-auto overflow-hidden px-2 md:px-0">
      <p className="lg:text-3xl text-xl font-bold">{title}</p>

      {variant === "swiper" ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={25}
          className="my-5 md:my-10"
        >
          {categoriesItems.map((item) => (
            <SwiperSlide key={item.id} className="md:w-50! w-45!">
              {renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="my-5 md:my-10 flex items-center gap-x-3 md:gap-x-0 gap-y-3 justify-center md:justify-between flex-wrap">
          {categoriesItems.map((item) => (
            <div key={item.id}>{renderItem(item)}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxCategories;
