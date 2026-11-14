import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faDatabase,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import Reveal from "./Reveal";

const skills = [
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
  { name: "Responsive Design", icon: faMobileScreen, color: "#7C3AED" },
  { name: "Database", icon: faDatabase, color: "#336791" },
  { name: "VS Code", icon: faCode, color: "#007ACC" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f8f7fc] px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-indigo-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION LABEL */}
        <Reveal>
          <div className="mb-14 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-700">
              My Expertise
            </span>
          </div>
        </Reveal>

        {/* HEADING */}
        <Reveal delay={100}>
          <div className="mb-14 max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#171321] md:text-5xl lg:text-[58px]">
              Tools & Technologies
              <br />
              <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text font-serif font-normal italic text-transparent">
                I Work With.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-[1.9] text-slate-600 md:text-lg">
              A collection of technologies and tools I use to build beautiful,
              responsive and user-friendly digital experiences.
            </p>
          </div>
        </Reveal>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 70}>
              <div className="group flex min-h-[155px] flex-col items-center justify-center gap-5 rounded-2xl border border-violet-100 bg-white/80 p-6 shadow-[0_8px_25px_rgba(80,60,130,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_15px_35px_rgba(80,60,130,0.10)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f7fc] transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-50">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    style={{ color: skill.color }}
                    className="text-3xl"
                  />
                </div>

                <span className="text-center text-xs font-semibold tracking-wide text-slate-700 transition-colors duration-300 group-hover:text-violet-700 sm:text-sm">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <Reveal>
          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
