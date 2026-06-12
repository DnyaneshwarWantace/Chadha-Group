import { useState } from "react";
import { Home, ChevronRight, ChevronLeft, Maximize2, X, MessageCircle, Hammer, ArrowLeft, Phone } from "lucide-react";
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

const ShriBalajiIndustriesProducts = () => {
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
    { name: "Loader Roof", image: "/images/shri-balaji/products/LOADER_ROOF.png", description: "Heavy-duty roof components for loader vehicles" },
    { name: "Front Fascia", image: "/images/shri-balaji/products/Front_Fascia.png", description: "Precision stamped front cabin fascia components for three-wheelers" },
    { name: "Butterfly Components", image: "/images/shri-balaji/products/Butterfly_Components.png", description: "Specialized butterfly valve components for industrial applications" },
    { name: "Back Panel", image: "/images/shri-balaji/products/Back_Panel.png", description: "Durable back panels for automotive and industrial use" },
    { 
      name: "Side Panel", 
      images: [
        "/images/shri-balaji/products/side_panel.png",
        "/images/shri-balaji/products/side_panel_2.png"
      ], 
      description: "Precision side panels for various vehicle applications (2 variants available)" 
    },
    { name: "Side & Back Panel", image: "/images/shri-balaji/products/Side_&_back_panel.png", description: "Integrated side and back panel sheet metal assemblies" },
    { name: "Driver Box", image: "/images/shri-balaji/products/Driver_box.png", description: "Ergonomic driver compartments for commercial vehicles" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-emerald-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[350px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/shri-balaji/equipment/Hydraulic Press (1200 ton).png" alt="Sheet Metal Manufacturing" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale sepia-[.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#f8f9fa]/90 to-[#f8f9fa]" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/shri-balaji-industries")} className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-600 text-[10px] font-bold uppercase tracking-widest transition-colors">
                <ArrowLeft size={14} /><span className="hidden sm:inline">Shri Balaji Industries</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-emerald-500/10 border border-emerald-400/30 rounded flex items-center justify-center">
                  <Hammer size={14} className="text-emerald-600" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Products</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 max-w-7xl mx-auto w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center sm:justify-start">
            <div className="h-[1px] w-8 sm:w-16 bg-emerald-600" />
            <span className="text-emerald-600 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Shri Balaji industries · Est. 2020</span>
            <div className="h-[1px] w-8 sm:w-16 bg-emerald-600 sm:hidden" />
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,5rem)] uppercase max-w-4xl drop-shadow-sm mx-auto sm:mx-0">
            Formed <br /> Excellence.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-emerald-600/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Precision sheet metal components for three and four-wheelers. Our {products.length} key product lines define automotive structural integrity.
          </div>
        </div>
      </div>

      {/* ----------------- PRODUCTS GRID ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((p, i) => (
              <div key={p.name} className="group relative bg-[#f8f9fa] border border-gray-100 hover:border-emerald-600/40 transition-all duration-500 flex flex-col h-full rounded-none overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <ProductCardImage image={p.image} images={p.images} name={p.name} />
                  <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[10px] font-bold bg-white/90 text-zinc-800 px-2 py-1 uppercase tracking-widest border border-gray-200">
                      Item 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-zinc-800 uppercase tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-1">
                    {p.description}
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shri Balaji</span>
                    <button className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group/btn">
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
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/5 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Structural <span className="text-emerald-600">Integrity</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Discuss your sheet metal requirements with our specialized engineering team at Shri Balaji Industries.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")} 
              className="btn-industrial-primary bg-emerald-600 hover:bg-gray-900 shadow-emerald-600/30"
            >
              <MessageCircle size={16} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")} 
              className="btn-industrial-secondary border-gray-300 hover:border-emerald-600 hover:text-emerald-600"
            >
              <Phone size={16} /> CALL NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShriBalajiIndustriesProducts;
