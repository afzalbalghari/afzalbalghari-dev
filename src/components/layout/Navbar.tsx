"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollspy } from "@/hooks/useScrollspy";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Blog",       href: "#blog"       },
];
const SECTION_IDS = ["hero","about","experience","projects","devops","skills","education","certs","blog","contact"];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollspy(SECTION_IDS);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-10 transition-all duration-400",
        scrolled
          ? "bg-bk/90 backdrop-blur-xl border-b border-br shadow-[0_4px_40px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="#hero" className="font-display font-black text-[18px] flex items-center gap-1">
          <span className="g-text">afzalBalghari</span>
          <span className="g-text">.</span>
          <span className="text-tw">Dev</span>
        </Link>
      </motion.div>

      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#","");
          const isActive = active === id;
          return (
            <motion.div key={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.94 }}>
              <Link href={href} className={cn(
                "relative text-[13px] font-mono pb-1 transition-colors duration-200",
                isActive ? "text-g" : "text-ts hover:text-tw"
              )}>
                {label}
                {isActive && (
                  <motion.span layoutId="nav-bar"
                    className="absolute bottom-0 left-0 right-0 h-px bg-g rounded-full shadow-g-sm"
                    transition={{ type:"spring", stiffness:400, damping:30 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06, y: -2, boxShadow: "0 0 24px rgba(0,255,135,0.45)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-g text-bk px-4 py-1.5 rounded-md text-[13px] font-mono font-bold transition-shadow"
        >
          Hire me
        </motion.a>
      </nav>

      {/* Mobile toggle */}
      <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(v => !v)}>
        {[0,1,2].map(i => (
          <motion.span key={i} className="block w-5 h-0.5 bg-g rounded-full origin-center"
            animate={open
              ? i===0 ? {rotate:45,y:7} : i===1 ? {opacity:0} : {rotate:-45,y:-7}
              : {rotate:0,y:0,opacity:1}}
            transition={{ duration:0.25 }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-12, scale:0.97 }}
            animate={{ opacity:1, y:0,   scale:1    }}
            exit={{    opacity:0, y:-12, scale:0.97 }}
            transition={{ duration:0.22 }}
            className="absolute top-[60px] left-0 right-0 bg-bk/95 backdrop-blur-xl border-b border-br py-4 px-6 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div key={href}
                initial={{ opacity:0, x:-16 }}
                animate={{ opacity:1, x:0   }}
                transition={{ delay: i*0.05 }}
              >
                <Link href={href} onClick={() => setOpen(false)}
                  className="block text-ts font-mono text-[14px] py-2.5 border-b border-br hover:text-g transition-colors">
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.a href="#contact" onClick={() => setOpen(false)}
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.28 }}
              className="block mt-3 bg-g text-bk text-center py-2.5 rounded-lg text-[14px] font-mono font-bold">
              Hire me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
