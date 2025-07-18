import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LaxmiMetalWorksEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Conventional Lathe Machines",
      description: "Advanced conventional lathe machines for precision turning and machining operations",
      image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG"
    },
    {
      name: "Overhead Cranes", 
      description: "Heavy-duty overhead cranes for material handling and lifting operations",
      image: "/images/lifting_and_material_handling_overhead_crane_also_known_as_a_bridge_crane.JPG"
    },
    {
      name: "Shaper Machine",
      description: "Precision shaper machines for surface finishing and shaping operations",
      image: "/images/Shaper Machine.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/laxmi-metal-works")} className="flex items-center space-x-2 p-2 sm:p-2">
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Laxmi Metal Works</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">LAXMI METAL WORKS - EQUIPMENT</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="flex items-center space-x-2 p-2 sm:p-2">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Manufacturing Equipment</h2>
          <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
            Advanced machinery and equipment that ensures the highest quality standards 
            for precision engineering and heavy component manufacturing.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Settings className="text-blue-300" size={24} />
            <span className="text-lg">Precision Engineering Excellence</span>
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
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Need Custom Engineering Solutions?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Our advanced equipment can handle your most complex precision engineering requirements.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">Get Quote</Button>
        </div>
      </section>
    </div>
  );
};

export default LaxmiMetalWorksEquipment; 