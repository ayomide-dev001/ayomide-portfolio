import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reveal when entering and hide when leaving
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${directions[direction] || directions.up} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
