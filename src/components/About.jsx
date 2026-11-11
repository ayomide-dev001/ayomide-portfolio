import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Animated statistics component
function StatCounter({ value, suffix = "+", label }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let animationFrame;
    let startTime = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800;

          const animate = (timestamp) => {
            if (startTime === null) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div ref={counterRef}>
      <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {count}
        <span className="text-violet-600">{suffix}</span>
      </h3>

      <p className="mt-3 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f7fc] px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      {/* Soft luxury background */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-indigo-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-9 bg-violet-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
            About Me
          </span>
        </div>

        {/* Two column layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[58px]">
              Designing with
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                Empathy.
              </span>
              <br />
              Building with Purpose.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Combining creativity, technology and attention to detail to create
              digital experiences that make a difference.
            </p>

            {/* Animated business statistics */}
            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-violet-200 pt-8 sm:grid-cols-3 sm:gap-5">
              <StatCounter value={5} suffix="+" label="Years of Experience" />

              <StatCounter value={10} suffix="+" label="Projects Completed" />

              <StatCounter value={20} suffix="+" label="Happy Clients" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute -left-5 top-0 h-20 w-1 rounded-full bg-gradient-to-b from-violet-500 to-indigo-300" />

            <div className="pl-5 md:pl-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
                A little introduction
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
                Hello, I'm Ayomide Michael.
              </h3>

              <div className="mt-7 space-y-6 text-base leading-[2] text-slate-600 md:text-[17px]">
                <p>
                  I'm a passionate Frontend Developer and QA Tester who enjoys
                  transforming ideas into beautiful, functional and
                  user-friendly digital experiences.
                </p>

                <p>
                  I work with modern frontend technologies to build responsive
                  interfaces, while applying software testing principles to
                  ensure that applications are reliable, accessible and easy to
                  use.
                </p>

                <p>
                  For me, great development goes beyond writing code. It's about
                  understanding people, solving problems and creating products
                  that deliver meaningful value.
                </p>
              </div>

              <a
                href="#services"
                className="group mt-9 inline-flex items-center gap-4 rounded-full border border-violet-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-[0_8px_25px_rgba(80,60,130,0.06)] transition duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
              >
                More About Me
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      </div>
    </section>
  );
}

export default About;
