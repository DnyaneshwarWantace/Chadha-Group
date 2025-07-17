import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide arrow when user scrolls down or reaches bottom
      if (scrollTop > 100 || scrollTop + windowHeight >= documentHeight - 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <div className="animate-bounce bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
} 