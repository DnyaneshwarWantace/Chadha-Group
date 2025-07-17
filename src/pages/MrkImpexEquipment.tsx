import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MrkImpexEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Conventional Lathe Machines",
      specs: "40+ units for various turning operations",
      description: "Extensive fleet of conventional lathe machines for precision turning operations",
      image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG",
      capacity: "40+ units available"
    },
    {
      name: "Vertical Machining Centre (KAFO3151)", 
      specs: "X3000, Y5000, Z1400, Loading Capacity 22 Tons",
      description: "Advanced vertical machining centre with large work envelope and high loading capacity",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG",
      capacity: "22 tons loading capacity"
    },
    {
      name: "CNC Vertical Turning Lathe (TOS German)",
      specs: "Turning Dia 2200MM, Z-2000mm - German precision", 
      description: "German-made CNC vertical turning lathe for large diameter precision turning",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "2200mm turning diameter"
    },
    {
      name: "Roll Grinder (TOS German)",
      specs: "Job Capacity 900X5000MM - Precision roll grinding",
      description: "German precision roll grinder for high-accuracy cylindrical grinding operations",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "900X5000MM capacity"
    },
    {
      name: "ELGA Milling Machine",
      specs: "Table Size 1250X8500MM - Large component machining",
      description: "Large-scale milling machine for machining oversized industrial components",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "1250X8500MM table"
    },
    {
      name: "Bandsaw Cutting Machines",
      specs: "7 units for material cutting and preparation",
      description: "Multiple bandsaw cutting machines for efficient material preparation and cutting",
      image: "/images/cutting_metal_band_saw_horizontal_band_saw.JPG",
      capacity: "7 units available"
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
                onClick={() => navigate("/mrk-impex")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to MRK Impex</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">MRK IMPEX - EQUIPMENT</h1>
            </div>
            <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <Home size={20} />
                <span className="hidden sm:inline">Home</span>
              </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Advanced Manufacturing Equipment</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
            State-of-the-art German CNC machinery and precision equipment that enables us 
            to deliver the highest quality industrial components with unmatched precision.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Settings className="text-gray-300" size={24} />
            <span className="text-lg">German CNC Technology Excellence</span>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {machinery.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{machine.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{machine.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Settings size={16} className="text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{machine.specs}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Factory size={16} className="text-gray-600" />
                      <span className="text-sm text-gray-600">{machine.capacity}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Need Custom Manufacturing?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Our advanced German CNC equipment can handle your most complex manufacturing requirements.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MrkImpexEquipment; 