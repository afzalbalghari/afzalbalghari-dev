"use client";

import { motion } from "framer-motion";
import { SectionHeader, Button } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const CONTACT_INFO = [
  { icon: "✉️", label: "Email", value: "hello@yourname.dev" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourname" },
  { icon: "🐙", label: "GitHub", value: "github.com/yourname" },
  { icon: "📍", label: "Location", value: "Open to remote worldwide" },
];

export function ContactSection() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="bg-bg-secondary py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <SectionHeader
          label="09 — Contact"
          title="Let's Work Together"
          subtitle="Open to full-time roles, freelance projects, and interesting collaborations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Left — info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <div className="mb-2">
              <h3 className="font-display font-bold text-[15px] text-text-primary mb-1">
                Say hello 👋
              </h3>
              <p className="text-text-secondary text-[13px] leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, my inbox is always open.
              </p>
            </div>

            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-surface border border-border rounded-lg px-4 py-3.5"
              >
                <span className="text-[18px] w-9 text-center">{icon}</span>
                <div>
                  <p className="font-mono text-[11px] text-text-muted mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px] text-text-primary">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4"
          >
            <div>
              <label className="block font-mono text-[12px] text-text-muted mb-1.5">
                name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-bg-primary border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[12px] text-text-muted mb-1.5">
                email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-bg-primary border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[12px] text-text-muted mb-1.5">
                message
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-bg-primary border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors resize-y min-h-[90px]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full py-3 rounded-lg font-mono text-[14px] transition-all ${
                status === "success"
                  ? "bg-accent-teal text-bg-primary"
                  : "bg-accent-purple text-white hover:opacity-85"
              } disabled:opacity-70`}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Message sent! ✓"
                : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
