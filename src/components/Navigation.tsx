/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Landmark, PhoneCall } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "team", label: "Team" },
    { id: "blog", label: "Insights" },
    { id: "contact", label: "Contact Us" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#4E220F] shadow-lg border-b-2 border-[#9D6638] py-3"
            : "bg-[#4E220F]/95 backdrop-blur-sm border-b border-[#9D6638]/30 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Firm Brand Logo Header */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleItemClick("home")}
              id="brand-logo-trigger"
            >
              <div className="bg-[#9D6638] text-white p-2.5 rounded group-hover:bg-white transition-colors">
                <Landmark className="w-5 h-5 text-white group-hover:text-[#4E220F]" />
              </div>
              <div>
                <span className="text-sm tracking-widest uppercase font-serif font-black text-white block leading-none">
                  KGKP CONSULTANCY
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#B0BA99] font-bold font-mono block mt-1">
                  CA. ANIL K.P.
                </span>
              </div>
            </div>

            {/* Desktop Navigation Menu Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative text-xs uppercase font-bold tracking-wider transition-colors py-2 focus:outline-none cursor-pointer ${
                    activeSection === item.id
                      ? "text-[#B0BA99]"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9D6638]" />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Phone block */}
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-xs font-mono text-slate-300 font-bold hidden xl:inline">
                📞 Tel: +91 63606 46164
              </span>
              <button
                onClick={() => handleItemClick("contact")}
                className="bg-[#9D6638] text-white hover:bg-[#B0BA99] hover:text-[#4E220F] px-5 py-2.5 rounded text-xs font-black tracking-wider uppercase transition-all flex items-center gap-2 shadow cursor-pointer border border-[#9D6638]"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Direct Call Back
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#B0BA99] p-1.5 focus:outline-none"
                aria-label="Toggle navigation drawer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#4E220F] border-b border-[#9D6638] shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="px-4 pt-3 pb-6 space-y-2.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors flex justify-between items-center ${
                    activeSection === item.id
                      ? "bg-[#9D6638]/10 text-[#B0BA99]"
                      : "text-slate-200 hover:bg-[#4E220F]/50 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <span className="w-1.5 h-1.5 bg-[#9D6638] rounded-full" />}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-700 flex flex-col gap-3.5 px-4">
                <span className="text-[11px] font-mono font-bold text-slate-300 text-center">
                  📞 Tel: +91 63606 46164
                </span>
                <button
                  onClick={() => handleItemClick("contact")}
                  className="w-full bg-[#9D6638] text-white text-center py-3 rounded text-xs font-black tracking-widest uppercase transition-colors hover:bg-white hover:text-[#4E220F]"
                >
                  Schedule Callback
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacing holder */}
      <div className="h-16 w-full" />
    </>
  );
}
