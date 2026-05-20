"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { fadeUp, blurIn, staggerContainer, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: "2+",  label: "years exp."      },
  { value: "12+", label: "projects built"  },
  { value: "5+",  label: "certifications"  },
];

/* ── Tilt avatar – clean circle only ─────────────────────────── */
function AvatarCircle() {
  const ref   = useRef<HTMLDivElement>(null);
  const mx    = useMotionValue(0);
  const my    = useMotionValue(0);
  const rotX  = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 22 });
  const rotY  = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 22 });

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const leave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1,    y: 0   }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d", perspective: 800 }}
      className="relative"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-accent-purple via-accent-teal to-accent-purple opacity-60 blur-[16px] -z-10" />

      {/* Gradient ring border */}
      <div className="p-[3px] rounded-full bg-gradient-to-br from-accent-purple via-[#9b8fff] to-accent-teal shadow-2xl">
        {/* Circle image area */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-[#1e1f2e] to-[#0f1015] flex items-center justify-center relative">
          {/*
            ── REPLACE THIS DIV WITH YOUR PHOTO ──
            Example:
            <Image src="/me.jpg" alt="Your Name" fill className="object-cover" />
          */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 via-transparent to-accent-teal/20" />
          <span className="relative z-10 text-[72px] select-none">👨‍💻</span>
        </div>
      </div>

      {/* Status badge floating below */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -bottom-4 left-0 right-0 flex items-center justify-center whitespace-nowrap bg-bg-secondary/90 backdrop-blur-md border border-border rounded-full px-3 py-1.5 shadow-xl"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_6px_rgba(78,204,163,0.7)] animate-pulse" />
        <span className="font-mono text-[11px] text-text-secondary">Available for hire</span>
      </motion.div>
    </motion.div>
  );
}

/* ── Animated background particles ───────────────────────────── */
function ParticleField() {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    dur: Math.random() * 6 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-accent-purple/40"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Teal accent dots */}
      {Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dur: Math.random() * 8 + 8,
        delay: Math.random() * 5,
      })).map((d) => (
        <motion.div
          key={`t-${d.id}`}
          className="absolute w-[2px] h-[2px] rounded-full bg-accent-teal/50"
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{ y: [0, -24, 0], opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-60px)] flex items-center overflow-hidden"
    >
      {/* ── Background ── */}

      {/* Deep mesh gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07080d] via-[#0a0b0f] to-[#0c0d14]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large glow blobs – animated */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-teal blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#9b8fff] blur-[100px] pointer-events-none"
      />

      {/* Floating particles */}
      <ParticleField />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/60 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[900px] mx-auto px-8 md:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 lg:gap-x-48 lg:gap-y-0 items-center">

          {/* Left – text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status pill */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(78,204,163,0.7)] animate-pulse" />
              <span className="font-mono text-[12px] text-text-muted tracking-widest uppercase">
                available for new opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={blurIn}>
              <h1 className="font-display font-black text-[clamp(42px,6.5vw,72px)] leading-[1.03] tracking-[-2.5px]">
                <span className="text-text-primary">Full-Stack</span>
                <br />
                <span className="gradient-text-accent">Developer.</span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-text-secondary text-[15px] leading-[1.85] max-w-[400px]">
              Building scalable web applications with clean code and modern tooling.
              Currently shipping at{" "}
              <span className="text-accent-teal font-medium">Netzing Technology</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex gap-3 flex-wrap">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-accent-purple text-white px-6 py-3 rounded-lg font-mono text-[13px] transition-shadow hover:shadow-[0_0_28px_rgba(108,99,255,0.55)]"
              >
                View Projects →
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-text-primary px-6 py-3 rounded-lg font-mono text-[13px] border border-border hover:border-accent-purple/60 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 pt-2 border-t border-border/50">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                >
                  <p className="font-display font-black text-[30px] gradient-text-accent leading-none">{value}</p>
                  <p className="font-mono text-[11px] text-text-muted mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – avatar circle (no box, no code card) */}
          <div className="hidden lg:flex items-center lg:justify-end lg:pl-40">
            <AvatarCircle />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}