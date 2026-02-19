import React, { useState } from "react";
import { FiInfo, FiCheck } from "react-icons/fi";

const Pacotes = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "logo",
      price: "R$1.799,90",
      originalPrice: "R$ 2.499,90",
      features: ["Criação de logo", "Variação de logo"],
      color: "white",
      textColor: "text-Preto",
      buttonColor: "bg-blue-600",
      buttonText: "text-white",
      borderColor: "outline-blue-700",
    },
    {
      name: "Identidade básica",
      price: "R$2.799,90",
      originalPrice: "R$ 3.799,90",
      features: [
        "Tudo que tem no anterior",
        "Esquema de cor",
        "Tipografia",
        "Iconografia",
        "Grafismos Auxiliares",
      ],
      color: "bg-blue-700",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonText: "text-black",
      borderColor: "outline-white",
    },
    {
      name: "identidade avançada",
      price: "R$ 4.199,90",
      originalPrice: "R$ 5.999,90",
      features: [
        "Tudo que tem no anterior",
        {
          title: "Papelaria básica:",
          subtitle:
            "cartão de visita, assinatura de e-mail, papel timbrado, caneta, bloco de notas de logo",
        },
        "Avatar para redes sociais",
        "4 templates para feed",
        "4 templates para stories",
      ],
      color: "white",
      textColor: "text-Preto",
      buttonColor: "bg-blue-600",
      buttonText: "text-white",
      borderColor: "outline-blue-700",
    },
  ];

  const renderFeature = (feature, index) => {
    const title = typeof feature === "object" ? feature.title : feature;
    const subtitle = typeof feature === "object" ? feature.subtitle : null;

    return (
      <div
        key={index}
        className="self-stretch inline-flex justify-start items-center gap-3.5"
      >
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <FiCheck className="w-4 h-4 text-blue-700" />
        </div>
        <div className="flex flex-col">
          <div className="justify-start text-white text-lg font-light font-['Inter'] leading-7">
            {title}
          </div>
          {subtitle && (
            <div className="justify-start text-white text-[10px] font-light font-['Inter'] leading-4">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full px-0 md:px-12 lg:px-24 py-20 md:py-28 bg-[radial-gradient(ellipse_86.52%_86.52%_at_50.00%_83.88%,_#0038FF_0%,_#406AFF_0%,_white_100%)] inline-flex flex-col justify-center items-center gap-16">
      <header className="w-full max-w-[1400px] text-center max-md:flex justify-center items-center gap-4">
        <h1 className="text-blue-600 text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-light font-['Power_Grotesk'] lowercase leading-tight">
          nossos{" "}
        </h1>
        <h1 className="text-blue-600 text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold font-['Power_Grotesk'] leading-tight">
          pacotes
        </h1>
      </header>

      <div className="flex max-md:pb-16 flex-row md:flex-row justify-center items-start max-md:items-center gap-8 flex-wrap w-full max-w-[1400px] overflow-x-auto">
        {plans.map((plan, index) => (
          <article
            key={index}
            className="w-80 max-w-[320px] md:w-auto rounded-[20px] overflow-hidden shadow-2xl backdrop-blur-[3px] flex flex-col flex-shrink-0"
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            {/* HEADER */}
            <div
              className={`self-stretch p-6 flex flex-col items-center gap-5 ${
                index === 1 ? "bg-blue-700 text-white" : "bg-white text-black"
              }`}
            >
              <div className="self-stretch flex justify-end">
                <FiInfo className={`w-6 h-6 ${index === 1 ? 'text-current' : 'text-blue-600'}`} />
              </div>

              <h3 className="text-center text-xl font-light font-['Power_Grotesk']">
                {plan.name}
              </h3>

              <div className="w-72 flex flex-col items-center">
                <div className="text-4xl font-semibold font-['Power_Grotesk']">
                  {plan.price}
                </div>
                <div
                  className={`text-sm ${
                    index === 1 ? "text-blue-200" : "text-indigo-400"
                  }`}
                >
                  Preço normal {plan.originalPrice}
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-full font-medium font-['Inter'] transition ${
                  index === 1 ? "bg-white text-black" : "bg-blue-700 text-white"
                }`}
              >
                Saiba mais
              </button>
            </div>

            {/* FEATURES */}
            <div className="self-stretch px-6 py-6 flex flex-col gap-3 bg-white/40 backdrop-blur-md">
              {plan.features.map((feature, featureIndex) =>
                renderFeature(feature, featureIndex),
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pacotes;
