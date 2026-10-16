import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const industries = [
  { title: "Aerospace & Defense", desc: "High-integrity flight components and turbine parts." },
  { title: "Automotive Systems", desc: "Precision transmission and engine tooling components." },
  { title: "Industrial Machinery", desc: "Heavy-duty gearboxes and automated assembly units." },
  { title: "Energy & Power", desc: "Components engineered for extreme thermal endurance." },
];

export default function IndustriesSection() {
  return (
    <section className=" py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004DA3]">
            03 · Industries
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-2">
            Engineered for critical sectors
          </h2>
        </div>
        <p className="text-gray-900 text-sm max-w-md mt-4 md:mt-0">
          We adhere to strict international compliance standards, delivering certified parts across diverse global markets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((item, idx) => (
          <div key={idx} className="bg-black/40 border border-gray-400/10 p-6 flex flex-col justify-between h-64 group hover:border-[#004DA3] transition duration-300">
            <span className="text-5xl font-light text-gray-400/30">0{idx + 1}</span>
            <div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-900">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}