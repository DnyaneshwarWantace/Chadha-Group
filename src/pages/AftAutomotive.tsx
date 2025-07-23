
import { Home, MapPin, Factory, Settings, ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AftAutomotive = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Brake Shoes for 2&3 Wheelers", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Disc Pads", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Clutch Plates", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Brake & Clutch Levers", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Brake Drum Assembly", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  const machinery = [
    {
      name: "Pressure Die Casting Machines",
      specs: "3 units for precision casting operations",
      image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG"
    },
    {
      name: "Industrial Furnaces", 
      specs: "3 units for metal melting and heating",
      image: "/images/heat_treatment__surface_treatment_industrial_oven_or_baking_furnace.JPG"
    },
    {
      name: "Forming Hydraulic Press",
      specs: "5 units for final forming operations", 
      image: "/images/pressingforming_hydraulic_press_machine.JPG"
    },
    {
      name: "Shot Blasting Machines",
      specs: "2 units for surface preparation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "SPM Grinding Machines",
      specs: "Specialized grinding operations for precision parts",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Powder Coating Equipment",
      specs: "Advanced surface finishing technology",
      image: "/images/coating__surface_treatment_powder_coating_booth.JPG"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <Home size={20} />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">CHADHA GROUP</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-sm mt-1 sm:hidden">
                  <MapPin size={14} />
                  <span>Bhiwadi, Rajasthan</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
              <MapPin size={16} />
              <span>Bhiwadi, Rajasthan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">AFT AUTOMOTIVE</h2>
              <p className="text-lg sm:text-xl mb-6 text-slate-100">
                Specialized division of Chadha Group focused on automotive components 
                and brake systems. Established in 2019, located in Bhiwadi with advanced 
                manufacturing capabilities for 2 & 3 wheeler industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-slate-300" size={20} />
                  <span className="text-sm sm:text-base">Automotive Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-slate-300" size={20} />
                  <span className="text-sm sm:text-base">Safety Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AFT Automotive Facility"
                className="rounded-lg shadow-xl w-full h-48 sm:h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products & Equipment Section - Side by Side */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Products Section */}
            <div>
              <div className="mb-6 sm:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Products</h3>
                <Button 
                  onClick={() => navigate("/aft-automotive/products")}
                  className="w-full lg:w-auto mt-4 lg:mt-0 bg-slate-900 hover:bg-slate-800"
                >
                  See All Products
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                {products.slice(0, 1).map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                      className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      {/* Machinery Section */}
            <div>
              <div className="mb-6 sm:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Machinery & Equipment</h3>
                <Button 
                  onClick={() => navigate("/aft-automotive/equipment")}
                  className="w-full lg:w-auto mt-4 lg:mt-0 bg-slate-900 hover:bg-slate-800"
                >
                  See All Equipment
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                {machinery.slice(0, 1).map((machine, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={machine.image}
                  alt={machine.name}
                      className="w-full h-72 sm:h-80 object-cover"
                />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-100">
            Ready to discuss your automotive component requirements?
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open('https://wa.me/919999884740', '_blank')}
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AftAutomotive;
