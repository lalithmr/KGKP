/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  pageType?: string;
}

export default function SEO({ title, description, pageType = "Website" }: SEOProps) {
  useEffect(() => {
    // Set Document Title
    const formattedTitle = `${title} | Apex Chartered Accountants & Financial Advisors`;
    document.title = formattedTitle;

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Schema Markup
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "Apex Chartered Accountants & Tax Consultants",
      "alternateName": "Apex CA & Advisors",
      "description": description,
      "url": window.location.origin,
      "logo": "https://picsum.photos/seed/apexlogo/300/300",
      "telephone": "+91 80 4950 2030",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 8, Executive Wing, Parliament Square, MG Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/apex-ca",
        "https://twitter.com/apex_ca"
      ],
      "knowsAbout": [
        "Statutory Audit",
        "Corporate Income Tax Planning",
        "Goods & Services Tax Filing",
        "ROC Filing",
        "Company Registrations",
        "Wealth Advisors",
        "Expatriate Tax"
      ]
    };

    // Remove old schema script if exists
    const existingScript = document.getElementById("apex-ld-json");
    if (existingScript) {
      existingScript.remove();
    }

    // Append new schema script
    const script = document.createElement("script");
    script.id = "apex-ld-json";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      // Cleanup schema if component is unmounted
      const scriptToRemove = document.getElementById("apex-ld-json");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description]);

  return null; // Side effect only
}
