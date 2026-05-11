import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

const variantStyles: Record<BadgeVariant | "default", string> = {
  default: "bg-surface text-text-secondary border-border",
  accent:
    "bg-[rgba(108,99,255,.15)] text-[#a09af0] border-[rgba(108,99,255,.3)]",
  green:
    "bg-[rgba(78,204,163,.12)] text-accent-teal border-[rgba(78,204,163,.25)]",
  yellow:
    "bg-[rgba(244,196,48,.10)] text-accent-yellow border-[rgba(244,196,48,.25)]",
  red:
    "bg-[rgba(255,107,107,.12)] text-[#ff8a8a] border-[rgba(255,107,107,.25)]",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
