/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertTriangle, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "audit-assurance",
    message: "",
    subscribeNewsletter: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Simple client-side validation
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      tempErrors.phone = "Please enter a valid phone number (at least 8 digits)";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 15) {
      tempErrors.message = "Please describe your query in at least 15 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear form except services
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "audit-assurance",
        message: "",
        subscribeNewsletter: false
      });
      
      // Reset success banner after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-component-grid">
      {/* Contact Details and Map Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#4E220F] text-white p-6 rounded-none space-y-6 border border-[#9D6638] shadow-md">
          <h4 className="text-lg font-bold font-serif text-[#9D6638] uppercase tracking-wider">Executive Offices</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Reach out to our advisors or schedule a direct briefing in Yelahanka, Bangalore. Walk-ins are restricted to prior calendar reservations.
          </p>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#9D6638] shrink-0" />
              <div className="space-y-1">
                <span className="font-bold text-white block">Office Address:</span>
                <span className="text-slate-300 block leading-relaxed">
                  #2073-B, Devapriya Palace,<br />
                  4th Cross Road, Judicial Layout,<br />
                  Yelahanka, Bangalore North - 560064
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#9D6638] shrink-0" />
              <div className="space-y-1">
                <span className="font-bold text-white block">Telephone Contacts:</span>
                <span className="text-slate-300 block">+91 63606 46164</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#9D6638] shrink-0" />
              <div className="space-y-1">
                <span className="font-bold text-white block">Email Queries:</span>
                <span className="text-slate-300 block hover:text-[#9D6638] transition-colors">
                  kgkpconsultancy@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#9D6638] shrink-0" />
              <div className="space-y-1">
                <span className="font-bold text-white block">Operating Schedule:</span>
                <span className="text-slate-300 block">Mon - Fri: 09:00 AM - 06:00 PM</span>
                <span className="text-slate-300 block">Saturday: 09:00 AM - 01:00 PM</span>
                <span className="text-[#B0BA99] block font-bold">Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean, detailed Google Map embed */}
        <div className="bg-[#F7F1DE] rounded-none overflow-hidden border border-[#9D6638]/45 p-2 shadow-sm">
          <div className="relative w-full h-64 rounded-none overflow-hidden border border-slate-300">
            <iframe
              title="KGKP Office Coordinates"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d15545.438515024413!2d77.58!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae186ec645a8ab%3A0xc3ccaec0d26bfd8f!2sJudicial%20Layout%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka%20560065!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-x-0 inset-y-0 filter"
            ></iframe>
          </div>
          <div className="p-2.5 text-[10px] font-mono text-[#4E220F] text-center uppercase tracking-tight">
            🗺️ Yelahanka Judicial Layout Hub • Bangalore North
          </div>
        </div>
      </div>

      {/* Main Form Fields Column */}
      <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#F7F1DE]/40 p-6 md:p-8 rounded-none border border-[#9D6638] shadow-md space-y-5">
        <div className="border-b border-[#9D6638]/30 pb-3">
          <h4 className="text-lg font-bold font-serif text-[#4E220F] uppercase tracking-tight flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#9D6638]" /> Send Consult Enquiry
          </h4>
          <p className="text-xs text-slate-600 mt-1 font-sans">
            Submit your primary corporate requirements here. Our expert panel will evaluate your details within 24 business hours.
          </p>
        </div>

        {/* Form Validation Warnings */}
        {submitSuccess && (
          <div className="flex items-center gap-3 bg-emerald-50 text-emerald-800 p-4 rounded-none border border-emerald-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <strong className="block">Form Dispatched Successfully!</strong>
              Your advisory request has been successfully queued.
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Your Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.2 py-2 text-xs rounded-none border text-[#4E220F] bg-white font-bold focus:outline-none focus:ring-1 ${
                errors.name ? "border-rose-450 focus:ring-rose-400" : "border-slate-300 focus:ring-[#9D6638] focus:border-[#9D6638]"
              }`}
              placeholder="e.g. Anand Deshmukh"
            />
            {errors.name && <p className="text-[10px] text-rose-500 mt-1 flex items-center gap-1 font-sans"><AlertTriangle className="w-2.5 h-2.5" /> {errors.name}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.2 py-2 text-xs rounded-none border text-[#4E220F] bg-white font-bold focus:outline-none focus:ring-1 ${
                errors.email ? "border-rose-450 focus:ring-rose-400" : "border-slate-300 focus:ring-[#9D6638] focus:border-[#9D6638]"
              }`}
              placeholder="e.g. advisor@company.com"
            />
            {errors.email && <p className="text-[10px] text-rose-500 mt-1 flex items-center gap-1 font-sans"><AlertTriangle className="w-2.5 h-2.5" /> {errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Mobile/Contact Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.2 py-2 text-xs rounded-none border text-[#4E220F] bg-white font-bold focus:outline-none focus:ring-1 ${
                errors.phone ? "border-rose-450 focus:ring-rose-400" : "border-slate-300 focus:ring-[#9D6638] focus:border-[#9D6638]"
              }`}
              placeholder="e.g. +91 63606 46164"
            />
            {errors.phone && <p className="text-[10px] text-rose-500 mt-1 flex items-center gap-1 font-sans"><AlertTriangle className="w-2.5 h-2.5" /> {errors.phone}</p>}
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Primary Advisory Area</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.2 py-2 text-xs rounded-none border border-slate-300 text-[#4E220F] bg-white font-bold focus:outline-none focus:ring-1 focus:ring-[#9D6638] focus:border-[#9D6638]"
            >
              <option value="audit-assurance">Audit & Assurance Services</option>
              <option value="taxation">Taxation & ITR filing</option>
              <option value="accounting-compliance">Accounting & ROC compliance</option>
              <option value="business-registrations">Business Registrations & Incorporations</option>
              <option value="certifications">Certifications (Net Worth/Provisional)</option>
              <option value="others">Other Allied Services</option>
            </select>
          </div>
        </div>

        {/* Message Input text */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Detailed Query Context <span className="text-red-500">*</span></label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className={`w-full px-3.2 py-2 text-xs rounded-none border text-[#4E220F] bg-white font-semibold focus:outline-none focus:ring-1 ${
              errors.message ? "border-rose-450 focus:ring-rose-400" : "border-slate-300 focus:ring-[#9D6638] focus:border-[#9D6638]"
            }`}
            placeholder="Introduce your business sectors, required audit filings, or registration backlogs..."
          ></textarea>
          {errors.message && <p className="text-[10px] text-rose-500 mt-1 flex items-center gap-1 font-sans"><AlertTriangle className="w-2.5 h-2.5" /> {errors.message}</p>}
        </div>

        {/* Newsletter checkbox */}
        <div className="flex items-center gap-2.5">
          <input
            type="checkbox"
            id="newsletter-sub"
            checked={formData.subscribeNewsletter}
            onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
            className="w-4 h-4 text-[#9D6638] border-slate-300 rounded focus:ring-[#9D6638]"
          />
          <label htmlFor="newsletter-sub" className="text-xs text-slate-600 select-none cursor-pointer">
            Subscribe to our legal newsletter on direct tax compliance alerts and ROC bulletins.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4E220F] border border-slate-300 text-white py-3 rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#9D6638] hover:text-white focus:outline-none flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Deploying Advisory Form...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Finalize Consultation Inquiry
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
