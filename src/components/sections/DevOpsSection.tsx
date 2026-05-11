"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { devopsTools } from "@/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProficiencyLevel } from "@/types";

const levelColor: Record<ProficiencyLevel, string> = {
  Advanced: "text-accent-teal",
  Intermediate: "text-accent-yellow",
  Beginner: "text-text-muted",
};

export function DevOpsSection() {
  return (
    <section id="devops" className="max-w-[900px] mx-auto px-8 py-20">
      <SectionHeader
        label="04 — DevOps & Cloud"
        title="Infrastructure Skills"
        subtitle="Cloud platforms, CI/CD, containerization, and infrastructure-as-code tools."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5"
      >
        {devopsTools.map((tool) => (
          <motion.div
            key={tool.id}
            variants={staggerItem}
            className="bg-surface border border-border rounded-lg px-3 py-4 text-center transition-all duration-200 hover:border-border-hover hover:bg-surface-hover"
          >
            <span className="text-[24px] mb-2 block">{tool.icon}</span>
            <p className="font-mono text-[12px] text-text-secondary mb-0.5">
              {tool.name}
            </p>
            <p className={cn("text-[10px] font-mono", levelColor[tool.level])}>
              {tool.level}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
