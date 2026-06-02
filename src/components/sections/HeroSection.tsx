"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { blurUp, stagger, item, fadeLeft, vp } from "@/lib/motion";
import Image from "next/image";

/* ── Animated canvas background ─────────────────────────────── */
function AnimatedBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    /* particles */
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
    }));

    /* grid lines */
    const CELL = 70;

    let t = 0;
    function draw() {
      t += 0.008;
      ctx!.clearRect(0, 0, W, H);

      /* grid */
      ctx!.strokeStyle = "rgba(0,255,135,0.045)";
      ctx!.lineWidth = 0.5;
      for (let x = 0; x < W; x += CELL) {
        ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, H); ctx!.stroke();
      }
      for (let y = 0; y < H; y += CELL) {
        ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(W, y); ctx!.stroke();
      }

      /* moving glow blobs */
      const blobs = [
        { cx: W * 0.15 + Math.sin(t * 0.7) * 80,  cy: H * 0.35 + Math.cos(t * 0.5) * 60,  r: 260, color: "rgba(0,255,135," },
        { cx: W * 0.85 + Math.cos(t * 0.6) * 70,  cy: H * 0.6  + Math.sin(t * 0.8) * 50,  r: 200, color: "rgba(0,229,255," },
        { cx: W * 0.5  + Math.sin(t * 0.4) * 100, cy: H * 0.15 + Math.cos(t * 0.9) * 40,  r: 180, color: "rgba(0,255,135," },
      ];
      blobs.forEach(({ cx, cy, r, color }) => {
        const g = ctx!.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, color + "0.12)");
        g.addColorStop(1, color + "0)");
        ctx!.fillStyle = g;
        ctx!.beginPath(); ctx!.arc(cx, cy, r, 0, Math.PI * 2); ctx!.fill();
      });

      /* shimmer lines */
      for (let i = 0; i < 3; i++) {
        const xt = ((t * 60 + i * 200) % (W + 400)) - 200;
        const grad = ctx!.createLinearGradient(xt - 80, 0, xt + 80, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, "rgba(0,255,135,0.06)");
        grad.addColorStop(1, "transparent");
        ctx!.fillStyle = grad;
        ctx!.fillRect(xt - 80, 0, 160, H);
      }

      /* particles */
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.a = 0.3 + 0.4 * Math.sin(t * 2 + p.x * 0.01);
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,255,135,${p.a})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Avatar circle with 3D tilt ────────────────────────────── */
function Avatar() {
  const ref  = useRef<HTMLDivElement>(null);
  const mx   = useMotionValue(0);
  const my   = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5,0.5], [12,-12]), { stiffness:200, damping:24 });
  const rotY = useSpring(useTransform(mx, [-0.5,0.5], [-12,12]), { stiffness:200, damping:24 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity:0, scale:0.8, y:30 }}
      animate={{ opacity:1, scale:1,   y:0  }}
      transition={{ duration:0.9, delay:0.35, ease:[0.22,1,0.36,1] }}
      style={{ rotateX:rotX, rotateY:rotY, transformStyle:"preserve-3d", perspective:900 }}
      className="animate-float relative"
    >
      
      {/* Double pulse rings */}
      <div className="absolute inset-0 rounded-full pulse-ring" />

      {/* Outer glow halo */}
      <div className="absolute inset-[-10px] rounded-full bg-g/15 blur-2xl -z-10" />
      <div className="absolute inset-[-24px] rounded-full bg-g/6 blur-3xl -z-10" />

      {/* Gradient ring */}
      <div className="p-[3px] rounded-full bg-gradient-to-br from-g via-[#00e5ff] to-g-dim shadow-g-lg">
        {/* Circle */}
        <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden bg-gradient-to-br from-card to-bk3 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-g/20 via-transparent to-[#00e5ff]/10" />
          <Image src="/images/mypic.png" alt="Name" fill className="object-cover" />
        </div>
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:1.1, duration:0.5 }}
        className="absolute -bottom-5 left-11 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-bk2/95 backdrop-blur-md border border-br2 rounded-full px-4 py-2 shadow-card"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-g shadow-g-sm animate-pulse" />
        <span className="font-mono text-[11px] text-ts">Available for hire</span>
      </motion.div>

      {/* Orbiting dot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ width: 280, height: 280, position: "absolute" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-g shadow-g-md" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ width: 340, height: 340, position: "absolute" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00e5ff]/70 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Animated counter ──────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1400, 1);
      setVal(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(t);
  }, [to]);
  return <>{val}{suffix}</>;
}

const STATS = [
  { value: 2,  suffix: "+", label: "years exp."     },
  { value: 12, suffix: "+", label: "projects built" },
  { value: 5,  suffix: "+", label: "certifications" },
];

/* ── Main ──────────────────────────────────────────────────── */
export function HeroSection() {
  
  return (
    <section id="hero" className="relative min-h-[calc(100vh-60px)] flex items-center overflow-hidden bg-bk">
      <AnimatedBg />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/50 to-transparent" />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-14 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] gap-34 items-center">

          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">

            {/* Status */}
            <motion.div variants={item} className="flex items-center gap-8">
              <span className="w-2 h-2 rounded-full bg-g shadow-g-md animate-pulse" />
              <span className="font-mono text-[12px] text-tm tracking-[3px] uppercase">available for new opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={blurUp}>
              <h1 className="font-display font-black leading-[1.03] tracking-[-2.5px]" style={{ fontSize: "clamp(44px,7vw,76px)" }}>
                <span className="text-tw block">M</span>
                <span className="text-tw block">Afzal</span>
                <span className="g-text block">Balghari.</span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p variants={item} className="text-ts text-[15px] leading-[1.9] max-w-[400px]">
              Building scalable web applications with clean code and modern tooling.
              Currently shipping at{" "}
              <span className="text-g font-medium">Netzing Technology</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex gap-3 flex-wrap">
              <motion.a href="#projects"
                whileHover={{ scale:1.06, y:-3, boxShadow:"0 0 30px rgba(0,255,135,0.5)" }}
                whileTap={{ scale:0.96 }}
                className="inline-flex items-center gap-2 bg-g text-bk px-6 py-3 rounded-lg font-mono text-[13px] font-bold transition-all"
              >
                View Projects →
              </motion.a>
              <motion.a href="#contact"
                whileHover={{ scale:1.05, y:-3, borderColor:"rgba(0,255,135,0.7)" }}
                whileTap={{ scale:0.96 }}
                className="inline-flex items-center gap-2 text-tw px-6 py-3 rounded-lg font-mono text-[13px] border border-br2 hover:text-g transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-8 pt-4 border-t border-br">
              {STATS.map(({ value, suffix, label }, i) => (
                <motion.div key={label}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0  }}
                  transition={{ delay:0.9 + i*0.12, duration:0.5 }}
                >
                  <p className="font-display font-black text-[32px] g-text num-glow leading-none">
                    <Counter to={value} suffix={suffix} />
                  </p>
                  <p className="font-mono text-[11px] text-tm mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <div className="hidden lg:flex items-center justify-end">
            <Avatar />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bk to-transparent pointer-events-none" />
    </section>
  );
}
