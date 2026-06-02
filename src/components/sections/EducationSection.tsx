"use client";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { education } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";

export function EducationSection() {
  return (
    <section id="education" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
        <SectionHeader label="07 — Education" title="Academic Background" />
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="flex flex-col gap-4">
        {education.map(ed => (
          <motion.div key={ed.id} variants={item}
            whileHover={{ x:6, borderColor:"rgba(0,255,135,0.4)", boxShadow:"0 8px 30px rgba(0,255,135,0.08)" }}
            transition={{ type:"spring", stiffness:280, damping:22 }}
            className="bg-card border border-br rounded-xl p-6 flex gap-5 items-start shine cursor-default">
            <motion.div whileHover={{ scale:1.15, rotate:6 }} transition={{ type:"spring", stiffness:300, damping:18 }}
              className="w-11 h-11 min-w-[44px] rounded-lg bg-bk3 border border-br2 flex items-center justify-center text-[20px]">
              {ed.icon}
            </motion.div>
            <div>
              <h3 className="font-display font-bold text-[15px] text-tw mb-1">{ed.degree}</h3>
              <p className="font-mono text-[13px] text-g mb-1">{ed.school}</p>
              <p className="font-mono text-[11px] text-tm mb-2">{ed.period}</p>
              {ed.description && <p className="text-ts text-[13px] leading-relaxed">{ed.description}</p>}
              {ed.badges && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {ed.badges.map((b, i) => (
                    <motion.span key={b} whileHover={{ scale:1.1, y:-2 }} className="inline-block">
                      <Badge variant={["g","blue","yellow","g"][i%4] as "g"|"blue"|"yellow"}>{b}</Badge>
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
