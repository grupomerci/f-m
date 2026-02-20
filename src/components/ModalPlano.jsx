import React from "react";

const ModalPlano = ({ isOpen, onClose, planType }) => {
  if (!isOpen) return null;

  const titles = {
    basico: "básica",
    intermediario: "intermediária",
    avancado: "avançada",
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="w-full max-w-[1500px] max-h-[90vh] overflow-y-auto bg-[#F3F3F3] rounded-[40px]" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="bg-black text-white rounded-t-[40px] px-16 py-12 flex justify-between items-center">
          <h2 className="text-7xl font-bold lowercase font-['Power_Grotesk']">
            saiba mais
          </h2>

          <button onClick={onClose} className="text-2xl">✕</button>
        </div>

        {/* HERO */}
        <div className="px-16 pt-12 grid grid-cols-2 gap-16 items-start">

          <div>
            <h3 className="text-6xl font-bold text-blue-600 font-['Power_Grotesk']">
              ID <span className="underline">{titles[planType]}</span>
            </h3>

            <p className="mt-6 text-gray-700 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Non faucibus amet
              porttitor molestie nullam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <div>Criação de logotipo</div>
            <div>Grafismos Auxiliares</div>
            <div>Variações de logo</div>
            <div>Papelaria básica</div>
            <div>Colorcode</div>
            <div>Avatar para redes</div>
            <div>Tipografia</div>
            <div>4 templates p/ feed</div>
            <div>Iconografia</div>
            <div>4 templates p/ stories</div>
          </div>

        </div>

        {/* GRID PRINCIPAL */}
        <div className="px-16 py-12 grid grid-cols-2 gap-8">

          {/* LOGO */}
          <div className="bg-white rounded-3xl p-8 grid grid-cols-2 items-center gap-6">
            <div>
              <h4 className="text-2xl font-bold leading-tight">
                criação e variações de logotipo
              </h4>
              <p className="text-gray-600 mt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="h-44 bg-blue-600 rounded-2xl" />
          </div>

          {/* COLORCODE */}
          <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">
            <h4 className="text-2xl font-bold">colorcode</h4>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="grid grid-cols-4 h-16 rounded-xl overflow-hidden">
              <div className="bg-lime-200" />
              <div className="bg-lime-400" />
              <div className="bg-yellow-300" />
              <div className="bg-cyan-400" />
            </div>
          </div>

          {/* TIPOGRAFIA */}
          <div className="bg-white rounded-3xl p-8 grid grid-cols-2 items-center">
            <div className="text-purple-600 text-8xl font-bold leading-none">
              Aa<br/>Aa
            </div>
            <div>
              <h4 className="text-2xl font-bold">tipografia</h4>
              <p className="text-gray-600 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          {/* ICONOGRAFIA */}
          <div className="bg-white rounded-3xl p-8 grid grid-cols-2 items-center gap-6">
            <div>
              <h4 className="text-2xl font-bold">
                iconografia e grafismos auxiliares
              </h4>
              <p className="text-gray-600 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="h-44 bg-blue-600 rounded-2xl" />
          </div>

          {/* AVATAR */}
          <div className="bg-white rounded-3xl p-8 grid grid-cols-2 items-center gap-6">
            <div>
              <h4 className="text-2xl font-bold">
                avatar e templates p/ redes sociais
              </h4>
              <p className="text-gray-600 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="h-44 bg-gray-200 rounded-2xl" />
          </div>

          {/* PAPELARIA */}
          <div className="bg-white rounded-3xl p-8 grid grid-cols-2 items-center gap-6">
            <div className="h-44 bg-blue-600 rounded-2xl" />
            <div>
              <h4 className="text-2xl font-bold">papelaria</h4>
              <p className="text-gray-600 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ModalPlano;