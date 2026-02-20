import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
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

    const element = document.getElementById("footer-section");
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
    <footer id="footer-section" className="w-full bg-black px-6 md:px-12 lg:px-24 py-10 md:py-12">
      <motion.div 
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* LOGO */}
        <motion.img
          src="/vectorwhite.svg"
          alt="F&M Works"
          className="w-36 md:w-40 h-auto"
          variants={{
            hidden: { opacity: 0, x: -30, scale: 0.8 },
            visible: { opacity: 1, x: 0, scale: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* RIGHT */}
        <motion.div 
          className="flex flex-col items-center md:items-end gap-6"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          {/* SOCIAL */}
          <motion.div 
            className="flex items-center gap-5"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["/footer/Vector.svg", "/footer/Vector-1.svg", "/footer/Vector-2.svg"].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Social ${index + 1}`}
                className="w-9 h-9"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
                  visible: { opacity: 1, scale: 1, rotate: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>

          {/* COPYRIGHT */}
          <motion.p 
            className="text-white/80 text-sm text-center md:text-right"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            2024 (c) Designed by F&M Works
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;