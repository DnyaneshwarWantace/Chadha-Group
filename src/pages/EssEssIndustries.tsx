
import { Home, MapPin, Factory, Settings, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EssEssIndustries = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Differential 33\" Size", image: "/images/manufacturing__assembly_differential_assembly_table.JPG" },
    { name: "Differential 35\" Size", image: "/images/assembly_and_manufacturing_mechanical_parts_assembly_line_likely_gearboxes_or_motor_components.JPG" },
    { name: "Differential 38\" Size", image: "/images/manufacturingassembly_gearbox_or_axle_assembly_line_parts_for_transmissions_or_drive_axles.JPG" },
    { name: "Differential 42\" Size", image: "/images/automotive_manufacturingassembly_axle_assembly.JPG" },
    { name: "Handle T - Casting Version", image: "/images/Handle T - Casting Version.jpeg" },
    { name: "Handle T - Forging Version", image: "/images/Handle T - Forging Version.jpeg" },
    { name: "Neck Pipe Components", image: "/images/Neck Pipe Components.webp" }
  ];

  const machinery = [
    {
      name: "Vertical Machining Centre",
      specs: "3 units for precision machining differential components",
      image: "/images/machiningmetalworking_cnc_vertical_machining_center_vmc.JPG"
    },
    {
      name: "Computer Numerical Control Machines", 
      specs: "4 units for automated operations",
      image: "/images/machiningmanufacturing_cnc_milling_machine_computer_numerical_control_milling_machine.JPG"
    },
    {
      name: "Robotic Welding Machines",
      specs: "Automated welding operations for precision assembly", 
      image: "/images/Robotic Welding Machines.jpeg"
    },
    {
      name: "SPM Machines",
      specs: "15+ specialized purpose machines for custom operations",
      image: "/images/SPM Machines.jpeg"
    },
    {
      name: "Laser Cutting Machine",
      specs: "Precision material cutting with laser technology",
      image: "/images/cutting_cnc_laser_cutting_machine.JPG"
    },
    {
      name: "Induction Hardening Machine",
      specs: "Heat treatment for durability and precision",
      image: "/images/Induction Hardening Machine.jpeg"
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
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">ESS ESS INDUSTRIES</h1>
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
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Differential Components Excellence</h2>
              <p className="text-lg sm:text-xl mb-6 text-gray-100">
                Specialized division of Chadha Group focused on differential components 
                and precision parts. Located in Bhiwadi with advanced manufacturing 
                capabilities for automotive and industrial applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Factory className="text-gray-300" size={20} />
                  <span className="text-sm sm:text-base">Precision Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-gray-300" size={20} />
                  <span className="text-sm sm:text-base">Advanced Technology</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ess Ess Industries Facility"
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
                  onClick={() => navigate("/ess-ess-industries/products")}
                  className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Machinery & Equipment</h3>
                <Button 
                  onClick={() => navigate("/ess-ess-industries/equipment")}
                  className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800"
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
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Ready to discuss your differential component requirements?
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EssEssIndustries;
