import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Carousel() {
  return (
    <div className="w-full bg-emerald-900 rounded-md border md:px-6 lg:px-12 pt-12 md:pb-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12 items-center">
        <div className="space-y-3 text-center md:text-start lg:px-12 px-2">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-extrabold text-white"
          >
            Helping each other can make world better
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-200 md:text-md text-sm"
          >
            We Seek out world changers and difference makers around the
            globe,and equip them to fulfill their unique purpose.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <NavLink
              to={"/campaigns/dhaka"}
              data-aos="zoom-out-down"
              data-aos-delay="100"
              className="btn btn-sm md:btn-md bg-emerald-700 text-white md:px-7 text-xs border hover:bg-emerald-800"
            >
              Donate now
            </NavLink>
            <NavLink
              to={"/help"}
              className="btn btn-sm bg-emerald-200 md:btn-md md:px-7 text-xs border hover:bg-slate-700 hover:text-white"
            >
              Our Workflow
            </NavLink>
          </div>
        </div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="object-cover rounded-md lg:max-h-96 w-full"
                src="./carusol-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-cover rounded-md lg:max-h-96 w-full"
                src="./carusol-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:max-h-96 rounded-md object-cover w-full"
                src="./carusol-3.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
