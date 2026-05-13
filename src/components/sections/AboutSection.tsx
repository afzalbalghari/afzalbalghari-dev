"use client";

import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/motion";

const FACTS = [
  { icon: "📍", label: "Location", value: "Your City, Country" },
  { icon: "💼", label: "Current Role", value: "Full-Stack Developer @ Netzing Technology" },
  { icon: "🎓", label: "Degree", value: "B.Sc. Computer Science" },
  { icon: "🌐", label: "Languages", value: "English, Urdu" },
  { icon: "☕", label: "Fuel", value: "Coffee & curiosity" },
  { icon: "🕐", label: "Availability", value: "Open to opportunities" },
];

const INTERESTS = [
  "Open Source",
  "Cloud Architecture",
  "System Design",
  "Developer Tooling",
  "Technical Writing",
  "Automation",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <SectionHeader
          label="01 — About"
          title="Who I Am"
          subtitle="A bit about me, how I got here, and what drives me."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start"
        >
          {/* Left — avatar + quick facts */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Avatar card */}
            <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full bg-bg-tertiary border-2 border-border flex items-center justify-center text-[40px] select-none">
                👨‍💻
              </div>
              <div>
                <h3 className="font-display font-bold text-[18px] text-text-primary">
                  Your Name
                </h3>
                <p className="font-mono text-[12px] text-accent-teal mt-0.5">
                  Full-Stack · DevOps · Cloud
                </p>
              </div>
              {/* Status */}
              <div className="flex items-center gap-2 bg-bg-tertiary border border-border rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(78,204,163,0.5)] animate-pulse" />
                <span className="font-mono text-[11px] text-text-secondary">
                  Open to work
                </span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
              {FACTS.map(({ icon, label, value }, i) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 px-4 py-3 ${
                    i < FACTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-[15px] mt-0.5">{icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-text-muted mb-0.5">
                      {label}
                    </p>
                    <p className="text-[13px] text-text-primary">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + interests */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-3 flex flex-col gap-6"
          >
            {/* Bio */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p className="text-text-secondary text-[15px] leading-[1.85]">
                I'm a Full-Stack Developer and DevOps Engineer with{" "}
                <span className="text-text-primary font-medium">
                  2+ years of hands-on experience
                </span>{" "}
                building production web applications and cloud infrastructure. I
                currently work at{" "}
                <span className="text-accent-teal font-medium">
                  Netzing Technology
                </span>
                , where I architect scalable systems and ship features end-to-end
                — from the React frontend to the AWS deployment pipeline.
              </p>

              <p className="text-text-secondary text-[15px] leading-[1.85]">
                My path into software started with curiosity about how websites
                worked, and grew into a deep passion for{" "}
                <span className="text-text-primary font-medium">
                  clean code, developer experience, and reliable infrastructure
                </span>
                . I enjoy working across the full stack — designing APIs,
                optimizing databases, building CI/CD pipelines, and crafting
                responsive UIs that feel fast and intuitive.
              </p>

              <p className="text-text-secondary text-[15px] leading-[1.85]">
                When I'm not coding, I'm writing technical articles, contributing
                to open-source projects, or chasing the next AWS certification.
                I believe in{" "}
                <span className="text-text-primary font-medium">
                  building things that last
                </span>{" "}
                — maintainable, well-documented, and thoughtfully engineered.
              </p>
            </motion.div>

            {/* What I'm working with */}
            <motion.div variants={fadeUp}>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-[2px] mb-3">
                Currently working with
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "⚛️", name: "React / Next.js 14" },
                  { icon: "☁️", name: "AWS (ECS, Lambda, S3)" },
                  { icon: "🐳", name: "Docker & Kubernetes" },
                  { icon: "🏗️", name: "Terraform" },
                  { icon: "🟦", name: "TypeScript" },
                  { icon: "🐘", name: "PostgreSQL / Redis" },
                ].map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 bg-surface border border-border rounded-lg px-3 py-2.5"
                  >
                    <span className="text-[15px]">{icon}</span>
                    <span className="font-mono text-[12px] text-text-secondary">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeUp}>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-[2px] mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <Badge key={interest} variant="accent">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
