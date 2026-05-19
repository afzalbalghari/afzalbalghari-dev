"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { certifications } from "@/data";
import { staggerContainer, staggerItem, scalePop, viewportOnce } from "@/lib/motion";

export function CertificationsSection() {
  return (
    <section id="certs" className="relative bg-bg-secondary py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-yellow/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent-yellow/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={scalePop} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeader label="08 — Certifications" title="Credentials" subtitle="Professional certifications validating cloud and development expertise." />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              whileHover={cert.upcoming ? {} : { y: -6, scale: 1.03 }}
              whileTap={cert.upcoming ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative bg-surface border border-border rounded-xl p-5 overflow-hidden card-shine ${cert.upcoming ? "opacity-55 cursor-not-allowed" : "border-glow cursor-default hover:shadow-[0_6px_24px_rgba(108,99,255,0.15)]"}`}
            >
              {cert.upcoming && (
                <span className="absolute top-3 right-3 text-[9px] font-mono px-1.5 py-0.5 bg-[rgba(244,196,48,.15)] text-accent-yellow border border-[rgba(244,196,48,.3)] rounded">
                  UPCOMING
                </span>
              )}
              <motion.span
                className="text-[28px] mb-3 block"
                whileHover={cert.upcoming ? {} : { scale: 1.25, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {cert.icon}
              </motion.span>
              <h3 className="font-display font-bold text-[14px] text-text-primary mb-1">{cert.name}</h3>
              <p className="font-mono text-[12px] text-text-muted">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}