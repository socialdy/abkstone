import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-[#f5f5f5] shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className="h-6 sm:h-6">
              <img
                src="/images/abkstone_logo.svg"
                alt="ABK Stone Logo"
                className="h-full"
              />
            </a>
            <a href="https://kuechenstudio-bergheim.at" className="h-12 sm:h-16">
              <img
                src="/images/me_logo_black.png"
                alt="Küchenstudio Bergheim Logo"
                className="h-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="#produkte"
              className=""
            >
              Produkte
            </a>
            <a
              href="#ueber-abk-stone"
              className=""
            >
              Über ABK Stone            
            </a>
            <a
              href="/#referenzen"
              className=""
            >
              Referenzen
            </a>
            <a href="/#beratung">
                Jetzt Beratung anfordern
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[##222222] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#222222] border-t border-gray-100 shadow-md mobile">
            <div className="flex flex-col items-start gap-4 py-6 pl-6">
              <a
                href="/#produkte"
                className="uppercase transition-all"
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-abk-stone"
                className=" uppercase transition-all"
                onClick={toggleMobileMenu}
              >
                Über ABK Stone
              </a>
              <a
                href="/#referenzen"
                className=" uppercase transition-all"
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung" className="uppercase transition-all">
                Jetzt Beratung anfordern
            </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
