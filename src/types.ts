/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  image: string;
  bio: string;
  specialization: string[];
  linkedin?: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Tax" | "Audit" | "Compliance" | "Advisory" | "GST";
  publishedAt: string;
  author: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  companyName: string;
  feedback: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
}

export interface FirmStats {
  yearsOfExperience: number;
  clientsServed: string;
  taxReturnsFiled: string;
  retentionRate: string;
}
