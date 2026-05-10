"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollspy } from "@/hooks/useScrollspy";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
];

const SECTION_IDS = [
  "hero",
  "experience",
  "projects",
  "devops",
  "skills",
  "education",
  "certs",
  "blog",
  "contact",
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollspy(SECTION_IDS);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-5 md:px-10 bg-bg-primary/85 backdrop-blur-md border-b border-border">
      {/* Logo */}
      <Link
        href="#hero"
        className="font-display font-extrabold text-[18px] text-text-primary"
      >
        dev<span className="text-accent-purple">.</span>portfolio
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-[13px] font-mono transition-colors duration-200",
                activeId === id ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {label}
            </Link>
          );
        })}
        <Link
          href="#contact"
          className="bg-accent-purple text-white px-4 py-1.5 rounded-md text-[13px] font-mono transition-opacity hover:opacity-80"
        >
          Hire me
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={cn("block w-5 h-0.5 bg-text-primary transition-transform", mobileOpen && "rotate-45 translate-y-2")} />
        <span className={cn("block w-5 h-0.5 bg-text-primary transition-opacity", mobileOpen && "opacity-0")} />
        <span className={cn("block w-5 h-0.5 bg-text-primary transition-transform", mobileOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[60px] left-0 right-0 bg-bg-secondary border-b border-border py-4 px-5 flex flex-col gap-3 md:hidden"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary font-mono text-[14px] py-1"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-accent-purple text-white text-center py-2 rounded-md text-[14px] font-mono mt-1"
            >
              Hire me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
