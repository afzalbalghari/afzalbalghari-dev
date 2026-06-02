"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { projects } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-bk2 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-g/4 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <SectionHeader label="04 — Projects" title="Featured Work" subtitle="Selected projects showcasing full-stack development and engineering skills." />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <motion.div
                whileHover={{ y:-8, scale:1.02 }}
                whileTap={{ scale:0.97 }}
                transition={{ type:"spring", stiffness:300, damping:22 }}
              >
                <Link href={project.href}
                  className="group flex flex-col bg-card border border-br rounded-xl overflow-hidden shine g-border transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,255,135,0.12)]">
                  {/* Image */}
                  <div className="relative h-[140px] overflow-hidden bg-bk3">
                    {project.image && (
                      <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-600 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Green tint overlay on hover */}
                    <div className="absolute inset-0 bg-g/0 group-hover:bg-g/6 transition-colors duration-300" />
                    <motion.span
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bk/80 backdrop-blur-sm flex items-center justify-center text-[13px] border border-br text-ts group-hover:bg-g group-hover:text-bk group-hover:border-g transition-all duration-200"
                      whileHover={{ x:2, y:-2 }}>↗</motion.span>
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h3 className="font-display font-bold text-[16px] text-tw group-hover:text-g transition-colors duration-200">{project.title}</h3>
                    <p className="text-ts text-[13px] leading-relaxed flex-1">{project.description}</p>
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
