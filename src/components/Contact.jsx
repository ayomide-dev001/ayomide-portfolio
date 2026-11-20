import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Reveal from "./Reveal";

const EMAIL = "ayomide0763@icloud.com";

// Replace these three links with your actual accounts.
const socials = [
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/ayomide-dev001",
  },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/ayomide-oguntunde",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/YOUR_USERNAME/",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    url: "https://wa.me/09032243844",
  },
  {
    name: "TikTok",
    icon: faTiktok,
    url: "https://www.tiktok.com/@YOUR_USERNAME",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const body = `
Hello Ayomide,

My name is ${formData.name}.

My email: ${formData.email}

${formData.message}
    `;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#faf9fd] px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-200/40 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-16">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-700">
                Get In Touch
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#171321] md:text-7xl">
                Let's make
                <br />
                something
                <br />
                <span className="font-serif font-normal italic text-violet-600">
                  extraordinary.
                </span>
              </h2>

              <div className="lg:pb-3">
                <p className="max-w-md text-base leading-8 text-slate-600 md:text-lg">
                  Great ideas begin with a conversation. Have a project,
                  opportunity or creative idea? I'd love to hear from you.
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-violet-700 transition hover:gap-5"
                >
                  Let's talk
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main contact layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CONTACT CARD */}
          <Reveal direction="left">
            <div className="relative flex h-full min-h-[490px] flex-col justify-between overflow-hidden rounded-[30px] bg-[#211936] p-8 text-white shadow-[0_25px_60px_rgba(45,30,80,0.12)] md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/30 blur-[90px]" />

              <div className="relative">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                  Contact Details
                </span>

                <h3 className="mt-7 max-w-xs font-serif text-4xl leading-tight">
                  Let's connect and create something meaningful.
                </h3>

                <div className="mt-12 space-y-8">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-300 transition group-hover:bg-violet-600 group-hover:text-white">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>

                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        Email Address
                      </span>
                      <span className="mt-2 block break-all text-sm font-medium text-white">
                        {EMAIL}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-300">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>

                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        Location
                      </span>
                      <span className="mt-2 block text-sm font-medium">
                        Nigeria
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="relative mt-14 border-t border-white/10 pt-8">
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Let's Connect Socially
                </p>

                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-600"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>

                <p className="mt-5 text-[10px] text-slate-500">
                  GitHub · LinkedIn · Instagram · WhatsApp · TikTok
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM CARD */}
          <Reveal direction="right" delay={150}>
            <div className="rounded-[30px] border border-white bg-white/90 p-7 shadow-[0_20px_60px_rgba(75,55,120,0.07)] md:p-11">
              <div className="mb-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-600">
                  Send A Message
                </span>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#171321]">
                  Tell me about your project.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Fill in the details below and let's start a conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-3 block text-xs font-semibold text-[#171321]"
                    >
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-violet-100 bg-[#faf9fd] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-3 block text-xs font-semibold text-[#171321]"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-violet-100 bg-[#faf9fd] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-3 block text-xs font-semibold text-[#171321]"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-violet-100 bg-[#faf9fd] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-xs font-semibold text-[#171321]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-violet-100 bg-[#faf9fd] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-violet-700 to-indigo-600 px-8 py-5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(109,70,190,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(109,70,190,0.3)]"
                >
                  Send Message
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your message will open in your email application.
                </p>
              </form>
            </div>
          </Reveal>
        </div>

        {/* FOOTER */}
        <Reveal>
          <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-violet-200/70 pt-8 sm:flex-row">
            <p className="text-xs text-slate-500">
              © 2026 Ayomide Michael. All rights reserved.
            </p>

            <a
              href="#home"
              className="group flex items-center gap-2 text-xs font-semibold text-violet-700 transition hover:text-indigo-600"
            >
              Back to top
              <FontAwesomeIcon
                icon={faArrowRight}
                className="-rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
