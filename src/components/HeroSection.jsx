import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
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

    const element = document.getElementById("hero-section");
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
    <section id="hero-section" className="w-full px-24 py-16 flex flex-col items-center gap-16 max-[1250px]:px-8 max-md:py-10 max-md:px-4">
      {/* CONTAINER */}
      <div className="w-full max-w-[1728px] max-[1250px]:max-w-full flex flex-col gap-10 max-md:gap-7">
        {/* TITLE */}
        <motion.h1 
          className="font-['Power_Grotesk'] lowercase leading-[0.95] tracking-tight text-[140px] max-[1430px]:text-[120px] max-[1250px]:text-[100px] max-md:text-[70px] max-sm:text-[50px]"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="block text-black font-normal"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            construimos marcas
          </motion.span>
          <motion.span 
            className="block text-blue-600 font-semibold"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            impactantes
          </motion.span>
        </motion.h1>

        {/* SUB AREA */}
        <motion.div 
          className="flex flex-col items-center ml-80 max-[1645px]:ml-0 max-[1645px]:items-start lg:flex-row gap-8 lg:gap-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* BADGE */}
          <motion.div 
            className="px-6 py-4 bg-zinc-100/90 rounded-full border border-blue-600 max-lg:hidden"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span className="text-blue-600 text-lg font-light font-['Power_Grotesk'] whitespace-nowrap">
              +30 DE MARCAS CRIADAS
            </span>
          </motion.div>

          {/* TEXT */}
          <motion.p
            className="max-w-[830px] max-[1645px]:max-w-none text-black text-base lg:text-lg font-light font-['Inter']"
            style={{ lineHeight: "1.3" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Em um mundo onde a primeira impressão é crucial, uma identidade
            visual forte se torna a chave para o sucesso da sua marca.{" "}
            <motion.span 
              className="font-medium"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Vamos juntos construir uma marca que se destaca em meio à
              concorrência?
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* VIDEO */}
        <motion.div 
          className="w-full max-w-[1728px] h-[420px] lg:h-[533px] bg-black rounded-t-[40px] max-md:h-[305px]"
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

      {/* LOGOS */}
        <motion.div 
          className="w-full max-w-[1728px] opacity-70 flex flex-wrap justify-between items-center gap-6 md:gap-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
        {/* MARISA */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <img
            src="/hero/marisa.svg"
            alt="Marisa"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </motion.div>

        {/* AMARO */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 0.95 }}
        >
          <img
            src="/hero/amaro.svg"
            alt="Amaro"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </motion.div>

        {/* LICOR 43 */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <img
            src="/hero/licor43.svg"
            alt="Licor 43"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </motion.div>

        {/* AMBEV */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 1.05 }}
        >
          <img
            src="/hero/ambev.svg"
            alt="Ambev"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </motion.div>

        {/* FUNDAÇÃO LEMANN */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 1.1 }}
        >
          <img
            src="/hero/lemann.svg"
            alt="Fundação Lemann"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </motion.div>

        {/* CULTURA INGLESA */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 1.15 }}
        >
          <img
            src="/hero/cultura-inglesa.svg"
            alt="Cultura Inglesa"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </motion.div>

        {/* FESTIVAL FEIRA PRETA */}
        <motion.div 
          className="flex-1 min-w-[120px] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          <img
            src="/hero/festival.svg"
            alt="Festival Feira Preta"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </motion.div>
        </motion.div>
    </section>
  );
};

export default HeroSection;
