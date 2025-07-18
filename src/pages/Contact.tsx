import { Home, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: "LAXMI METAL WORKS",
      location: "New Delhi, Delhi",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182"
    },
    {
      name: "SHRI BALAJI INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182"
    },
    {
      name: "ESS ESS INDUSTRIES",
      location: "Bhiwadi, Rajasthan",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182"
    },
    {
      name: "AFT AUTOMOTIVE",
      location: "Bhiwadi, Rajasthan",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182"
    },
    {
      name: "MRK IMPEX PRIVATE LIMITED",
      location: "Bhiwadi, Rajasthan",
      phone1: "+91 99998 84740",
      phone2: "+91 98101 33182"
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
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">CONTACT US</h1>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
            Ready to discuss your industrial manufacturing requirements? 
            Contact us today for expert solutions and personalized service.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.slice(0, 4).map((company, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                {/* Company Name */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{company.name}</h3>
                  <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
                </div>
                
                {/* Contact Numbers */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Numbers</h4>
                      <div className="space-y-1">
                        <p className="text-gray-700 font-medium">{company.phone1}</p>
                        <p className="text-gray-700 font-medium">{company.phone2}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {company.name}<br />
                        {company.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 5th Company - Centered */}
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow w-full lg:w-1/2">
              {/* Company Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{companies[4].name}</h3>
                <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
              </div>
              
              {/* Contact Numbers */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Numbers</h4>
                    <div className="space-y-1">
                      <p className="text-gray-700 font-medium">{companies[4].phone1}</p>
                      <p className="text-gray-700 font-medium">{companies[4].phone2}</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {companies[4].name}<br />
                      {companies[4].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 