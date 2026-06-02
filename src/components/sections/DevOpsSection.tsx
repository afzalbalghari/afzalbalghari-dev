"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { devopsTools } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProficiencyLevel } from "@/types";

const lvlColor: Record<ProficiencyLevel, string> = { Advanced:"text-g", Intermediate:"text-[#ffd600]", Beginner:"text-tm" };
const lvlDot:   Record<ProficiencyLevel, string> = { Advanced:"bg-g shadow-g-sm", Intermediate:"bg-[#ffd600] shadow-[0_0_5px_rgba(255,214,0,0.6)]", Beginner:"bg-tm" };

export function DevOpsSection() {
  return (
    <section id="devops" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
        <SectionHeader label="05 — DevOps & Cloud" title="Infrastructure Skills" subtitle="Cloud platforms, CI/CD, containerization, and infrastructure-as-code tools." />
      </motion.div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {devopsTools.map(tool => (
          <motion.div key={tool.id} variants={item}
            whileHover={{ y:-7, scale:1.08, borderColor:"rgba(0,255,135,0.5)", boxShadow:"0 8px 28px rgba(0,255,135,0.15)" }}
            whileTap={{ scale:0.93 }}
            transition={{ type:"spring", stiffness:320, damping:20 }}
            className="group bg-card border border-br rounded-xl px-3 py-4 text-center cursor-default shine transition-all">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              {tool.logo ? (
                <motion.img src={tool.logo} alt={tool.name}
                  className="w-7 h-7 object-contain"
                  whileHover={{ scale:1.25, rotate:[0,-10,10,0] }}
                  transition={{ duration:0.4 }}
                />
              ) : <span className="text-[22px]">{tool.icon}</span>}
            </div>
            <p className="font-mono text-[11px] text-ts mb-1 group-hover:text-tw transition-colors leading-tight">{tool.name}</p>
            <div className="flex items-center justify-center gap-1">
              <span className={cn("w-1.5 h-1.5 rounded-full", lvlDot[tool.level])} />
              <p className={cn("text-[9px] font-mono", lvlColor[tool.level])}>{tool.level}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
