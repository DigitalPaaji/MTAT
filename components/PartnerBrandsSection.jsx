import React from "react";

const partners = ["AERO-TECH", "VORTEX DYNAMICS", "GLOBAL MECH", "TITAN FORGE", "KRAFT INDUSTRIAL"];

export default function PartnerBrandsSection() {
  return (
    <section className="bg-[#01193B] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 border-t border-white/10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 text-center mb-8">
        04 · Trusted by Global Industrial Leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
        {partners.map((brand, idx) => (
          <span key={idx} className="text-lg sm:text-xl font-semibold tracking-wider text-gray-300 hover:text-white transition">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}