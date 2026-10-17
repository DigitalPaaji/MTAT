'use client';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import "swiper/css";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Managing Director, Apex Precision Engineering",
    content: "MTAT's Vertical Machining Centers completely transformed our production output. Exceptional build quality and unparalleled local support in Punjab.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    machine: "VMC-850 High Speed Series"
  },
  {
    name: "Gurpreet Singh",
    role: "Director, Dashmesh Agricultural Works",
    content: "Their CNC Lathes and turning solutions deliver supreme precision and reliability under heavy industrial workloads. Highly dependable team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    machine: "CNC Heavy Duty Lathe"
  },
  {
    name: "Vikram Malhotra",
    role: "Founder, Novatech Components",
    content: "Investing in their 5-Axis machining systems elevated our aerospace component accuracy to an entirely new tier. Truly world-class machinery.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    machine: "5-Axis Gantry Mill"
  },
  {
    name: "Amit Bansal",
    role: "Operations Head, Shivalik Die Makers",
    content: "From consultation to installation and prompt after-sales service, MTAT has proven to be an indispensable manufacturing partner.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    machine: "EDM Wire Cut System"
  },
  {
    name: "Harpreet Brar",
    role: "Plant Manager, Kesar Industries",
    content: "The laser cutting systems we sourced are robust, incredibly fast, and operate with zero downtime. Outstanding performance overall.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    machine: "Fiber Laser Cutter"
  },
  {
    name: "Maninder Oberoi",
    role: "Chief Engineer, Guru Nanak Tools",
    content: "Reliable tooling, accurate CMM metrology equipment, and expert guidance. They genuinely understand the nuances of industrial machining.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    machine: "Precision CMM System"
  }
];

export default function TestimonialSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="overflow-hidden text-[#0a0c10] py-16 md:py-28 bg-white">
      {/* Header Container */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#004DA3]">
            Client Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-slate-700">
            Trusted by Leaders in <span className="font-medium italic underline text-[#004DA3]">Precision Engineering</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-xl">
            Hear how our high-performance CNC machinery, robust tooling, and dedicated support empower manufacturing excellence across industries.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3 justify-end w-full md:w-auto">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition hover:border-[#004DA3] hover:bg-[#004DA3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#004DA3]"
          >
            <BiChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition hover:border-[#004DA3] hover:bg-[#004DA3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#004DA3]"
          >
            <BiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Full-Width Swiper Carousel */}
      <div className="w-full">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={1.15}
          spaceBetween={20}
          centeredSlides={false}
          grabCursor
          speed={700}
          watchOverflow
          breakpoints={{
            540: { slidesPerView: 2.1, spaceBetween: 24 },
            768: { slidesPerView: 2.6, spaceBetween: 28 },
            1024: { slidesPerView: 3.2, spaceBetween: 32 },
            1280: { slidesPerView: 3.8, spaceBetween: 36 },
            1536: { slidesPerView: 4.2, spaceBetween: 40 },
          }}
          className="!overflow-visible !px-4 sm:!px-6 md:!px-12 lg:!px-16"
        >
          {testimonials.map((item, index) => {
            const raised = index % 2 === 1;

            return (
              <SwiperSlide key={item.name} className="!h-auto">
                <div
                  className={`group flex flex-col justify-between transition-transform duration-500 rounded-2xl bg-slate-50 border border-slate-200 p-8 shadow-sm hover:shadow-md ${
                    raised ? "mt-0 md:mt-10" : "mt-6 md:mt-0"
                  }`}
                  style={{ minHeight: "380px" }}
                >
                  <div>
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <FaQuoteLeft className="h-8 w-8 text-[#004DA3]/20" />
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} className="h-3.5 w-3.5" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      "{item.content}"
                    </p>
                  </div>

                  {/* Client Info & Machine Tag */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#004DA3]/30"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.role}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#004DA3]/10 text-[#004DA3]">
                        {item.machine}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}