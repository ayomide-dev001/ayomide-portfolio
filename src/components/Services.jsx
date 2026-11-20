import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faWindowMaximize,
  faLayerGroup,
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, modern websites with clean code, thoughtful interactions and seamless user experiences.",
    icon: faCode,
    color: "bg-orange-100 text-orange-600",
  },
  {
    number: "02",
    title: "UI Implementation",
    description:
      "Turning creative designs into polished interfaces with attention to detail, consistency and usability.",
    icon: faWindowMaximize,
    color: "bg-violet-100 text-violet-600",
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Creating adaptable digital experiences that look and work beautifully across different screen sizes.",
    icon: faLayerGroup,
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Testing websites, identifying issues and improving functionality to deliver reliable digital products.",
    icon: faMagnifyingGlass,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-500">
              What I Do
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Services I Offer
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Thoughtful development and quality-focused solutions that bring
              digital ideas to life.
            </p>
          </div>
        </Reveal>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 120}>
              <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_8px_30px_rgba(91,75,140,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-200 hover:bg-white/75 hover:shadow-[0_18px_40px_rgba(91,75,140,0.12)]">
                {/* Icon and Luxury Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
                  >
                    <FontAwesomeIcon icon={service.icon} className="text-xl" />
                  </div>

                  <div className="relative flex h-12 min-w-[54px] items-center justify-center overflow-hidden rounded-xl border border-violet-200/70 bg-gradient-to-br from-white via-[#f6f1ff] to-[#eae0ff] px-3 shadow-[0_4px_14px_rgba(118,84,187,0.08)] transition-all duration-500 group-hover:border-violet-400 group-hover:shadow-[0_6px_20px_rgba(118,84,187,0.2)]">
                    <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

                    <span className="font-serif text-xl italic tracking-tight text-[#7654bb] transition-all duration-500 group-hover:scale-110 group-hover:text-[#4d347e]">
                      {service.number}
                    </span>

                    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-tl-full bg-violet-300/60" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-auto flex justify-end pt-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-600 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-sm"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
