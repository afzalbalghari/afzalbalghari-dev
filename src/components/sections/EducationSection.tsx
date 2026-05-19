"use client";

import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { education } from "@/data";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/motion";

export function EducationSection() {
  return (
    <section id="education" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <SectionHeader label="07 — Education" title="Academic Background" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-3"
      >
        {education.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            whileHover={{ x: 6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="bg-surface border border-border rounded-xl p-6 flex gap-5 items-start card-shine border-glow cursor-default"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-11 h-11 min-w-[44px] rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-[20px]"
            >
              {item.icon}
            </motion.div>
            <div>
              <h3 className="font-display font-bold text-[15px] text-text-primary mb-1">{item.degree}</h3>
              <p className="font-mono text-[13px] text-accent-teal mb-1">{item.school}</p>
              <p className="font-mono text-[11px] text-text-muted mb-2">{item.period}</p>
              {item.description && (
                <p className="text-text-secondary text-[13px] leading-relaxed">{item.description}</p>
              )}
              {item.badges && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.badges.map((badge, i) => (
                    <motion.span key={badge} whileHover={{ scale: 1.1, y: -2 }} className="inline-block">
                      <Badge variant={["accent","green","yellow","accent"][i % 4] as "accent"|"green"|"yellow"}>{badge}</Badge>
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}