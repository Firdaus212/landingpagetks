import { useState, useEffect } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  // Tambahkan scroll behavior smooth
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[120px] py-6 bg-white shadow-sm border-b border-[#FDA79B]">
      <div className="max-w-[1208px] h-[55px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/landingpagetks/images/iconNavbar.png" alt="Shiplab Logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">TKS</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
          <a
            href="#home"
            onClick={() => handleSetActive("home")}
            className={activeLink === "home" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleSetActive("about")}
            className={activeLink === "about" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            About
          </a>
          <a
            href="#program"
            onClick={() => handleSetActive("program")}
            className={activeLink === "program" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            Program
          </a>
          <a
            href="#registration"
            onClick={() => handleSetActive("registration")}
            className={activeLink === "registration" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            Procedure
          </a>
          <a
            href="#timeline"
            onClick={() => handleSetActive("timeline")}
            className={activeLink === "timeline" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            Timeline
          </a>        
          <a
            href="#contact"
            onClick={() => handleSetActive("contact")}
            className={activeLink === "contact" ? "text-[#FA541C]" : "hover:text-[#FA541C]"}
          >
            Contact
          </a>
        </nav>

        {/* Login & Sign Up */}
        <div className="flex items-center gap-4 text-lg font-medium">
        </div>
      </div>
    </header>
  );
}
