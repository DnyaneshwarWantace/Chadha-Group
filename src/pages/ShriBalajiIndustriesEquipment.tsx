import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ShriBalajiIndustriesEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Hydraulic Press (1200 ton)",
      description: "Heavy-duty hydraulic press for large-scale sheet metal forming operations",
      image: "/images/Hydraulic Press (1200 ton).png"
    },
    {
      name: "Hydraulic Press (600 ton)", 
      description: "Medium-capacity hydraulic press for precision sheet metal work",
      image: "/images/Hydraulic Press (600 ton).jpeg"
    },
    {
      name: "Robotic Plasma Machines",
      description: "Advanced robotic plasma cutting systems for automated precision cutting",
      image: "/images/Robotic Plasma Machines.jpeg"
    },
    {
      name: "Press Brake Machine",
      description: "High-precision press brake for accurate sheet metal bending",
      image: "/images/Press Brake Machine.jpeg"
    },
    {
      name: "Power Presses",
      description: "Industrial power presses for high-volume stamping and forming",
      image: "/images/pressingforming_mechanical_power_press_models.JPG"
    },
    {
      name: "Shearing Cutting Machine",
      description: "Precision shearing machines for material preparation and cutting",
      image: "/images/cutting_metal_band_saw_horizontal_band_saw.JPG"
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
                onClick={() => navigate("/shri-balaji-industries")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Shri Balaji Industries</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-green-900 leading-tight">SHRI BALAJI INDUSTRIES - EQUIPMENT</h1>
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
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Advanced Manufacturing Equipment</h2>
          <p className="text-lg sm:text-xl mb-6 text-green-100 max-w-3xl mx-auto">
            State-of-the-art hydraulic presses, robotic systems, and precision machinery 
            that enable us to deliver high-quality sheet metal components.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Settings className="text-green-300" size={24} />
            <span className="text-lg">Sheet Metal Manufacturing Excellence</span>
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
                  <Button className="w-full bg-green-900 hover:bg-green-800">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Need Custom Sheet Metal Solutions?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            Our advanced equipment can handle your most complex sheet metal manufacturing requirements.
          </p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
            Get Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShriBalajiIndustriesEquipment; 