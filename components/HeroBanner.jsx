import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

function HeroBanner() {
  return (
    <div className="relative w-full min-h-[600px] h-[90vh] flex items-center bg-[#01193B] overflow-hidden">
      {/* Background Video covering the entire area */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video/mtat.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 flex flex-col justify-center">
        <div className="max-w-3xl text-white space-y-6">
          
          {/* Main Heading matching the reference layout */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            Special industrial <br className="hidden sm:inline" />
            production <span className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[6px] after:bg-[#004DA3]/60 italic">for business</span> <br className="hidden sm:inline" />
            process in our places
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-200 max-w-xl font-normal leading-relaxed">
            Advanced CNC machinery, automated tooling solutions, and precision manufacturing engineered for global industrial standards.
          </p>

          {/* Explore More Action Button */}
          <div className="pt-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-between bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 rounded-[4px] px-6 py-4 text-white text-xs font-semibold tracking-[1.2px] uppercase transition-all duration-300 group shadow-lg"
            >
              <span className="flex items-center gap-3">
                Explore more
                <span className="w-7 h-7 rounded bg-[#004DA3] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <BsArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroBanner;