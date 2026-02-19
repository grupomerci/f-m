import React from "react";

const MotivosIdentidade = () => {
  const motivos = [
    {
      title: "Reconhecimento \nde Marca",
      description:
        "Ter uma marca reconhecida resulta em maior confiança do consumidor, melhor percepção de valor e aumento das vendas.",
      size: "w-40 h-40",
      icon: "/motivos/Vector(1).svg",
      alt: "Reconhecimento de Marca"
    },
    {
      title: "Consistência \nProfissional",
      description:
        "Mantenha uma aparência coerente em todas as plataformas e pontos de contato, transmitindo profissionalismo e confiança",
      size: "w-36 h-36",
      icon: "/motivos/Vector(2).svg",
      alt: "Consistência Profissional"
    },
    {
      title: "Conexão\nEmocional",
      description:
        "Isso aumenta a lealdade do cliente, fortalece a resiliência da marca e eleva o valor percebido dos produtos.",
      size: "w-40 h-40",
      icon: "/motivos/Vector(3).svg",
      alt: "Conexão Emocional"
    },
  ];

  return (
    <div className="self-stretch p-24 inline-flex flex-col justify-start items-start gap-12 overflow-hidden max-[1250px]:px-8 max-md:px-4">
      <div
        data-tipo="Título"
        className="inline-flex justify-center items-center gap-2.5"
      >
        <div className="justify-start text-7xl font-['Power_Grotesk'] leading-[76px] max-[1250px]:text-6xl max-lg:text-5xl max-md:text-4xl">
          <span class="text-black font-light">
            3 motivos para ter uma{" "}
          </span>
          <span class="text-black font-normal underline">
            boa
          </span>
          <span class="text-black font-bold">
            {" "}
            <br />
          </span>
          <span class="text-Azul font-semibold underline text-blue-600">
            identidade visual
          </span>
        </div>
      </div>
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8 max-[1250px]:gap-8 max-md:gap-3">
        {motivos.map((item, index) => (
          <div key={index} className="inline-flex flex-col justify-start items-start gap-20 max-[1250px]:gap-12 max-md:gap-6">
            <img 
              src={item.icon} 
              alt={item.alt} 
              className={`${item.size} max-[1250px]:w-32 max-[1250px]:h-32 max-md:w-24 max-md:h-24`} 
            />
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div
                data-tipo="Corpo"
                className="self-stretch inline-flex justify-start items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-black/70 text-4xl font-light font-['Power_Grotesk'] leading-10 max-[1250px]:text-3xl max-sm:text-2xl">
                  {item.title}
                </div>
              </div>
              <div
                data-tipo="Corpo"
                className="self-stretch inline-flex justify-start items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-black/70 text-lg font-light font-['Inter'] leading-5 max-[1250px]:text-base max-sm:text-sm break-words">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotivosIdentidade;
