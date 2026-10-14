
"use client";

import { useRef } from "react";

const services = [
  {
    title: "CNC Milling",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CNC Turning",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Aerospace Components",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Precision Metal Parts",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Custom Component Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
  },
];

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServicesSection() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = trackRef.current;

    if (!el) return;

    const card = el.querySelector("[data-card]");
    const step = card
      ? card.getBoundingClientRect().width + 24
      : 320;

    el.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="all-services"
      className="overflow-hidden bg-slate-100 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Our Services
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
              Precision Engineering.
              <span className="block text-slate-500">
                Built to Perform.
              </span>
            </h2>

            <a
              href="#all-services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-orange-600 underline underline-offset-4 transition hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
            >
              Explore our capabilities
              <ArrowUpRight />
            </a>
          </div>

          {/* Description */}
          <div className="space-y-4 text-sm leading-7 md:text-base">
            <p className="font-medium text-slate-800">
              We deliver precision CNC machining and custom component
              manufacturing, transforming engineering designs into
              accurate, production-ready parts. Every component is
              manufactured with a focus on dimensional accuracy,
              consistency, and quality.
            </p>

            <p className="text-slate-500">
              From CNC milling and turning to complex metal components,
              we support aerospace, automotive, industrial machinery,
              and construction applications. Our manufacturing process
              follows your drawings and specifications to deliver
              components designed for reliable performance.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div
          ref={trackRef}
          className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-16"
        >
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              data-card
              className="group relative flex h-72 w-[260px] shrink-0 snap-start flex-col justify-between overflow-hidden bg-slate-900 md:h-80 md:w-72"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90 transition duration-300 group-hover:from-slate-950/20" />

              {/* Number */}
              <span className="relative p-5 text-5xl font-light tracking-tight text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Card Footer */}
              <div className="relative flex min-h-[76px] items-center justify-between gap-3 border-t border-white/15 bg-slate-950/80 px-5 py-4 text-sm text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-orange-600">
                <span className="max-w-[185px] font-medium leading-5">
                  {service.title}
                </span>

                <ArrowUpRight />
              </div>
            </a>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="mt-8 flex items-center justify-center gap-5 text-slate-500">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous services"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition hover:border-orange-600 hover:bg-orange-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="m15 6-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
            Our Capabilities
          </span>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next services"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition hover:border-orange-600 hover:bg-orange-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="m9 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
