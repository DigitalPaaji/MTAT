import React from "react";

const advantages = [
  { title: "Advanced CNC Machinery", desc: "Multi-axis milling and turning centers capable of sub-micron precision." },
  { title: "Automated Tooling Solutions", desc: "State-of-the-art tool changers and automated workflow optimization." },
  { title: "Rigorous Quality Assurance", desc: "Coordinate Measuring Machines (CMM) ensuring 100% specification match." },
];

export default function WhyMtatSection() {
  return (
    <section className="bg-[#01193B] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 border-t border-white/10">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004DA3]">
          06 · Why MTAT
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-3">
          Built on precision, driven by performance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((adv, idx) => (
          <div key={idx} className="bg-black/30 border border-white/15 p-8 rounded-[4px]">
            <span className="text-sm font-mono text-[#004DA3] mb-4 block">ADVANTAGE // 0{idx + 1}</span>
            <h3 className="text-xl font-medium mb-3">{adv.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}