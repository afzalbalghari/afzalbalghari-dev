"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { devopsTools } from "@/data";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProficiencyLevel } from "@/types";

const levelColor: Record<ProficiencyLevel, string> = {
  Advanced:     "text-accent-teal",
  Intermediate: "text-accent-yellow",
  Beginner:     "text-text-muted",
};
const levelDot: Record<ProficiencyLevel, string> = {
  Advanced:     "bg-accent-teal   shadow-[0_0_5px_rgba(78,204,163,0.7)]",
  Intermediate: "bg-accent-yellow shadow-[0_0_5px_rgba(244,196,48,0.6)]",
  Beginner:     "bg-text-muted",
};

export function DevOpsSection() {
  return (
    <section id="devops" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <SectionHeader
          label="05 — DevOps & Cloud"
          title="Infrastructure Skills"
          subtitle="Cloud platforms, CI/CD, containerization, and infrastructure-as-code tools."
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
      >
        {devopsTools.map((tool) => (
          <motion.div
            key={tool.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.07, borderColor: "rgba(108,99,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="group bg-surface border border-border rounded-xl px-3 py-4 text-center cursor-default transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(108,99,255,0.18)]"
          >
            {/* Real logo image */}
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              {tool.logo ? (
                <motion.img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-7 h-7 object-contain"
                  whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                  style={{ filter: "brightness(0.95) saturate(1.1)" }}
                />
              ) : (
                <span className="text-[22px]">{tool.icon}</span>
              )}
            </div>

            <p className="font-mono text-[11px] text-text-secondary mb-1 group-hover:text-text-primary transition-colors leading-tight">
              {tool.name}
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className={cn("w-1.5 h-1.5 rounded-full", levelDot[tool.level])} />
              <p className={cn("text-[9px] font-mono", levelColor[tool.level])}>{tool.level}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}