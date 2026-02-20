import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiInfo, FiCheck } from "react-icons/fi";
import ModalPlano from './ModalPlano';

const Pacotes = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
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

    const element = document.getElementById("pacotes-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  const openModal = (planType) => {
    setSelectedPlan(planType);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan('');
  };

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
    <section id="pacotes-section" className="w-full px-0 md:px-12 lg:px-24 py-20 md:py-28 bg-[radial-gradient(ellipse_86.52%_86.52%_at_50.00%_83.88%,_#0038FF_0%,_#406AFF_0%,_white_100%)] inline-flex flex-col justify-center items-center gap-16">
      <motion.header 
        className="w-full max-w-[1400px] text-center max-md:flex justify-center items-center gap-4"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-blue-600 text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-light font-['Power_Grotesk'] lowercase leading-tight"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          nossos{" "}
        </motion.h1>
        <motion.h1 
          className="text-blue-600 text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold font-['Power_Grotesk'] leading-tight"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          pacotes
        </motion.h1>
      </motion.header>

      <motion.div 
        className="flex max-md:pb-16 overflow-y-hidden flex-row md:flex-row justify-center items-start max-md:items-center gap-8 flex-wrap w-full max-w-[1400px] overflow-x-auto"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {plans.map((plan, index) => (
          <motion.article
            key={index}
            className="w-80 max-w-[320px] md:w-auto rounded-[20px] overflow-hidden shadow-2xl backdrop-blur-[3px] flex flex-col flex-shrink-0"
            onMouseEnter={() => setHoveredPlan(index)}
            onMouseLeave={() => setHoveredPlan(null)}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9, borderRadius: "0px" },
              visible: { opacity: 1, y: 0, scale: 1, borderRadius: "20px" }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4 + (index * 0.15) }}
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

              <motion.button
                onClick={() => {
                  if (index === 0) openModal('basico');
                  else if (index === 1) openModal('intermediario');
                  else if (index === 2) openModal('avancado');
                }}
                className={`w-full py-3 rounded-full font-medium font-['Inter'] transition ${
                  index === 1 ? "bg-white text-black" : "bg-blue-700 text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba mais
              </motion.button>
            </div>

            {/* FEATURES */}
            <div className="self-stretch px-6 py-6 flex flex-col gap-3 bg-white/40 backdrop-blur-md">
              {plan.features.map((feature, featureIndex) =>
                <div key={featureIndex}>
                  {renderFeature(feature, featureIndex)}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
      
      <ModalPlano isOpen={modalOpen} onClose={closeModal} planType={selectedPlan} />
    </section>
  );
};

export default Pacotes;
