import { useState } from "react";
import { ChevronRight, Maximize2, X, MessageCircle, Wrench, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardImage = ({ image, name }: { image: string; name: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={(e) => { e.stopPropagation(); setOpen(true); }} className="absolute inset-0 bg-white flex items-center justify-center cursor-zoom-in p-3 group/img">
        <img src={image} alt={name} className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/img:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-zinc-700">
            <Maximize2 size={16} />
          </div>
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md">
          <button onClick={(e) => { e.stopPropagation(); setOpen(false); }} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-[10000]">
            <X size={24} />
          </button>
          <div className="absolute top-4 left-6 pointer-events-none">
            <h4 className="text-lg font-bold tracking-tight uppercase text-white">{name}</h4>
          </div>
          <div className="max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <img src={image} alt={name} className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
          <p className="text-white/40 text-xs mt-4 uppercase tracking-widest font-bold select-none">Click anywhere to close</p>
        </div>
      )}
    </>
  );
};

const EssEssIndustriesEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    { name: "VMC (Vertical Machining Centre)", image: "/images/ess-ess/equipment/Vertical Machining Centre.JPG", description: "3 units for precision machining differential components" },
    { name: "CNC Machines", image: "/images/ess-ess/equipment/CNC.png", description: "4 units for automated operations" },
    { name: "Robotic Welding Machines", image: "/images/ess-ess/equipment/Robotic Welding Machines.jpeg", description: "Automated welding for precision assembly" },
    { name: "SPM Machines", image: "/images/ess-ess/equipment/SPM.png", description: "15+ specialized purpose machines" },
    { name: "Laser Cutting Machine", image: "/images/ess-ess/equipment/Laser Cutting Machine.JPG", description: "Precision material cutting with laser technology" },
    { name: "Induction Hardening Machine", image: "/images/ess-ess/equipment/Induction Hardening Machine.jpeg", description: "Heat treatment for durability and precision" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-zinc-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/Robotic Welding Machines.jpeg" alt="High-Tech Equipment" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#f8f9fa]/90 to-[#f8f9fa]" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/ess-ess-industries")} className="flex items-center gap-1.5 text-gray-500 hover:text-zinc-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Ess Ess Industries</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-zinc-500/10 border border-zinc-400/30 rounded flex items-center justify-center">
                  <Wrench size={14} className="text-zinc-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Equipment</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 max-w-7xl mx-auto w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center sm:justify-start">
            <div className="h-[1px] w-8 sm:w-16 bg-zinc-600" />
            <span className="text-zinc-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Ess Ess Industries · Est. 2022</span>
            <div className="h-[1px] w-8 sm:w-16 bg-zinc-600 sm:hidden" />
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,5rem)] uppercase max-w-4xl drop-shadow-sm mx-auto sm:mx-0">
            Machined <br /> Precision.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-zinc-600/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Equipped with {machinery.length} high-precision assets including VMC, CNC, and Robotic welding for superior drivetrain components.
          </div>
        </div>
      </div>

      {/* ----------------- EQUIPMENT GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {machinery.map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-zinc-600/40 transition-all duration-500 flex flex-col h-full rounded-none">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={m.image} name={m.name} />
                  <div className="absolute top-4 left-4 pointer-events-none z-10">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Asset 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-zinc-600 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-1">
                    {m.description}
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tech Asset</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
                      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Operational</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Advanced <span className="text-zinc-600">Manufacturing</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Leveraging robotic automation and VMC technology to deliver precision at scale. Experience the Ess Ess standard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")} 
              className="btn-industrial-primary bg-zinc-600 hover:bg-gray-900 shadow-zinc-600/30"
            >
              <MessageCircle size={16} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")} 
              className="btn-industrial-secondary border-gray-300 hover:border-zinc-600 hover:text-zinc-600"
            >
              <Phone size={16} /> CALL NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EssEssIndustriesEquipment;
