import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SobreSection() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          controls1.start("visible");
        } else {
          setIsVisible1(false);
          controls1.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          controls2.start("visible");
        } else {
          setIsVisible2(false);
          controls2.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const element1 = document.getElementById("sobre-hero");
    const element2 = document.getElementById("sobre-team");
    
    if (element1) observer1.observe(element1);
    if (element2) observer2.observe(element2);

    return () => {
      if (element1) observer1.unobserve(element1);
      if (element2) observer2.unobserve(element2);
    };
  }, [controls1, controls2]);

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
      <section id="sobre-hero" className="w-full bg-black px-6 md:px-12 lg:px-24 py-20 md:py-28 max-md:px-4">
        <motion.div 
          className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={controls1}
          transition={{ duration: 0.6 }}
        >

          {/* LEFT */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls1}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1 
              className="text-white font-['Power_Grotesk'] lowercase font-light text-7xl leading-tight max-md:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls1}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              sobre a
            </motion.h1>

            <motion.img
              src="/sobre/Vector(4).svg"
              alt="F&M Works"
              className="w-full max-w-[650px] h-auto sm:max-w-[140px]"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              initial="hidden"
              animate={controls1}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            className="text-right"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls1}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p 
              className="text-white font-['Power_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls1}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              multidisciplinar
            </motion.p>
            <motion.p 
              className="text-white font-['Power_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls1}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              &amp; plural
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* TEAM + TEXT */}
      <section id="sobre-team" className="w-full bg-[#E3E3E3] py-16 md:py-24">
        <motion.div 
          className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={controls2}
          transition={{ duration: 0.6 }}
        >

          {/* TEAM IMAGES */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls2}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            {/* ROW 1 */}
            <motion.div 
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls2}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {teamMembers.slice(0, 3).map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt="team"
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full ${
                    i !== 0 ? "lg:-ml-3" : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  initial="hidden"
                  animate={controls2}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                />
              ))}
            </motion.div>

            {/* ROW 2 */}
            <motion.div 
              className="flex items-center justify-center lg:mt-4 lg:ml-[100px]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls2}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {teamMembers.slice(3, 6).map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt="team"
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full ${
                    i !== 0 ? "lg:-ml-3" : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  initial="hidden"
                  animate={controls2}
                  transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.p 
            className="text-[#1A1A1A] font-['Inter'] font-light text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-[720px] text-left"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls2}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A f&amp;m works está desde 2019 comprometida com responsabilidade
            social. A agência busca criar um ambiente de alavancagem,
            impulsionando a capacitação e promovendo a diversidade. Com uma
            equipe multicultural, realizamos trabalhos em design para solucionar
            desafios e tecer oportunidades de negócio.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}