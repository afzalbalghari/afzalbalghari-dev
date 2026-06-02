"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge } from "@/components/ui";
import { blogPosts } from "@/data";
import { stagger, item, fadeLeft, vp } from "@/lib/motion";

export function BlogSection() {
  return (
    <section id="blog" className="max-w-[900px] mx-auto px-8 py-24">
      <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
        <SectionHeader label="09 — Blog" title="Latest Writing" subtitle="Technical articles on full-stack development, DevOps, and cloud architecture." />
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {blogPosts.map(post => (
          <motion.div key={post.id} variants={item}>
            <motion.div whileHover={{ y:-8, scale:1.015 }} whileTap={{ scale:0.97 }}
              transition={{ type:"spring", stiffness:300, damping:22 }}>
              <Link href={post.href}
                className="group flex flex-col bg-card border border-br rounded-xl overflow-hidden shine g-border hover:shadow-[0_16px_48px_rgba(0,255,135,0.1)] transition-shadow duration-300">
                <div className="relative h-[110px] bg-gradient-to-br from-bk3 to-bk2 border-b border-br flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-g/0 group-hover:bg-g/5 transition-colors duration-300" />
                  <motion.span className="text-[36px] relative z-10"
                    whileHover={{ scale:1.25, rotate:[0,-12,12,0] }} transition={{ duration:0.4 }}>
                    {post.emoji}
                  </motion.span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Badge variant="g">{post.category}</Badge>
                    <span className="font-mono text-[11px] text-tm">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-tw leading-snug mb-1.5 group-hover:text-g transition-colors duration-200">{post.title}</h3>
                  <p className="text-ts text-[12px] leading-relaxed flex-1">{post.excerpt}</p>
                  <p className="mt-3 font-mono text-[11px] text-g opacity-0 group-hover:opacity-100 transition-opacity duration-200">Read article →</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center">
        <motion.a href="#"
          whileHover={{ scale:1.05, y:-2, borderColor:"rgba(0,255,135,0.6)" }} whileTap={{ scale:0.96 }}
          className="inline-flex items-center gap-2 text-tw px-6 py-3 rounded-lg font-mono text-[13px] border border-br2 hover:text-g transition-all">
          Read All Posts →
        </motion.a>
      </div>
    </section>
  );
}
