import { useEffect, useState } from "react";
import logo from "../assets/download.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Change navbar appearance when scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scrolling and support Escape key.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close mobile menu when switching to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ease-in-out ${
          menuOpen
            ? "bg-violet-950 shadow-none"
            : scrolled
              ? "bg-white/90 shadow-sm shadow-violet-200/40 backdrop-blur-xl"
              : "bg-white/20 backdrop-blur-sm"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* BRAND */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Ayomide Michael - Home"
            className="relative z-[70] flex shrink-0 items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src={logo}
              alt="AM Logo"
              className={`h-10 w-12 object-contain transition-all duration-300 ${
                menuOpen ? "brightness-0 invert" : ""
              }`}
            />

            <div className="hidden sm:block">
              <h2
                className={`text-sm font-bold transition-colors duration-300 ${
                  menuOpen ? "text-white" : "text-slate-950"
                }`}
              >
                Ayomide Michael
              </h2>

              <p
                className={`text-[10px] transition-colors duration-300 ${
                  menuOpen ? "text-violet-200" : "text-slate-500"
                }`}
              >
                Frontend Developer • QA Tester
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 text-[10px] font-semibold tracking-wider text-slate-700 transition-colors duration-300 hover:text-violet-600 lg:text-xs"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-violet-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-violet-700 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-800"
            >
              LET'S TALK <span>↗</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`relative z-[70] flex h-11 w-11 cursor-pointer items-center justify-center transition-colors duration-300 md:hidden ${
              menuOpen ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* FULL-SCREEN MOBILE MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-50 bg-violet-950 text-white transition-[clip-path,visibility] duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "visible [clip-path:inset(0_0_0_0)]"
            : "invisible [clip-path:inset(0_0_0_100%)]"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-28 sm:px-12">
          {/* MENU INTRO */}
          <p
            className={`mb-8 text-[10px] uppercase tracking-[0.35em] text-violet-300 transition-all delay-100 duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            WELCOME TO MY PORTFOLIO
          </p>

          {/* ANIMATED NAVIGATION LINKS */}
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${120 + index * 65}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-light tracking-wide transition-all duration-300 hover:pl-3 hover:text-violet-300 sm:text-3xl ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <span>{link.label}</span>

                <span className="text-sm text-violet-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* MOBILE CONTACT BUTTON */}
          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            style={{
              transitionDelay: menuOpen ? "650ms" : "0ms",
            }}
            className={`mt-8 flex items-center justify-between rounded-xl border border-white/30 px-5 py-4 text-xs tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-violet-950 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            LET'S WORK TOGETHER <span>↗</span>
          </a>

          {/* FOOTER */}
          <div className="mt-auto flex items-center justify-between pt-12 text-[10px] uppercase tracking-wider text-violet-300">
            <span>Ayomide Michael</span>
            <span>Frontend Developer • QA Tester</span>
          </div>
        </div>
      </div>
    </>
  );
}
