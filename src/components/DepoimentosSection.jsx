"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const DepoimentosSection = () => {
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
    <section className="w-full px-2 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">

        {/* TITLE */}
        <h2 className="text-center font-['Power_Grotesk'] leading-tight">
          <span className="text-black font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            como é{" "}
          </span>
          <span className="text-black font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            trabalhar <br className="hidden sm:block" />
            com a gente?
          </span>
        </h2>

        {/* CAROUSEL */}
        <div style={{ maxWidth: "92.5vw" }} className="flex items-center justify-center h-[420px] w-full">
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
              <div className="bg-neutral-200 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[420px] w-80 sm:w-96">

                {/* CONTENT */}
                <div className="space-y-6">
                  <h3 className="text-blue-600 font-['Power_Grotesk'] font-light
                    text-2xl sm:text-3xl md:text-4xl leading-tight">
                    {depoimento.titulo}
                  </h3>

                  <p className="text-black/70 font-['Inter'] font-light
                    text-base sm:text-lg leading-relaxed">
                    {depoimento.texto}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-10">
                  <div>
                    <p className="text-black/70 font-semibold text-base sm:text-lg">
                      {depoimento.nome}
                    </p>
                    <p className="text-black/60 text-sm sm:text-base">
                      {depoimento.cargo}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-stone-900" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        
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