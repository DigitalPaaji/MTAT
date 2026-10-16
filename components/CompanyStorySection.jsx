'use client';
import React from "react";

export default function CompanyStorySection() {
  // Array of logos for the automatic scrolling ticker
  const logos = Array(8).fill("/Images/logo.webp");

  return (
    <section className="bg-slate-50 text-slate-900 py-20 overflow-hidden border-t border-slate-200">
      
      {/* Top Automatic Scrolling Logo Marquee Ticker */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Trusted by 75,000+ VIP Customers & Industrial Partners
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-infinite-scroll items-center gap-16 py-4">
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="h-10 sm:h-12 w-auto object-contain filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Heading & Video Showcase Layout */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 text-center max-w-4xl mx-auto space-y-4 mb-12">
     
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-slate-500">
          Create An Even <span className="font-semibold text-[#004DA3]">Greater Experience</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
          Founded with a commitment to uncompromised precision, MTAT integrates advanced multi-axis CNC machinery and automated tooling solutions to deliver complex components worldwide.
        </p>
      </div>

      {/* Full-Width Video Frame Container */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
        <div className="relative w-full h-[350px] sm:h-[480px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black">
          <video
            autoPlay
            loop
            muted
            controls
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      

      {/* Inline styles for infinite scrolling ticker animation */}
      <style jsx global>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 35s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}