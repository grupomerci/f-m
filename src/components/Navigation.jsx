import React from 'react';

const Navigation = () => {
  const navItems = ['work', 'about', 'services', 'results'];

  return (
    <nav className="py-12 w-screen flex items-center px-4">
      <div className="max-w-[1728px] w-full mx-auto inline-flex justify-between items-center">
        <img src="/vector.svg" alt="F&M Works" className="w-40 h-7" />
        
        <ul className="flex justify-start items-center gap-12 mt-1.5 max-lg:hidden">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item}`}
                className="px-2.5 py-[5px] flex justify-center items-center gap-2.5 hover:opacity-70 transition-opacity"
              >
                <span className="justify-center text-black text-lg font-normal font-['Helvetica'] uppercase leading-6">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
        
        <div className="px-2.5 py-[5px] flex justify-center items-center gap-2.5 mt-1.5">
          <span className="justify-center text-black text-lg font-normal font-['Helvetica'] uppercase leading-6">
            Navigation
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
