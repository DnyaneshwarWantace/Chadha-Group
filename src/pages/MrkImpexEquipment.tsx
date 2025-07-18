import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MrkImpexEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "CNC Machining Centers",
      description: "Advanced CNC machining centers for precision component manufacturing",
      image: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG"
    },
    {
      name: "X 5000 Y 3000 Vertical Machine Center",
      description: "Large-scale vertical machining center with X5000 Y3000 work envelope for oversized components",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG"
    },
    {
      name: "Precision Lathe Machines", 
      description: "High-precision lathe machines for complex turning operations",
      image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG"
    },
    {
      name: "Surface Grinding Machines",
      description: "Precision surface grinding machines for component finishing", 
      image: "/images/machining_cnc_machining_cnc_milling_machine_model.JPG"
    },
    {
      name: "Quality Testing Equipment",
      description: "Advanced quality testing and measurement equipment",
      image: "/images/testing_and_measurement_digital_spring_testing_machine_visible_at_the_back_on_the_right_side_and_possibly_an_environmental_salt_spray_test_chamber_large_blue_machine_on_the_left.JPG"
    },
    {
      name: "Material Handling Systems",
      description: "Automated material handling and conveyor systems",
      image: "/images/conveying_and_sorting_vibratory_feeder_conveyor.JPG"
    },
    {
      name: "Welding Equipment",
      description: "Advanced welding equipment for precision component assembly",
      image: "/images/welding_arc_welding_machine.JPG"
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