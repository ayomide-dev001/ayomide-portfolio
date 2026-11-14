import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Finova – Finance App",
    category: "Mobile App Design",
    image: "/images/project-1.png",
    link: "#",
  },
  {
    number: "02",
    title: "Analytics Dashboard",
    category: "Web Application",
    image: "/images/project-2.png",
    link: "#",
  },
  {
    number: "03",
    title: "SaaS Landing Page",
    category: "Web Design",
    image: "/images/project-3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#faf9fd] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-500">
                FEATURED PROJECTS
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#171321] sm:text-4xl">
                Selected Work
              </h2>
            </div>

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white/80 px-5 py-3 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-violet-500 hover:text-violet-700"
            >
              View All Projects
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        {/* PROJECT CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 150}>
              <a
                href={project.link}
                className="group relative block overflow-hidden rounded-[24px] border border-white bg-white/60 p-2 shadow-[0_12px_40px_rgba(90,70,130,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(90,70,130,0.13)]"
              >
                {/* PROJECT IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-gradient-to-br from-violet-100 via-[#f4f0ff] to-blue-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-slate-600 backdrop-blur-md">
                    PROJECT {project.number}
                  </span>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="relative mx-2 -mt-8 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg shadow-violet-200/20 backdrop-blur-xl transition-all duration-300 group-hover:border-violet-200 sm:p-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-[#171321] sm:text-base">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#faf9fd] text-slate-700 transition-all duration-300 group-hover:bg-violet-700 group-hover:text-white">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xs"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
