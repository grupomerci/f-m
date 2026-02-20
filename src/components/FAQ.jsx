"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);
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

    const element = document.getElementById("faq-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  const faqItems = [
    {
      question: "Pergunta 1?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    { question: "Pergunta 1?", answer: "" },
    { question: "Pergunta 1?", answer: "" },
    { question: "Pergunta 1?", answer: "" },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section id="faq-section" className="w-full bg-zinc-300 px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* TITLE */}
        <motion.h1 
          className="font-['Power_Grotesk'] leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="block text-black font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ficou com
          </motion.span>

          <motion.span 
            className="block text-black font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            alguma dúvida?
          </motion.span>
        </motion.h1>

        {/* FAQ LIST */}
        <motion.div 
          className="flex flex-col gap-8 md:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <motion.article 
                key={index} 
                className="border-b border-black pb-6"
                variants={{
                  hidden: { opacity: 0, y: 30, x: -50 },
                  visible: { opacity: 1, y: 0, x: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >

                {/* QUESTION */}
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.h2 
                    className="font-['Power_Grotesk'] text-black font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  >
                    {item.question}
                  </motion.h2>

                  {/* ARROW */}
                  <motion.span
                    className={`
                      text-2xl md:text-3xl transition-transform duration-300
                      ${isOpen ? "rotate-90" : "-rotate-45"}
                    `}
                    variants={{
                      hidden: { opacity: 0, rotate: -180 },
                      visible: { opacity: 1, rotate: isOpen ? 90 : -45 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* ANSWER */}
                <motion.div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}
                  `}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={isOpen ? controls : "hidden"}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                >
                  <motion.p 
                    className="text-black/70 font-['Inter'] font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-[720px]"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={isOpen ? controls : "hidden"}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;