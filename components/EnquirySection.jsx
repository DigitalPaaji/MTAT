import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function EnquirySection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden">
      {/* Background Image with Dark Industrial Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url('/Images/banner.webp')` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-[#01193B]/80 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8  border border-white/15 backdrop-blur-md p-8 sm:p-12 rounded-lg shadow-2xl">
        <div className="space-y-3">
          
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Need A Custom Quote?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
            Upload your CAD drawings or technical specifications to receive a detailed engineering quote and lead time within 24 hours.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-between bg-[#004DA3] hover:bg-blue-700 rounded-[4px] px-8 py-4 text-white text-xs font-semibold tracking-[1.2px] uppercase transition-all duration-300 group shadow-lg shrink-0 border border-white/20"
        >
          <span className="flex items-center gap-3">
            Request Quote
            <span className="w-7 h-7 rounded bg-black/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <BsArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}