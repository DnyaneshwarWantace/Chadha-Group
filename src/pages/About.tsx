import { Home, ArrowLeft, Factory, Settings, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: "LAXMI METAL WORKS",
      location: "New Delhi, Delhi",
      established: "1968",
      specialization: "Precision Engineering",
      description: "Chadha Group's first unit established in 1968, specializes in precision engineering and is equipped with a variety of high-tech machines for quality manufacturing. Located in New Delhi with advanced machinery for high-quality manufacturing.",
      products: "Crank Shafts, Gears, Hydraulic Components, Rolls, Crane Wheels, Die Forming Components"
    },
    {
      name: "SHRI BALAJI INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2020",
      specialization: "Sheet Metal Components",
      description: "Shri Balaji Industries, established in 2020, is a specialized division of the Chadha Group specializing in sheet metal components and drop art for three-wheelers and four-wheelers. Located in Bhiwadi, it is equipped with state-of-the-art manufacturing capabilities and hydraulic press facilities.",
      products: "E-Rickshaw Roof, Butterfly Components, Driver Box, Side Panel, Loader Roof"
    },
    {
      name: "ESS ESS INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      established: "2022",
      specialization: "Differential Components",
      description: "Established in 2022, is a specialized unit of the Chadha Group focusing on precision machining and assembly of drivetrain components, differential axles for three-wheelers, rugged rear axles, independent rear suspension systems, and handle brackets for both two-wheelers and three-wheelers.",
      products: "Differential Components, Handle Brackets, Drivetrain Components, Suspension Systems"
    },
    {
      name: "AFT AUTOMOTIVE",
      location: "Bhiwadi, Rajasthan",
      established: "2019",
      specialization: "Auto Components",
      description: "Specialized division of Chadha Group focused on automotive components and brake systems. Located in Bhiwadi with advanced manufacturing capabilities for 2 & 3 wheeler industries.",
      products: "Brake Shoes, Disc Pads, Clutch Plates, Brake & Clutch Levers, Brake Drum Assembly"
    },
    {
      name: "MRK IMPEX PRIVATE LIMITED",
      location: "Bhiwadi, Rajasthan",
      established: "2008",
      specialization: "Industrial Manufacturing",
      description: "Specialized division of Chadha Group focused on industrial manufacturing and precision components. Located in Bhiwadi with advanced CNC machining capabilities.",
      products: "CNC Machined Components, Precision Parts, Industrial Components"
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
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">ABOUT US</h1>
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Chadha Group</h2>
          <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
            Industrial Excellence Since 1968 - Leading manufacturer of exclusive industrial products 
            with 50+ years of expertise across diverse sectors
          </p>
        </div>
      </section>

      {/* Main Group Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Chadha Group</h3>
              <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Chadha Group is a leading industrial manufacturing conglomerate with over 50 years of excellence 
                  in precision engineering and manufacturing. Founded in 1968, we have grown from a single unit 
                  to become one of India's most trusted names in industrial manufacturing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our group operates through 5 specialized companies, each focusing on specific industrial sectors 
                  and delivering world-class products to domestic and international markets. With state-of-the-art 
                  manufacturing facilities and a team of experienced professionals, we ensure the highest quality 
                  standards in all our products.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, Chadha Group is trusted by 50+ leading industrial partners and continues to expand its 
                  capabilities while maintaining the core values of quality, innovation, and customer satisfaction 
                  that have been our foundation since 1968.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">5 Specialized Companies</h4>
                  <p className="text-gray-600">Diverse manufacturing capabilities</p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">50+ Years Experience</h4>
                  <p className="text-gray-600">Industry expertise since 1968</p>
                </div>
                
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-orange-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">50+ Industrial Partners</h4>
                  <p className="text-gray-600">Trusted by leading companies</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="text-purple-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h4>
                  <p className="text-gray-600">State-of-the-art facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our 5 Specialized Companies</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each company specializes in specific industrial sectors, delivering excellence 
              through focused expertise and advanced manufacturing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.slice(0, 4).map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{company.name}</h4>
                    <p className="text-gray-600">{company.location}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Established: {company.established}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                    {company.specialization}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {company.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Key Products:</h5>
                  <p className="text-gray-600">{company.products}</p>
                </div>

                <Button 
                  onClick={() => navigate(`/${company.name.toLowerCase().replace(/\s+/g, '-').replace('private-limited', '')}`)}
                  className="w-full bg-blue-900 hover:bg-blue-800"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          {/* 5th Company - Centered */}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow w-full lg:w-1/2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">5</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{companies[4].name}</h4>
                  <p className="text-gray-600">{companies[4].location}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Established: {companies[4].established}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                  {companies[4].specialization}
                </span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {companies[4].description}
              </p>
              
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-2">Key Products:</h5>
                <p className="text-gray-600">{companies[4].products}</p>
              </div>

              <Button 
                onClick={() => navigate(`/${companies[4].name.toLowerCase().replace(/\s+/g, '-').replace('private-limited', '')}`)}
                className="w-full bg-blue-900 hover:bg-blue-800"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Excellence</h4>
              <p className="text-blue-100">Maintaining the highest standards in all our manufacturing processes</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Customer Focus</h4>
              <p className="text-blue-100">Building long-term relationships through exceptional service</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-blue-100">Continuously improving our technology and processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 