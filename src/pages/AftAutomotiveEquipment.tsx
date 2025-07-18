import { Home, ArrowLeft, Settings, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AftAutomotiveEquipment = () => {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "Pressure Die Casting Machines",
      description: "Advanced pressure die casting machines for precision aluminum component manufacturing",
      image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG"
    },
    {
      name: "Industrial Furnaces", 
      description: "High-temperature industrial furnaces for metal melting and heat treatment processes",
      image: "/images/heat_treatment__surface_treatment_industrial_oven_or_baking_furnace.JPG"
    },
    {
      name: "Industrial Oven",
      description: "Advanced industrial ovens for heat treatment and curing processes",
      image: "/images/heat_treatment_heat_treatment_furnace_or_oven.JPG"
    },
    {
      name: "Forming Hydraulic Press",
      description: "Precision hydraulic presses for final forming operations of automotive components", 
      image: "/images/pressingforming_hydraulic_press_machine.JPG"
    },
    {
      name: "Shot Blasting Machines",
      description: "Advanced shot blasting systems for surface preparation and finishing",
      image: "/images/surface_treatment__coating_powder_coating_booth.JPG"
    },
    {
      name: "SPM Grinding Machines",
      description: "Specialized grinding machines for precision automotive component finishing",
      image: "/images/machining_cnc_machining_cnc_milling_machine_model.JPG"
    },
    {
      name: "Powder Coating Equipment",
      description: "Advanced powder coating systems for durable surface finishing",
      image: "/images/coating__surface_treatment_powder_coating_booth.JPG"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/aft-automotive")} className="flex items-center space-x-2 p-2 sm:p-2">
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to AFT Automotive</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">AFT AUTOMOTIVE - EQUIPMENT</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="flex items-center space-x-2 p-2 sm:p-2">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Advanced Manufacturing Equipment</h2>
          <p className="text-lg sm:text-xl mb-6 text-slate-100 max-w-3xl mx-auto">
            State-of-the-art automotive manufacturing equipment that ensures the highest 
            quality standards for automotive components and brake systems.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Settings className="text-slate-300" size={24} />
            <span className="text-lg">Automotive Manufacturing Excellence</span>
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
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Need Custom Automotive Solutions?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-100">
            Our advanced equipment can handle your most complex automotive manufacturing requirements.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">Get Quote</Button>
        </div>
      </section>
    </div>
  );
};

export default AftAutomotiveEquipment; 