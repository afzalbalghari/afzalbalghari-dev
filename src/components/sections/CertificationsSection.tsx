"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { certifications } from "@/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function CertificationsSection() {
  return (
    <section id="certs" className="bg-bg-secondary py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <SectionHeader
          label="07 — Certifications"
          title="Credentials"
          subtitle="Professional certifications validating cloud and development expertise."
        />

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
              className={`relative bg-surface border border-border rounded-xl p-5 overflow-hidden ${
                cert.upcoming ? "opacity-55" : ""
              }`}
            >
              {cert.upcoming && (
                <span className="absolute top-3 right-3 text-[9px] font-mono px-1.5 py-0.5 bg-[rgba(244,196,48,.15)] text-accent-yellow border border-[rgba(244,196,48,.3)] rounded">
                  UPCOMING
                </span>
              )}
              <span className="text-[28px] mb-3 block">{cert.icon}</span>
              <h3 className="font-display font-bold text-[14px] text-text-primary mb-1">
                {cert.name}
              </h3>
              <p className="font-mono text-[12px] text-text-muted">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
