"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  {
    id: 4,
    src: "/portfolio/Mask group-3.png",
    width: "w-[378px] max-md:w-[280px] max-sm:w-[220px]",
    height: "h-[389px] max-md:h-[290px] max-sm:h-[220px]",
  },
  {
    id: 5,
    src: "/portfolio/Mask group-4.png",
    width: "w-[476px] max-md:w-[350px] max-sm:w-[280px]",
    height: "h-[603px] max-md:h-[445px] max-sm:h-[350px]",
  },
  {
    id: 6,
    src: "/portfolio/Mask group-5.png",
    width: "w-[476px] max-md:w-[350px] max-sm:w-[280px]",
    height: "h-[603px] max-md:h-[445px] max-sm:h-[350px]",
  },
  {
    id: 1,
    src: "/portfolio/Mask group.png",
    width: "w-[461px] max-md:w-[340px] max-sm:w-[270px]",
    height: "h-[491px] max-md:h-[365px] max-sm:h-[290px]",
  },
  {
    id: 3,
    src: "/portfolio/Mask group-2.png",
    width: "w-[308px] max-md:w-[230px] max-sm:w-[180px]",
    height: "h-[307px] max-md:h-[230px] max-sm:h-[180px]",
  },
  {
    id: 2,
    src: "/portfolio/Mask group-1.png",
    width: "w-[461px] max-md:w-[340px] max-sm:w-[270px]",
    height: "h-[491px] max-md:h-[365px] max-sm:h-[290px]",
  },
];

export default function Portfolio() {
  return (
    <section className="w-full bg-black py-24 overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-[1728px] mx-auto px-2 flex flex-col gap-16">
        {/* TITLE */}
        <div className="text-center">
          <h2
            className="text-white font-['Power_Grotesk'] text-3xl md:text-5xl"
            style={{ lineHeight: "1.5" }}
          >
            <span className="max-md:hidden">confira essas </span>identidades visuais
            <br />
            <span className="text-6xl max-md:text-4xl max-sm:text-3xl">feitas pela </span>
            <span className="font-medium bg-white rounded-lg text-blue-600 px-2 pt-1 text-6xl max-md:text-4xl max-sm:text-3xl max-md:bg-transparent max-md:px-0 max-md:text-white">
              f&m works
            </span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div style={{ maxWidth: "92.5vw" }} className="flex mx-auto items-center justify-center h-[620px] max-md:h-[460px] w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={"auto"}
            grabCursor
            className="overflow-visible w-full"
            style={{ 
              height: "100%",
              "--swiper-spacing": "50px"
            }}
            breakpoints={{
              320: { spaceBetween: 20 },
              640: { spaceBetween: 35 },
              768: { spaceBetween: 50 }
            }}
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-auto !flex items-center justify-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className={`${item.width} ${item.height} rounded-3xl overflow-hidden`}
                >
                  <img
                    src={item.src}
                    alt="portfolio"
                    className="w-full h-full  rounded-3xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
