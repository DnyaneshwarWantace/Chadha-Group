
import { Home, MapPin, Factory, Cpu, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MrkImpex = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Industrial Crankshafts", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mechanical Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG" },
    { name: "Hydraulic Cylinders", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Shaft for Presses", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Manifold for Hydraulic Presses", image: "/images/moldingpressing_hydraulicmechanical_press_machine.JPG" },
    { name: "Die Block and Tie Rods", image: "/images/metal_formingpressing_mechanical_power_press_labeled_lgm200_and_ocp160.JPG" },
    { name: "Sheet Metal Components", image: "/images/cutting_cnc_plasma_cutting_machine.JPG" },
    { name: "Cast Iron Mould Manufacturing", image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG" },
    { name: "Forming Tools", image: "/images/molding__forming_hydraulic_press_heat_molding_press.JPG" }
  ];

  const machinery = [
    {
      name: "Conventional Lathe Machines",
      specs: "40+ units for various turning operations",
      image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG"
    },
    {
      name: "Vertical Machining Centre (KAFO3151)", 
      specs: "X3000, Y5000, Z1400, Loading Capacity 22 Tons",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG"
    },
    {
      name: "CNC Vertical Turning Lathe (TOS German)",
      specs: "Turning Dia 2200MM, Z-2000mm - German precision", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Roll Grinder (TOS German)",
      specs: "Job Capacity 900X5000MM - Precision roll grinding",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "ELGA Milling Machine",
      specs: "Table Size 1250X8500MM - Large component machining",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bandsaw Cutting Machines",
      specs: "7 units for material cutting and preparation",
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
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <Home size={20} />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">MRK IMPEX PRIVATE LIMITED</h1>
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
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Advanced CNC Manufacturing</h2>
              <p className="text-lg sm:text-xl mb-6 text-gray-100">
                Largest manufacturing unit of Chadha Group featuring advanced CNC machining 
                and precision manufacturing. German-made machinery ensures highest quality 
                standards in industrial component production.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-gray-300" size={20} />
                  <span className="text-sm sm:text-base">Largest Manufacturing Unit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="text-gray-300" size={20} />
                  <span className="text-sm sm:text-base">German CNC Technology</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MRK Impex Facility"
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
                  onClick={() => navigate("/mrk-impex/products")}
                  className="flex items-center space-x-2 bg-black hover:bg-gray-800"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Advanced Machinery & Equipment</h3>
                <Button 
                  onClick={() => navigate("/mrk-impex/equipment")}
                  className="flex items-center space-x-2 bg-black hover:bg-gray-800"
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
      <section className="py-12 sm:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Ready to discuss your precision manufacturing requirements?
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MrkImpex;
