"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-purple text-white border-transparent hover:shadow-[0_0_24px_rgba(108,99,255,0.5)]",
  secondary:
    "bg-transparent text-text-primary border-border hover:border-accent-purple/60",
};

export function Button({ children, href, variant = "primary", className, onClick, type = "button", disabled }: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 px-6 py-[11px] rounded-lg",
    "text-sm font-mono border transition-all duration-200",
    variantStyles[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.04, y: -2 },
    whileTap:   disabled ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 300, damping: 22 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={base}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </motion.button>
  );
}