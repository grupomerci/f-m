import React from "react";

const WebsiteSection = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:py-28 flex justify-center">
      <div
        className="
        w-full max-w-[1200px]
        bg-white
        rounded-2xl
        overflow-hidden
        flex flex-col lg:flex-row
      "
      >
        {/* IMAGEM */}
        <div
          className="
          relative
          h-[260px] sm:h-[320px] md:h-[380px] lg:h-auto
          lg:w-[450px]
          overflow-hidden
          flex items-center justify-center
        "
        >
          <img
            src="/website/64 1.png"
            alt="Website"
            className="
              absolute
              w-[120%] max-w-none
              rotate-[-6deg]
              -top-10
              lg:-top-14
              lg:-left-10
            "
          />
        </div>

        {/* TEXTO */}
        <div
          className="
          flex-1
          px-6 sm:px-8 md:px-12 lg:px-16
          py-10 md:py-14 lg:py-16
          flex flex-col justify-center
          gap-5
        "
        >
          <h2
            className="
            text-black
            font-['Power_Grotesk']
            font-medium
            leading-tight
            text-3xl sm:text-4xl md:text-5xl
          "
          >
            Você também precisa de <br className="hidden sm:block" />
            um Website?
          </h2>

          <p
            className="
            text-black/70
            font-['Inter']
            font-light
            leading-relaxed
            text-base sm:text-lg
            max-w-[520px]
          "
          >
            Tenha também uma marca bem aplicada no território digital. Alavanque
            seu poder de interação com seus clientes através de um website.
          </p>

          <button
            className="
            w-fit
            px-6 py-3
            bg-blue-600
            text-white
            rounded-full
            hover:bg-blue-700
            transition
          "
          >
            Botão
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
