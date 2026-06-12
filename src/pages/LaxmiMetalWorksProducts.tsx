import { useState } from "react";
import { Home, ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Cog, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardImage = ({ image, images, name }: { image?: string; images?: string[]; name: string }) => {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const all = images && images.length > 0 ? images : [image!];
  const active = all[idx];
  return (
    <>
      <div onClick={(e) => { e.stopPropagation(); setOpen(true); }} className="absolute inset-0 bg-white flex items-center justify-center cursor-zoom-in p-3 group/img">
        <img src={active} alt={name} loading="lazy" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/img:scale-105" />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-zinc-700"><Maximize2 size={16} /></div>
        </div>
        {all.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === 0 ? all.length - 1 : p - 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-blue-600 pointer-events-auto"><ChevronLeft size={16} /></button>
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === all.length - 1 ? 0 : p + 1)); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-blue-600 pointer-events-auto"><ChevronRight size={16} /></button>
          </>
        )}
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md">
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-[10000]"><X size={24} /></button>
          <div className="absolute top-4 left-6 text-white text-left max-w-[75%]">
            <h4 className="text-lg font-bold uppercase">{name}</h4>
            {all.length > 1 && <p className="text-xs text-white/60 mt-0.5 uppercase">Variant {idx + 1} of {all.length}</p>}
          </div>
          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center select-none">
            <img src={active} alt={name} loading="lazy" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
            {all.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === 0 ? all.length - 1 : p - 1)); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"><ChevronLeft size={28} /></button>
                <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === all.length - 1 ? 0 : p + 1)); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"><ChevronRight size={28} /></button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const LaxmiMetalWorksProducts = () => {
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

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-blue-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/machiningturning_lathe_machine_heavyduty_lathe (2).jpg" alt="Industrial Manufacturing" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#f8f9fa]/90 to-[#f8f9fa]" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/laxmi-metal-works")} className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Laxmi Metal Works</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-blue-500/10 border border-blue-400/30 rounded flex items-center justify-center">
                  <Cog size={14} className="text-blue-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Products</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 max-w-7xl mx-auto w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center sm:justify-start">
            <div className="h-[1px] w-8 sm:w-16 bg-blue-600" />
            <span className="text-blue-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Laxmi Metal Works · Est. 1968</span>
            <div className="h-[1px] w-8 sm:w-16 bg-blue-600 sm:hidden" />
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,5rem)] uppercase max-w-4xl drop-shadow-sm mx-auto sm:mx-0">
            Precision <br /> Manufactured.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-blue-600/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Explore our specialized range of {products.length} precision-engineered components designed for the most demanding heavy industry requirements.
          </div>
        </div>
      </div>

      {/* ----------------- PRODUCTS GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-blue-600/40 transition-all duration-500 flex flex-col h-full rounded-none">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={p.image} images={p.images} name={p.name} />
                  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 pointer-events-none z-10">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Item 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-1">
                    {p.description}
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Laxmi Metal</span>
                    <button className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group/btn">
                      Enquire <ChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Scale Your <span className="text-blue-600">Production</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Interested in our products? Contact us to discuss your specific requirements and get custom technical quotes for your facility.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919810133182", "_blank")} 
              className="btn-industrial-primary bg-blue-600 hover:bg-gray-900 shadow-blue-600/30"
            >
              <MessageCircle size={16} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919810133182")} 
              className="btn-industrial-secondary border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              <Phone size={16} /> CALL NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaxmiMetalWorksProducts;
