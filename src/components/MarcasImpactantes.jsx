import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MarcasImpactantes = () => {
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

    const element = document.getElementById("marcas-impactantes");
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
    <section id="marcas-impactantes" className="px-24 flex flex-col justify-start items-center gap-12">
      <div className="flex flex-col justify-start items-start gap-9">
        <motion.header 
          className="inline-flex justify-start items-center gap-2.5"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="justify-start"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="text-black text-9xl font-light font-['Power_Grotesk'] lowercase leading-[123px]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              construimos marcas 
            </motion.span>
            <motion.span 
              className="text-blue-600 text-9xl font-bold font-['Power_Grotesk'] lowercase leading-[123px]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              impactantes
            </motion.span>
          </motion.h1>
        </motion.header>
        
        <motion.div 
          className="pl-44 inline-flex justify-start items-center gap-9"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="p-5 bg-zinc-100/90 rounded-full shadow-[0px_0px_89.9000015258789px_-4px_rgba(4,10,16,0.15)] outline outline-1 outline-offset-[-1px] outline-blue-700 inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -180 },
              visible: { opacity: 1, scale: 1, rotate: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="justify-start text-blue-700 text-xl font-light font-['Power_Grotesk'] leading-7"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              +30 DE MARCAS CRIADAS
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center gap-2.5"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.p 
              className="flex-1 justify-start"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.span 
                className="text-black text-xl font-light font-['Inter'] leading-7"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                Em um mundo onde a primeira impressão é crucial, uma identidade visual forte se torna a chave para o sucesso da sua marca. 
              </motion.span>
              <motion.span 
                className="text-black text-xl font-medium font-['Inter'] leading-7"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                Vamos juntos construir uma marca que se destaca em meio a concorrência?
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="h-[533px] relative bg-black rounded-tl-[50px] rounded-tr-[50px] overflow-hidden"
        variants={{
          hidden: { opacity: 0, scale: 0.9, borderRadius: "0px" },
          visible: { opacity: 1, scale: 1, borderRadius: "50px" }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 1.1 }}
      />
      
      <motion.div 
        className="opacity-70 mix-blend-difference inline-flex justify-start items-center gap-16"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 0.7, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 1.2 }}
        aria-label="Logos de clientes"
      >
        {[...Array(30)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-white"
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -180 },
              visible: { opacity: 1, scale: 1, rotate: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 1.3 + (index * 0.02) }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MarcasImpactantes;
