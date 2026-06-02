"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { stagger, item, fadeLeft, fadeRight, vp } from "@/lib/motion";

const INFO = [
  { icon:"✉️", label:"Email",    value:"mafzalbalghari101@gmail.com",        href:"mailto:mafzalbalghari101@gmail.com" },
  { icon:"💼", label:"LinkedIn", value:"linkedin.com/in/muhammad-afzal-balghari",  href:"https://linkedin.com/in/muhammad-afzal-balghari" },
  { icon:"🐙", label:"GitHub",   value:"github.com/afzalbalghari",       href:"https://github.com/afzalbalghari" },
  { icon:"📍", label:"Location", value:"Open to remote worldwide",   href:null },
];

export function ContactSection() {
  const { form, status, handleChange, handleSubmit } = useContactForm();
  return (
    <section id="contact" className="relative bg-bk2 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-g/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
          <SectionHeader label="10 — Contact" title="Let's Work Together" subtitle="Open to full-time roles, freelance projects, and interesting collaborations." />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-3">
            <div className="mb-2">
              <h3 className="font-display font-bold text-[15px] text-tw mb-1">Say hello 👋</h3>
              <p className="text-ts text-[13px] leading-relaxed">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.</p>
            </div>
            {INFO.map(({ icon, label, value, href }) => (
              <motion.div key={label} variants={item}
                whileHover={{ x:6, borderColor:"rgba(0,255,135,0.4)", backgroundColor:"rgba(0,255,135,0.03)" }}
                transition={{ type:"spring", stiffness:300, damping:22 }}
                className="flex items-center gap-4 bg-card border border-br rounded-lg px-4 py-3.5 cursor-default">
                <motion.span className="text-[18px] w-9 text-center"
                  whileHover={{ scale:1.35, rotate:[0,-10,10,0] }} transition={{ duration:0.3 }}>
                  {icon}
                </motion.span>
                <div>
                  <p className="font-mono text-[10px] text-tm mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-[14px] text-tw hover:text-g transition-colors">{value}</a>
                  ) : (
                    <p className="text-[14px] text-tw">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right */}
          <motion.form variants={fadeRight} onSubmit={handleSubmit}
            className="bg-card border border-br rounded-xl p-6 flex flex-col gap-4 shine g-border">
            {[{name:"name",label:"name",type:"text",placeholder:"Your name"},{name:"email",label:"email",type:"email",placeholder:"your@email.com"}].map(f => (
              <div key={f.name}>
                <label className="block font-mono text-[12px] text-tm mb-1.5">{f.label}</label>
                <motion.input whileFocus={{ borderColor:"rgba(0,255,135,0.6)", scale:1.005 }} transition={{ duration:0.2 }}
                  name={f.name} type={f.type} required
                  value={form[f.name as keyof typeof form]} onChange={handleChange}
                  placeholder={f.placeholder}
                  className="w-full bg-bk3 border border-br rounded-lg px-3.5 py-2.5 text-[14px] text-tw placeholder:text-tm outline-none focus:border-g/60 transition-colors" />
              </div>
            ))}
            <div>
              <label className="block font-mono text-[12px] text-tm mb-1.5">message</label>
              <motion.textarea whileFocus={{ borderColor:"rgba(0,255,135,0.6)" }} transition={{ duration:0.2 }}
                name="message" required value={form.message} onChange={handleChange}
                placeholder="Tell me about your project..." rows={4}
                className="w-full bg-bk3 border border-br rounded-lg px-3.5 py-2.5 text-[14px] text-tw placeholder:text-tm outline-none focus:border-g/60 transition-colors resize-y min-h-[90px]" />
            </div>
            <motion.button type="submit" disabled={status==="loading"||status==="success"}
              whileHover={status!=="success" ? { scale:1.03, y:-2, boxShadow:"0 0 30px rgba(0,255,135,0.45)" } : {}}
              whileTap={status!=="success" ? { scale:0.97 } : {}}
              transition={{ type:"spring", stiffness:300, damping:22 }}
              className={`w-full py-3 rounded-lg font-mono text-[14px] font-bold transition-all duration-300 ${
                status==="success" ? "bg-g/20 text-g border border-g/40" : "bg-g text-bk hover:shadow-g-lg"
              } disabled:opacity-70`}>
              {status==="loading" ? "Sending..." : status==="success" ? "Message sent! ✓" : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
