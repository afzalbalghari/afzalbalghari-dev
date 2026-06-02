"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { skillGroups } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";
import type { SkillColor } from "@/types";

const barGrad: Record<SkillColor, string> = {
  green:  "bg-gradient-to-r from-g to-[#00e5a0]",
  cyan:   "bg-gradient-to-r from-[#00e5ff] to-[#00b8d4]",
  yellow: "bg-gradient-to-r from-[#ffd600] to-[#ffab00]",
  orange: "bg-gradient-to-r from-[#ff6d00] to-[#ff9100]",
};
const barShadow: Record<SkillColor, string> = {
  green:  "shadow-[0_0_8px_rgba(0,255,135,0.6)]",
  cyan:   "shadow-[0_0_8px_rgba(0,229,255,0.6)]",
  yellow: "shadow-[0_0_8px_rgba(255,214,0,0.5)]",
  orange: "shadow-[0_0_8px_rgba(255,109,0,0.5)]",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-bk2 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[500px] bg-g/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <SectionHeader label="06 — Skills" title="Developer Skills" subtitle="Languages, frameworks, databases, and tools I use daily." />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skillGroups.map(group => (
            <motion.div key={group.id} variants={item}
              whileHover={{ y:-6, scale:1.01, borderColor:"rgba(0,255,135,0.4)", boxShadow:"0 12px 40px rgba(0,255,135,0.1)" }}
              transition={{ type:"spring", stiffness:280, damping:22 }}
              className="bg-card border border-br rounded-xl p-5 shine cursor-default transition-all">
              <h3 className="font-display font-bold text-[12px] text-ts uppercase tracking-wide mb-4 flex items-center gap-2">
                <motion.span whileHover={{ scale:1.3, rotate:12 }} className="text-[15px]">{group.icon}</motion.span>
                {group.title}
              </h3>
              <div className="flex flex-col">
                {group.skills.map((skill, i) => (
                  <div key={skill.name} className={`flex items-center gap-2.5 py-2 ${i < group.skills.length-1 ? "border-b border-br" : ""}`}>
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name}
                        className="w-5 h-5 object-contain rounded flex-shrink-0 brightness-90 saturate-110"
                        loading="lazy" decoding="async" />
                    ) : <div className="w-5 h-5 rounded bg-br flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-tw truncate mb-1">{skill.name}</p>
                      <div className="w-full h-[3px] bg-br rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${barGrad[group.color]} ${barShadow[group.color]}`}
                          initial={{ width:0 }}
                          whileInView={{ width:`${skill.level}%` }}
                          viewport={vp}
                          transition={{ duration:1.2, ease:[0.22,1,0.36,1], delay:i*0.1 }}
                        />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-tm w-7 text-right flex-shrink-0">{skill.level}%</span>
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
