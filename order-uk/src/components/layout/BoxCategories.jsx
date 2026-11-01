import { Swiper, SwiperSlide } from "swiper/react";
import PopularBox from "./PopularBox";

function BoxCategories({ categoriesItems, title, swiper, box }) {
  return (
    <div className="container mx-auto overflow-hidden px-2 md:px-0">
      {box && (
        <>
          <div>
            <p className="lg:text-3xl text-xl font-bold">{title}</p>
          </div>
          <div className="my-5 md:my-10 flex items-center gap-x-3 md:gap-x-0 gap-y-3 justify-center md:justify-between flex-wrap">
            {categoriesItems.map((item) => (
              <PopularBox
                boxClassName={item.boxClssName}
                image={item.image}
                imageClassName={item.imageClassName}
                title={item.title}
                titleClassName={item.titleClassName}
                description={item.decription}
                descriptionClassName={item.decriptionClassName}
              />
            ))}
          </div>
        </>
      )}
      {swiper && (
        <>
          <div>
            <p className="lg:text-3xl text-xl font-bold">{title}</p>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={25}
            className="mySwiper my-5 md:my-10 "
          >
            {categoriesItems.map((item) => (
              <SwiperSlide key={item.id} className="md:w-50! w-45!">
                <PopularBox
                  boxClassName={item.boxClssName}
                  image={item.image}
                  imageClassName={item.imageClassName}
                  title={item.title}
                  titleClassName={item.titleClassName}
                  description={item.decription}
                  descriptionClassName={item.decriptionClassName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}

export default BoxCategories;
