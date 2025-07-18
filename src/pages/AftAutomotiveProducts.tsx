import { Home, ArrowLeft, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AftAutomotiveProducts = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Brake Shoes for 2&3 Wheelers", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "High-quality brake shoes designed for 2 and 3 wheeler vehicles" },
    { name: "Disc Pads", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Precision-engineered disc brake pads for optimal stopping performance" },
    { name: "Clutch Plates", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Durable clutch plates for smooth power transmission in vehicles" },
    { name: "Brake & Clutch Levers", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Precision-engineered brake and clutch levers for optimal control and smooth operation" },
    { name: "Brake Drum Assembly", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Complete brake drum assemblies for reliable braking systems" }
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
                onClick={() => navigate("/aft-automotive")}
                className="flex items-center space-x-2 p-2 sm:p-2"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to AFT Automotive</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">AFT AUTOMOTIVE - PRODUCTS</h1>
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
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Complete Product Range</h2>
          <p className="text-lg sm:text-xl mb-6 text-slate-100 max-w-3xl mx-auto">
            Comprehensive range of automotive components and brake systems designed for 
            safety, reliability, and performance excellence in 2 & 3 wheeler industries.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Factory className="text-slate-300" size={24} />
            <span className="text-lg">Automotive Safety & Performance</span>
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
                  <Button className="w-full mt-4 bg-slate-900 hover:bg-slate-800">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Interested in Our Products?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-100">
            Get in touch with us to discuss your specific automotive requirements and get custom quotes.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AftAutomotiveProducts; 