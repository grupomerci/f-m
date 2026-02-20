"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("portfolio-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  return (
    <section id="portfolio-section" className="w-full bg-black py-24 overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-[1728px] mx-auto px-2 flex flex-col gap-16">
        {/* TITLE */}
        <motion.div 
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-white font-['Power_Grotesk'] text-3xl md:text-5xl"
            style={{ lineHeight: "1.5" }}
          >
            <motion.span 
              className="max-md:hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              confira essas 
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              identidades visuais
            </motion.span>
            <br />
            <motion.span 
              className="text-6xl max-md:text-4xl max-sm:text-3xl"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              feitas pela 
            </motion.span>
            <motion.span 
              className="font-medium bg-white rounded-lg text-blue-600 px-2 pt-1 text-6xl max-md:text-4xl max-sm:text-3xl max-md:bg-transparent max-md:px-0 max-md:text-white"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              f&m works
            </motion.span>
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div 
          style={{ maxWidth: "92.5vw" }} 
          className="flex mx-auto items-center justify-center h-[620px] max-md:h-[460px] w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
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
            {items.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className="!w-auto !flex items-center justify-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  className={`${item.width} ${item.height} rounded-3xl overflow-hidden`}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.08) }}
                >
                  <motion.img
                    src={item.src}
                    alt="portfolio"
                    className="w-full h-full rounded-3xl"
                    variants={{
                      hidden: { opacity: 0, scale: 1.1 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.08) }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
