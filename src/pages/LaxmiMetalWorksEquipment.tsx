import { Home, ChevronRight, MessageCircle, Cog, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LaxmiMetalWorksEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    { name: "Conventional Lathe Machines", image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG", description: "10+ units for precision turning operations" },
    { name: "Overhead Cranes", image: "/images/lifting_and_material_handling_overhead_crane_also_known_as_a_bridge_crane.JPG", description: "Heavy lifting and material handling" },
    { name: "Shaper Machine", image: "/images/Shaper Machine.jpeg", description: "Surface finishing and precision shaping" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-blue-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG" alt="Advanced Equipment" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
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
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Equipment</span>
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
            Advanced <br /> Machinery.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-blue-600/50 pl-5 font-normal mx-auto sm:mx-0 text-left">
            Powering our precision engineering facility with {machinery.length} specialized heavy-duty machines to ensure the highest standards of accuracy.
          </div>
        </div>
      </div>

      {/* ----------------- EQUIPMENT GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {machinery.map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-blue-600/40 transition-all duration-500 flex flex-col h-full rounded-none overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Asset 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-1">
                    {m.description}
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Facility Asset</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Operational</span>
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Technical <span className="text-blue-600">Consultation</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            Need custom engineering solutions using our advanced equipment? Reach out to our technical team for a detailed assessment.
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

export default LaxmiMetalWorksEquipment;
