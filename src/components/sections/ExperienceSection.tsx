"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { experience } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
        <SectionHeader label="03 — Experience" title="Work History" subtitle="Professional experience building production-grade software." />
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px timeline-line" />

        {experience.map((exp, idx) => (
          <motion.div key={exp.id} variants={item} className="relative pl-12 mb-8 last:mb-0 group">
            {/* Animated dot */}
            <motion.span
              initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={vp}
              transition={{ type:"spring", stiffness:400, damping:18, delay:idx*0.12 }}
              className="absolute left-[8px] top-[6px] w-[17px] h-[17px] rounded-full bg-bk border-2 border-g flex items-center justify-center shadow-g-sm group-hover:shadow-g-md transition-shadow"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-g" />
            </motion.span>

            <motion.div
              whileHover={{ x:6, boxShadow:"0 12px 40px rgba(0,255,135,0.1)" }}
              transition={{ type:"spring", stiffness:300, damping:25 }}
              className="bg-card border border-br rounded-xl p-5 shine g-border cursor-default"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <h3 className="font-display font-bold text-[17px] text-tw">{exp.role}</h3>
                <span className="font-mono text-[11px] text-tm whitespace-nowrap mt-1">{exp.period}</span>
              </div>
              <p className="font-mono text-[13px] text-g mb-3">
                {exp.company}
                {exp.current && (
                  <span className="ml-2 inline-block px-2 py-0.5 text-[10px] bg-g/10 text-g border border-g/25 rounded">current</span>
                )}
              </p>
              <p className="text-ts text-[14px] leading-relaxed mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <motion.span key={tag} whileHover={{ scale:1.1, y:-2 }}
                    className="inline-block px-2.5 py-0.5 bg-g/8 text-g border border-g/20 rounded text-[11px] font-mono">
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
