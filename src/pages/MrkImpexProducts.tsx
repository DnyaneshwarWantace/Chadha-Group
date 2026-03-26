import { Home, ChevronRight, MessageCircle, Gauge, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MrkImpexProducts = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Industrial Crankshafts", image: "/images/All Type of Crank Shafts.jpeg", description: "Precision-engineered industrial crankshafts for heavy machinery applications" },
    { name: "Mechanical Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG", description: "High-precision mechanical gears using advanced hobbing technology" },
    { name: "Hydraulic Cylinders", image: "/images/Hydraulic Cylinders.jpeg", description: "Custom hydraulic cylinders for industrial and automotive applications" },
    { name: "Shaft for Presses", image: "/images/Shafts.jpeg", description: "Specialized shafts designed for hydraulic and mechanical press operations" },
    { name: "Manifold for Hydraulic Presses", image: "/images/moldingpressing_hydraulicmechanical_press_machine.JPG", description: "Precision hydraulic manifolds for efficient fluid distribution" },
    { name: "Die Block and Tie Rods", image: "/images/Tie Rods.jpeg", description: "Heavy-duty die blocks and tie rods for mechanical power presses" },
    { name: "Sheet Metal Components", image: "/images/cutting_cnc_plasma_cutting_machine.JPG", description: "Precision sheet metal components using advanced CNC plasma cutting" },
    { name: "Cast Iron Mould Manufacturing", image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG", description: "High-quality cast iron moulds for die casting and manufacturing" },
    { name: "Forming Tools", image: "/images/Die Forming Components.jpeg", description: "Specialized forming tools for precision metal forming and molding" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/All Type of Crank Shafts.jpeg" alt="Precision Engineering" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#f8f9fa]/90 to-[#f8f9fa]" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/mrk-impex")} className="flex items-center gap-1.5 text-gray-500 hover:text-amber-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">MRK Impex</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-amber-500/10 border border-amber-400/30 rounded flex items-center justify-center">
                  <Gauge size={14} className="text-amber-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Products</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 max-w-7xl mx-auto w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center sm:justify-start">
            <div className="h-[1px] w-8 sm:w-16 bg-amber-500" />
            <span className="text-amber-500 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">MRK Impex Pvt. Ltd. · Est. 2008</span>
            <div className="h-[1px] w-8 sm:w-16 bg-amber-500 sm:hidden" />
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,5rem)] uppercase max-w-4xl drop-shadow-sm mx-auto sm:mx-0">
            Industrial <br /> Precision.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-amber-600/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Precision-machined products engineered using German CNC technology. Our {products.length} heavy-duty product lines ensure industrial reliability.
          </div>
        </div>
      </div>

      {/* ----------------- PRODUCTS GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-amber-600/40 transition-all duration-500 flex flex-col h-full rounded-none overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Product 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-amber-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">MRK Impex</span>
                    <button className="text-amber-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group/btn">
                      Request <ChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            German-Tech <span className="text-amber-600">Solutions</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Our specialized engineering team at MRK Impex is ready to discuss your high-precision manufacturing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919810133182", "_blank")} 
              className="btn-industrial-primary bg-amber-500 hover:bg-gray-900 shadow-amber-500/30 text-zinc-800 hover:text-white"
            >
              <MessageCircle size={16} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919810133182")} 
              className="btn-industrial-secondary border-gray-300 hover:border-amber-600 hover:text-amber-600"
            >
              <Phone size={16} /> CALL NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MrkImpexProducts;
