"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { label: "GitHub",   icon: "🐙", href: "https://github.com/yourname" },
  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter",  icon: "🐦", href: "https://twitter.com/yourname" },
  { label: "Email",    icon: "✉️", href: "mailto:hello@yourname.dev" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-bg-secondary border-t border-border px-5 md:px-10 py-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-[16px] text-text-primary mb-1">
            dev<span className="text-accent-purple">.</span><span className="gradient-text-accent">portfolio</span>
          </p>
          <p className="font-mono text-[12px] text-text-muted">
            © {year} — Built with Next.js, Tailwind & Framer Motion
          </p>
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, icon, href }) => (
            <motion.div key={label} whileHover={{ y: -4, scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[20px] block transition-all"
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}