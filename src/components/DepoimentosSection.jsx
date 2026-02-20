"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const DepoimentosSection = () => {
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

    const element = document.getElementById("depoimentos-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  const depoimentos = [
    {
      titulo: "Lorem ipsum dolor",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      nome: "Nome Sobrenome",
      cargo: "Cargo",
    },
    {
      titulo: "Lorem ipsum dolor",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      nome: "Nome Sobrenome",
      cargo: "Cargo",
    },
    {
      titulo: "Lorem ipsum dolor",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      nome: "Nome Sobrenome",
      cargo: "Cargo",
    },
  ];

  return (
    <section id="depoimentos-section" className="w-full px-2 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">

        {/* TITLE */}
        <motion.h2 
          className="text-center font-['Power_Grotesk'] leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="text-black font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            como é{" "}
          </motion.span>
          <motion.span 
            className="text-black font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            trabalhar <br className="hidden sm:block" />
            com a gente?
          </motion.span>
        </motion.h2>

        {/* CAROUSEL */}
        <motion.div 
          style={{ maxWidth: "92.5vw" }} 
          className="flex items-center justify-center h-[420px] w-full"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={"auto"}
            grabCursor
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets'
            }}
            autoplay={{ delay: 4000 }}
            centeredSlides
            centeredSlidesBounds
            className="overflow-visible w-full"
            style={{ 
              height: "100%",
              "--swiper-spacing": "50px",
              "--swiper-pagination-bottom": "-20px"
            }}
            breakpoints={{
              320: { spaceBetween: 20 },
              640: { spaceBetween: 35 },
              768: { spaceBetween: 50 }
            }}
          >
          {depoimentos.map((depoimento, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto !flex items-center justify-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div 
                className="bg-neutral-200 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[420px] w-80 sm:w-96"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >

                {/* CONTENT */}
                <motion.div 
                  className="space-y-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <motion.h3 
                    className="text-blue-600 font-['Power_Grotesk'] font-light text-2xl sm:text-3xl md:text-4xl leading-tight"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  >
                    {depoimento.titulo}
                  </motion.h3>

                  <motion.p 
                    className="text-black/70 font-['Inter'] font-light text-base sm:text-lg leading-relaxed"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  >
                    {depoimento.texto}
                  </motion.p>
                </motion.div>

                {/* FOOTER */}
                <motion.div 
                  className="flex items-center justify-between mt-10"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                >
                  <div>
                    <motion.p 
                      className="text-black/70 font-semibold text-base sm:text-lg"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    >
                      {depoimento.nome}
                    </motion.p>
                    <motion.p 
                      className="text-black/60 text-sm sm:text-base"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 0.3, delay: 1.0 + (index * 0.1) }}
                    >
                      {depoimento.cargo}
                    </motion.p>
                  </div>

                  <motion.div 
                    className="w-14 h-14 rounded-full bg-stone-900"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        </motion.div>
        
        <style jsx>{`
          :global(.swiper-pagination) {
            bottom: -40px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default DepoimentosSection;