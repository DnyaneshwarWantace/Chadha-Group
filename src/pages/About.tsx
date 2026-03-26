import { Home, ChevronRight, MessageCircle, Info, Factory, Settings, Users, Award, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: "LAXMI METAL WORKS",
      location: "New Delhi, Delhi",
      established: "1968",
      specialization: "Precision Engineering",
      description: "Chadha Group's first unit established in 1968, specializes in precision engineering equipped with high-tech machines for quality manufacturing.",
      products: "Crank Shafts · Gears · Hydraulic Components · Rolls · Crane Wheels",
      route: "/laxmi-metal-works",
      img: "/images/All Type of Crank Shafts.jpeg",
    },
    {
      name: "SHRI BALAJI INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2020",
      specialization: "Sheet Metal Components",
      description: "Specializing in sheet metal components and body parts for three-wheelers and four-wheelers with state-of-the-art hydraulic press facilities.",
      products: "E-Rickshaw Roof · Butterfly Components · Driver Box · Side Panel",
      route: "/shri-balaji-industries",
      img: "/images/Hydraulic Press (1200 ton).png",
    },
    {
      name: "ESS ESS INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2022",
      specialization: "Differential Components",
      description: "Precision machining and assembly of drivetrain components, differential axles for three-wheelers, and handle brackets for two-wheelers.",
      products: "Differential Components · Handle Brackets · Neck Pipe Components",
      route: "/ess-ess-industries",
      img: "/images/Robotic Welding Machines.jpeg",
    },
    {
      name: "AFT AUTOMOTIVE",
      location: "Bhiwadi, Rajasthan",
      established: "2019",
      specialization: "Auto Components",
      description: "Specialized in automotive components and brake systems for 2 & 3 wheeler industries with advanced manufacturing capabilities.",
      products: "Brake Shoes · Disc Pads · Clutch Plates · Brake Drum Assembly",
      route: "/aft-automotive",
      img: "/images/automotive_manufacturingassembly_axle_assembly.JPG",
    },
    {
      name: "MRK IMPEX PVT. LTD.",
      location: "Bhiwadi, Rajasthan",
      established: "2008",
      specialization: "Advanced CNC Machining",
      description: "Largest manufacturing unit of Chadha Group — advanced CNC machining with German-made machinery for highest quality standards.",
      products: "CNC Machined Components · Crankshafts · Hydraulic Cylinders · Gears",
      route: "/mrk-impex",
      img: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-800 selection:bg-amber-500/30 font-sans overflow-x-hidden">
      {/* ----------------- HERO SECTION ----------------- */}
      <div className="relative w-full min-h-[500px] flex flex-col justify-between border-b border-gray-200">
        <img src="/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG" alt="CNC Machining" className="absolute inset-0 w-full h-full object-cover opacity-100" />
        {/* Architectural Reveal Effect: Center white bar, clear sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/0 via-[#f8f9fa]/95 to-[#f8f9fa]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/20 via-transparent to-[#f8f9fa] pointer-events-none" />

        <header className="relative z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
          <div className="w-full px-5 sm:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/")} className="flex items-center gap-1.5 text-gray-500 hover:text-zinc-800 text-xs font-bold uppercase tracking-widest transition-colors">
                <Home size={14} /><span className="hidden sm:inline">Home</span>
              </button>
              <ChevronRight size={12} className="text-gray-300" />
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-amber-500/10 border border-amber-400/30 rounded flex items-center justify-center">
                  <Info size={14} className="text-amber-500" />
                </div>
                <span className="text-zinc-800 font-extrabold text-sm uppercase tracking-widest">About Us</span>
              </div>
            </div>
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")} 
              className="btn-industrial-primary bg-amber-500 hover:bg-amber-400 text-zinc-800 h-8 px-4 shadow-amber-500/20"
            >
              <MessageCircle size={14} /> Get Quote
            </button>
          </div>
        </header>

        <div className="relative z-10 px-6 sm:px-12 pb-12 pt-16 sm:pt-20 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 sm:w-16 bg-amber-500" />
            <span className="text-amber-500 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">Industrial Excellence · Since 1968</span>
          </div>
          <h1 className="text-zinc-800 font-bold tracking-tighter leading-[0.9] uppercase max-w-none drop-shadow-sm transition-all duration-700" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}>
            About Chadha Group
          </h1>
          <div className="mt-8 sm:mt-12 text-gray-600 max-w-xl text-xs sm:text-sm leading-relaxed border-l-[2px] border-amber-500/50 pl-5 font-medium">
            5 specialized companies · 55+ years of precision manufacturing across New Delhi & Bhiwadi
          </div>
        </div>
      </div>

      {/* ----------------- OUR STORY (STATS & TEXT) ----------------- */}
      <section className="px-6 sm:px-12 py-12 sm:py-14 max-w-7xl mx-auto border-b border-gray-200 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 leading-none">
              Chadha <br /> <span className="text-amber-500">Group</span>
            </h2>
            <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <Award className="text-amber-500 mb-4 opacity-80" strokeWidth={1.5} size={28} />
                <div className="text-3xl sm:text-4xl font-bold text-zinc-800 tracking-tighter">1968</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Founded</div>
              </div>
              <div>
                <Factory className="text-gray-400 mb-4 opacity-80" strokeWidth={1.5} size={28} />
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 tracking-tighter">5</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Specialized Units</div>
              </div>
              <div>
                <Users className="text-gray-400 mb-4 opacity-80" strokeWidth={1.5} size={28} />
                <div className="text-3xl sm:text-4xl font-bold text-zinc-800 tracking-tighter">50+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Global Partners</div>
              </div>
              <div>
                <Settings className="text-gray-400 mb-4 opacity-80" strokeWidth={1.5} size={28} />
                <div className="text-3xl sm:text-4xl font-bold text-zinc-800 tracking-tighter">1200T</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Maximum Press</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                Chadha Group is a leading industrial manufacturing conglomerate with over 55 years of excellence in precision engineering and manufacturing. Founded in 1968, we have grown from a single unit to become one of India's most trusted names in industrial manufacturing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mt-6 sm:mt-8">
                Our group operates through 5 specialized companies, each focusing on specific industrial sectors and delivering world-class products to domestic and international markets.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mt-6">
                Today, Chadha Group is trusted by 50+ leading industrial partners and continues to expand its capabilities while maintaining the core values of quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- EDITORIAL PORTFOLIO ----------------- */}
      <section className="bg-white py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-20 sm:mb-32">
            <span className="text-gray-400 font-bold text-[10px] sm:text-xs tracking-[0.3em] uppercase">The Conglomerates</span>
            <div className="h-[1px] flex-1 bg-gray-200" />
          </div>

          <div className="flex flex-col gap-16 sm:gap-20">
            {companies.map((company, i) => (
              <div key={company.name} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Number Indicator */}
                <div className="hidden lg:block lg:col-span-1">
                  <span className="text-6xl font-bold text-gray-100 tracking-tighter group-hover:text-amber-500/20 transition-colors duration-500">0{i + 1}</span>
                </div>

                {/* Information Block */}
                <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 border border-amber-500/30 px-3 py-1 bg-amber-50">
                      Est. {company.established}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-1.5 bg-gray-50 px-3 py-1 border border-gray-200">
                      <MapPin size={10} /> {company.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-4xl font-bold text-zinc-800 uppercase tracking-tighter mb-2 group-hover:text-amber-600 transition-colors">
                    {company.name}
                  </h3>
                  <h4 className="text-amber-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8">
                    {company.specialization}
                  </h4>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl font-light">
                    {company.description}
                  </p>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-6 sm:pt-8 border-t border-gray-200 w-full relative">
                    <div className="absolute top-[-1px] left-0 w-12 h-[2px] bg-amber-500" />
                    <div>
                      <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">Capabilities / Focus</span>
                      <span className="block text-xs font-medium text-gray-800 leading-snug">{company.products}</span>
                    </div>
                    <div className="flex items-start xl:items-end justify-start xl:justify-end mt-2 xl:mt-0">
                      <button onClick={() => navigate(company.route)} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-800 uppercase hover:text-amber-600 transition-all group-hover:pl-2">
                        View Facility <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Aesthetic Image Block */}
                <div className="lg:col-span-5 relative h-64 sm:h-96 lg:h-[450px] w-full bg-gray-100 overflow-hidden border border-gray-200 order-1 lg:order-2 group-hover:border-amber-500/30 transition-colors duration-700">
                  <div className="absolute inset-0 bg-white/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <img src={company.img} alt={company.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-amber-500/80 -translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:-translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-amber-500/80 translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- CORE VALUES & CTA ----------------- */}
      <section className="relative py-12 sm:py-14 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter text-zinc-800 mb-6 leading-none">
              Our <span className="text-amber-500">Core Values</span>
            </h2>
            <div className="w-16 h-[2px] bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20 relative z-10">
            {[
              { title: "Quality Excellence", desc: "Maintaining the highest standards in all our manufacturing processes", icon: Award },
              { title: "Customer Focus", desc: "Building long-term relationships through exceptional service", icon: Users },
              { title: "Innovation", desc: "Continuously improving our technology and processes", icon: Settings },
            ].map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <v.icon className="text-amber-500" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-800 mb-3 uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center relative pt-8">
            <button 
              onClick={() => window.open("https://wa.me/919999884740", "_blank")} 
              className="btn-industrial-primary bg-amber-500 hover:bg-gray-900 hover:text-white text-zinc-800 shadow-amber-500/40"
            >
              <MessageCircle size={20} /> WHATSAPP INQUIRY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
