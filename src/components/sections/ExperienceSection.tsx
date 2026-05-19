"use client";

import { motion } from "framer-motion";
import { SectionHeader, Tag } from "@/components/ui";
import { experience } from "@/data";
import { staggerContainer, staggerItem, fadeLeft, viewportOnce } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <motion.div variants={fadeLeft}>
          <SectionHeader label="03 — Experience" title="Work History" subtitle="Professional experience building production-grade software and cloud infrastructure." />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/60 via-border to-transparent" />

          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="relative pl-12 mb-10 last:mb-0 group"
            >
              {/* Animated dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: idx * 0.1 }}
                className="absolute left-[8px] top-[6px] w-[17px] h-[17px] rounded-full bg-bg-primary border-2 border-accent-purple flex items-center justify-center group-hover:border-accent-teal transition-colors duration-300"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-accent-purple group-hover:bg-accent-teal transition-colors duration-300" />
              </motion.span>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-surface border border-border rounded-xl p-5 card-shine border-glow cursor-default"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="font-display font-bold text-[17px] text-text-primary">{item.role}</h3>
                  <span className="font-mono text-[11px] text-text-muted whitespace-nowrap mt-1">{item.period}</span>
                </div>
                <p className="font-mono text-[13px] text-accent-teal mb-3">
                  {item.company}
                  {item.current && (
                    <span className="ml-2 inline-block px-2 py-0.5 text-[10px] bg-[rgba(78,204,163,.12)] text-accent-teal border border-[rgba(78,204,163,.25)] rounded">current</span>
                  )}
                </p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <motion.span key={tag} whileHover={{ scale: 1.08, y: -1 }} className="inline-block">
                      <Tag>{tag}</Tag>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}