"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { projects } from "@/data";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-bg-secondary py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeader
            label="04 — Projects"
            title="Featured Work"
            subtitle="Selected projects showcasing full-stack development and cloud engineering skills."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Link
                  href={project.href}
                  className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden card-shine border-glow transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(108,99,255,0.18)]"
                >
                  {/* Real image cover */}
                  <div className="relative h-[140px] overflow-hidden bg-bg-tertiary">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[40px]">{project.icon}</div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    {/* Arrow */}
                    <motion.span
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bg-primary/80 backdrop-blur-sm flex items-center justify-center text-text-muted text-[14px] border border-border group-hover:bg-accent-purple group-hover:text-white group-hover:border-accent-purple transition-all duration-200"
                      whileHover={{ x: 1, y: -1 }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h3 className="font-display font-bold text-[16px] text-text-primary group-hover:text-accent-purple transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-[13px] leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map(({ label, variant }) => (
                        <Badge key={label} variant={variant}>{label}</Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}