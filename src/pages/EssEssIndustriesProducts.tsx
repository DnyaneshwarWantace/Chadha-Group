import { Home, ArrowLeft, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EssEssIndustriesProducts = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Differential 33\" Size", image: "/images/manufacturing__assembly_differential_assembly_table.JPG", description: "Precision differential components for 33-inch applications" },
    { name: "Differential 35\" Size", image: "/images/assembly_and_manufacturing_mechanical_parts_assembly_line_likely_gearboxes_or_motor_components.JPG", description: "High-quality differential assemblies for 35-inch systems" },
    { name: "Differential 38\" Size", image: "/images/manufacturingassembly_gearbox_or_axle_assembly_line_parts_for_transmissions_or_drive_axles.JPG", description: "Advanced differential components for 38-inch applications" },
    { name: "Differential 42\" Size", image: "/images/automotive_manufacturingassembly_axle_assembly.JPG", description: "Heavy-duty differential assemblies for 42-inch systems" },
    { name: "Handle T - Casting Version", image: "/images/Handle T - Casting Version.jpeg", description: "Precision-cast T-handle components for industrial applications" },
    { name: "Handle T - Forging Version", image: "/images/Handle T - Forging Version.jpeg", description: "Forged T-handle components for enhanced strength and durability" },
    { name: "Neck Pipe Components", image: "/images/Neck Pipe Components.webp", description: "Precision neck pipe components for fluid transfer systems" },
    
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
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">ESS ESS INDUSTRIES - PRODUCTS</h1>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Complete Product Range</h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 max-w-3xl mx-auto">
            Comprehensive range of differential components and precision parts designed for 
            automotive and industrial applications with unmatched quality and reliability.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Factory className="text-gray-300" size={24} />
            <span className="text-lg">Differential & Precision Components</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Interested in Our Products?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
            Get in touch with us to discuss your specific differential component requirements and get custom quotes.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Contact Us Today</Button>
        </div>
      </section>
    </div>
  );
};

export default EssEssIndustriesProducts; 