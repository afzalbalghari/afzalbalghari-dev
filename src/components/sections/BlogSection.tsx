"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader, Badge, Button } from "@/components/ui";
import { blogPosts } from "@/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function BlogSection() {
  return (
    <section id="blog" className="max-w-[900px] mx-auto px-8 py-20">
      <SectionHeader
        label="08 — Blog"
        title="Latest Writing"
        subtitle="Technical articles on full-stack development, DevOps, and cloud architecture."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={staggerItem}>
            <Link
              href={post.href}
              className="group block bg-surface border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-border-hover hover:-translate-y-0.5"
            >
              {/* Cover */}
              <div className="h-[120px] bg-bg-tertiary border-b border-border flex items-center justify-center text-[36px]">
                {post.emoji}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Badge variant="accent">{post.category}</Badge>
                  <span className="font-mono text-[11px] text-text-muted">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[15px] text-text-primary leading-snug mb-1.5">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-[12px] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <Button href="#" variant="secondary">
          Read All Posts →
        </Button>
      </div>
    </section>
  );
}
