"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollspy } from "@/hooks/useScrollspy";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Blog",       href: "#blog" },
];

const SECTION_IDS = ["hero","about","experience","projects","devops","skills","education","certs","blog","contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const activeId = useScrollspy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-5 md:px-10 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Link href="#hero" className="font-display font-extrabold text-[18px] text-text-primary">
          dev<span className="text-accent-purple">.</span>
          <span className="gradient-text-accent">portfolio</span>
        </Link>
      </motion.div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = activeId === id;
          return (
            <motion.div key={href} whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={href}
                className={cn(
                  "relative text-[13px] font-mono transition-colors duration-200 pb-1",
                  isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent-purple rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="#contact"
            className="bg-accent-purple text-white px-4 py-1.5 rounded-md text-[13px] font-mono transition-all hover:shadow-[0_0_20px_rgba(108,99,255,0.5)]"
          >
            Hire me
          </Link>
        </motion.div>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {[0,1,2].map((i) => (
          <motion.span
            key={i}
            className="block w-5 h-0.5 bg-text-primary rounded-full origin-center"
            animate={
              mobileOpen
                ? i === 0 ? { rotate: 45, y: 7 }
                : i === 1 ? { opacity: 0 }
                : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.25 }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[60px] left-0 right-0 bg-bg-secondary/95 backdrop-blur-xl border-b border-border py-4 px-5 flex flex-col gap-1 md:hidden shadow-xl"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-text-secondary font-mono text-[14px] py-2.5 border-b border-border/50 hover:text-text-primary transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-accent-purple text-white text-center py-2.5 rounded-lg text-[14px] font-mono mt-3"
              >
                Hire me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}