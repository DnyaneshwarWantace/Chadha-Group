import { useState } from "react";
import { Home, ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Hammer, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCardImage = ({ 
  image, 
  images, 
  name 
}: { 
  image?: string; 
  images?: string[]; 
  name: string; 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = images && images.length > 0 ? images[currentIndex] : image;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(false);
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div 
        onClick={openLightbox} 
        className="relative w-full h-full group/slider bg-white flex items-center justify-center cursor-zoom-in p-4"
      >
        <img
          src={activeImage}
          alt={name}
          className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/slider:scale-102"
        />
        
        {/* Zoom hint overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover/slider:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity text-zinc-700">
            <Maximize2 size={18} />
          </div>
        </div>

        {images && images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm transition-all opacity-0 group-hover/slider:opacity-100 z-10 hover:text-emerald-600 pointer-events-auto"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-zinc-800 flex items-center justify-center border border-gray-200 shadow-sm transition-all opacity-0 group-hover/slider:opacity-100 z-10 hover:text-emerald-600 pointer-events-auto"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/45 px-2.5 py-1 rounded-full z-10 pointer-events-none">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "bg-white scale-110" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 tracking-wider rounded-sm shadow-sm pointer-events-none">
              {currentIndex + 1} / {images.length} Variants
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal Overlay */}
      {isLightboxOpen && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-md animate-fade-in"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-[10000]"
          >
            <X size={24} />
          </button>

          {/* Title / Variant Badge */}
          <div className="absolute top-4 left-6 text-white text-left max-w-[75%] pointer-events-none">
            <h4 className="text-lg font-bold tracking-tight uppercase">{name}</h4>
            {images && images.length > 1 && (
              <p className="text-xs text-white/60 mt-0.5 uppercase tracking-wider font-semibold">
                Variant {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>

          {/* Main Image Container */}
          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center select-none">
            <img
              src={activeImage}
              alt={name}
              className="max-w-full max-h-full object-contain pointer-events-auto"
              onClick={(e) => e.stopPropagation()} 
            />

            {/* Lightbox navigation arrows for multi-image variants */}
            {images && images.length > 1 && (
              <>
                <button
                  onClick={handleLightboxPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleLightboxNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
          
          {/* Helper caption */}
          <p className="text-white/40 text-xs mt-4 pointer-events-none select-none uppercase tracking-widest font-bold">
            Click anywhere to close
          </p>
        </div>
      )}
    </>
  );
};

const ShriBalajiIndustries = () => {
  const navigate = useNavigate();

  const products: { name: string; image?: string; images?: string[]; description: string }[] = [
    { 
      name: "E-Rickshaw Roof", 
      images: [
        "/images/shri-balaji/products/1.png",
        "/images/shri-balaji/products/2.png",
        "/images/shri-balaji/products/3.png",
        "/images/shri-balaji/products/4.png",
        "/images/shri-balaji/products/5.png",
        "/images/shri-balaji/products/6.png",
        "/images/shri-balaji/products/7.png"
      ], 
      description: "Precision-engineered roof components for electric rickshaws (7 variants available)" 
    },
    { name: "Loader Roof", image: "/images/shri-balaji/products/LOADER_ROOF.png", description: "Heavy-duty roofs for loading vehicles and industrial carriers" },
    { name: "Front Fascia", image: "/images/shri-balaji/products/Front_Fascia.png", description: "Precision stamped front cabin fascia components for three-wheelers" },
    { name: "Butterfly Components", image: "/images/Butterfly Components.jpeg", description: "Specialized butterfly valve components for industrial applications" },
    { name: "Back Panel", image: "/images/download.jpeg", description: "Durable back panels for automotive and industrial use" },
    { 
      name: "Side Panel", 
      images: [
        "/images/shri-balaji/products/side_panel.png",
        "/images/shri-balaji/products/side_panel_2.png"
      ], 
      description: "High-quality side panels for cargo and passenger vehicles (2 variants available)" 
    },
    { name: "Side & Back Panel", image: "/images/shri-balaji/products/Side_&_back_panel.png", description: "Integrated side and back panel sheet metal assemblies" },
    { name: "Driver Box", image: "/images/shri-balaji/products/Driver_box.png", description: "Ergonomic driver seating and storage solutions" },
  ];

  const machinery = [
    { name: "Hydraulic Press (1200 ton)", image: "/images/shri-balaji/equipment/Hydraulic Press (1200 ton).png", description: "Size 2000X4000mm — maximum capacity, precision capabilities" },
    { name: "Hydraulic Press (600 ton)", image: "/images/shri-balaji/equipment/Hydraulic Press (600 ton).png", description: "Size 800X1400mm — medium capacity operations" },
    { name: "Robotic Plasma Machines", image: "/images/Robotic Plasma Machines.jpeg", description: "4 units for automated cutting operations" },
    { name: "Power Presses", image: "/images/pressingforming_mechanical_power_press_models.JPG", description: "High-speed stamping operations" },
    { 
      name: "Laser Cutting Machine", 
      images: [
        "/images/shri-balaji/equipment/SHEARING_CUTTING_MACHINE_1.png",
        "/images/shri-balaji/equipment/SHEARING_CUTTING_MACHINE_2.png"
      ], 
      description: "Material preparation and cutting (2 variants available)" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-emerald-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img 
          src="/images/shri-balaji/equipment/Hydraulic Press (1200 ton).png" 
          alt="Shri Balaji Industries Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-emerald-500/10 border border-emerald-400/30 rounded flex items-center justify-center">
                  <Hammer size={14} className="text-emerald-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Shri Balaji Industries</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <button onClick={() => navigate("/about")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-emerald-600 transition-colors">About</button>
              <button 
                onClick={() => navigate("/contact")}
                className="btn-industrial-primary bg-emerald-600 hover:bg-emerald-500 text-white h-8 px-4 shadow-emerald-600/20"
              >
                <MessageCircle size={14} /> Contact
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-20 sm:pt-24 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-emerald-600" />
              <span className="text-emerald-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Est. 2020 · Bhiwadi</span>
            </div>
            <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.85] uppercase max-w-none drop-shadow-sm" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
              SHRI BALAJI <span className="text-emerald-600">INDUSTRIES.</span>
            </h1>
            <p className="mt-10 text-gray-600 max-w-2xl text-sm sm:text-lg leading-relaxed border-l-[3px] border-emerald-600/30 pl-6 font-medium mb-12">
              Shri Balaji Industries, established in 2020, is a specialized division of the Chadha Group specializing in sheet metal components and drop art for three-wheelers and four-wheelers. Located in Bhiwadi, it is equipped with state-of-the-art manufacturing capabilities and hydraulic press facilities.
            </p>

            {/* Precision Stats Bar */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-emerald-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Advanced Manufacturing</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Capabilities</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-emerald-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Precision Engineering</span>
                <span className="text-gray-400 text-[9px] font-medium uppercase tracking-[0.2em]">Excellence</span>
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
              Our <span className="text-emerald-600">Products</span>
            </h2>
            <div className="h-1 w-12 bg-emerald-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-emerald-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <ProductCardImage image={p.image} images={p.images} name={p.name} />
                  <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/shri-balaji-industries/products")}
              className="btn-industrial-secondary border-emerald-600/20 hover:border-emerald-600 hover:text-emerald-600"
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
              Machinery <span className="text-emerald-600">& Equipment</span>
            </h2>
            <div className="h-1 w-12 bg-emerald-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.slice(0, 3).map((m, i) => (
              <div key={m.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-emerald-600/40 transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <ProductCardImage image={m.image} images={m.images} name={m.name} />
                  <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-3 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
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
              onClick={() => navigate("/shri-balaji-industries/equipment")}
              className="btn-industrial-secondary border-emerald-600/20 hover:border-emerald-600 hover:text-emerald-600"
            >
              View Facility <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-8 leading-none">
            SCALE-UP YOUR <span className="text-emerald-600">OPERATIONS.</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic border-x border-emerald-600/20 px-8">
            "Over five decades of delivering mission-critical components to the heart of Global Industry."
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")}
              className="btn-industrial-primary bg-emerald-600 hover:bg-gray-900 shadow-emerald-600/40"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")}
              className="btn-industrial-secondary border-emerald-600/20 hover:border-emerald-600 hover:text-emerald-600"
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
            <Hammer size={16} className="text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">SHRI BALAJI INDUSTRIES</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Chadha Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button onClick={() => navigate("/")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-emerald-600 transition-colors">Group Home</button>
            <button onClick={() => navigate("/contact")} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-emerald-600 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ShriBalajiIndustries;
