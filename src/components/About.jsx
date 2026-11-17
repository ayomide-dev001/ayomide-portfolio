import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Reveal from "./Reveal";

// Reusable visibility hook for animated counters
function useVisibility() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// Animated statistics counter
function StatCounter({ value, suffix = "+", label, delay = 0 }) {
  const [ref, visible] = useVisibility();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) {
      setCount(0);
      return;
    }

    let frame;
    let startTime = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [visible, value, delay]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-5xl font-medium tracking-[-0.06em] text-[#171321] md:text-6xl">
          {count}
        </span>

        <span className="text-3xl font-light text-violet-600">{suffix}</span>
      </div>

      <p className="mt-3 max-w-[150px] text-[10px] font-semibold uppercase leading-6 tracking-[0.16em] text-slate-600 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
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
              About Me
            </span>
          </div>
        </Reveal>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <Reveal delay={100}>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
                Creativity meets technology
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#171321] md:text-5xl lg:text-[58px]">
                Designing with
                <br />
                <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text font-serif font-normal italic text-transparent">
                  Empathy.
                </span>
                <br />
                Building with Purpose.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 max-w-lg text-base leading-[1.9] text-slate-600 md:text-lg">
                Combining creativity, technology and attention to detail to
                create thoughtful digital experiences that make a difference.
              </p>
            </Reveal>

            {/* ANIMATED BUSINESS STATISTICS */}
            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-violet-200 pt-8 sm:grid-cols-3 sm:gap-5">
              <StatCounter
                value={5}
                suffix="+"
                label="Years of Experience"
                delay={0}
              />

              <StatCounter
                value={20}
                suffix="+"
                label="Projects Completed"
                delay={150}
              />

              <StatCounter
                value={20}
                suffix="+"
                label="Happy Clients"
                delay={300}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <Reveal direction="right" delay={300}>
            <div className="relative pl-5 md:pl-8">
              <div className="absolute -left-1 top-0 h-20 w-1 rounded-full bg-gradient-to-b from-violet-600 to-indigo-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-700">
                A little introduction
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-[#171321] md:text-3xl">
                Hello, I'm Ayomide Michael.
              </h3>

              <div className="mt-8 space-y-7 text-base leading-[2] text-slate-600 md:text-[18px]">
                <p>
                  I'm a passionate Frontend Developer and QA Tester who enjoys
                  transforming ideas into beautiful, functional and
                  user-friendly digital experiences.
                </p>

                <p>
                  I work with modern frontend technologies to build responsive
                  interfaces, while applying software testing principles to
                  ensure applications are reliable, accessible and easy to use.
                </p>

                <p>
                  For me, great development goes beyond writing code. It's about
                  understanding people, solving problems and creating products
                  that deliver meaningful value.
                </p>
              </div>

              <a
                href="#services"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-violet-200 bg-white px-8 py-4 text-sm font-semibold text-slate-800 shadow-[0_8px_25px_rgba(80,60,130,0.06)] transition duration-300 hover:-translate-y-1 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
              >
                More About Me
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM LINE */}
        <Reveal>
          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
