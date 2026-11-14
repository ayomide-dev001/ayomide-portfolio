import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faJs,
  faCss3Alt,
  faHtml5,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowUpRightFromSquare,
  faDownload,
  faEnvelope,
  faStar,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf9fd] px-5 pb-20 pt-32 sm:px-8 lg:pb-24 lg:pt-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <Reveal delay={100}>
              <p className="mb-5 text-base font-medium tracking-wide text-slate-600">
                Hello, I'm Ayomide.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#171321] sm:text-6xl lg:text-7xl xl:text-[88px]">
                Building
                <br />
                <span className="font-serif font-normal italic text-violet-700">
                  digital
                </span>{" "}
                experiences.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-12 bg-violet-400" />
                <h2 className="text-sm font-semibold tracking-wide text-slate-800 sm:text-base">
                  Frontend Developer
                  <span className="mx-2 text-violet-500">&</span>
                  QA Tester
                </h2>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-7 max-w-xl text-base leading-[1.9] text-slate-600 sm:text-lg">
                I transform ideas into elegant, functional web experiences.
                Combining modern frontend development with quality assurance, I
                build digital products that look exceptional and work reliably.
              </p>
            </Reveal>

            {/* ACTION BUTTONS */}
            <Reveal delay={500}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-5 rounded-full bg-[#171321] px-7 py-4 text-xs font-semibold tracking-wide text-white shadow-xl shadow-violet-300/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
                >
                  EXPLORE MY WORK
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="/Ayomide-Michael-CV.pdf"
                  download
                  className="group inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white/80 px-7 py-4 text-xs font-semibold tracking-wide text-slate-800 transition-all duration-300 hover:border-violet-500 hover:text-violet-700"
                >
                  DOWNLOAD CV
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </a>
              </div>
            </Reveal>

            {/* SOCIAL LINKS */}
            <Reveal delay={600}>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  FIND ME ON
                </span>

                <span className="h-px w-8 bg-slate-300" />

                <a
                  href="https://github.com/ayomide-dev001"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-700 transition hover:text-violet-700"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/ayomide-oguntunde"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-700 transition hover:text-violet-700"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                  className="text-slate-600 transition hover:text-violet-700"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT CONTENT: PORTRAIT */}
          <Reveal
            direction="right"
            delay={300}
            className="relative mx-auto w-full max-w-[510px]"
          >
            <div className="absolute -inset-4 rounded-[48%_48%_30px_30px] border border-violet-200/80" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_28px_28px] border border-white bg-gradient-to-br from-[#e7ddff] via-[#f8f5ff] to-[#dce5ff] shadow-[0_30px_80px_rgba(105,75,170,0.16)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl italic text-violet-400/30">
                  AM
                </span>
              </div>

              <img
                src="/images/image.png"
                alt="Ayomide Michael"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="relative z-10 h-full w-full object-cover object-top"
              />

              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent" />
            </div>

            {/* TOP FLOATING CARD */}
            <div className="absolute -right-2 top-10 z-30 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-violet-200/30 backdrop-blur-xl sm:-right-7">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-violet-600"
                />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  MY EXPERTISE
                </span>
              </div>

              <p className="mt-2 text-sm font-bold text-slate-950">
                Development
              </p>
              <p className="text-xs text-slate-600">& Quality Assurance</p>
            </div>

            {/* BOTTOM FLOATING CARD */}
            <div className="absolute -bottom-5 -left-3 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-violet-200/30 backdrop-blur-xl sm:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <FontAwesomeIcon icon={faStar} className="text-xl" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-950">
                  Thoughtful by design.
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Reliable by testing.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-12 right-12 h-16 w-16 rounded-full border border-violet-200 bg-gradient-to-br from-white to-violet-100 shadow-lg" />
          </Reveal>
        </div>

        {/* TECHNOLOGY STRIP */}
        <Reveal delay={200}>
          <div className="mt-24 border-y border-violet-200/70 py-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                MY DIGITAL TOOLKIT
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-7">
                {[
                  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
                  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
                  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
                  { name: "React", icon: faReact, color: "#61DAFB" },
                  { name: "Git", icon: faGitAlt, color: "#F05032" },
                  { name: "GitHub", icon: faGithub, color: "#181717" },
                  { name: "Testing", icon: faVial, color: "#7C3AED" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                  >
                    <FontAwesomeIcon
                      icon={tech.icon}
                      style={{ color: tech.color }}
                      className="text-2xl transition-transform duration-300 group-hover:scale-125 sm:text-3xl"
                    />
                    <span className="text-[10px] font-medium text-slate-500 transition-colors group-hover:text-violet-700">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
