"use client";

import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

const FACTS = [
  { icon: "📍", label: "Location",     value: "Your City, Country" },
  { icon: "💼", label: "Current Role", value: "Full-Stack Dev @ Netzing Technology" },
  { icon: "🎓", label: "Degree",       value: "B.Sc. Computer Science" },
  { icon: "🌐", label: "Languages",    value: "English, Urdu" },
  { icon: "☕", label: "Fuel",         value: "Coffee & curiosity" },
  { icon: "🕐", label: "Availability", value: "Open to opportunities" },
];

const STACK_NOW = [
  { icon: "⚛️", name: "React / Next.js 14" },
  { icon: "☁️", name: "AWS (ECS, Lambda, S3)" },
  { icon: "🐳", name: "Docker & Kubernetes" },
  { icon: "🏗️", name: "Terraform" },
  { icon: "🟦", name: "TypeScript" },
  { icon: "🐘", name: "PostgreSQL / Redis" },
];

const INTERESTS = ["Open Source","Cloud Architecture","System Design","Developer Tooling","Technical Writing","Automation"];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-bg-secondary py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-accent-purple/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeader label="02 — About" title="Who I Am" subtitle="A bit about me, how I got here, and what drives me." />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start"
        >
          {/* Left */}
          <motion.div variants={fadeLeft} className="md:col-span-2 flex flex-col gap-4">
            {/* Avatar card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 card-shine border-glow"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-purple to-accent-teal flex items-center justify-center text-[40px] border-4 border-bg-primary shadow-lg"
              >
                👨‍💻
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-[18px] text-text-primary">Your Name</h3>
                <p className="font-mono text-[12px] text-accent-teal mt-0.5">Full-Stack · DevOps · Cloud</p>
              </div>
              <div className="flex items-center gap-2 bg-bg-tertiary border border-border rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(78,204,163,0.5)] animate-pulse" />
                <span className="font-mono text-[11px] text-text-secondary">Open to work</span>
              </div>
            </motion.div>

            {/* Facts */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
              {FACTS.map(({ icon, label, value }, i) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  whileHover={{ backgroundColor: "rgba(26,27,35,0.8)", x: 4 }}
                  className={`flex items-start gap-3 px-4 py-3 transition-colors ${i < FACTS.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="text-[15px] mt-0.5">{icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-text-muted mb-0.5">{label}</p>
                    <p className="text-[13px] text-text-primary">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeRight} className="md:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {[
                <>I'm a Full-Stack Developer and DevOps Engineer with <span className="text-text-primary font-medium">2+ years of hands-on experience</span> building production web applications and cloud infrastructure. I currently work at <span className="text-accent-teal font-medium">Netzing Technology</span>, where I architect scalable systems and ship features end-to-end — from the React frontend to the AWS deployment pipeline.</>,
                <>My path into software started with curiosity about how websites worked, and grew into a deep passion for <span className="text-text-primary font-medium">clean code, developer experience, and reliable infrastructure</span>. I enjoy working across the full stack — designing APIs, optimizing databases, building CI/CD pipelines, and crafting responsive UIs that feel fast and intuitive.</>,
                <>When I'm not coding, I'm writing technical articles, contributing to open-source projects, or chasing the next AWS certification. I believe in <span className="text-text-primary font-medium">building things that last</span> — maintainable, well-documented, and thoughtfully engineered.</>,
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-text-secondary text-[15px] leading-[1.85]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Currently working with */}
            <div>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-[2px] mb-3">Currently working with</p>
              <div className="grid grid-cols-2 gap-2">
                {STACK_NOW.map(({ icon, name }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    whileHover={{ x: 4, borderColor: "rgba(108,99,255,0.5)" }}
                    transition={{ delay: i * 0.07, duration: 0.4, type: "spring", stiffness: 280, damping: 22 }}
                    className="flex items-center gap-2.5 bg-surface border border-border rounded-lg px-3 py-2.5 cursor-default"
                  >
                    <span className="text-[15px]">{icon}</span>
                    <span className="font-mono text-[12px] text-text-secondary">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-[2px] mb-3">Interests</p>
              <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                {INTERESTS.map((interest) => (
                  <motion.span
                    key={interest}
                    variants={staggerItem}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Badge variant="accent">{interest}</Badge>
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}