"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { blogPosts } from "@/data";
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from "@/lib/motion";

export function BlogSection() {
  return (
    <section id="blog" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <SectionHeader label="09 — Blog" title="Latest Writing" subtitle="Technical articles on full-stack development, DevOps, and cloud architecture." />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={staggerItem}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Link
                href={post.href}
                className="group block bg-surface border border-border rounded-xl overflow-hidden card-shine border-glow hover:shadow-[0_8px_32px_rgba(108,99,255,0.12)] transition-shadow duration-300"
              >
                {/* Cover */}
                <div className="h-[110px] bg-gradient-to-br from-bg-tertiary to-bg-secondary border-b border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.span
                    className="text-[36px] relative z-10"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {post.emoji}
                  </motion.span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Badge variant="accent">{post.category}</Badge>
                    <span className="font-mono text-[11px] text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-text-primary leading-snug mb-1.5 group-hover:text-accent-purple transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-[12px] leading-relaxed">{post.excerpt}</p>
                  <p className="mt-3 font-mono text-[11px] text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read article →
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-transparent text-text-primary px-6 py-3 rounded-lg font-mono text-[13px] border border-border hover:border-accent-purple/60 transition-all"
        >
          Read All Posts →
        </motion.a>
      </motion.div>
    </section>
  );
}