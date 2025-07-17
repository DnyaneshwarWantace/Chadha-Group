import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EssEssIndustriesEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Vertical Machining Centre",
      specs: "3 units for precision machining differential components",
      description: "Advanced vertical machining centres for precision differential component manufacturing",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG",
      capacity: "3 units available"
    },
    {
      name: "Computer Numerical Control Machines", 
      specs: "4 units for automated operations",
      description: "High-precision CNC machines for automated differential component production",
      image: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG",
      capacity: "4 units available"
    },
    {
      name: "Robotic Welding Machines",
      specs: "Automated welding operations for precision assembly", 
      description: "Advanced robotic welding systems for precise differential component assembly",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "Automated welding"
    },
    {
      name: "SPM Machines",
      specs: "15+ specialized purpose machines for custom operations",
      description: "Special purpose machines for custom differential component operations",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "15+ units available"
    },
    {
      name: "Laser Cutting Machine",
      specs: "Precision material cutting with laser technology",
      description: "High-precision laser cutting for differential component manufacturing",
      image: "/images/cutting_cnc_laser_cutting_machine.JPG",
      capacity: "Precision cutting"
    },
    {
      name: "Induction Hardening Machine",
      specs: "Heat treatment for durability and precision",
      description: "Advanced induction hardening for differential component durability",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "Heat treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/ess-ess-industries")} className="flex items-center space-x-2 p-2 sm:p-2">
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to ESS ESS Industries</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">ESS ESS INDUSTRIES - EQUIPMENT</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="flex items-center space-x-2 p-2 sm:p-2">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Advanced Manufacturing Equipment</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
            State-of-the-art CNC machinery and precision equipment that ensures the highest 
            quality standards for differential components and precision parts.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Settings className="text-gray-300" size={24} />
            <span className="text-lg">Differential Manufacturing Excellence</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {machinery.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={machine.image} alt={machine.name} className="w-full h-48 sm:h-56 object-cover" />
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
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Need Custom Differential Solutions?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Our advanced equipment can handle your most complex differential manufacturing requirements.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Get Quote</Button>
        </div>
      </section>
    </div>
  );
};

export default EssEssIndustriesEquipment; 