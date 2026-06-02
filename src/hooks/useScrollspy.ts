"use client";
import { useState, useEffect } from "react";
export function useScrollspy(ids: string[], offset = 100): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: `-${offset}px 0px -40% 0px` }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids, offset]);
  return activeId;
}
