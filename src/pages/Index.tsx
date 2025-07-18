
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const companies = [
    {
      id: "laxmi-metal-works",
      name: "LAXMI METAL WORKS",
      location: "New Delhi, Delhi",
      specialization: "Precision Engineering",
      description: "Crank Shafts, Gears, Hydraulic Components",
      borderColor: "border-blue-600",
      bgColor: "bg-blue-700"
    },
    {
      id: "shri-balaji-industries", 
      name: "SHRI BALAJI INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      specialization: "Sheet Metal Components",
      description: "E-Rickshaw Parts, Hydraulic Press Work",
      borderColor: "border-green-500",
      bgColor: "bg-green-600"
    },
    {
      id: "ess-ess-industries",
      name: "ESS ESS INDUSTRIES",
      location: "Bhiwadi, Rajasthan", 
      specialization: "Differential Components", 
      description: "All Size Differentials, Precision Parts",
      borderColor: "border-gray-600",
      bgColor: "bg-gray-700"
    },
    {
      id: "aft-automotive",
      name: "AFT AUTOMOTIVE", 
      location: "Bhiwadi, Rajasthan",
      specialization: "Auto Components",
      description: "Brake Systems, 2&3 Wheeler Parts",
      borderColor: "border-slate-600",
      bgColor: "bg-slate-700"
    },
    {
      id: "mrk-impex",
      name: "MRK IMPEX PRIVATE LIMITED",
      location: "Bhiwadi, Rajasthan",
      specialization: "Industrial Manufacturing",
      description: "CNC Machining, Precision Components",
      borderColor: "border-black",
      bgColor: "bg-black"
    }
  ];

  const keyFeatures = [
    "5000+ tons raw material inventory",
    "1200-ton press capacity", 
    "Expert team of professionals",
    "State-of-the-art fabrication"
  ];

  const majorClients = [];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="w-full px-6 h-20 flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CG</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Chadha Group</h1>
              <p className="text-sm text-gray-600">Industrial Excellence Since 1968</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
            <Button 
              onClick={() => window.open('https://wa.me/919999884740', '_blank')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</a>
              <Button 
                onClick={() => window.open('https://wa.me/919999884740', '_blank')}
                className="bg-blue-900 hover:bg-blue-800 text-white w-full"
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content - Responsive Layout */}
      <main className="pt-20 md:h-screen md:overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden md:flex h-full overflow-hidden">
        {/* Left Panel - Company Overview (60%) */}
          <div className="w-3/5 relative bg-black overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video/video.mp4" type="video/mp4" />
            </video>
          
          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16">
            {/* Main Headline */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                INDUSTRIAL EXCELLENCE<br />
                <span className="text-blue-300">SINCE 1968</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Leading manufacturer of exclusive industrial products with 50+ years 
                of expertise across diverse sectors
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Trust Section */}
            <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white">
                  TRUSTED BY 50+ LEADING INDUSTRIAL PARTNERS
              </h3>
            </div>
          </div>
        </div>

        {/* Right Panel - Company Cards (40%) */}
          <div className="w-2/5 bg-white p-8">
          <div className="h-full flex flex-col">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                OUR 5 SPECIALIZED CONGLOMERATES
              </h3>
              <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
            </div>

            {/* Company Cards Grid */}
            <div className="flex-1 flex flex-col justify-center">
              {/* First Row - 2 Cards */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {companies.slice(0, 2).map((company) => (
                  <div
                    key={company.id}
                    onClick={() => navigate(`/${company.id}`)}
                    className={`bg-white border-2 ${company.borderColor} rounded-xl p-6 cursor-pointer 
                             hover:shadow-lg hover:scale-105 
                             transition-all duration-300 group h-32 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                        {company.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">{company.location}</p>
                      <p className="text-xs text-blue-700 font-medium">{company.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - 2 Cards */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {companies.slice(2, 4).map((company) => (
                  <div
                    key={company.id}
                    onClick={() => navigate(`/${company.id}`)}
                    className={`bg-white border-2 ${company.borderColor} rounded-xl p-6 cursor-pointer 
                             hover:shadow-lg hover:scale-105 
                             transition-all duration-300 group h-32 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                        {company.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">{company.location}</p>
                      <p className="text-xs text-blue-700 font-medium">{company.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>

                {/* Third Row - Full Width Card for MRK IMPEX */}
                <div className="w-full">
                <div
                  onClick={() => navigate(`/${companies[4].id}`)}
                  className={`bg-white border-2 ${companies[4].borderColor} rounded-xl p-6 cursor-pointer 
                           hover:shadow-lg hover:scale-105 
                             transition-all duration-300 group w-full h-32 flex items-center justify-center`}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                      {companies[4].name}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">{companies[4].location}</p>
                    <p className="text-xs text-blue-700 font-medium">{companies[4].specialization}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile Layout - Scrollable */}
        <div className="md:hidden">
          {/* Hero Section */}
          <div className="relative bg-black px-6 py-12 overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video/video.mp4" type="video/mp4" />
            </video>
            
            <div className="relative z-10">
              {/* Main Headline */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  INDUSTRIAL EXCELLENCE<br />
                  <span className="text-blue-300">SINCE 1971</span>
                </h2>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Leading manufacturer of exclusive industrial products with 50+ years 
                  of expertise across diverse sectors
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <div className="grid grid-cols-1 gap-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Trust Section */}
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white">
                  TRUSTED BY 50+ MAJOR CLIENTS
                </h3>
              </div>
            </div>
          </div>

          {/* Mobile Company Cards Section */}
          <div className="bg-white px-6 py-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                OUR 5 SPECIALIZED CONGLOMERATES
              </h3>
              <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
            </div>

            {/* Company Cards Grid - Mobile */}
            <div className="space-y-4">
            {companies.map((company) => (
              <div
                key={company.id}
                onClick={() => navigate(`/${company.id}`)}
                  className={`bg-white border-2 ${company.borderColor} rounded-xl p-6 cursor-pointer 
                           hover:shadow-lg hover:scale-105 
                           transition-all duration-300 group w-full`}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                      {company.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{company.location}</p>
                    <p className="text-sm text-blue-700 font-medium">{company.specialization}</p>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
