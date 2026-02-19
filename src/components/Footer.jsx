import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black px-6 md:px-12 lg:px-24 py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        {/* LOGO */}
        <img
          src="/vectorwhite.svg"
          alt="F&M Works"
          className="w-36 md:w-40 h-auto"
        />

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-6">

          {/* SOCIAL */}
          <div className="flex items-center gap-5">
            <img src="/footer/Vector.svg" alt="Facebook" className="w-9 h-9" />
            <img src="/footer/Vector-1.svg" alt="Instagram" className="w-9 h-9" />
            <img src="/footer/Vector-2.svg" alt="LinkedIn" className="w-9 h-9" />
          </div>

          {/* COPYRIGHT */}
          <p className="text-white/80 text-sm text-center md:text-right">
            2024 (c) Designed by F&M Works
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;