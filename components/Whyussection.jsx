'use client';
import React from "react";
import {
  FaBoxOpen,
  FaTools,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const strengths = [
  {
    icon: FaBoxOpen,
    number: "01",
    title: "Quality Products",
    description:
      "Reliable products selected to meet your expectations for quality and performance.",
  },
  {
    icon: FaTools,
    number: "02",
    title: "Expert Solutions",
    description:
      "Practical solutions tailored to your requirements and business needs.",
  },
  {
    icon: FaShieldAlt,
    number: "03",
    title: "Trusted Service",
    description:
      "A transparent approach focused on reliability, consistency, and lasting relationships.",
  },
  {
    icon: FaHeadset,
    number: "04",
    title: "Customer Support",
    description:
      "Dedicated assistance to help you find the right products and solutions.",
  },
];

const column1Images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=500&q=80",
];

const column2Images = [
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80",
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#01050a]  text-white flex items-center overflow-hidden py-12 lg:py-0">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
        
        {/* Main Grid: Left Content/Features, Right Scrolling Image Columns */}
        <div className="min-h-screen  grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtext & Compact Horizontal Feature Rows */}
          <div className="lg:col-span-8 space-y-10 ">
            
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#98b2cf]">
                The MTAT Difference
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Why Choose Us ?
              </h2>

              <div className="mt-3 h-px w-14 bg-white/30" />

              <p className="mt-3 text-sm leading-relaxed text-gray-300 max-w-xl">
                We combine quality, expertise, and dependable service to deliver solutions you can count on.
              </p>
            </div>

            {/* Feature Items List / Grid */}
            <div className="max-w-3xl grid sm:grid-cols-2 gap-6">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-black/40 hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Statement */}
            <div className="flex flex-col items-start justify-start gap-2 border-t border-white/10 pt-4 text-left sm:flex-row sm:items-center sm:gap-3">
              <span className="text-xs font-medium text-gray-200">
                Quality in every detail.
              </span>
              <span className="hidden text-white/30 sm:inline">/</span>
              <span className="text-xs text-gray-400">
                Commitment in every interaction.
              </span>
            </div>

          </div>

          {/* Right Column: Compact Vertical Infinite Scrolling Image Columns (4-5 visible) */}
          <div className="lg:col-span-4 h-[550px] sm:h-[650px] relative overflow-hidden flex gap-3 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            
            {/* Column 1 (Scrolls Upwards - Faster Speed) */}
            <div className="w-1/2 flex flex-col gap-3 animate-scroll-up">
              {column1Images.concat(column1Images).map((src, idx) => (
                <div
                  key={`col1-${idx}`}
                  className="h-32 sm:h-36 w-full rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-md shrink-0"
                >
                  <img
                    src={src}
                    alt="Industrial Machinery"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500 opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* Column 2 (Scrolls Downwards - Faster Speed) */}
            <div className="w-1/2 flex flex-col gap-3 animate-scroll-down">
              {column2Images.concat(column2Images).map((src, idx) => (
                <div
                  key={`col2-${idx}`}
                  className="h-32 sm:h-36 w-full rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-md shrink-0"
                >
                  <img
                    src={src}
                    alt="Precision Components"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500 opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Global CSS for Vertical Infinite Marquee */}
      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-up {
          animation: scrollUp 18s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 18s linear infinite;
        }
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}