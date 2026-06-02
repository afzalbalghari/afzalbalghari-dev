"use client";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { stagger, staggerFast, item, fadeLeft, fadeRight, vp } from "@/lib/motion";
import Image from "next/image";

const FACTS = [
  { icon:"📍", label:"Location",     value:"Gilgit Baltistan, Pakistan"               },
  { icon:"💼", label:"Current Role", value:"Full-Stack Developer" },
  { icon:"🎓", label:"Degree",       value:"BS Software Engineering"            },
  { icon:"🌐", label:"Languages",    value:"English, Urdu, balti"                     },
  { icon:"☕", label:"Fuel",         value:"Coffee & curiosity"                },
  { icon:"🕐", label:"Availability", value:"Open to opportunities"             },
];
const STACK = [
  { icon:"⚛️", name:"React / Next.js 14" }, { icon:"☁️", name:"AWS (ECS, Lambda)" },
  { icon:"🐳", name:"Docker & K8s"        }, { icon:"🏗️", name:"Terraform"         },
  { icon:"🟦", name:"TypeScript"          }, { icon:"🐘", name:"PostgreSQL / Redis" },
];
const INTERESTS = ["Open Source","Cloud Architecture","System Design","Developer Tooling","Technical Writing","Automation"];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-bk2 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/30 to-transparent" />
      <div className="absolute bottom-1/3 left-[-100px] w-[400px] h-[400px] bg-g/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <SectionHeader label="02 — About" title="Who I Am" subtitle="A bit about me, how I got here, and what drives me." />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

          {/* Left */}
          <motion.div variants={fadeLeft} className="md:col-span-2 flex flex-col gap-4">
            {/* Avatar card */}
            <motion.div whileHover={{ y:-4, boxShadow:"0 16px 48px rgba(0,255,135,0.12)" }}
              transition={{ type:"spring", stiffness:300, damping:22 }}
              className="bg-card border border-br rounded-xl p-6 flex flex-col items-center text-center gap-3 shine g-border">
              <motion.div whileHover={{ scale:1.08, rotate:4 }} transition={{ type:"spring", stiffness:300, damping:18 }}
                className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-g to-[#00e5ff] flex items-center justify-center text-[40px] border-4 border-bk shadow-g-md">
                <Image
                  src="/images/profP.png"
                  alt="Muhammad Afzal"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-[18px] text-tw">muhammad Afzal</h3>
                <p className="font-mono text-[12px] text-g mt-0.5">Full-Stack · DevOps · Cloud</p>
              </div>
              <div className="flex items-center gap-2 bg-bk3 border border-br2 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-g shadow-g-sm animate-pulse" />
                <span className="font-mono text-[11px] text-ts">Open to work</span>
              </div>
            </motion.div>

            {/* Facts */}
            <div className="bg-card border border-br rounded-xl overflow-hidden">
              {FACTS.map(({ icon, label, value }, i) => (
                <motion.div key={label} variants={item}
                  whileHover={{ x:5, backgroundColor:"rgba(0,255,135,0.04)" }}
                  className={`flex items-start gap-3 px-4 py-3 transition-all ${i < FACTS.length-1 ? "border-b border-br" : ""}`}>
                  <span className="text-[15px] mt-0.5">{icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-tm mb-0.5">{label}</p>
                    <p className="text-[13px] text-tw">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeRight} className="md:col-span-3 flex flex-col gap-6">
            {[
              <>I'm a Full-Stack Developer with <span className="text-g font-medium">hands-on industry experience</span> gained through a one-year internship at <span className="text-g font-medium">Netzing Technology</span>, During this time, I developed web applications, worked with modern technologies, learned cloud deployment and system maintenance.</>,
              <>My journey into software began with curiosity about how websites work, which quickly grew into a deep passion for <span className="text-g font-medium"> clean code, developer experience, and thoughtfully engineered systems</span>.  Today, I focus on building production-ready applications, automating development and deployment processes using modern full-stack and DevOps tools.</>,
              <>I enjoy solving real-world problems through technology—whether that means designing <span className="text-g font-medium">efficient databases, building CI/CD pipelines, or creating intuitive user experiences.</span> Beyond coding, I spend time exploring open-source projects, expanding my knowledge in cloud architecture and software engineering.</>,
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={vp}
                transition={{ delay:i*0.13, duration:0.55, ease:[0.22,1,0.36,1] }}
                className="text-ts text-[15px] leading-[1.85]">{para}</motion.p>
            ))}

            {/* Stack */}
            <div>
              <p className="font-mono text-[11px] text-tm uppercase tracking-[2px] mb-3">Currently working with</p>
              <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={vp}
                className="grid grid-cols-2 gap-2">
                {STACK.map(({ icon, name }, i) => (
                  <motion.div key={name} variants={item}
                    whileHover={{ x:4, borderColor:"rgba(0,255,135,0.5)", backgroundColor:"rgba(0,255,135,0.04)" }}
                    transition={{ type:"spring", stiffness:300, damping:22 }}
                    className="flex items-center gap-2.5 bg-card border border-br rounded-lg px-3 py-2.5 cursor-default">
                    <span className="text-[15px]">{icon}</span>
                    <span className="font-mono text-[12px] text-ts">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Interests */}
            <div>
              <p className="font-mono text-[11px] text-tm uppercase tracking-[2px] mb-3">Interests</p>
              <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={vp}
                className="flex flex-wrap gap-2">
                {INTERESTS.map(interest => (
                  <motion.span key={interest} variants={item}
                    whileHover={{ scale:1.1, y:-2 }} whileTap={{ scale:0.95 }}
                    className="inline-block">
                    <Badge variant="g">{interest}</Badge>
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
