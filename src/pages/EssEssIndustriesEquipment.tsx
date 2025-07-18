import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EssEssIndustriesEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Vertical Machining Centre",
      description: "Advanced vertical machining centres for precision differential component manufacturing",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG"
    },
    {
      name: "Computer Numerical Control Machines", 
      description: "High-precision CNC machines for automated differential component production",
      image: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG"
    },
    {
      name: "Pneumatic Presses",
      description: "Advanced pneumatic press systems for precision component assembly and forming",
      image: "/images/pressingforming_mechanical_power_press_models.JPG"
    },
    {
      name: "Hardness Tester",
      description: "Precision hardness testing equipment for quality control and material verification",
      image: "/images/testing_and_measurement_digital_spring_testing_machine_visible_at_the_back_on_the_right_side_and_possibly_an_environmental_salt_spray_test_chamber_large_blue_machine_on_the_left.JPG"
    },
    {
      name: "Robotic Welding Machines",
      description: "Advanced robotic welding systems for precise differential component assembly",
      image: "/images/Robotic Welding Machines.jpeg"
    },
    {
      name: "SPM Machines",
      description: "Special purpose machines for custom differential component operations",
      image: "/images/SPM Machines.jpeg"
    },
    {
      name: "Laser Cutting Machine",
      description: "High-precision laser cutting for differential component manufacturing",
      image: "/images/cutting_cnc_laser_cutting_machine.JPG"
    },
    {
      name: "Induction Hardening Machine",
      description: "Advanced induction hardening for differential component durability",
      image: "/images/Induction Hardening Machine.jpeg"
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