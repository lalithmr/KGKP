/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BlogPost } from "../types";
import { BLOG_POSTS } from "../data";
import { Search, Calendar, User, Clock, ArrowRight, X } from "lucide-react";

export default function BlogCMS() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Tax", "Audit", "GST", "Compliance", "Advisory"];

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8" id="blog-cms-wrapper">
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#F7F1DE]/90 p-4 rounded-none border border-[#9D6638]/40">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-none text-xs font-bold tracking-wide uppercase transition-all border ${
                selectedCategory === cat
                  ? "bg-[#4E220F] text-white border-[#4E220F]"
                  : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input bar */}
        <div className="relative w-full md:w-80">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search economic guidelines, circulars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-none border border-slate-300 text-[#4E220F] bg-white placeholder-slate-400 focus:ring-1 focus:ring-[#9D6638] focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-none overflow-hidden border border-slate-300 shadow-sm hover:border-[#9D6638] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#4E220F] text-[#9D6638] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 border border-[#9D6638]">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#9D6638]" /> {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#9D6638]" /> {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#4E220F] uppercase tracking-tight leading-snug hover:text-[#9D6638] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setActivePost(post)}
                    className="text-xs font-bold text-[#9D6638] hover:text-[#4E220F] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 focus:outline-none group"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-none border border-dashed border-slate-300">
          <p className="text-sm text-slate-500">No articles match your search parameters. Try a different query.</p>
        </div>
      )}

      {/* Dynamic Article Reader Modal (CMS Simulation) */}
      {activePost && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border-t-4 border-[#9D6638] border-r border-b border-l border-slate-300">
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-[#4E220F] hover:text-white text-slate-700 p-2 rounded-none transition-colors z-10 border border-slate-300"
              aria-label="Close article reader"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Custom Header Hero Image */}
            <div className="relative h-64 w-full bg-slate-100 border-b border-slate-200">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-[#9D6638] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border border-[#4E220F]">
                  {activePost.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-serif uppercase tracking-tight leading-tight">
                  {activePost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 bg-white text-slate-900">
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 border-b border-slate-200 pb-4">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#9D6638]" /> Written By: <strong>{activePost.author}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#9D6638]" /> Published: <strong>{activePost.publishedAt}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#9D6638]" /> Estimated reading: <strong>{activePost.readTime}</strong>
                </span>
              </div>

              {/* Summary */}
              <blockquote className="border-l-4 border-[#9D6638] pl-4 text-slate-600 italic text-sm leading-relaxed bg-slate-50 p-4 rounded-none">
                &ldquo;{activePost.summary}&rdquo;
              </blockquote>

              {/* Main Content paragraphs */}
              <div className="text-slate-700 space-y-4 text-sm leading-relaxed font-sans">
                {activePost.content.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                
                {/* Additional simulated text to make articles feel highly complete and thorough */}
                <p>
                  At KGKP Consultancy, we strongly suggest setting up preemptive operational structures before tax amendments are fully legislated. Keeping a rigorous record of transaction receipts and classifying standard assets on centralized digital databases acts as the primary barrier against compliance errors. Additionally, consulting certified advisors prior to carrying out corporate asset divisions or dividend releases shields administrative partners from personal liabilities.
                </p>
                <p>
                  If you have complex accounting variables, please feel free to drop our advisory desk a consultation note. We customize ledger compliance pipelines to fit your specific scope and coordinate directly with statutory registries.
                </p>
              </div>

              {/* Legal Disclaimer */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-[10px] text-slate-400 leading-snug">
                  Disclaimer: The insights contained in this column represent generic regulatory outlines for educational context. They do not constitute formal commercial, investment, or legal certifications. Consultation with registered CA professionals must be sought prior to executing operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
