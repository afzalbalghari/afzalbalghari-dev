"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const SOCIALS = [
  { label:"GitHub",   icon:"🐙", href:"https://github.com/afzalbalghari"   },
  { label:"LinkedIn", icon:"💼", href:"https://linkedin.com/in/muhammad-afzal-balghari"},
  { label:"Email",    icon:"✉️", href:"mailto:mafzalbalghari101@gmail.com"     },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-br bg-bk2 px-6 md:px-10 py-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-g/40 to-transparent" />
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-black text-[16px] mb-1">
            <span className="g-text">afzalBalghari</span><span className="g-text">.</span><span className="text-tw">Dev</span>
          </p>
          <p className="font-mono text-[12px] text-tm">© {year} — Built with Afzal Balghari</p>
        </div>
        <div className="flex gap-4">
          {SOCIALS.map(({ label, icon, href }) => (
            <motion.div key={label} whileHover={{ y:-5, scale:1.25 }} whileTap={{ scale:0.9 }}>
              <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-[20px] block filter hover:drop-shadow-[0_0_8px_rgba(0,255,135,0.8)] transition-all">
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
