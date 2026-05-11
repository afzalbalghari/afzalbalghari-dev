"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { projects } from "@/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-bg-secondary py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <SectionHeader
          label="03 — Projects"
          title="Featured Work"
          subtitle="Selected projects showcasing full-stack development and cloud engineering skills."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link
                href={project.href}
                className="group block bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:border-accent-purple hover:-translate-y-0.5 hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-xl">
                    {project.icon}
                  </div>
                  <span className="text-text-muted text-[18px] transition-all duration-200 group-hover:text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>

                <h3 className="font-display font-bold text-[17px] text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(({ label, variant }) => (
                    <Badge key={label} variant={variant}>
                      {label}
                    </Badge>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
