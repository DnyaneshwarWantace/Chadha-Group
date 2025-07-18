
import { Home, MapPin, Factory, Settings, ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ShriBalajiIndustries = () => {
  const navigate = useNavigate();

  const products = [
    { name: "E-Rickshaw Roof", image: "/images/e-rickshaw roof.jpeg" },
    { name: "Butterfly Components", image: "/images/Butterfly Components.jpeg" },
    { name: "Back Panel", image: "/images/download.jpeg" },
    { name: "Side Panel", image: "/images/Side Panel.jpeg" },
    { name: "Driver Box", image: "/images/Driver Box.jpeg" },
    { name: "Loader Roof", image: "/images/Loader Roof.jpeg" }
  ];

  const machinery = [
    {
      name: "Hydraulic Press (1200 ton)",
      specs: "Size 2000X4000mm - Maximum capacity, precision capabilities",
      image: "/images/Hydraulic Press (1200 ton).png"
    },
    {
      name: "Hydraulic Press (600 ton)", 
      specs: "Size 800X1400mm - Medium capacity operations",
      image: "/images/Hydraulic Press (600 ton).jpeg"
    },
    {
      name: "Robotic Plasma Machines",
      specs: "4 units for automated cutting operations", 
      image: "/images/Robotic Plasma Machines.jpeg"
    },
    {
      name: "Press Brake Machine",
      specs: "Precision bending operations",
      image: "/images/Press Brake Machine.jpeg"
    },
    {
      name: "Power Presses",
      specs: "High-speed stamping operations",
      image: "/images/pressingforming_mechanical_power_press_models.JPG"
    },
    {
      name: "Shearing Cutting Machine",
      specs: "Material preparation and cutting",
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
              <h1 className="text-xl sm:text-2xl font-bold text-green-900 leading-tight">CHADHA GROUP</h1>
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
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">SHRI BALAJI INDUSTRIES</h2>
              <p className="text-lg sm:text-xl mb-6 text-green-100">
                Shri Balaji Industries, established in 2020, is a specialized division of the Chadha Group 
                specializing in sheet metal components and drop art for three-wheelers and four-wheelers. 
                Located in Bhiwadi, it is equipped with state-of-the-art manufacturing capabilities 
                and hydraulic press facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-green-300" size={20} />
                  <span className="text-sm sm:text-base">Advanced Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-green-300" size={20} />
                  <span className="text-sm sm:text-base">Precision Engineering</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Shri Balaji Industries Facility"
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
                    onClick={() => navigate("/shri-balaji-industries/products")}
                    className="w-full bg-green-900 hover:bg-green-800"
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
                        onClick={() => navigate("/shri-balaji-industries/equipment")}
                        className="w-full bg-green-900 hover:bg-green-800"
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
      <section className="py-12 sm:py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            Ready to discuss your sheet metal component requirements?
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open('https://wa.me/919999884740', '_blank')}
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShriBalajiIndustries;
