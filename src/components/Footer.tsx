/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Landmark, Mail, Phone, MapPin, MessageCircle, CheckCircle2, ShieldAlert } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [emailSub, setEmailSub] = useState("");
  const [subSuccess, setSubSuccess] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(true);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim() || !/\S+@\S+\.\S+/.test(emailSub)) return;

    setSubSuccess(true);
    setEmailSub("");
    setTimeout(() => setSubSuccess(false), 5000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello KGKP Consultancy, I would like to schedule an introductory consultation regarding corporate taxation/audit services.");
    window.open(`https://api.whatsapp.com/send?phone=916360646164&text=${message}`, "_blank");
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900">
      {/* Top Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-2">
            <h4 className="text-white text-base font-serif font-black tracking-wide uppercase">
              Schedule an executive advisory brief with our managing partners
            </h4>
            <p className="text-xs text-slate-400">
              No registration obligations. We will map your fiscal targets and provide competitive, transparent retainer budgets.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-start md:justify-end">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-transparent border border-[#9D6638] text-[#9D6638] hover:bg-[#9D6638] hover:text-white px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow cursor-pointer focus:outline-none"
            >
              Request Free Consultation Draft
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate("home")}>
              <div className="bg-[#9D6638] text-white p-2.5 rounded-lg">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-sm tracking-widest uppercase font-serif font-black text-white block leading-none">
                  KGKP CONSULTANCY
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#B0BA99] font-semibold font-mono block mt-1">
                  CA. ANIL K.P.
                </span>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              KGKP Consultancy is a premier financial and tax advisory specializing in statutory audits, corporate taxation, accounting compliance, company registrations, and certificates. Established with absolute integrity, knowledge, and trust.
            </p>

            <div className="space-y-2 text-xs font-mono">
              <span className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-[#9D6638] shrink-0 mt-0.5" /> <span>#2073-B, Devapriya Palace, 4th Cross road, Judicial Layout, Yelahanka, Bangalore North-560064</span>
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#9D6638] shrink-0" /> +91 63606 46164
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#9D6638] shrink-0" /> kgkpconsultancy@gmail.com
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-slate-900 pb-2">
              Corporate Map
            </h5>
            <ul className="space-y-2.5 text-xs">
              {["home", "about", "services", "team", "blog", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="hover:text-white transition-colors text-slate-400 flex items-center gap-1 cursor-pointer focus:outline-none"
                  >
                    <span className="text-[#9D6638] font-serif text-[10px]">&bull;</span>{" "}
                    {section === "blog" ? "Insights & Circulars" : section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-slate-900 pb-2">
              Statutory Services
            </h5>
            <ul className="space-y-2.5 text-xs">
              {[
                "Audit & Assurance",
                "Income Tax Advisory",
                "GST Filings & Auditing",
                "Company Registration",
                "Outsource CFO Services",
                "ROC Filing Compliance"
              ].map((serv, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="hover:text-white transition-colors text-slate-400 inline-flex items-center gap-1 focus:outline-none cursor-pointer text-left font-sans"
                  >
                    <span className="text-[#9D6638] font-serif text-[10px]">&bull;</span> {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscriber */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-white text-xs font-serif font-bold uppercase tracking-wider border-b border-slate-900 pb-2">
              Statutory Bulletin
            </h5>
            <p className="text-xs leading-relaxed text-slate-400">
              Stay ahead of Indian Direct Tax amendments and ROC due circulars. Sign up for our clean monthly briefing.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="director@company.com"
                value={emailSub}
                required
                onChange={(e) => setEmailSub(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded bg-slate-900 border border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#9D6638] text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full bg-[#9D6638] text-slate-950 font-bold py-2 rounded text-xs tracking-wider uppercase hover:bg-white hover:text-slate-950 transition-colors cursor-pointer"
              >
                Join Ledger Bulletin
              </button>
            </form>

            {subSuccess && (
              <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-900/50 p-2.5 rounded text-[11px] text-emerald-300 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bulletin Registration Completed. Welcome!</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Corporate Disclaimer Legal footer */}
      <div className="bg-[#040911] text-[10px] py-10 border-t border-slate-900 leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 text-slate-500">
            <span>© 2026 KGKP Consultancy. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Liability Disclaimer</span>
              <span className="hover:text-white cursor-pointer transition-colors">ICAI Guidelines Compliance</span>
            </div>
          </div>

          <div className="flex gap-3 items-start bg-slate-950 p-3 rounded-lg border border-slate-900">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[#64748B]">
              <strong>Official ICAI Notice Context:</strong> Chartered Accountants in India operate under guidelines of the Institute of Chartered Accountants of India (ICAI). The contents of this portal are for knowledge aggregation purposes only and do not constitute direct commercial advertisements. Logos of audit agencies or trademarks remain properties of respective legal organizations. Registered Office: Bengaluru, India.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action WhatsApp Help button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
        {showWhatsAppTooltip && (
          <div className="bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-2xl border border-slate-100 relative max-w-xs animate-bounce hidden md:block select-none">
            <button
              onClick={() => setShowWhatsAppTooltip(false)}
              className="absolute -top-1.5 -right-1 bg-slate-200 hover:bg-slate-300 rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-slate-600 focus:outline-none"
            >
              &times;
            </button>
            <p className="mr-2 leading-tight">
              💬 <strong>Direct Partner Desk</strong><br />
              Need urgent tax or incorporation advice? Chat with an active CA right now!
            </p>
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center z-50 cursor-pointer border border-emerald-400 group"
          aria-label="Direct dispatch on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
