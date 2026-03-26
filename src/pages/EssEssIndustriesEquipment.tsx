import { Home, ChevronRight, MessageCircle, Wrench, ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EssEssIndustriesEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    { name: "Vertical Machining Centre", image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG", description: "3 units for precision machining differential components" },
    { name: "CNC Machines", image: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG", description: "4 units for automated operations" },
    { name: "Robotic Welding Machines", image: "/images/Robotic Welding Machines.jpeg", description: "Automated welding for precision assembly" },
    { name: "SPM Machines", image: "/images/SPM Machines.jpeg", description: "15+ specialized purpose machines" },
    { name: "Laser Cutting Machine", image: "/images/cutting_cnc_laser_cutting_machine.JPG", description: "Precision material cutting with laser technology" },
    { name: "Induction Hardening Machine", image: "/images/Induction Hardening Machine.jpeg", description: "Heat treatment for durability and precision" },
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
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-zinc-600/40 transition-all duration-500 flex flex-col h-full rounded-none overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Asset 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-3 group-hover:text-zinc-600 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {m.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
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
