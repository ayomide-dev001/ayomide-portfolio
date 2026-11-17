
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Reveal from "./Reveal";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Client / Collaborator",
    message:
      "Your real testimonial will appear here. Add feedback from someone you have worked with.",
    initials: "01",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Project Partner",
    message:
      "Replace this placeholder with genuine feedback about your work, communication and results.",
    initials: "02",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Professional Contact",
    message:
      "Add another real review here when you receive permission to share it on your portfolio.",
    initials: "03",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8f7fc] px-6 py-24 md:px-12 lg:px-20 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-violet-200/30 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-indigo-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-700">
                Testimonials
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#171321] md:text-5xl">
                  What Clients{" "}
                  <span className="font-serif font-normal italic text-violet-600">
                    Say
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
                  Feedback and experiences from people I've had the
                  opportunity to work with.
                </p>
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonials"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonials"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <article className="group relative flex h-full min-h-[290px] flex-col justify-between overflow-hidden rounded-[25px] border border-white/80 bg-white/75 p-7 shadow-[0_12px_40px_rgba(70,55,110,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(90,65,150,0.12)] md:p-8">

                {/* Decorative quote */}
                <div className="absolute -right-3 -top-5 text-[100px] text-violet-50 transition duration-500 group-hover:text-violet-100">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-sm font-semibold text-violet-700">
                      {item.initials}
                    </div>

                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="text-xl text-violet-400"
                    />
                  </div>

                  <p className="text-[15px] leading-[1.9] text-slate-600">
                    "{item.message}"
                  </p>
                </div>

                {/* CLIENT INFORMATION */}
                <div className="relative mt-8 flex items-center gap-4 border-t border-violet-100 pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 text-violet-600">
                    <FontAwesomeIcon icon={faUser} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#171321]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <Reveal>
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        </Reveal>

      </div>
    </section>
  );
}
