"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

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

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section className="w-full bg-zinc-300 px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* TITLE */}
        <h1 className="font-['Power_Grotesk'] leading-tight">
          <span className="block text-black font-light
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            ficou com
          </span>

          <span className="block text-black font-bold
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            alguma dúvida?
          </span>
        </h1>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-8 md:gap-12">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <article key={index} className="border-b border-black pb-6">

                {/* QUESTION */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <h2 className="font-['Power_Grotesk'] text-black font-light
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                    {item.question}
                  </h2>

                  {/* ARROW */}
                  <span
                    className={`
                      text-2xl md:text-3xl transition-transform duration-300
                      ${isOpen ? "rotate-90" : "-rotate-45"}
                    `}
                  >
                    →
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-black/70 font-['Inter'] font-light
                    text-base sm:text-lg md:text-xl leading-relaxed max-w-[720px]">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;