/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, TeamMember, BlogPost, Testimonial, FAQItem, Industry } from "./types";

export const SERVICES: Service[] = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    shortDesc: "Statutory Audit, Tax Audit, Internal Audit, GST Audit, etc.",
    longDesc: "Under senior guidance, we deliver high-integrity audits and rigorous evaluations that satisfy statutory bodies, stakeholders, and banking partners. We identify internal control optimizations while ensuring complete regulatory alignment.",
    icon: "ShieldCheck",
    features: [
      "Statutory Audit",
      "Tax Audit",
      "Internal Audit",
      "GST Audit",
      "Financial Reporting Compliance"
    ]
  },
  {
    id: "taxation",
    title: "Taxation Services",
    shortDesc: "ITR filing, GST Return filing, Tax Planning & Advisory, TDS Compliance & Filing, Representation Before Tax Authorities, etc.",
    longDesc: "We provide comprehensive direct and indirect tax management. From routine filings to representing corporations before appellate authorities, we design robust tax structures modeled for efficiency and absolute risk mitigation.",
    icon: "ReceiptIndianRupee",
    features: [
      "ITR Filing (Income Tax Returns)",
      "GST Return Filing & Reconciliation",
      "Tax Planning & Advisory",
      "TDS Compliance & Filings",
      "Representation before Tax Authorities"
    ]
  },
  {
    id: "accounting-compliance",
    title: "Accounting & Compliance",
    shortDesc: "Accounting & Bookkeeping, Finalisation of Accounts, MCA / ROC Compliance, Preparation of CMA & Project Reports, Projections / Cash Flow / Budgets, AS / IND-AS / IFRS Compliance, etc.",
    longDesc: "Maintain a flawless ledger structure. We manage transactional entries, reconcile multi-ledger books, draft financial projections, compile exhaustive CMA report sheets, and ensure robust MCA secretarial compliance.",
    icon: "Calculator",
    features: [
      "Accounting & Bookkeeping",
      "Finalisation of Accounts",
      "MCA / ROC Annual Filings",
      "CMA Sheet & Project Reports",
      "Financial Projections & Cash Flow Budgets",
      "AS / IND-AS / IFRS Implementations"
    ]
  },
  {
    id: "business-registrations",
    title: "Business Registrations",
    shortDesc: "GST Registration, PAN/TAN, UDYAM, Partnership Registration, LLP/Private Limited Company Incorporation, Import Export Code, etc.",
    longDesc: "Launch your venture with institutional stability. We advise on optimal structural forms, complete statutory registration pipelines, obtain required clearance certifications, and handle startup registrations seamlessly.",
    icon: "Briefcase",
    features: [
      "GST Registration & Amendment",
      "Partnership & General Firm setup",
      "LLP & Private Limited Company Incorporation",
      "PAN, TAN, DSC & UDYAM Allocation",
      "Import Export Code (IEC) & Startup Support"
    ]
  },
  {
    id: "certifications",
    title: "Certifications",
    shortDesc: "Official certifications for Net Worth, Turnover, Provisional Statements, Utilization, Net Income, etc.",
    longDesc: "Fast-track your tenders, bank integrations, and regulatory clearances. We provide authorized, audit-backed certifications verifying financial metrics according to legal standards.",
    icon: "Scale",
    features: [
      "Net Worth Certificates",
      "Turnover Certificates",
      "Provisional Financial Statements",
      "Utilization Certificates (UC)",
      "Net Income & Allied Certifications"
    ]
  },
  {
    id: "others",
    title: "Other Allied Services",
    shortDesc: "Trust/NGO Registrations, 80G/12AB registrations, GST LUT Filing, etc.",
    longDesc: "Specialized secretarial operations and structural registrations for trusts, charitable foundations, non-profit companies, and custom export authorizations such as Letter of Undertaking under GST.",
    icon: "TrendingUp",
    features: [
      "Trust & NGO Registrations",
      "80G & 12AB Tax Exemptions",
      "GST LUT Filing & Clearances",
      "Statutory Regulatory Responses",
      "Allied Secretarial Documentations"
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anil-kp",
    name: "CA. Anil K.P.",
    role: "Founder & Managing Partner",
    qualification: "FCA, B.Com, Senior Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600",
    bio: "CA. Anil K.P. is a veteran Chartered Accountant with a distinguished career in statutory audits, corporate taxation, and regulatory consultancy. Under his steering hand, KGKP Consultancy delivers institutional precision and absolute compliance to corporate and retail clients across South India.",
    specialization: ["Statutory & Tax Audit", "Direct & Indirect Taxation", "Corporate Restructuring"],
    email: "kgkpconsultancy@gmail.com"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Understanding statutory audit cycles and business impact",
    summary: "A practical guide for firms navigating annual audits, ledger reconciliation, and tax certifications.",
    content: "The corporate filing season requires structured planning. Every enterprise must align their ledger balances, track fixed asset addition entries, and finalize documentation before statutory auditors begin verification. Proper pre-audit structuring protects company leadership and avoids unnecessary transaction exceptions...",
    category: "Audit",
    publishedAt: "June 12, 2026",
    author: "CA. Anil K.P.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=450"
  },
  {
    id: "post-2",
    title: "Mastering GSTR Reconciliation under modern tax analytics",
    summary: "Stay ahead of regulatory inquiries on input tax credit by enforcing strict ledger reconciliations.",
    content: "Goods and Services Tax (GST) mechanisms are increasingly monitored by central server analytics. Any discrepancy between your GSTR-2B credit book and GSTR-3B filings triggers instant notices. It is critical for finance houses to execute bi-weekly mismatch audits to secure their inputs...",
    category: "GST",
    publishedAt: "June 03, 2026",
    author: "CA. Anil K.P.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=450"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "R. Krishnaswamy",
    designation: "Managing Director",
    companyName: "Devapriya Builders",
    feedback: "The speed and precision of KGKP Consultancy in finalizing our corporate tax returns and drafting CMA reports were outstanding. CA. Anil K.P. provides authoritative advice we trust completely.",
    rating: 5
  },
  {
    id: "test-2",
    clientName: "S. Murugan",
    designation: "Founder Partner",
    companyName: "Yelahanka Tech Logistics",
    feedback: "Extremely seamless LLP registration and GST setup. Having their executive offices nearby in Judicial Layout ensures prompt responses and perfect regulatory handholding.",
    rating: 5
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "ind-1",
    name: "Information Technology & Software Services",
    icon: "Laptop",
    description: "Navigating global software exports, SEZ rules, GST refunds on service export, and statutory corporate registrations."
  },
  {
    id: "ind-2",
    name: "Real Estate & Infrastructure Construction",
    icon: "Building",
    description: "Complex joint-development agreements, statutory audits, structural GST input calculations, and capital tax offsets."
  },
  {
    id: "ind-3",
    name: "Manufacturing, Retail & Logistics",
    icon: "Factory",
    description: "Inventory valuation methodologies, multi-state GST reconciliations, capital machinery declarations, and supply chains audit."
  },
  {
    id: "ind-4",
    name: "Healthcare, Biotech & Clinics",
    icon: "HeartPulse",
    description: "Private diagnostic networks, research tax incentives, medical machinery leases, and compliant payroll records."
  },
  {
    id: "ind-5",
    name: "Heavy Engineering & defense startups",
    icon: "DraftingCompass",
    description: "Startup tax holiday declarations, MSME setups, local certifications, and government grant utilization auditing."
  },
  {
    id: "ind-6",
    name: "E-commerce & Digital Platforms",
    icon: "ShoppingCart",
    description: "High-volume transactional mapping, payment gateway reconciliations, TCS compliances, and localized storage audits."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What documents are required for private limited company incorporation?",
    answer: "Standard requirements include PAN cards, identity proofs (Aadhaar/Passport), address proofs of directors, utility bill of proposed registered office, and digital signature registrations.",
    category: "Business Registration"
  },
  {
    id: "faq-2",
    question: "How does KGKP Consultancy prepare clients for statutory audits?",
    answer: "We carry out comprehensive pre-audits to verify ledger entry structures, compile clean lead sheets, reconcile GST input ledgers, and establish robust documentation before formal filings are completed.",
    category: "Audit & Assurance"
  },
  {
    id: "faq-3",
    question: "How does GST LUT Filing help service exporters?",
    answer: "Letter of Undertaking (LUT) allows registered exporters of services or goods to export without paying IGST, significantly easing working capital blockages.",
    category: "GST Compliances"
  }
];
