
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Finova – Finance App",
    category: "Mobile App Design",
    image: "/images/project-1.png",
    description: "A modern finance application interface.",
    overview:
      "A modern finance application interface designed to present a clean and thoughtful digital experience.",
  },
  {
    number: "02",
    title: "Analytics Dashboard",
    category: "Web Application",
    image: "/images/project-2.png",
    description: "A clean dashboard for visualizing business data.",
    overview:
      "A web application dashboard focused on presenting business data through a clear and organized interface.",
  },
  {
    number: "03",
    title: "SaaS Landing Page",
    category: "Web Design",
    image: "/images/project-3.png",
    description: "A modern landing page for a digital product.",
    overview:
      "A modern landing page concept designed to introduce a digital product through a polished web experience.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close project review with Escape key
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f8f7fc] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-200/30 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-violet-500" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-600">
                  Featured Projects
                </p>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#171321] sm:text-5xl lg:text-6xl">
                Selected{" "}
                <span className="font-serif font-normal italic text-violet-700">
                  Work.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-8 text-slate-600 sm:text-base">
                A selection of digital experiences built with creativity,
                attention to detail and a passion for great user experiences.
              </p>
            </div>

            <a
              href="#project-gallery"
              className="group inline-flex items-center gap-4 rounded-full border border-violet-200 bg-white/80 px-6 py-4 text-xs font-semibold tracking-wide text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-700"
            >
              EXPLORE WORK

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        {/* PROJECT GALLERY */}
        <div
          id="project-gallery"
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 130}>
              <article className="group h-full">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Review ${project.title}`}
                  className="block w-full text-left"
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative overflow-hidden rounded-[26px] border border-white bg-white p-2 shadow-[0_15px_45px_rgba(80,60,130,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(80,60,130,0.15)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-violet-100 via-[#f4f0ff] to-blue-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#171321]/25 via-transparent to-transparent opacity-60" />

                      {/* PROJECT NUMBER */}
                      <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-4 py-2 backdrop-blur-xl">
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-700">
                          PROJECT {project.number}
                        </span>
                      </div>

                      {/* VIEW ICON */}
                      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/90 text-violet-700 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-violet-700 group-hover:text-white">
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                        />
                      </div>
                    </div>
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-6">
                    <div>
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-500">
                        {project.category}
                      </p>

                      <h3 className="text-lg font-semibold tracking-tight text-[#171321] transition-colors duration-300 group-hover:text-violet-700 sm:text-xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-600 transition-all duration-300 group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <p className="px-2 text-xs leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mx-2 mt-5 h-px bg-violet-200/70 transition-all duration-500 group-hover:bg-violet-500" />
                </button>

                {/* REVIEW BUTTON */}
                <div className="px-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group/review inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-violet-700"
                  >
                    View Project Review

                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="transition-transform group-hover/review:translate-x-1 group-hover/review:-translate-y-1"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <Reveal>
          <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        </Reveal>
      </div>

      {/* PROJECT REVIEW MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#171321]/70 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-review-title"
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/70 bg-[#faf9fd] shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-violet-100 px-6 py-5 sm:px-9">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-violet-600">
                  Portfolio / Project Review
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Project {selectedProject.number}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-700 transition-all hover:rotate-90 hover:bg-violet-700 hover:text-white"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="grid lg:grid-cols-[1.35fr_0.85fr]">
              {/* PROJECT PREVIEW */}
              <div className="p-5 sm:p-8">
                <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[22px] border border-violet-100 bg-gradient-to-br from-violet-100 via-[#f4f0ff] to-blue-100 sm:min-h-[400px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="relative z-10 max-h-[520px] w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="pointer-events-none absolute font-serif text-8xl italic text-violet-400/20">
                    AM
                  </span>
                </div>

                <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.25em] text-slate-400">
                  Project Preview
                </p>
              </div>

              {/* PROJECT DETAILS */}
              <div className="flex flex-col justify-center border-t border-violet-100 px-6 pb-8 pt-3 sm:px-9 lg:border-l lg:border-t-0 lg:py-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-600">
                  {selectedProject.category}
                </p>

                <h3
                  id="project-review-title"
                  className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#171321] sm:text-4xl"
                >
                  {selectedProject.title}
                </h3>

                <div className="my-7 h-px w-16 bg-violet-400" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Project Overview
                </p>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {selectedProject.overview}
                </p>

                <div className="mt-8 rounded-2xl border border-violet-100 bg-white/80 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-600">
                    My Approach
                  </p>

                  <p className="mt-3 text-xs leading-7 text-slate-600">
                    Focused on thoughtful design, clear presentation and a
                    polished digital experience.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171321] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-violet-200/50 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
                >
                  Back to Portfolio

                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
