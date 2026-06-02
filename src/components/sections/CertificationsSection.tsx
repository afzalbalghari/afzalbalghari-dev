"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { certifications } from "@/data";
import { stagger, scalePop, fadeLeft, vp } from "@/lib/motion";

export function CertificationsSection() {
  return (
    <section id="certs" className="relative bg-bk2 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[200px] bg-g/4 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <SectionHeader label="08 — Certifications" title="Credentials" subtitle="Professional certifications validating cloud and development expertise." />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {certifications.map(cert => (
            <motion.div key={cert.id} variants={scalePop}
              whileHover={cert.upcoming ? {} : { y:-7, scale:1.04, borderColor:"rgba(0,255,135,0.5)", boxShadow:"0 12px 40px rgba(0,255,135,0.15)" }}
              whileTap={cert.upcoming ? {} : { scale:0.96 }}
              transition={{ type:"spring", stiffness:300, damping:22 }}
              className={`relative bg-card border border-br rounded-xl p-5 overflow-hidden shine ${cert.upcoming ? "opacity-50 cursor-not-allowed" : "cursor-default g-border"}`}>
              {cert.upcoming && (
                <span className="absolute top-3 right-3 text-[9px] font-mono px-1.5 py-0.5 bg-[#ffd600]/10 text-[#ffd600] border border-[#ffd600]/25 rounded">UPCOMING</span>
              )}
              <motion.span className="text-[28px] mb-3 block"
                whileHover={cert.upcoming ? {} : { scale:1.3, rotate:[0,-12,12,0] }} transition={{ duration:0.4 }}>
                {cert.icon}
              </motion.span>
              <h3 className="font-display font-bold text-[14px] text-tw mb-1">{cert.name}</h3>
              <p className="font-mono text-[12px] text-tm">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
