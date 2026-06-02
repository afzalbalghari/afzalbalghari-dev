import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

const styles: Record<BadgeVariant, string> = {
  g:       "bg-[rgba(0,255,135,0.12)] text-g border-[rgba(0,255,135,0.3)]",
  blue:    "bg-[rgba(0,229,255,0.1)]  text-[#00e5ff] border-[rgba(0,229,255,0.25)]",
  yellow:  "bg-[rgba(255,214,0,0.1)]  text-[#ffd600] border-[rgba(255,214,0,0.25)]",
  red:     "bg-[rgba(255,82,82,0.1)]  text-[#ff5252] border-[rgba(255,82,82,0.25)]",
  default: "bg-card2 text-ts border-br2",
};

interface BadgeProps { children: React.ReactNode; variant?: BadgeVariant; className?: string; }

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={cn("inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium border", styles[variant], className)}>
      {children}
    </span>
  );
}
