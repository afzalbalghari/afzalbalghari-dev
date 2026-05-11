"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { skillGroups } from "@/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { SkillColor } from "@/types";

const barColor: Record<SkillColor, string> = {
  purple: "bg-accent-purple",
  teal: "bg-accent-teal",
  yellow: "bg-accent-yellow",
  coral: "bg-accent-coral",
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-bg-secondary py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <SectionHeader
          label="05 — Skills"
          title="Developer Skills"
          subtitle="Languages, frameworks, databases, and tools I use daily."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={staggerItem}
              className="bg-surface border border-border rounded-xl p-5"
            >
              <h3 className="font-display font-bold text-[13px] text-text-secondary uppercase tracking-wide mb-4 flex items-center gap-2">
                <span>{group.icon}</span>
                {group.title}
              </h3>

              <div className="flex flex-col gap-0">
                {group.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between py-1.5 ${
                      i < group.skills.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-[13px] text-text-primary">
                      {skill.name}
                    </span>
                    <div className="w-[60px] h-[3px] bg-border rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${barColor[group.color]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
