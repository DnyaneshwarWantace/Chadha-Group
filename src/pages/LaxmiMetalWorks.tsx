import { useState } from "react";
import { Home, ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Cog, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardImage = ({ image, images, name }: { image?: string; images?: string[]; name: string }) => {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const all = images && images.length > 0 ? images : [image!];
  const active = all[idx];
  return (
    <>
      <div onClick={(e) => { e.stopPropagation(); setOpen(true); }} className="absolute inset-0 bg-white flex items-center justify-center cursor-zoom-in p-3 group/img">
        <img src={active} alt={name} className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/img:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-zinc-700"><Maximize2 size={16} /></div>
        </div>
        {all.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === 0 ? all.length - 1 : p - 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-blue-600 pointer-events-auto"><ChevronLeft size={16} /></button>
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === all.length - 1 ? 0 : p + 1)); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-blue-600 pointer-events-auto"><ChevronRight size={16} /></button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/45 px-2.5 py-1 rounded-full z-10 pointer-events-none">
              {all.map((_, i) => <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white scale-110" : "bg-white/50"}`} />)}
            </div>
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-sm shadow-sm pointer-events-none">{idx + 1} / {all.length}</div>
          </>
        )}
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md">
          <button onClick={(e) => { e.stopPropagation(); setOpen(false); }} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-2 rounded-full z-[10000]"><X size={24} /></button>
          <div className="absolute top-4 left-6 pointer-events-none">
            <h4 className="text-lg font-bold tracking-tight uppercase text-white">{name}</h4>
            {all.length > 1 && <p className="text-xs text-white/60 mt-0.5 uppercase tracking-wider font-semibold">Unit {idx + 1} of {all.length}</p>}
          </div>
          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <img src={active} alt={name} className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
            {all.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === 0 ? all.length - 1 : p - 1)); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"><ChevronLeft size={28} /></button>
                <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === all.length - 1 ? 0 : p + 1)); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"><ChevronRight size={28} /></button>
              </>
            )}
          </div>
          <p className="text-white/40 text-xs mt-4 uppercase tracking-widest font-bold select-none">Click anywhere to close</p>
        </div>
      )}
    </>
  );
};

const LaxmiMetalWorks = () => {
  const navigate = useNavigate();

  const products: { name: string; image?: string; images?: string[]; description: string }[] = [
    { name: "All Type of Crank Shafts", image: "/images/laxmi/products/All Type of Crank Shafts.jpeg", description: "Precision-engineered crankshafts for various industrial applications" },
    { name: "Rolls", image: "/images/laxmi/products/Rolls.avif", description: "High-quality rolls for manufacturing and processing industries" },
    { name: "Gears", image: "/images/laxmi/products/Gears.JPG", description: "Precision gears manufactured using advanced hobbing technology" },
    { name: "Hydraulic Cylinders", image: "/images/laxmi/products/Hydraulic Cylinders.jpeg", description: "Custom hydraulic cylinders for heavy machinery applications" },
    { name: "Tie Rods", image: "/images/laxmi/products/Tie Rods.jpeg", description: "High-strength tie rods for structural applications" },
    { name: "Shafts", image: "/images/laxmi/products/Shafts.jpeg", description: "Precision shafts for various industrial machinery" },
    { name: "Chilled Iron Ram", image: "/images/laxmi/products/rChilled Iron Ram.webp", description: "Durable chilled iron rams for hydraulic applications" },
    { name: "Crane Wheels", image: "/images/laxmi/products/Crane Wheels.jpeg", description: "Heavy-duty crane wheels for material handling systems" },
    { name: "Die Forming Components", image: "/images/laxmi/products/Die Forming Components.jpeg", description: "Precision die forming components for manufacturing processes" },
  ];

  const machinery: { name: string; image?: string; images?: string[]; description: string }[] = [
    { name: "Conventional Lathe Machines", image: "/images/laxmi/equipment/Conventional Lathe Machines.JPG", description: "10+ units for precision turning operations" },
    { name: "Overhead Cranes", image: "/images/laxmi/equipment/Overhead Cranes.JPG", description: "Heavy lifting and material handling" },
    { name: "Shaper Machine", image: "/images/laxmi/equipment/Shaper Machine.jpeg", description: "Surface finishing and precision shaping" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-blue-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img 
          src="/images/laxmi/products/Industrial Manufacturing.jpg" 
          alt="Laxmi Metal Works Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-blue-500/10 border border-blue-400/30 rounded flex items-center justify-center">
                  <Cog size={14} className="text-blue-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Laxmi Metal Works</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <button 
                onClick={() => navigate("/about")}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="btn-industrial-primary bg-blue-600 hover:bg-blue-500 text-white h-8 px-4 shadow-blue-600/20"
              >
                <MessageCircle size={14} /> Contact
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-20 sm:pt-24 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-blue-600" />
              <span className="text-blue-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Est. 1968 · New Delhi</span>
            </div>
            <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.85] uppercase max-w-none drop-shadow-sm" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
              LAXMI METAL <span className="text-blue-600">WORKS.</span>
            </h1>
            <p className="mt-10 text-gray-600 max-w-2xl text-sm sm:text-lg leading-relaxed border-l-[3px] border-blue-600/30 pl-6 font-medium mb-12">
              Chadha Group's first unit established in 1968, specializes in precision engineering and is equipped with a variety of high-tech machines for quality manufacturing. Located in New Delhi with advanced machinery for high-quality manufacturing.
            </p>

            {/* Precision Stats Bar */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">50+ Years Experience</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Legacy</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-blue-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Advanced Machinery</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Technology</span>
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
              Our <span className="text-blue-600">Products</span>
            </h2>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-blue-600/40 transition-all duration-500 flex flex-col h-full rounded-none">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={p.image} images={p.images} name={p.name} />
                  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/laxmi-metal-works/products")}
              className="btn-industrial-secondary border-blue-600/20 hover:border-blue-600 hover:text-blue-600"
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
              Machinery <span className="text-blue-600">& Equipment</span>
            </h2>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.slice(0, 3).map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-blue-600/40 transition-all duration-500 flex flex-col h-full rounded-none">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={m.image} images={m.images} name={m.name} />
                  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/laxmi-metal-works/equipment")}
              className="btn-industrial-secondary border-blue-600/20 hover:border-blue-600 hover:text-blue-600"
            >
              View Facility <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-8 leading-none">
            SCALE-UP YOUR <span className="text-blue-600">OPERATIONS.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic border-x border-blue-600/20 px-8">
            "Over five decades of delivering mission-critical components to the heart of Global Industry."
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-blue-600 hover:bg-gray-900 shadow-blue-600/40"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")}
              className="btn-industrial-secondary border-blue-600/20 hover:border-blue-600 hover:text-blue-600"
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
            <Cog size={16} className="text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">LAXMI METAL WORKS</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Chadha Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigate("/")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Group Home</button>
            <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LaxmiMetalWorks;
