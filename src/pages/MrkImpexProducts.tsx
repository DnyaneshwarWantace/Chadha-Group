import { Home, ArrowLeft, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MrkImpexProducts = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Industrial Crankshafts", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Precision-engineered industrial crankshafts for heavy machinery applications" },
    { name: "Mechanical Gears", image: "/images/cutting__machining_gear_hobbing_machine.JPG", description: "High-precision mechanical gears manufactured using advanced hobbing technology" },
    { name: "Hydraulic Cylinders", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Custom hydraulic cylinders for industrial and automotive applications" },
    { name: "Shaft for Presses", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Specialized shafts designed for hydraulic and mechanical press operations" },
    { name: "Manifold for Hydraulic Presses", image: "/images/moldingpressing_hydraulicmechanical_press_machine.JPG", description: "Precision hydraulic manifolds for efficient fluid distribution in press systems" },
    { name: "Die Block and Tie Rods", image: "/images/metal_formingpressing_mechanical_power_press_labeled_lgm200_and_ocp160.JPG", description: "Heavy-duty die blocks and tie rods for mechanical power presses" },
    { name: "Sheet Metal Components", image: "/images/cutting_cnc_plasma_cutting_machine.JPG", description: "Precision sheet metal components manufactured using advanced CNC plasma cutting" },
    { name: "Cast Iron Mould Manufacturing", image: "/images/manufacturing__castingdie_casting_die_casting_machine.JPG", description: "High-quality cast iron moulds for die casting and manufacturing processes" },
    { name: "Forming Tools", image: "/images/molding__forming_hydraulic_press_heat_molding_press.JPG", description: "Specialized forming tools for precision metal forming and molding operations" }
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
              <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">MRK IMPEX - PRODUCTS</h1>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Complete Product Range</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
            Comprehensive range of precision-engineered industrial components manufactured 
            using advanced German CNC technology and highest quality standards.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Factory className="text-gray-300" size={24} />
            <span className="text-lg">Advanced CNC Manufacturing Excellence</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  <Button className="w-full mt-4 bg-black hover:bg-gray-800">
                    Learn More
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Interested in Our Products?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Get in touch with us to discuss your specific requirements and get custom quotes.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MrkImpexProducts; 