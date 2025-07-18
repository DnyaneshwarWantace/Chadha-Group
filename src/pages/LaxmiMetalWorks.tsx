
import { Home, MapPin, Factory, Settings, ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LaxmiMetalWorks = () => {
  const navigate = useNavigate();

  const products = [
    { name: "All Type of Crank Shafts", image: "/images/All Type of Crank Shafts.jpeg" },
    { name: "Rolls", image: "/images/Rolls.avif" },
    { name: "Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG" },
    { name: "Hydraulic Cylinders", image: "/images/Hydraulic Cylinders.jpeg" },
    { name: "Tie Rods", image: "/images/Tie Rods.jpeg" },
    { name: "Shafts", image: "/images/Shafts.jpeg" },
    { name: "Chilled Iron Ram", image: "/images/rChilled Iron Ram.webp" },
    { name: "Crane Wheels", image: "/images/Crane Wheels.jpeg" },
    { name: "Die Forming Components", image: "/images/Die Forming Components.jpeg" }
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
      image: "/images/Shaper Machine.jpeg"
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
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">CHADHA GROUP</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-sm mt-1 sm:hidden">
                  <MapPin size={14} />
                  <span>New Delhi, Delhi</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
              <MapPin size={16} />
              <span>New Delhi, Delhi</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">LAXMI METAL WORKS</h2>
              <p className="text-lg sm:text-xl mb-6 text-blue-100">
                Chadha Group's first unit established in 1968, specializes in precision engineering 
                and is equipped with a variety of high-tech machines for quality manufacturing. 
                Located in New Delhi with advanced machinery for high-quality manufacturing.
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

      {/* Products & Equipment Section - Side by Side */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Products Section */}
            <div>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Products</h3>
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
                  <Button 
                    onClick={() => navigate("/laxmi-metal-works/products")}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    See All Products
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Machinery Section */}
            <div>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Machinery & Equipment</h3>
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
                      <Button 
                        onClick={() => navigate("/laxmi-metal-works/equipment")}
                        className="w-full bg-blue-900 hover:bg-blue-800"
                      >
                        See All Equipment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open('https://wa.me/919810133182', '_blank')}
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LaxmiMetalWorks;
