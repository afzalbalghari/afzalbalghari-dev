"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: "2+", label: "years exp." },
  { value: "12+", label: "projects" },
  { value: "5+", label: "certifications" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-60px)] flex flex-col justify-center max-w-[900px] mx-auto px-8 pt-16 pb-12 overflow-hidden"
    >
      {/* Background watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-[-20px] top-1/2 -translate-y-1/2 font-display font-black text-[clamp(80px,15vw,200px)] text-bg-secondary leading-none hidden md:block"
      >
        DEV
      </span>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={viewportOnce}
        className="relative z-10 flex flex-col gap-6"
      >
        {/* Status pill */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(78,204,163,0.5)] animate-pulse" />
          <span className="font-mono text-[12px] text-text-muted">
            available for new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-black text-[clamp(40px,7vw,76px)] leading-[1.05] tracking-[-2px] text-text-primary"
        >
          Full-Stack
          <br />
          <span className="text-text-muted font-normal">Developer &</span>
          <br />
          DevOps Engineer
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-[16px] leading-relaxed max-w-[500px]"
        >
          Building scalable web applications and cloud infrastructure.
          Specialized in React, Node.js, and AWS. Currently at{" "}
          <strong className="text-accent-teal font-medium">
            Netzing Technology
          </strong>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex gap-3 flex-wrap">
          <Button href="#projects">View Projects →</Button>
          <Button href="#contact" variant="secondary">
            Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 max-w-[380px] border border-border rounded-xl overflow-hidden"
          style={{ gap: "1px", background: "var(--tw-bg-opacity, #2a2b35)" }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-surface px-5 py-4">
              <p className="font-display font-bold text-[24px] text-text-primary">
                {value}
              </p>
              <p className="font-mono text-[11px] text-text-muted mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
