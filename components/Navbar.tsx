"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-[#1B1049]");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport for hero
      const credibilityHeight = heroHeight + 400; // Credibility section height
      const problemSolutionHeight = credibilityHeight + 600; // Problem solution section height
      
      setScrolled(scrollY > 20);
      
      // Change text color based on which section is visible
      if (scrollY < heroHeight) {
        // Hero section - violet text (visible on white background)
        setTextColor("text-[#1B1049]");
      } else if (scrollY < credibilityHeight) {
        // Credibility section - dark text (visible on white background)
        setTextColor("text-[#1B1049]");
      } else if (scrollY < problemSolutionHeight) {
        // Problem solution section - dark text (visible on white background)
        setTextColor("text-[#1B1049]");
      } else {
        // Footer section - violet text (visible on white background)
        setTextColor("text-[#1B1049]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 transition-all duration-300 bg-white border-b border-[#1B1049]/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-px w-6 sm:w-8 ${textColor === "text-[#1B1049]" ? "bg-[#1B1049]" : "bg-[#1B1049]"}`} />
          <span className={`text-xs sm:text-sm font-semibold uppercase tracking-widest ${textColor} flex items-center gap-2`}>
            <Sparkles className="w-3 h-3" />
            <span className="hidden xs:inline">Codetrain</span>
            <span className="xs:hidden">CT</span>
            <span className="hidden sm:inline">Workforce</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#" className={`${textColor} hover:text-[#1B1049] transition-colors text-sm lg:text-base`}>
            Services
          </a>
          <a href="#" className={`${textColor} hover:text-[#1B1049] transition-colors text-sm lg:text-base`}>
            About
          </a>
          <a href="#" className={`${textColor} hover:text-[#1B1049] transition-colors text-sm lg:text-base`}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor} hover:text-[#1B1049] transition-colors`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#1B1049]/20">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-[#1B1049] hover:text-[#1B1049]/80 transition-colors py-2 text-sm">
              Services
            </a>
            <a href="#" className="block text-[#1B1049] hover:text-[#1B1049]/80 transition-colors py-2 text-sm">
              About
            </a>
            <a href="#" className="block text-[#1B1049] hover:text-[#1B1049]/80 transition-colors py-2 text-sm">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
