import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

import Reveal from "./Reveal";

const testimonials = [
  {
    id: 1,
    number: "01",
    name: "Alex Morgan",
    role: "Frontend Project Client",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "Add genuine feedback from someone you have worked with. Share their experience working with you and the value you delivered.",
  },
  {
    id: 2,
    number: "02",
    name: "Sophia Williams",
    role: "Project Collaborator",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    message:
      "Replace this text with an authentic review about your work, communication, creativity and attention to detail.",
  },
  {
    id: 3,
    number: "03",
    name: "Daniel James",
    role: "Professional Contact",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    message:
      "Add another genuine testimonial here when you receive permission to feature it on your portfolio.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8f7fc] px-6 py-24 md:px-12 lg:px-20 lg:py-28"
    >
      {/* Background Effects */}
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

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#171321] md:text-5xl">
              What Clients{" "}
              <span className="font-serif font-normal italic text-violet-600">
                Say
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
              Feedback and experiences from people I've had the opportunity to
              work with.
            </p>
          </div>
        </Reveal>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <article className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white/75 p-7 shadow-[0_12px_40px_rgba(70,55,110,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_25px_55px_rgba(90,65,150,0.13)] md:p-8">
                {/* TOP SECTION */}
                <div className="flex items-center justify-between">
                  <div className="relative flex h-12 min-w-[54px] items-center justify-center overflow-hidden rounded-xl border border-violet-200/70 bg-gradient-to-br from-white via-[#f6f1ff] to-[#eae0ff] px-3 shadow-[0_4px_14px_rgba(118,84,187,0.08)] transition-all duration-500 group-hover:border-violet-400">
                    <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

                    <span className="font-serif text-xl italic tracking-tight text-[#7654bb] transition duration-500 group-hover:scale-110">
                      {item.number}
                    </span>

                    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-tl-full bg-violet-300/60" />
                  </div>

                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="text-2xl text-violet-200 transition duration-300 group-hover:text-violet-400"
                  />
                </div>

                {/* CLIENT IMAGE AND DETAILS */}
                <div className="mt-7 flex items-center gap-4">
                  <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-[0_5px_18px_rgba(118,84,187,0.15)] ring-1 ring-violet-200">
                    <img
                      src={item.image}
                      alt={`Sample profile for ${item.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#171321]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">{item.role}</p>

                    {/* GOLD STAR RATING */}
                    <div
                      className="mt-2 flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                          key={star}
                          icon={faStar}
                          className={`text-[13px] ${
                            star <= item.rating
                              ? "text-[#D4A017] drop-shadow-[0_1px_2px_rgba(212,160,23,0.25)]"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-7 h-px w-full bg-gradient-to-r from-violet-200 via-violet-100 to-transparent" />

                {/* REVIEW */}
                <div className="flex-1">
                  <p className="text-[15px] leading-[1.9] text-slate-600">
                    "{item.message}"
                  </p>
                </div>

                {/* BOTTOM DECORATION */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                    Client Feedback
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 transition duration-300 group-hover:scale-150" />
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
