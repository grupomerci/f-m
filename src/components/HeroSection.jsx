import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-24 py-16 flex flex-col items-center gap-16 max-[1250px]:px-8 max-md:py-10 max-md:px-4">
      
      {/* CONTAINER */}
      <div className="w-full max-w-[1728px] max-[1250px]:max-w-full flex flex-col gap-10 max-md:gap-7">

        {/* TITLE */}
        <h1 className="font-['Power_Grotesk'] lowercase leading-[0.95] tracking-tight text-[140px] max-[1430px]:text-[120px] max-[1250px]:text-[100px] max-md:text-[70px] max-sm:text-[50px]">
          <span className="block text-black font-normal">
            construimos marcas
          </span>
          <span className="block text-blue-600 font-semibold">
            impactantes
          </span>
        </h1>

        {/* SUB AREA */}
        <div className="flex flex-col items-center ml-80 max-[1645px]:ml-0 max-[1645px]:items-start lg:flex-row gap-8 lg:gap-12">

          {/* BADGE */}
          <div className="px-6 py-4 bg-zinc-100/90 rounded-full border border-blue-600 max-lg:hidden">
            <span className="text-blue-600 text-lg font-light font-['Power_Grotesk'] whitespace-nowrap">
              +30 DE MARCAS CRIADAS
            </span>
          </div>

          {/* TEXT */}
          <p className="max-w-[830px] max-[1645px]:max-w-none text-black text-base lg:text-lg font-light font-['Inter']" style={{ lineHeight: '1.3' }}>
            Em um mundo onde a primeira impressão é crucial, uma identidade visual
            forte se torna a chave para o sucesso da sua marca.{" "}
            <span className="font-medium">
              Vamos juntos construir uma marca que se destaca em meio à concorrência?
            </span>
          </p>
        </div>
      </div>

      {/* VIDEO */}
      <div className="w-full max-w-[1728px] h-[420px] lg:h-[533px] bg-black rounded-t-[40px] max-md:h-[305px]" />

      {/* LOGOS */}
      <div className="w-full max-w-[1728px] opacity-70 flex flex-wrap justify-between items-center gap-4 sm:gap-6 md:gap-8">
        {/* logos reais */}
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/g30.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/Group 4.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/Group 5.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/image 154.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/image 156.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/image 160.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <img src="/hero/marisa.svg" alt="Cliente logo" className="h-10 w-auto max-w-full object-contain" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
