import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MrkImpexEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "CNC Lathe Machines",
      description: "Computer numerical control turning operations",
      image: "/images/mrk/Conventional Lathe Machines 5.jpg"
    },
    {
      name: "Conventional Lathe Machines",
      description: "40+ units for various turning operations",
      image: "/images/mrk/Conventional Lathe Machines (2).jpg"
    },

    {
      name: "Vertical Machining Centre (KAFO3151)",
      description: "X5000, Y3000, Z1400, Loading Capacity 22 Tons",
      image: "/images/mrk/Vertical Machining Centre (KAFO3151).jpg"
    },
    {
      name: "CNC Vertical Turning Lathe (TOS German)",
      description: "Turning Dia 2200MM, Z-2000mm - German precision",
      image: "/images/mrk/CNC Vertical Turning Lathe (TOS German).jpg"
    },
    {
      name: "Roll Grinder (TOS German)",
      description: "Job Capacity 900X5000MM - Precision roll grinding",
      image: "/images/mrk/Roll Grinder (TOS German).jpg"
    },
    {
      name: "ELGA Milling Machine",
      description: "Table Size 1250X8500MM - Large component machining",
      image: "/images/mrk/ELGA Milling Machine.jpg"
    },
    {
      name: "Horizontal Boring Machine",
      description: "Precision boring and drilling operations",
      image: "/images/mrk/horizontal boring machine.jpg"
    },
    {
      name: "Bandsaw Cutting Machines",
      description: "Material cutting and preparation",
      image: "/images/mrk/Bandsaw Cutting machine.jpg"
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