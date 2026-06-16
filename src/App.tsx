/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Receipt,
  FileSpreadsheet,
  Calculator,
  Users,
  Briefcase,
  Scale,
  TrendingUp,
  Laptop,
  Building,
  Factory,
  HeartPulse,
  DraftingCompass,
  ShoppingCart,
  Award,
  ChevronDown,
  CheckCircle2,
  Calendar,
  PhoneCall,
  ChevronRight,
  Info,
  Star,
  Sparkles
} from "lucide-react";

// Types & Data
import { Service } from "./types";
import { SERVICES, TEAM_MEMBERS, TESTIMONIALS, INDUSTRIES, FAQS } from "./data";

// Components
import SEO from "./components/SEO";
import Navigation from "./components/Navigation";
import TaxCalculator from "./components/TaxCalculator";
import BlogCMS from "./components/BlogCMS";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Local image generation reference import
const heroImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=800";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeFaq, setActiveFaq] = useState<string | null>("faq-1");

  // Dynamic intersection observer to update navbar active state as user scrolls
  useEffect(() => {
    const sections = ["home", "about", "services", "team", "blog", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Safe SVG rendering for Lucide Icon aliases
  const renderServiceIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "ReceiptIndianRupee": return <Receipt className={className} />;
      case "FilePercent": return <FileSpreadsheet className={className} />;
      case "Calculator": return <Calculator className={className} />;
      case "Users": return <Users className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "Scale": return <Scale className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      default: return <Calculator className={className} />;
    }
  };

  const renderIndustryIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "Laptop": return <Laptop className={className} />;
      case "Building": return <Building className={className} />;
      case "Factory": return <Factory className={className} />;
      case "HeartPulse": return <HeartPulse className={className} />;
      case "DraftingCompass": return <DraftingCompass className={className} />;
      case "ShoppingCart": return <ShoppingCart className={className} />;
      default: return <Building className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1DE] relative text-[#4E220F]">
      {/* HTML Structured Schema Helper */}
      <SEO
        title="KGKP Consultancy - Financial & Tax Advisors"
        description="KGKP Consultancy led by CA. Anil K.P. provides premium statutory audit, direct & indirect taxation, accounting compliance, business registrations and certifications in Bengaluru."
      />

      {/* Sticky Header Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="relative min-h-[90vh] py-16 lg:py-24 flex items-center justify-center bg-[#F7F1DE] overflow-hidden border-b-2 border-[#9D6638]"
        >
          {/* Faded Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#9D6638_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.25]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Brand Message and Value block */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#4E220F]/10 border-l-4 border-[#9D6638] text-[#4E220F] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#9D6638]" /> Managed By CA. Anil K.P.
                </div>

                <h1 className="clamp-title font-serif font-black text-[#4E220F] tracking-tight leading-none uppercase">
                  Where Knowledge<br />
                  <span className="text-[#9D6638] italic">Creates Confidence.</span>
                </h1>

                <p className="max-w-2xl text-sm md:text-base text-slate-700 leading-relaxed font-sans mx-auto lg:mx-0">
                  KGKP Consultancy oversees institutional statutory audits, structured direct & indirect taxation, partnership/corporate inclusions, bank projects & projections with unmatched precision and trust.
                </p>

                {/* Direct CTA cluster */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="bg-[#9D6638] text-white hover:bg-[#4E220F] px-6 py-3.5 font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center gap-2 cursor-pointer border border-[#9D6638]"
                  >
                    <PhoneCall className="w-4 h-4" /> Schedule Advisory Briefing
                  </button>
                  <button
                    onClick={() => handleNavigate("services")}
                    className="bg-white border border-[#9D6638]/40 text-[#4E220F] hover:bg-[#F7F1DE] px-6 py-3.5 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    Explore Our Portfolios <ChevronRight className="w-4 h-4 text-[#9D6638]" />
                  </button>
                </div>

                {/* Mini Stat row inside Hero */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#9D6638]/20 mt-8 max-w-lg mx-auto lg:mx-0">
                  <div className="border-r border-[#9D6638]/20 pr-4">
                    <span className="block text-2xl md:text-3xl font-bold font-serif text-[#4E220F]">10+</span>
                    <span className="text-[10px] text-[#4E220F]/70 font-bold uppercase tracking-widest">Sectors Serviced</span>
                  </div>
                  <div className="border-r border-[#9D6638]/20 pr-4">
                    <span className="block text-2xl md:text-3xl font-bold font-serif text-[#4E220F]">100%</span>
                    <span className="text-[10px] text-[#4E220F]/70 font-bold uppercase tracking-widest">ICAI Compliant</span>
                  </div>
                  <div>
                    <span className="block text-2xl md:text-3xl font-bold font-serif text-[#4E220F]">Yelahanka</span>
                    <span className="text-[10px] text-[#4E220F]/70 font-bold uppercase tracking-widest">Executive Hub</span>
                  </div>
                </div>

              </div>

              {/* Boardroom Illustration Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 w-full border border-[#9D6638]/30 shadow-2xl aspect-[4/3] bg-white">
                  <img
                    src={heroImg}
                    alt="KGKP Consultancy Executive Consulting Room"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4E220F]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white bg-[#4E220F]/95 p-4 border-l-4 border-[#9D6638] shadow-lg">
                    <p className="text-[10px] font-mono tracking-widest text-[#B0BA99] uppercase font-bold">KGKP Bengaluru HQ</p>
                    <p className="text-xs text-slate-200 italic leading-tight mt-1">
                      &ldquo;Our vision is anchored in precise computational bookkeeping and direct legal assurance.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Aesthetic offset bounding frame */}
                <div className="absolute -inset-2 bg-[#9D6638] -z-10 translate-x-4 translate-y-4 opacity-30 blur-xs hidden sm:block" />
              </div>

            </div>
          </div>
        </section>

        {/* ================= FIRM INTRODUCTION ================= */}
        <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Vision Card details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-[#4E220F] text-[#F7F1DE] p-8 border-t-4 border-[#9D6638] space-y-6 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9D6638]/10 rounded-full translate-x-12 -translate-y-12" />
                  
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#B0BA99] font-bold block">Consolidated Mission</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight uppercase">
                    Fostering administrative confidence through elite compliance.
                  </h3>
                  
                  <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
                    <p>
                      KGKP Consultancy was established to address the comprehensive compliance and secretarial needs of growing businesses and established corporate houses alike.
                    </p>
                    <p>
                      Our foundational strategy prioritizes responsive timelines, accurate ledger classification, and complete statutory integrity.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex gap-4 items-center">
                      <div className="bg-white/5 px-4 py-2 text-center border border-white/10">
                        <span className="block text-sm font-black text-[#9D6638]">ITR</span>
                        <span className="text-[9px] text-[#B0BA99] font-bold uppercase tracking-wider">Direct Tax filings</span>
                      </div>
                      <div className="bg-white/5 px-4 py-2 text-center border border-white/10">
                        <span className="block text-sm font-black text-[#9D6638]">GST</span>
                        <span className="text-[9px] text-[#B0BA99] font-bold uppercase tracking-wider">Indirect Audit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Why Choose Us text layout */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block mb-1">Foundational Pillars</span>
                  <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Why Corporate Houses Appoint KGKP</h2>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  Financial mechanics form the bedrock of any successful company structure. Under CA. Anil K.P., we evaluate accounting protocols, restructure fiscal systems to mitigate statutory audits, and manage ongoing ROC compliances seamlessly.
                </p>

                {/* Staggered core values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#F7F1DE] text-[#4E220F] p-2 mt-0.5 border border-[#9D6638]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#9D6638]" id="wc-pill-1" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#4E220F] tracking-wider uppercase">Senior Advisories Only</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        All compliance workflows are guided and finalized directly by experienced professionals with deep statutory expertise.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="bg-[#F7F1DE] text-[#4E220F] p-2 mt-0.5 border border-[#9D6638]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#9D6638]" id="wc-pill-2" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#4E220F] tracking-wider uppercase">Absolute Data Discretion</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        Your ledgers and financial declarations are held inside strictly authorized and isolated systems with continuous tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="bg-[#F7F1DE] text-[#4E220F] p-2 mt-0.5 border border-[#9D6638]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#9D6638]" id="wc-pill-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#4E220F] tracking-wider uppercase">Advanced Computational Tools</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        We leverage advanced ledger mapping to identify and rectify input credit differences before tax offices trigger routine notices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="bg-[#F7F1DE] text-[#4E220F] p-2 mt-0.5 border border-[#9D6638]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#9D6638]" id="wc-pill-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#4E220F] tracking-wider uppercase">Flat & Transparent Retainers</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        No surprise charges or unexplained costs. We structure upfront transparent milestones for complete annual retentions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section id="services" className="py-20 lg:py-24 bg-[#F7F1DE]/40 border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Direct Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Advisory & Compliance Portfolios</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Our Core Professional Services</h2>
              <div className="h-1 w-16 bg-[#9D6638] mx-auto" />
              <p className="text-xs text-slate-600 max-w-xl mx-auto font-sans">
                Review our comprehensive services portfolio sourced directly from executive mandates and statutory schedules.
              </p>
            </div>

            {/* Grid display of Services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:border-[#9D6638] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="bg-[#4E220F] text-[#9D6638] p-3 w-fit group-hover:bg-[#9D6638] group-hover:text-white transition-colors border-b border-r border-[#9D6638]">
                      {renderServiceIcon(service.icon, "w-5 h-5")}
                    </div>
                    <h3 className="text-sm font-bold text-[#4E220F] tracking-wider uppercase line-clamp-1">{service.title}</h3>
                    <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">{service.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-5">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#9D6638] hover:text-[#4E220F] transition-all inline-flex items-center gap-1 cursor-pointer focus:outline-none uppercase tracking-wider"
                    >
                      Audit Details &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Dynamic Service Overview Detailed Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white rounded-none max-w-lg w-full p-6 md:p-8 shadow-2xl relative border-t-4 border-[#9D6638] border-r border-b border-l border-slate-200"
              >
                {/* Close trigger */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-[#4E220F] p-1.5 transition-colors focus:outline-none text-xl"
                >
                  &times;
                </button>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#4E220F] text-[#9D6638] p-3 border border-[#9D6638]">
                      {renderServiceIcon(selectedService.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#9D6638] uppercase font-bold">Advisory Details</span>
                      <h3 className="text-base font-black text-[#4E220F] uppercase tracking-wide">{selectedService.title}</h3>
                    </div>
                  </div>

                  <div className="border-b border-slate-150 pb-3">
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{selectedService.longDesc}</p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#4E220F] uppercase tracking-wider block">Portfolio Inclusions:</span>
                    <ul className="space-y-2">
                      {selectedService.features.map((feat, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="w-4 h-4 text-[#B0BA99] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Link button inside modal */}
                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        handleNavigate("contact");
                      }}
                      className="w-full bg-[#4E220F] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#9D6638] transition-all cursor-pointer border border-[#4E220F]"
                    >
                      Consult on this portfolio
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-none border border-slate-200 hover:bg-slate-100 transition-colors focus:outline-none"
                    >
                      Close Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ================= INDUSTRIES SERVED ================= */}
        <section className="py-20 bg-white border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Description */}
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Sector Expertise</span>
                  <h2 className="clamp-h2 font-serif font-black text-[#4E220F] leading-none mt-1 uppercase">Sectors We Service Prominently</h2>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Different sectors function under unique regulatory structures and tax environments. We offer tailored competence across various industries.
                </p>
                <div className="bg-[#F7F1DE]/70 p-4 border border-[#9D6638]/30 flex gap-3 items-start">
                  <Info className="w-4 h-4 text-[#9D6638] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-700 leading-snug">
                    Can&apos;t spot your specific industry? Our advisors handle compliances for dozens of custom MSMEs and services outfits. Drop an introductory consultation query.
                  </p>
                </div>
              </div>

              {/* Right Column Bento Grids */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {INDUSTRIES.map((ind) => (
                  <div
                    key={ind.id}
                    className="p-5 bg-[#F7F1DE]/20 border border-slate-200 hover:border-[#9D6638] space-y-2 hover:shadow-md transition-all duration-300 rounded-none"
                  >
                    <div className="bg-[#4E220F] text-[#9D6638] p-2.5 w-fit border-b border-r border-[#9D6638]">
                      {renderIndustryIcon(ind.icon, "w-4 h-4")}
                    </div>
                    <h4 className="text-xs font-bold text-[#4E220F] tracking-wider uppercase">{ind.name}</h4>
                    <p className="text-[11px] text-[#4E220F]/80 leading-relaxed">{ind.description}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ================= PARTNER PROFILES ================= */}
        <section id="team" className="py-20 lg:py-24 bg-[#F7F1DE]/40 border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Advisory Board</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Our Managing Specialist</h2>
              <div className="h-1 w-16 bg-[#9D6638] mx-auto" />
              <p className="text-xs text-slate-600 max-w-xl mx-auto">
                Consult directly with a licensed Chartered Accountant holding extensive expertise in direct corporate taxation, company law, and banking projections.
              </p>
            </div>

            <div className="flex justify-center">
              {TEAM_MEMBERS.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-none overflow-hidden border border-slate-200 shadow-sm hover:border-[#9D6638] hover:shadow-lg transition-all flex flex-col justify-between max-w-md w-full"
                >
                  <div className="space-y-5">
                    {/* Portrait Frame */}
                    <div className="relative h-64 bg-slate-100 border-b border-slate-100">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4E220F]/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-[#9D6638] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 border border-[#4E220F]">
                          {partner.qualification}
                        </span>
                      </div>
                    </div>

                    {/* Partner Bio Info */}
                    <div className="px-6 space-y-3.5">
                      <div>
                        <h3 className="text-base font-serif font-bold text-[#4E220F] uppercase tracking-tight">{partner.name}</h3>
                        <p className="text-xs text-[#9D6638] font-bold uppercase tracking-wider">{partner.role}</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {partner.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-5 mt-4 border-t border-slate-150">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-500 text-[10px]">Consult: <strong>{partner.email}</strong></span>
                      <button
                        onClick={() => handleNavigate("contact")}
                        className="text-xs font-bold text-[#4E220F] hover:text-[#9D6638] uppercase tracking-wider transition-colors focus:outline-none"
                      >
                        Book Briefing &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section className="py-20 bg-white border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Client Safehouse Feedback</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Trusted by growing Bangalore businesses</h2>
              <div className="h-1 w-16 bg-[#9D6638] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="bg-[#F7F1DE]/30 border border-slate-200 p-6 rounded-none flex flex-col justify-between hover:border-[#9D6638] transition-all"
                >
                  <div className="space-y-4">
                    {/* Star array */}
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      &ldquo;{test.feedback}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 mt-5 flex gap-2.5 items-center">
                    <div className="bg-[#4E220F] text-white w-8 h-8 rounded-none flex items-center justify-center font-bold font-serif text-xs border border-[#9D6638]">
                      {test.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#4E220F] uppercase tracking-wider">{test.clientName}</h4>
                      <p className="text-[10px] text-slate-500 leading-none mt-0.5">{test.designation}, <strong>{test.companyName}</strong></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= INTERACTIVE CALCULATORS ================= */}
        <section className="py-20 lg:py-24 bg-[#4E220F] text-white/90 relative overflow-hidden border-b-2 border-[#9D6638]">
          <div className="absolute inset-0 bg-[radial-gradient(#9D6638_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.14]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B0BA99] font-bold block">Tax Optimization Sandbox</span>
              <h2 className="clamp-h2 font-serif font-black text-white uppercase tracking-tight">Instant Estimation Suite</h2>
              <p className="text-xs text-slate-300 max-w-lg mx-auto">
                Compare direct and indirect taxes, audit regimes and estimate GST percentages with instant computations.
              </p>
            </div>

            {/* Embedded custom multi-calculator */}
            <TaxCalculator />
          </div>
        </section>

        {/* ================= BLOG / INSIGHTS / CMS ================= */}
        <section id="blog" className="py-20 lg:py-24 bg-white border-b border-[#9D6638]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Legislation & Tax Updates</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Compliance & Accounting Insights</h2>
              <div className="h-1 w-16 bg-[#9D6638] mx-auto" />
              <p className="text-xs text-slate-600 max-w-xl mx-auto font-sans">
                Stay updated on vital Direct and Indirect tax changes, circular notifications, and MCA secretarial guidelines.
              </p>
            </div>

            {/* CMS component with filter and search */}
            <BlogCMS />
          </div>
        </section>

        {/* ================= FAQ ACCORDION SECTION ================= */}
        <section className="py-20 bg-[#F7F1DE]/40 border-b border-[#9D6638]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Clarifications Hub</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Frequently Asked Questions</h2>
            </div>

            {/* Accordion List container */}
            <div className="bg-white rounded-none border border-slate-200 divide-y divide-slate-150 overflow-hidden shadow-sm">
              {FAQS.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div key={faq.id} className="transition-all">
                    <h2>
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                        className="w-full text-left px-5 py-4.5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer group"
                      >
                        <span className="text-xs font-bold text-[#4E220F] uppercase tracking-wider group-hover:text-[#9D6638] transition-colors leading-relaxed pr-4 font-sans">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isOpen ? "rotate-180 text-[#9D6638]" : ""}`}
                        />
                      </button>
                    </h2>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed bg-slate-50">
                            <p className="bg-white p-4 border border-slate-150 rounded-none text-slate-600">
                              {faq.answer}
                            </p>
                            <span className="text-[9px] text-[#9D6638] font-bold font-mono tracking-wider block mt-2.5 uppercase">
                              Category: {faq.category}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= CONTACT SECTION & FORM ================= */}
        <section id="contact" className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#9D6638] font-bold block">Partner Consultation Desk</span>
              <h2 className="clamp-h2 font-serif font-black text-[#4E220F] uppercase tracking-tight">Initiate Your Advisory Consultation</h2>
              <div className="h-1 bg-[#9D6638] w-16 mx-auto" />
              <p className="text-xs text-slate-650 max-w-xl mx-auto font-sans">
                Set up an introductory briefing regarding statutory audits, direct tax schedules, or company registrations.
              </p>
            </div>

            {/* Structured Contact + Google Maps component */}
            <ContactForm />
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
