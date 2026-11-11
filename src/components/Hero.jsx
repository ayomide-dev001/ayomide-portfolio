import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-36"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* MAIN HERO */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <p className="mb-5 text-sm font-medium text-slate-500">
              Hello, I'm Ayomide.
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[88px]">
              Building
              <br />
              <span className="font-serif font-normal italic text-violet-600">
                digital
              </span>{" "}
              experiences.
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-violet-400" />
              <h2 className="text-sm font-semibold tracking-wide text-slate-800 sm:text-base">
                Frontend Developer
                <span className="mx-2 text-violet-500">&</span>
                QA Tester
              </h2>
            </div>

            <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              I transform ideas into elegant, functional web experiences.
              Combining modern frontend development with quality assurance, I
              build digital products that look exceptional and work reliably.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-5 rounded-full bg-[#171321] px-7 py-4 text-xs font-medium tracking-wide text-white shadow-xl shadow-violet-300/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
              >
                EXPLORE MY WORK
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/Ayomide-Michael-CV.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white/60 px-7 py-4 text-xs font-medium tracking-wide text-slate-800 transition-all duration-300 hover:border-violet-500 hover:text-violet-700"
              >
                DOWNLOAD CV
                <Download
                  size={15}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12 flex items-center gap-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                FIND ME ON
              </span>

              <span className="h-px w-8 bg-slate-200" />

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ayomide-dev001"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-700 transition hover:text-violet-600"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/ayomide-oguntunde"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-700 transition hover:text-violet-600"
                >
                  LinkedIn ↗
                </a>
              </div>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="text-slate-500 transition hover:text-violet-600"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT: PORTRAIT */}
          <div className="relative mx-auto w-full max-w-[510px]">
            {/* OUTER FRAME */}
            <div className="absolute -inset-4 rounded-[48%_48%_30px_30px] border border-violet-200/80" />

            {/* IMAGE FRAME */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_28px_28px] border border-white bg-gradient-to-br from-[#e7ddff] via-[#f8f5ff] to-[#dce5ff] shadow-[0_30px_80px_rgba(105,75,170,0.16)]">
              {/* INITIALS FALLBACK */}
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

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent" />
            </div>

            {/* TOP FLOATING CARD */}
            <div className="absolute -right-2 top-10 z-30 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-lg shadow-violet-200/30 backdrop-blur-xl sm:-right-7">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-violet-600" />

                <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-500">
                  MY EXPERTISE
                </span>
              </div>

              <p className="mt-2 text-sm font-bold text-slate-900">
                Development
              </p>

              <p className="text-xs text-slate-500">& Quality Assurance</p>
            </div>

            {/* BOTTOM FLOATING CARD */}
            <div className="absolute -bottom-5 -left-3 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-violet-200/30 backdrop-blur-xl sm:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Thoughtful by design.
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  Reliable by testing.
                </p>
              </div>
            </div>

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -bottom-12 right-12 h-16 w-16 rounded-full border border-violet-200 bg-gradient-to-br from-white to-violet-100 shadow-lg" />
          </div>
        </div>

        {/* BOTTOM TECHNOLOGY STRIP */}
        <div className="mt-24 border-y border-violet-200/60 py-7">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              MY DIGITAL TOOLKIT
            </p>

            <div className="flex flex-wrap items-center gap-x-9 gap-y-4 text-xs font-semibold text-slate-500">
              <span>React</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
              <span>Software Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
