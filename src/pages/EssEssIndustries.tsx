import { useState } from "react";
import { ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Wrench, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardImage = ({ image, name }: { image: string; name: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={(e) => { e.stopPropagation(); setOpen(true); }}
        className="absolute inset-0 bg-white flex items-center justify-center cursor-zoom-in p-3 group/img"
      >
        <img src={image} alt={name} loading="lazy" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/img:scale-105" />
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
            <img src={image} alt={name} loading="lazy" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
          <p className="text-white/40 text-xs mt-4 uppercase tracking-widest font-bold select-none">Click anywhere to close</p>
        </div>
      )}
    </>
  );
};

const EssEssIndustries = () => {
  const navigate = useNavigate();

  const products = [
    { name: 'Differential 33" Size', image: '/images/ess-ess/products/DIFFERENTIAL 33" SIZE.png', description: "Precision differential components for 33-inch applications" },
    { name: 'Differential 35" Size', image: '/images/ess-ess/products/DIFFERENTIAL 35" SIZE.png', description: "High-quality differential assemblies for 35-inch systems" },
    { name: 'Differential 38" Size', image: '/images/ess-ess/products/DIFFERENTIAL 38" SIZE.png', description: "Advanced differential components for 38-inch applications" },
    { name: 'Differential 42" Size', image: '/images/ess-ess/products/DIFFERENTIAL 42" SIZE.png', description: "Heavy-duty differential systems for 42-inch industrial vehicles" },
    { name: 'Handle T - Casting Version', image: "/images/ess-ess/products/HANDLE T_CASTING_VERSION.png", description: "Cast T-handle component — without lock mechanism" },
    { name: 'Handle T - Forging Version', image: "/images/ess-ess/products/HANDLE_T_FORGING_VERSION_WITH_LOCK.png", description: "Forged T-handle component — with lock mechanism" },
    { name: 'Neck Pipe Components', image: "/images/ess-ess/products/NECK_PIPE.jpg", description: "Precision neck pipe components for fluid transfer systems" },
  ];

  const machinery = [
    { name: "VMC (Vertical Machining Centre)", image: "/images/ess-ess/equipment/Vertical Machining Centre.JPG", description: "3 units for precision machining differential components" },
    { name: "CNC Machines", image: "/images/ess-ess/equipment/CNC.png", description: "4 units for automated operations" },
    { name: "Robotic Welding Machines", image: "/images/ess-ess/equipment/Robotic Welding Machines.jpeg", description: "Automated welding for precision assembly" },
    { name: "SPM Machines", image: "/images/ess-ess/equipment/SPM.png", description: "15+ specialized purpose machines for custom operations" },
    { name: "Laser Cutting Machine", image: "/images/ess-ess/equipment/Laser Cutting Machine.JPG", description: "Precision material cutting with laser technology" },
    { name: "Induction Hardening Machine", image: "/images/ess-ess/equipment/Induction Hardening Machine.jpeg", description: "Heat treatment for durability and precision" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-zinc-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img 
          src="/images/Robotic Welding Machines.jpeg" 
          alt="Ess Ess Industries Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-zinc-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-zinc-500/10 border border-zinc-400/30 rounded flex items-center justify-center">
                  <Wrench size={14} className="text-zinc-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Ess Ess Industries</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <button onClick={() => navigate("/about")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-zinc-600 transition-colors">About</button>
              <button 
                onClick={() => navigate("/contact")}
                className="btn-industrial-primary bg-zinc-700 hover:bg-zinc-600 text-white h-8 px-4 shadow-zinc-600/20"
              >
                <MessageCircle size={14} /> Contact
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-20 sm:pt-24 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-zinc-600" />
              <span className="text-zinc-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Est. 2022 · Bhiwadi</span>
            </div>
            <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.85] uppercase max-w-none drop-shadow-sm" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
              ESS ESS <span className="text-zinc-600">INDUSTRIES.</span>
            </h1>
            <p className="mt-10 text-gray-600 max-w-2xl text-sm sm:text-lg leading-relaxed border-l-[3px] border-zinc-600/30 pl-6 font-medium mb-12">
              Established in 2022, is a specialized unit of the Chadha Group focusing on precision machining and assembly of drivetrain components, differential axles for three-wheelers, rugged rear axles, independent rear suspension systems, and handle brackets for both two-wheelers and three-wheelers.
            </p>

            {/* Precision Stats Bar */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Precision Manufacturing</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Focus</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Advanced Technology</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Capabilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- PRODUCTS SHOWCASE ----------------- */}
      <section className="py-12 sm:py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left mb-12">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter leading-none text-zinc-800 mb-4">
              Our <span className="text-zinc-600">Products</span>
            </h2>
            <div className="h-1 w-12 bg-zinc-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-zinc-600/40 transition-all duration-500 flex flex-col">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={p.image} name={p.name} />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-zinc-600 transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => navigate("/ess-ess-industries/products")}
              className="btn-industrial-secondary border-zinc-600/20 hover:border-zinc-600 hover:text-zinc-800"
            >
              View All Products <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- MACHINERY SHOWCASE ----------------- */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left mb-12">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter leading-none text-zinc-800 mb-4">
              Machinery <span className="text-zinc-600">& Equipment</span>
            </h2>
            <div className="h-1 w-12 bg-zinc-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.slice(0, 3).map((m) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-zinc-600/40 transition-all duration-500 flex flex-col">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={m.image} name={m.name} />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-zinc-600 transition-colors line-clamp-1">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => navigate("/ess-ess-industries/equipment")}
              className="btn-industrial-secondary border-zinc-600/20 hover:border-zinc-600 hover:text-zinc-800"
            >
              View Facility <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>


      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-8 leading-none">
            SCALE-UP YOUR <span className="text-zinc-600">OPERATIONS.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic border-x border-zinc-600/20 px-8">
            "Over five decades of delivering mission-critical components to the heart of Global Industry."
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-zinc-700 hover:bg-gray-900 shadow-zinc-600/40"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")}
              className="btn-industrial-secondary border-zinc-600/20 hover:border-zinc-800 hover:text-zinc-800"
            >
              <Phone size={18} /> Call Factory
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- STANDARDIZED FOOTER ----------------- */}
      <footer className="bg-white border-t border-gray-200 py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 opacity-50">
            <Wrench size={16} className="text-zinc-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">ESS ESS INDUSTRIES</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Chadha Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigate("/")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-zinc-600 transition-colors">Group Home</button>
            <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-zinc-600 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default EssEssIndustries;
