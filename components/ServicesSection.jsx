"use client";

import { useRef, useState } from "react";

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
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const scrollByCard = (dir) => {
    handleInteraction();
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;

    el.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  // Duplicate list once when animating to create a seamless loop
  const displayedServices = !hasInteracted ? [...services, ...services] : services;

  return (
    <section
      id="all-services"
      className="overflow-hidden bg-slate-200/80 py-16 md:py-24"
    >
      <style jsx global>{`
        @keyframes slowMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slow-marquee {
          display: flex;
          width: max-content;
          animation: slowMarquee 45s linear infinite;
          will-change: transform;
        }
        .animate-slow-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Our Services
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
              Precision Engineering.
              <span className="block text-slate-500">Built to Perform.</span>
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
              manufacturing, transforming engineering designs into accurate,
              production-ready parts. Every component is manufactured with a
              focus on dimensional accuracy, consistency, and quality.
            </p>

            <p className="text-slate-500">
              From CNC milling and turning to complex metal components, we
              support aerospace, automotive, industrial machinery, and
              construction applications. Our manufacturing process follows your
              drawings and specifications to deliver components designed for
              reliable performance.
            </p>
          </div>
        </div>

        {/* Service Cards Container */}
        <div
          ref={trackRef}
          onMouseEnter={handleInteraction}
          onTouchStart={handleInteraction}
          onScroll={handleInteraction}
          className={`-mx-6 mt-16 overflow-x-auto px-6 pb-3 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            !hasInteracted
              ? "animate-slow-marquee cursor-grab"
              : "flex snap-x snap-mandatory gap-6"
          }`}
        >
          <div className={`flex gap-6 ${!hasInteracted ? "flex-row" : ""}`}>
            {displayedServices.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                data-card
                className="group relative flex h-96 w-[260px] shrink-0 snap-start flex-col justify-end overflow-visible bg-slate-900 md:h-80 md:w-72"
              >
                {/* Number - Positioned absolute with top half outside the card */}
                {/* <span className="absolute -top-10 left-4 text-7xl font-semibold tracking-tight text-white z-20 pointer-events-none drop-shadow-md">
                  {String((index % services.length) + 1).padStart(2, "0")}
                </span> */}

                {/* Card Link Container */}
                <a
                  href="#contact"
                  onClick={handleInteraction}
                  className="relative flex h-full w-full flex-col justify-between overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90" />

                  <div />

                  {/* Card Footer - Absolute at bottom-4 */}
                  <div className="absolute bottom-4 w-full pr-4 flex py-3 items-center justify-between gap-3 bg-slate-950/80 text-sm text-white backdrop-blur-sm z-10">
                    <span className="w-full font-medium leading-5 px-4">
                      {service.title}
                    </span>

                    <ArrowUpRight />
                  </div>
                </a>
              </div>
            ))}
          </div>
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