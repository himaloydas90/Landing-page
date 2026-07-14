"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them in once they scroll into view.
 * direction: "up" | "down" | "left" | "right" | "none"
 * delay: ms
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offsets = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  };

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${offsets[direction]}`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
