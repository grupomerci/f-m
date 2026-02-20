import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const WebsiteSection = () => {
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

    const element = document.getElementById("website-section");
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
    <section id="website-section" className="w-full bg-black py-20 px-4 md:py-28 flex justify-center">
      <motion.div
        className="
        w-full max-w-[1200px]
        bg-white
        rounded-2xl
        overflow-hidden
        flex flex-col lg:flex-row
      "
        variants={{
          hidden: { opacity: 0, scale: 0.95, borderRadius: "0px" },
          visible: { opacity: 1, scale: 1, borderRadius: "16px" }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* IMAGEM */}
        <motion.div
          className="
          relative
          h-[260px] sm:h-[320px] md:h-[380px] lg:h-auto
          lg:w-[450px]
          overflow-hidden
          flex items-center justify-center
        "
          variants={{
            hidden: { opacity: 0, x: -50, rotate: 0 },
            visible: { opacity: 1, x: 0, rotate: -6 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
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
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          className="
          flex-1
          px-6 sm:px-8 md:px-12 lg:px-16
          py-10 md:py-14 lg:py-16
          flex flex-col justify-center
          gap-5
        "
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="
            text-black
            font-['Power_Grotesk']
            font-medium
            leading-tight
            text-3xl sm:text-4xl md:text-5xl
          "
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Você também precisa de <br className="hidden sm:block" />
            um Website?
          </motion.h2>

          <motion.p
            className="
            text-black/70
            font-['Inter']
            font-light
            leading-relaxed
            text-base sm:text-lg
            max-w-[520px]
          "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tenha também uma marca bem aplicada no território digital. Alavanque
            seu poder de interação com seus clientes através de um website.
          </motion.p>

          <motion.button
            className="
            w-fit
            px-6 py-3
            bg-blue-600
            text-white
            rounded-full
            hover:bg-blue-700
            transition
          "
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Botão
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WebsiteSection;
