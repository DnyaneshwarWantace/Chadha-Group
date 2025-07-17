
import { Home, MapPin, Factory, Settings, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AftAutomotive = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Brake Shoes for 2&3 Wheelers", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Disc Pads", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Clutch Plates", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Control Levers", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
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
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">AFT AUTOMOTIVE</h1>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Automotive Excellence</h2>
              <p className="text-lg sm:text-xl mb-6 text-slate-100">
                Specialized division of Chadha Group focused on automotive components 
                and brake systems. Located in Bhiwadi with advanced manufacturing 
                capabilities for 2 & 3 wheeler industries.
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
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Products</h3>
                <Button 
                  onClick={() => navigate("/aft-automotive/products")}
                  className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800"
                >
                  <span>See All Products</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                {products.slice(0, 1).map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                      className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Machinery Section */}
            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Machinery & Equipment</h3>
                <Button 
                  onClick={() => navigate("/aft-automotive/equipment")}
                  className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800"
                >
                  <span>See All Equipment</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                {machinery.slice(0, 1).map((machine, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={machine.image}
                  alt={machine.name}
                      className="w-full h-56 sm:h-64 object-cover"
                />
                    <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{machine.name}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{machine.specs}</p>
                    </div>
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
          <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AftAutomotive;
