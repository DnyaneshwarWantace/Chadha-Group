import { Home, ChevronRight, MessageCircle, Car, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AftAutomotive = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Brake Shoes for 2&3 Wheelers", image: "/images/automotive_manufacturingassembly_axle_assembly.JPG", description: "High-quality brake shoes designed for 2 and 3 wheeler vehicles" },
    { name: "Disc Pads", image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG", description: "Precision-engineered disc brake pads for optimal stopping performance" },
    { name: "Clutch Plates", image: "/images/pressingforming_hydraulic_press_machine.JPG", description: "Durable clutch plates for smooth power transmission in vehicles" },
  ];

  const machinery = [
    { name: "Pressure Die Casting Machines", image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG", description: "3 units for precision casting operations" },
    { name: "Industrial Furnaces", image: "/images/heat_treatment__surface_treatment_industrial_oven_or_baking_furnace.JPG", description: "3 units for metal melting and heating" },
    { name: "Forming Hydraulic Press", image: "/images/pressingforming_hydraulic_press_machine.JPG", description: "5 units for final forming operations" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-slate-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img 
          src="/images/automotive_manufacturingassembly_axle_assembly.JPG" 
          alt="AFT Automotive Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-slate-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-slate-500/10 border border-slate-400/30 rounded flex items-center justify-center">
                  <Car size={14} className="text-slate-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">AFT Automotive</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <button onClick={() => navigate("/about")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-slate-600 transition-colors">About</button>
              <button 
                onClick={() => navigate("/contact")}
                className="btn-industrial-primary bg-slate-600 hover:bg-slate-500 text-white h-8 px-4 shadow-slate-600/20"
              >
                <MessageCircle size={14} /> Contact
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-20 sm:pt-24 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-slate-600" />
              <span className="text-slate-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Est. 2019 · Bhiwadi</span>
            </div>
            <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.85] uppercase max-w-none drop-shadow-sm" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
              AFT <span className="text-slate-600">AUTOMOTIVE.</span>
            </h1>
            <p className="mt-10 text-gray-600 max-w-2xl text-sm sm:text-lg leading-relaxed border-l-[3px] border-slate-600/30 pl-6 font-medium mb-12">
              Specialized division of Chadha Group focused on automotive components and brake systems. Established in 2019, located in Bhiwadi with advanced manufacturing capabilities for 2 & 3 wheeler industries.
            </p>

            {/* Precision Stats Bar */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Automotive Manufacturing</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Sector</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Safety Systems</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Expertise</span>
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
              Our <span className="text-slate-600">Products</span>
            </h2>
            <div className="h-1 w-12 bg-slate-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-slate-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-slate-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/aft-automotive/products")}
              className="btn-industrial-secondary border-slate-600/20 hover:border-slate-600 hover:text-slate-600"
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
              Machinery & <span className="text-slate-600">Equipment</span>
            </h2>
            <div className="h-1 w-12 bg-slate-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-slate-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-slate-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/aft-automotive/equipment")}
              className="btn-industrial-secondary border-slate-600/20 hover:border-slate-600 hover:text-slate-600"
            >
              View Facility <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>


      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-8 leading-none">
            SCALE-UP YOUR <span className="text-slate-600">OPERATIONS.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic border-x border-slate-600/20 px-8">
            "Over five decades of delivering mission-critical components to the heart of Global Industry."
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-slate-600 hover:bg-gray-900 shadow-slate-600/40"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")}
              className="btn-industrial-secondary border-slate-600/20 hover:border-slate-800 hover:text-zinc-800"
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
            <Car size={16} className="text-slate-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">AFT AUTOMOTIVE</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Chadha Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigate("/")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-slate-600 transition-colors">Group Home</button>
            <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-slate-600 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AftAutomotive;
