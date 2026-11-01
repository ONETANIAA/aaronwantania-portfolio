"use client";

import { useEffect, useRef } from "react";

/** The current year, filled in on the client so prerendering never reads the clock. */
export function Year() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return <span ref={ref}>2026</span>;
}
