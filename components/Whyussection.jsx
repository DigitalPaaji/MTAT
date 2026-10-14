
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

export default function WhyUsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            The MTAT Difference
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Why Choose Us<span className="text-neutral-400">?</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-neutral-900" />

          <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
            We combine quality, expertise, and dependable service to deliver
            solutions you can count on.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative border border-neutral-200 bg-neutral-50/50 p-6 transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] sm:p-7"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-neutral-400">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-neutral-200 bg-white text-neutral-700 transition-colors duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-14 group-hover:bg-neutral-950" />
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-neutral-200 pt-7 text-center sm:flex-row sm:gap-3">
          <span className="text-sm font-medium text-neutral-900">
            Quality in every detail.
          </span>

          <span className="hidden text-neutral-300 sm:inline">/</span>

          <span className="text-sm text-neutral-500">
            Commitment in every interaction.
          </span>
        </div>

      </div>
    </section>
  );
}
