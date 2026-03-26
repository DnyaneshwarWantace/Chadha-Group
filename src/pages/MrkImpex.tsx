import { Home, ChevronRight, MessageCircle, Gauge, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MrkImpex = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Industrial Crankshafts", image: "/images/All Type of Crank Shafts.jpeg", description: "Precision-engineered industrial crankshafts for heavy machinery applications" },
    { name: "Mechanical Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG", description: "High-precision mechanical gears using advanced hobbing technology" },
    { name: "Hydraulic Cylinders", image: "/images/Hydraulic Cylinders.jpeg", description: "Custom hydraulic cylinders for industrial and automotive applications" },
  ];

  const machinery = [
    { name: "CNC Lathe Machines", image: "/images/mrk/CNC-lathe-machine.jpeg", description: "Swing Over Bed - Dia1600mm, Swing Over Slide - Dia2000mm, Total Length - 7500mm" },
    { name: "Vertical Machining Centre (KAFO3151)", image: "/images/mrk/VMC-Kafo.jpeg", description: "X-5000mm, Y-3000mm, Z-1700mm" },
    { name: "CNC Vertical Turning Lathe (TOS German)", image: "/images/mrk/Vertical-Turning-Lathe.jpeg", description: "Dia 2200mm, Z axis - 1600mm" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img 
          src="/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG" 
          alt="MRK Impex Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-amber-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-amber-500/10 border border-amber-400/30 rounded flex items-center justify-center">
                  <Gauge size={14} className="text-amber-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">MRK Impex Pvt. Ltd.</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <button onClick={() => navigate("/about")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">About</button>
              <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">Contact</button>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-20 sm:pt-24 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-600" />
              <span className="text-amber-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Est. 2008 · Bhiwadi</span>
            </div>
            <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.85] uppercase max-w-none drop-shadow-sm" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
              MRK IMPEX <span className="text-amber-600">PRIVATE LIMITED.</span>
            </h1>
            <p className="mt-10 text-gray-600 max-w-2xl text-sm sm:text-lg leading-relaxed border-l-[3px] border-amber-600/30 pl-6 font-medium mb-12">
              Largest manufacturing unit of Chadha Group featuring advanced CNC machining and precision manufacturing. Established in 2008, German-made machinery ensures highest quality standards in industrial component production.
            </p>

            {/* Precision Stats Bar */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-amber-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Largest Manufacturing Unit</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Scale</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-amber-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">German CNC Technology</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Advanced</span>
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
              Our <span className="text-amber-500">Products</span>
            </h2>
            <div className="h-1 w-12 bg-amber-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-amber-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-amber-500 transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => navigate("/mrk-impex/products")}
              className="btn-industrial-secondary border-amber-600/20 hover:border-amber-600 hover:text-amber-600"
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
              Machinery & <span className="text-amber-500">Equipment</span>
            </h2>
            <div className="h-1 w-12 bg-amber-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-amber-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-amber-500 transition-colors line-clamp-1">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => navigate("/mrk-impex/equipment")}
              className="btn-industrial-secondary border-amber-600/20 hover:border-amber-600 hover:text-amber-600"
            >
              View Facility <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-8 leading-none">
            SCALE-UP YOUR <span className="text-amber-600">OPERATIONS.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic border-x border-amber-600/20 px-8">
            "Over five decades of delivering mission-critical components to the heart of Global Industry."
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919810133182", "_blank")}
              className="btn-industrial-primary bg-amber-500 hover:bg-gray-900 hover:text-white text-zinc-800 font-bold shadow-amber-600/40"
            >
              <MessageCircle size={20} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919810133182")}
              className="btn-industrial-secondary border-amber-600/20 hover:border-amber-600 hover:text-amber-600"
            >
              <Phone size={20} /> CALL HEAD OFFICE
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- STANDARDIZED FOOTER ----------------- */}
      <footer className="bg-white border-t border-gray-200 py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 opacity-50">
            <Gauge size={16} className="text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">MRK IMPEX PVT. LTD.</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Chadha Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigate("/")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">Group Home</button>
            <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-slate-600 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MrkImpex;
