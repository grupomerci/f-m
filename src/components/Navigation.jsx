import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navigation = () => {
  const navItems = ['work', 'about', 'services', 'results'];

  return (
    <motion.nav 
      className="py-12 w-screen flex items-center px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1728px] w-full mx-auto inline-flex justify-between items-center">
        <motion.img 
          src="/vector.svg" 
          alt="F&M Works" 
          className="w-40 h-7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        />
        
        <motion.ul 
          className="flex justify-start items-center gap-12 mt-1.5 max-lg:hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
            >
              <motion.a 
                href={`#${item}`}
                className="px-2.5 py-[5px] flex justify-center items-center gap-2.5 hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="justify-center text-black text-lg font-normal font-['Helvetica'] uppercase leading-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  {item}
                </motion.span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          className="px-2.5 py-[5px] flex justify-center items-center gap-2.5 mt-1.5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="justify-center text-black text-lg font-normal font-['Helvetica'] uppercase leading-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            Navigation
          </motion.span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
