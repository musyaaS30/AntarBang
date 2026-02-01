import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaChevronDown,
  FaGlobe,
  FaBars,
  FaShippingFast,
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { IoFlash } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Layanan", id: "services" },
    { label: "Cara Kerja", id: "how-it-works" },
    { label: "Harga", id: "pricing" },
    { label: "Jangkauan", id: "coverage" },
    { label: "Testimoni", id: "testimonials" },
    { label: "Tentang", id: "about" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 right-0 
        z-50 
        transition-all duration-300
        ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white"}
      `}
      >
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
              {/* Fast & Safe Motto */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <IoFlash className="text-yellow-300 animate-pulse" />
                  <span className="font-bold text-sm">FAST</span>
                </div>
                <span className="text-white/80">&</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-bold text-sm">SAFE</span>
                </div>
                
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4">
                <span className="text-xs ml-2 text-white/90">
                  Delivery Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16 px-4">
              {/* Logo */}
              <a
                href="#home"
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                      ANTAR
                    </span>
                    <span className="text-2xl font-black text-gray-900">
                      BANG
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Express Delivery
                  </p>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      px-5 py-2 text-sm font-semibold transition-all relative
                      ${
                        activeMenu === item.label
                          ? "text-red-600"
                          : "text-gray-700 hover:text-red-500"
                      }
                    `}
                  >
                    {item.label}
                    {activeMenu === item.label && (
                      <>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-t-full"></div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
                      </>
                    )}
                  </button>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                {/* User Actions */}
                <div className="hidden sm:flex items-center gap-3">
                  <button
                    onClick={() => scrollToSection("cta")}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                  >
                    <FaShippingFast className="group-hover:rotate-12 transition-transform" />
                    Order Now
                  </button>

                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="text-gray-700" />
                  ) : (
                    <FaBars className="text-gray-700" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-28 bg-white z-40">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    py-3 px-4 text-left text-lg font-medium rounded-lg transition-all
                    ${
                      activeMenu === item.label
                        ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-6 border-t border-gray-200 space-y-4">
                <button
                  onClick={() => scrollToSection("cta")}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
                >
                  Order Now
                </button>

                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-red-300 hover:text-red-600 transition-colors">
                  Login / Register
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaPhoneAlt />
                  <span>(021) 1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaWhatsapp />
                  <span>0812-3456-7890</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;
