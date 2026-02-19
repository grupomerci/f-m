import React from "react";

export default function SobreSection() {
  const teamMembers = [
    "/sobre/Ellipse 1.png",
    "/sobre/Ellipse 2.png",
    "/sobre/Ellipse 6.png",
    "/sobre/Ellipse 7.png",
    "/sobre/Ellipse 15.png",
    "/sobre/Ellipse 13.png",
  ];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-black px-6 md:px-12 lg:px-24 py-20 md:py-28 max-md:px-4">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-['Power_Grotesk'] lowercase font-light text-7xl leading-tight max-md:text-6xl">
              sobre a
            </h1>

            <img
              src="/sobre/Vector(4).svg"
              alt="F&M Works"
              className="w-full max-w-[650px] h-auto sm:max-w-[140px]"
            />
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-white font-['Power_Grotesk']
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              multidisciplinar
            </p>
            <p className="text-white font-['Power_Grotesk']
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
              &amp; plural
            </p>
          </div>
        </div>
      </section>

      {/* TEAM + TEXT */}
      <section className="w-full bg-[#E3E3E3] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* TEAM IMAGES */}
          <div className="flex flex-col items-center lg:items-start">

            {/* ROW 1 */}
            <div className="flex items-center justify-center">
              {teamMembers.slice(0, 3).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="team"
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full ${
                    i !== 0 ? "lg:-ml-3" : ""
                  }`}
                />
              ))}
            </div>

            {/* ROW 2 */}
            <div className="flex items-center justify-center lg:mt-4 lg:ml-[100px]">
              {teamMembers.slice(3, 6).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="team"
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full ${
                    i !== 0 ? "lg:-ml-3" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <p className="text-[#1A1A1A] font-['Inter'] font-light
            text-sm sm:text-lg md:text-xl lg:text-2xl
            leading-relaxed max-w-[720px] text-left">
            A f&amp;m works está desde 2019 comprometida com responsabilidade
            social. A agência busca criar um ambiente de alavancagem,
            impulsionando a capacitação e promovendo a diversidade. Com uma
            equipe multicultural, realizamos trabalhos em design para solucionar
            desafios e tecer oportunidades de negócio.
          </p>
        </div>
      </section>
    </>
  );
}