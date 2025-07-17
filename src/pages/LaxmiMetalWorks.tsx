
import { Home, MapPin, Factory, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LaxmiMetalWorks = () => {
  const navigate = useNavigate();

  const products = [
    { name: "All Type of Crank Shafts", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Rolls", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG" },
    { name: "Hydraulic Cylinders", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Tie Rods", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Shafts", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Chilled Iron Ram", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Crane Wheels", image: "/images/lifting_and_material_handling_overhead_crane_also_known_as_a_bridge_crane.JPG" },
    { name: "Die Forming Components", image: "/images/molding__forming_hydraulic_press_heat_molding_press.JPG" }
  ];

  const machinery = [
    {
      name: "Conventional Lathe Machines",
      specs: "10+ units for precision turning operations",
      image: "/images/machining_metalworkingmachining_heavyduty_lathe_machine.JPG"
    },
    {
      name: "Overhead Cranes", 
      specs: "Heavy lifting and material handling",
      image: "/images/lifting_and_material_handling_overhead_crane_also_known_as_a_bridge_crane.JPG"
    },
    {
      name: "Shaper Machine",
      specs: "Surface finishing and precision shaping", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">LAXMI METAL WORKS</h1>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
              <MapPin size={16} />
              <span>New Delhi, Delhi</span>
            </div>
          </div>
          {/* Mobile address below company name */}
          <div className="flex items-center space-x-2 text-gray-600 text-sm mt-2 sm:hidden">
            <MapPin size={16} />
            <span>New Delhi, Delhi</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Precision Engineering Excellence</h2>
              <p className="text-lg sm:text-xl mb-6 text-emerald-100">
                Established division of Chadha Group specializing in precision engineering 
                and heavy components. Located in New Delhi with advanced machinery for 
                high-quality manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-blue-300" size={20} />
                  <span className="text-sm sm:text-base">50+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-blue-300" size={20} />
                  <span className="text-sm sm:text-base">Advanced Machinery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Laxmi Metal Works Facility"
                className="rounded-lg shadow-xl w-full h-48 sm:h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Machinery & Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {machinery.map((machine, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{machine.name}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{machine.specs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Ready to discuss your precision engineering requirements?
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LaxmiMetalWorks;
