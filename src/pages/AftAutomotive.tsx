
import { ArrowLeft, MapPin, Factory, Settings } from "lucide-react";
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
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-slate-900">AFT AUTOMOTIVE</h1>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16} />
              <span>Bhiwadi, Rajasthan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Automotive Excellence</h2>
              <p className="text-xl mb-6 text-slate-100">
                Specialized division of Chadha Group focused on automotive components 
                and brake systems. Located in Bhiwadi with advanced manufacturing 
                capabilities for 2 & 3 wheeler industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-slate-300" size={20} />
                  <span>Automotive Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-slate-300" size={20} />
                  <span>Safety Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AFT Automotive Facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Machinery & Equipment</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {machinery.map((machine, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{machine.name}</h4>
                <p className="text-gray-600">{machine.specs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-xl mb-8 text-slate-100">
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
