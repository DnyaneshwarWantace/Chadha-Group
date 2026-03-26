import { Home, ChevronRight, MessageCircle, Phone, MapPin, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: "LAXMI METAL WORKS",
      location: "New Delhi, Delhi",
      established: "1968",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182",
      wa1: "919999884740",
      wa2: "919810133182",
      route: "/laxmi-metal-works",
    },
    {
      name: "SHRI BALAJI INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2020",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182",
      wa1: "919999884740",
      wa2: "919810133182",
      route: "/shri-balaji-industries",
    },
    {
      name: "ESS ESS INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2022",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182",
      wa1: "919999884740",
      wa2: "919810133182",
      route: "/ess-ess-industries",
    },
    {
      name: "AFT AUTOMOTIVE",
      location: "Bhiwadi, Rajasthan",
      established: "2019",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182",
      wa1: "919999884740",
      wa2: "919810133182",
      route: "/aft-automotive",
    },
    {
      name: "MRK IMPEX PVT. LTD.",
      location: "Bhiwadi, Rajasthan",
      established: "2008",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182",
      wa1: "919999884740",
      wa2: "919810133182",
      route: "/mrk-impex",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30 font-sans overflow-x-hidden flex flex-col">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[400px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/Robotic Welding Machines.jpeg" alt="Robotic Assembly" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-zinc-800 hover:text-zinc-800 text-xs font-bold uppercase tracking-widest transition-colors">
                <Home size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-amber-500/10 border border-amber-400/30 rounded flex items-center justify-center">
                  <Phone size={14} className="text-amber-500" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">Contact</span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 sm:pt-20 max-w-7xl mx-auto w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-6 sm:mb-8 justify-center sm:justify-start">
            <div className="h-[1px] w-8 sm:w-16 bg-amber-500" />
            <span className="text-amber-500 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Chadha Group · 5 Companies</span>
            <div className="h-[1px] w-8 sm:w-16 bg-amber-500 sm:hidden" />
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] text-[clamp(2.5rem,8vw,6rem)] uppercase max-w-5xl drop-shadow-sm mx-auto sm:mx-0">
            Global Reach. <br /> Local Precision.
          </h1>
          <div className="mt-8 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-amber-500/50 pl-5 font-medium mx-auto sm:mx-0 text-left">
            Ready to discuss your industrial manufacturing requirements? Reach out directly to our specialized facilities.
          </div>
        </div>
      </div>

      {/* ----------------- ARCHITECTURAL CONTACT CARDS ----------------- */}
      <section className="py-12 sm:py-14 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-16 sm:mb-24">
            <span className="text-gray-400 font-bold text-[10px] sm:text-xs tracking-[0.3em] uppercase">Facility Directory</span>
            <div className="h-[1px] flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {companies.map((company, i) => (
              <div key={company.name} className="group relative bg-[#f8f9fa] border border-gray-200 p-8 sm:p-10 hover:border-amber-500/50 transition-colors duration-500 overflow-hidden flex flex-col h-full z-10">
                
                {/* Watermark Number */}
                <div className="absolute -bottom-8 right-0 text-[10rem] font-bold text-zinc-800/5 pointer-events-none tracking-tighter leading-none z-0 group-hover:text-amber-500/5 transition-colors duration-500">
                  0{i + 1}
                </div>

                {/* Corner Aesthetic Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[2px] border-r-[2px] border-amber-500/0 -translate-y-2 translate-x-2 group-hover:border-amber-500/80 group-hover:translate-y-0 group-hover:-translate-x-0 transition-all duration-300 z-20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[2px] border-l-[2px] border-amber-500/0 translate-y-2 -translate-x-2 group-hover:border-amber-500/80 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 z-20" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600 border border-amber-500/30 px-2 py-1 bg-amber-50">
                      Est. {company.established}
                    </span>
                    <span className="w-8 h-[1px] bg-gray-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 uppercase tracking-tighter mb-6 group-hover:text-amber-600 transition-colors">
                    {company.name}
                  </h3>

                  <div className="space-y-6 mb-10 flex-1">
                    <div className="flex items-start gap-4">
                      <MapPin size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">{company.location}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <PhoneCall size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex flex-col gap-1.5">
                        <span className="text-zinc-800 text-[13px] sm:text-sm font-bold tracking-widest">{company.phone1}</span>
                        <span className="text-zinc-800 text-[13px] sm:text-sm font-bold tracking-widest">{company.phone2}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto pt-8 border-t border-gray-200 relative">
                    <div className="absolute top-[-1px] left-0 w-8 h-[2px] bg-amber-500" />
                    <button
                      onClick={() => window.open(`https://wa.me/${company.wa1}`, "_blank")}
                      className="btn-industrial-primary bg-amber-500 hover:bg-gray-900 border-none h-11 w-full"
                    >
                      <MessageCircle size={14} /> WhatsApp 1
                    </button>
                    <button
                      onClick={() => window.open(`https://wa.me/${company.wa2}`, "_blank")}
                      className="btn-industrial-secondary border-gray-200 hover:border-amber-600 hover:text-amber-600 h-11 w-full"
                    >
                      WhatsApp 2
                    </button>
                    <div className="flex justify-center mt-3 relative overflow-hidden h-6 items-center">
                      <button onClick={() => navigate(company.route)} className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:text-amber-600 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                        View Facility Profile <ChevronRight size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
            Partner with <br className="hidden sm:block" />
            <span className="text-amber-500">Chadha Group</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-light leading-relaxed">
            55+ years of manufacturing excellence, ready to serve your industrial needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")} 
              className="btn-industrial-primary bg-amber-500 hover:bg-gray-900 shadow-amber-500/30"
            >
              <MessageCircle size={16} /> WHATSAPP INQUIRY
            </button>
            <button 
              onClick={() => window.open("tel:+919999884740")} 
              className="btn-industrial-secondary border-gray-300 hover:border-amber-600 hover:text-amber-600"
            >
              <Phone size={16} /> CALL US
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
