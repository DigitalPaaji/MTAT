
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "swiper/css";

const categories = [
  {
    title: "Metal Cutting",
    count: 124,
    href: "/category/metal-cutting",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Metal Forming",
    count: 58,
    href: "/category/metal-forming",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Metrology",
    count: 96,
    href: "/category/metrology",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Tool Room & Accessories",
    count: 210,
    href: "/category/tool-room-accessories",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Software",
    count: 17,
    href: "/category/software",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",
  },
];

export default function CategorySection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="overflow-hidden bg-[#f8f8f6] pt-16 ">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            <span className="h-px w-7 bg-[#0f2a83]" />
            Discover Our Collection
            <span className="h-px w-7 bg-[#0f2a83]" />
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            The Right Tools
            <br />
            <span className="text-[#0f2a83]">
              For Every Creation.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-neutral-500">
            Explore precision machinery, advanced technology, and
            manufacturing solutions built for your next big idea.
          </p>
        </div>
      </div>

      {/* Staggered Swiper cards */}
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={1.35}
          spaceBetween={16}
          centeredSlides={false}
          grabCursor
          speed={700}
          watchOverflow
          breakpoints={{
            480: {
              slidesPerView: 2.1,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 26,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 28,
            },
          }}
          className="!overflow-visible !pb-4 !pl-5 sm:!pl-8 lg:!pl-[max(2rem,calc((100vw-80rem)/2))]"
        >
          {categories.map((category, index) => {
            const raised = index % 2 === 1;

            return (
              <SwiperSlide key={category.title} className="!h-auto">
                <a
                  href={category.href}
                  className={`group block transition-transform duration-500 ${
                    raised
                      ? "mt-0"
                      : "mt-10 sm:mt-14 lg:mt-16"
                  }`}
                >
                  {/* Image card */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 shadow-sm">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <span className="absolute left-3 top-3 text-[10px] font-medium tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Hover arrow */}
                    <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <BiChevronRight className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="mt-3">
                    <h3 className="text-xs font-semibold leading-5 text-neutral-900 transition-colors group-hover:text-[#0f2a83] sm:text-sm">
                      {category.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-neutral-500 sm:text-xs">
                      Explore {category.count} products
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Explore the collection
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous categories"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            <BiChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label="Next categories"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            <BiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
