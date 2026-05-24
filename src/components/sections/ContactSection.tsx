"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

const CONTACT_INFO = [
  { icon: "✉️", label: "Email",    value: "mafzalbalghari101@gmail.com",       href: "mailto:mafzalbalghari101@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/muhammad-afzal-balghari", href: "https://www.linkedin.com/in/muhammad-afzal-balghari" },
  { icon: "🐙", label: "GitHub",   value: "github.com/afzalbalghari",      href: "https://github.com/afzalbalghari" },
  { icon: "📍", label: "Location", value: "Open to remote worldwide",  href: null },
];

export function ContactSection() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="relative bg-bg-secondary py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-purple/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader label="10 — Contact" title="Let's Work Together" subtitle="Open to full-time roles, freelance projects, and interesting collaborations." />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Left */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-3">
            <div className="mb-2">
              <h3 className="font-display font-bold text-[15px] text-text-primary mb-1">Say hello 👋</h3>
              <p className="text-text-secondary text-[13px] leading-relaxed">
                I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                whileHover={{ x: 6, borderColor: "rgba(108,99,255,0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex items-center gap-4 bg-surface border border-border rounded-lg px-4 py-3.5 cursor-default"
              >
                <motion.span
                  className="text-[18px] w-9 text-center"
                  whileHover={{ scale: 1.3, rotate: [0,-10,10,0] }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.span>
                <div>
                  <p className="font-mono text-[11px] text-text-muted mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-[14px] text-text-primary hover:text-accent-purple transition-colors">{value}</a>
                  ) : (
                    <p className="text-[14px] text-text-primary">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.form
            variants={fadeRight}
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 card-shine border-glow"
          >
            {[
              { name: "name",    label: "name",    type: "text",  placeholder: "Your name" },
              { name: "email",   label: "email",   type: "email", placeholder: "your@email.com" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block font-mono text-[12px] text-text-muted mb-1.5">{label}</label>
                <motion.input
                  whileFocus={{ borderColor: "rgba(108,99,255,0.7)", scale: 1.005 }}
                  transition={{ duration: 0.2 }}
                  name={name}
                  type={type}
                  required
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full bg-bg-primary border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block font-mono text-[12px] text-text-muted mb-1.5">message</label>
              <motion.textarea
                whileFocus={{ borderColor: "rgba(108,99,255,0.7)" }}
                transition={{ duration: 0.2 }}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-bg-primary border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors resize-y min-h-[90px]"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              whileHover={status !== "success" ? { scale: 1.03, y: -2 } : {}}
              whileTap={status !== "success" ? { scale: 0.97 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`w-full py-3 rounded-lg font-mono text-[14px] transition-all duration-300 ${
                status === "success"
                  ? "bg-accent-teal text-bg-primary shadow-[0_0_20px_rgba(78,204,163,0.4)]"
                  : "bg-accent-purple text-white hover:shadow-[0_0_24px_rgba(108,99,255,0.5)]"
              } disabled:opacity-70`}
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message sent! ✓" : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}