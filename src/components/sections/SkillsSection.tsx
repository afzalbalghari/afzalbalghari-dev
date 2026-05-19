"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { skillGroups } from "@/data";
import { staggerContainer, staggerItem, fadeRight, viewportOnce } from "@/lib/motion";
import type { SkillColor } from "@/types";

const barColor: Record<SkillColor, string> = {
  purple: "bg-gradient-to-r from-accent-purple to-[#9b8fff]",
  teal:   "bg-gradient-to-r from-accent-teal   to-[#6ee8c4]",
  yellow: "bg-gradient-to-r from-accent-yellow  to-[#f7d97a]",
  coral:  "bg-gradient-to-r from-accent-coral   to-[#ff9a9a]",
};

const groupBorder: Record<SkillColor, string> = {
  purple: "hover:border-accent-purple/50 hover:shadow-[0_8px_30px_rgba(108,99,255,0.15)]",
  teal:   "hover:border-accent-teal/50   hover:shadow-[0_8px_30px_rgba(78,204,163,0.12)]",
  yellow: "hover:border-accent-yellow/50 hover:shadow-[0_8px_30px_rgba(244,196,48,0.10)]",
  coral:  "hover:border-accent-coral/50  hover:shadow-[0_8px_30px_rgba(255,107,107,0.10)]",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-bg-secondary py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[400px] bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeader
            label="06 — Skills"
            title="Developer Skills"
            subtitle="Languages, frameworks, databases, and tools I use daily."
          />
        </motion.div>

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
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`bg-surface border border-border rounded-xl p-5 card-shine transition-all duration-300 cursor-default ${groupBorder[group.color]}`}
            >
              {/* Group header */}
              <h3 className="font-display font-bold text-[13px] text-text-secondary uppercase tracking-wide mb-4 flex items-center gap-2">
                <span>{group.icon}</span>
                {group.title}
              </h3>

              {/* Skill rows with logo */}
              <div className="flex flex-col">
                {group.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2.5 py-2 ${i < group.skills.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {/* Real tech logo */}
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain rounded flex-shrink-0"
                        style={{ filter: "brightness(0.9) saturate(1.1)" }}
                      />
                    ) : (
                      <div className="w-5 h-5 rounded bg-border flex-shrink-0" />
                    )}

                    {/* Name + bar */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-text-primary truncate mb-1">{skill.name}</p>
                      <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${barColor[group.color]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={viewportOnce}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Percent */}
                    <span className="font-mono text-[10px] text-text-muted w-7 text-right flex-shrink-0">
                      {skill.level}%
                    </span>
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