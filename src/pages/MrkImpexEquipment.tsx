import { useState } from "react";
import { ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Gauge, ArrowLeft, Phone } from "lucide-react";
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
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === 0 ? all.length - 1 : p - 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-amber-600 pointer-events-auto"><ChevronLeft size={16} /></button>
            <button onClick={(e) => { e.stopPropagation(); setIdx((p) => (p === all.length - 1 ? 0 : p + 1)); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm opacity-0 group-hover/img:opacity-100 z-10 hover:text-amber-600 pointer-events-auto"><ChevronRight size={16} /></button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/45 px-2.5 py-1 rounded-full z-10 pointer-events-none">
              {all.map((_, i) => <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white scale-110" : "bg-white/50"}`} />)}
            </div>
            <div className="absolute top-2 right-2 bg-amber-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-sm shadow-sm pointer-events-none">{idx + 1} / {all.length}</div>
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

const MrkImpexEquipment = () => {
  const navigate = useNavigate();

  const machinery: { name: string; image?: string; images?: string[]; description: string }[] = [
    { name: "CNC Lathe Machines", image: "/images/mrk/equipment/CNC Lathe Machines.jpeg", description: "Swing Over Bed - Dia1600mm, Swing Over Slide - Dia2000mm, Total Length - 7500mm" },
    { name: "Vertical Machining Centre (KAFO3151)", image: "/images/mrk/equipment/VMC KAFO3151.jpeg", description: "X-5000mm, Y-3000mm, Z-1700mm" },
    { name: "Vertical Machining Centre (VMC-2)", image: "/images/mrk/equipment/VMC_2.png", description: "X-4100mm, Y-3500mm, Z-1500mm" },
    { name: "Vertical Machining Centre (VMC-3)", image: "/images/mrk/equipment/VMC_1.png", description: "X-2700mm, Y-1700mm, Z-100mm" },
    { name: "CNC Vertical Turning Lathe (TOS German)", image: "/images/mrk/equipment/CNC Vertical Turning Lathe.png", description: "Dia 2200mm, Z axis - 1600mm" },
    { name: "Roll Grinder (TOS German)", image: "/images/mrk/equipment/Roll Grinder TOS.png", description: "Job Capacity 900X5000MM & Dia 400X1400MM — Precision roll grinding" },
    { name: "ELGA Milling Machine", image: "/images/mrk/equipment/ELGA Milling Machine.jpeg", description: "X axis - 8000mm, Y axis - 1200mm, Z axis - 1000mm" },
    { name: "Horizontal Boring Machine", image: "/images/mrk/equipment/Horizontal Boring Machine.jpg", description: "Center - 125mm" },
    { name: "Bandsaw Cutting Machines", image: "/images/mrk/equipment/BANDSAW CUTTING MACHINES.png", description: "Capacity: Dia 80mm to 1250mm — 7 units for material cutting and preparation" },
    { name: "Hydraulic Press", image: "/images/mrk/equipment/IMG_9428.jpg", description: "Heavy-duty hydraulic press for precision metal forming and industrial component pressing operations" },
    { name: "Overhead Cranes", images: ["/images/mrk/equipment/Overhead Crane_1.jpg", "/images/mrk/equipment/Overhead Crane_2.jpg"], description: "Capacity: 40 Ton — Heavy-duty overhead gantry cranes (EOT Crane) for material handling and lifting heavy industrial components" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30 font-sans overflow-x-hidden flex flex-col">

      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG" alt="High-Tech Equipment" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
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
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Equipment</span>
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
            Machined <br /> Mastery.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-amber-600/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Leveraging {machinery.length} high-capacity German CNC assets. We deliver unmatched precision for the most complex heavy engineering requirements.
          </div>
        </div>
      </div>

      {/* ----------------- EQUIPMENT GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {machinery.map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-amber-600/40 transition-all duration-500 flex flex-col h-full rounded-none">
                <div className="relative h-64 bg-white overflow-hidden">
                  <CardImage image={m.image} images={m.images} name={m.name} />
                  <div className="absolute top-4 left-4 pointer-events-none z-10">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Asset 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-amber-500 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-1">
                    {m.description}
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">German CNC Asset</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">In Service</span>
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
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Scale Heavy <span className="text-amber-600">Engineering.</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Need large-scale machining? MRK Impex provides the technical capability and industrial capacity you require.
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

export default MrkImpexEquipment;
