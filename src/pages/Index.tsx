
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, ArrowRight, ArrowUpRight, MapPin, Cog, Hammer, Wrench, Car, Gauge, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const companies = [
  {
    id: "laxmi-metal-works",
    name: "LAXMI METAL WORKS",
    specialization: "Precision Engineering",
    location: "New Delhi, Delhi",
    est: "Est. 1968",
    info: ["Crank Shafts · Gears · Rolls", "50+ Years of Excellence"],
    dot: "bg-blue-400",
    border: "border-blue-400/40",
    accent: "text-blue-300",
    img: "/images/All Type of Crank Shafts.jpeg",
    Icon: Cog,
  },
  {
    id: "shri-balaji-industries",
    name: "SHRI BALAJI INDUSTRIES",
    specialization: "Sheet Metal Components",
    location: "Bhiwadi, Rajasthan",
    est: "Est. 2020",
    info: ["E-Rickshaw · Body Panels", "1200T Hydraulic Press"],
    dot: "bg-emerald-400",
    border: "border-emerald-400/40",
    accent: "text-emerald-300",
    img: "/images/Hydraulic Press (1200 ton).png",
    Icon: Hammer,
  },
  {
    id: "ess-ess-industries",
    name: "ESS ESS INDUSTRIES",
    specialization: "Differential Components",
    location: "Bhiwadi, Rajasthan",
    est: "Est. 2022",
    info: ["Differential Axles · Suspension", "Robotic Welding · 15+ SPM"],
    dot: "bg-gray-300",
    border: "border-gray-300/35",
    accent: "text-zinc-800",
    img: "/images/Robotic Welding Machines.jpeg",
    Icon: Wrench,
  },
  {
    id: "aft-automotive",
    name: "AFT AUTOMOTIVE",
    specialization: "Auto Components",
    location: "Bhiwadi, Rajasthan",
    est: "Est. 2019",
    info: ["Brake Shoes · Clutch Plates", "2 & 3 Wheeler Specialists"],
    dot: "bg-slate-300",
    border: "border-slate-300/35",
    accent: "text-slate-300",
    img: "/images/automotive_manufacturingassembly_axle_assembly.JPG",
    Icon: Car,
  },
  {
    id: "mrk-impex",
    name: "MRK IMPEX PVT. LTD.",
    specialization: "Advanced CNC Machining",
    location: "Bhiwadi, Rajasthan",
    est: "Est. 2008",
    info: ["Complex Crankshafts", "German CNC Technology", "High Tolerance Turning & Milling"],
    dot: "bg-white/50",
    border: "border-white/20",
    accent: "text-white/70",
    img: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG",
    Icon: Gauge,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        if (scrollContainerRef.current.scrollTop > 50) {
          setShowScrollArrow(false);
        } else {
          setShowScrollArrow(true);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const Card = ({ c, large }: { c: typeof companies[0]; large?: boolean }) => (
    <button
      onClick={() => navigate(`/${c.id}`)}
      className={`group relative w-full text-left bg-zinc-950 overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.015] border border-solid ${c.border} hover:border-opacity-100 ${large ? "h-full min-h-[290px] sm:min-h-[420px] lg:min-h-0 lg:flex-1" : "min-h-[160px] sm:min-h-[190px] lg:min-h-0"}`}
    >
      {/* Full bleed image */}
      <img
        src={c.img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100 object-right"
      />
      
      {/* Gradient to fade */}
      {large ? (
        <div className="absolute inset-0 bg-zinc-950/60 sm:bg-zinc-950/50" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20" />
      )}
      
      {/* Top right location tag - Hidden on mobile for standard cards, visible for large cards */}
      <div className={`absolute top-4 sm:top-5 right-4 sm:right-5 ${large ? "flex" : "hidden lg:flex"} items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/10 text-white/70 text-[9px] sm:text-[10px] font-semibold tracking-wide drop-shadow-lg z-10 transition-colors group-hover:bg-zinc-950/80`}>
         <MapPin size={9} className={c.accent} />
         <span>{c.location}</span>
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-center py-4 z-10 ${large ? "items-center text-center px-6 pt-10 sm:pt-14 pb-12 w-full" : "px-5 sm:px-6 pb-12 w-[88%] sm:w-[82%]"}`}>
        
        <h3 className={`text-white font-bold leading-tight flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 ${large ? "justify-center text-xl sm:text-3xl" : "text-base sm:text-[19px]"}`}>
          <c.Icon size={large ? 24 : 16} className={c.accent} />
          {c.name}
        </h3>
        
        <div className={`flex items-center gap-2 mb-2 ${large ? "justify-center sm:mb-3" : ""}`}>
          <span className={`font-bold tracking-widest uppercase ${c.accent} ${large ? "text-[10px] sm:text-[13px]" : "text-[9px] sm:text-[10px]"}`}>
            {c.specialization}
          </span>
        </div>

        <div className={`flex flex-col gap-0.5 sm:gap-1.5 ${large ? "items-center" : ""}`}>
          {c.info.map((line, idx) => (
             <p key={idx} className={`text-white/60 line-clamp-1 sm:line-clamp-2 ${large ? "text-[11px] sm:text-[14px]" : "text-[10px] sm:text-[12px]"}`}>
               {large && "• "} {line}
             </p>
          ))}
        </div>
      </div>

      {/* Bottom left Address - Requested for mobile/small cards visibility */}
      {!large && (
        <div className="absolute bottom-4 sm:bottom-5 left-5 z-20 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity max-w-[50%] lg:hidden">
          <MapPin size={10} className={c.accent} />
          <span className="text-[9px] sm:text-[10px] text-white/70 font-medium tracking-tight truncate">
            {c.location}
          </span>
        </div>
      )}

      {/* Bottom right Explore button */}
      <div className={`absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-20 ${c.dot} text-zinc-800 font-bold rounded-full inline-flex items-center gap-1.5 transition-transform group-hover:translate-x-1 shadow-lg ${large ? "px-6 py-2.5 text-xs sm:text-sm" : "px-4 sm:px-5 py-1.5 text-[10px] sm:text-[11px]"}`}>
        Explore <ArrowRight size={large ? 14 : 11} />
      </div>
    </button>
  );

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-screen overflow-y-auto lg:overflow-hidden overflow-x-hidden relative bg-zinc-950 flex flex-col"
    >

      {/* Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay muted loop playsInline preload="metadata"
        aria-hidden="true"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-zinc-950/50 pointer-events-none z-0" />

      {/* HEADER */}
      <header className="relative z-50 flex-shrink-0">
        <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-500/20 border border-amber-400/40 rounded-md flex items-center justify-center">
              <span className="text-amber-400 font-bold text-[10px]">CG</span>
            </div>
            <div>
              <div className="text-white font-extrabold text-sm tracking-widest leading-none">CHADHA GROUP</div>
              <div className="text-white/35 text-[8px] tracking-widest uppercase mt-0.5">Industrial Excellence Since 1968</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            <a href="/about"   className="text-white/60 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors">About</a>
            <a href="/contact" className="text-white/60 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors">Contact</a>
            <button
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-amber-500 hover:bg-amber-400 text-zinc-800 h-8 px-4 shadow-amber-500/20"
            >
              <MessageCircle size={14} /> Get Quote
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-t border-white/10 px-5 py-3">
            <div className="flex flex-col gap-3">
              <a href="/about"   className="text-white/70 text-sm py-1">About</a>
              <a href="/contact" className="text-white/70 text-sm py-1">Contact</a>
              <button
                onClick={() => window.open("https://wa.me/919999884740", "_blank")}
                className="bg-amber-500 text-zinc-800 font-bold text-sm h-10 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} /> Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN — flex layout pushed slightly up, bottom fixed */}
      <div className="relative z-10 flex-1 flex flex-col justify-start gap-6 sm:gap-8 lg:gap-4 pt-2 sm:pt-4 px-5 sm:px-10 pb-4 sm:pb-6">

        {/* HEADLINE BLOCK */}
        <div className="text-center z-20">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="h-px w-6 bg-amber-400/60" />
            <span className="text-amber-400 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase">
              India's Trusted Industrial Manufacturer
            </span>
            <div className="h-px w-6 bg-amber-400/60" />
          </div>
          <h1
            className="text-white font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
          >
            INDUSTRIAL EXCELLENCE <span className="text-amber-400">SINCE 1968</span>
          </h1>
          <p className="text-white/40 text-xs sm:text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            55+ years of precision manufacturing across New Delhi &amp; Bhiwadi. Trusted by 50+ leading industrial partners.
          </p>
        </div>

        {/* CONGLOMERATES */}
        <div className="w-full xl:w-[96%] 2xl:max-w-[1500px] mx-auto z-20 flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-3 mb-2 lg:mb-1.5 flex-shrink-0">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/35 text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase">Our Conglomerates</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-3 flex-1 min-h-0">
            {/* Left side: 4 cards in a 2x2 grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-3">
               {companies.slice(0, 4).map((c) => <Card key={c.id} c={c} />)}
            </div>
            {/* Right side: 1 large MRK card */}
            <div className="lg:col-span-1 h-full min-h-0">
               <Card c={companies[4]} large />
            </div>
          </div>
        </div>

        {/* CTA + STATS */}
        <div className="text-center mt-auto z-20 pt-2 flex-shrink-0">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-4 lg:mb-6">
            <button
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-amber-500 hover:bg-amber-400 text-zinc-800 shadow-amber-500/40"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </button>
            <button
              onClick={() => navigate("/about")}
              className="btn-industrial-secondary border-white/20 hover:border-white/35 bg-white/5 hover:bg-white/10 text-white"
            >
              Learn More <ArrowRight size={18} />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 pt-2.5 border-t border-white/10">
            {[
              { n: "5000+", l: "Tons Inventory" },
              { n: "1200T", l: "Press Capacity" },
              { n: "55+",   l: "Years" },
              { n: "50+",   l: "Partners" },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span className="text-amber-400 font-extrabold text-sm">{s.n}</span>
                <span className="text-white/30 text-[9px]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-700 pointer-events-none ${showScrollArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950/40 backdrop-blur-md animate-bounce">
              <ChevronDown size={20} className="text-amber-500" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
