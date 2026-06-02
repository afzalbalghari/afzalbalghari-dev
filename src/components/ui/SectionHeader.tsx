import { cn } from "@/lib/utils";
interface SectionHeaderProps { label: string; title: string; subtitle?: string; className?: string; }
export function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="font-mono text-[11px] text-g tracking-[3px] uppercase mb-3">{label}</p>
      <h2 className="font-display text-[clamp(28px,4vw,44px)] font-black leading-tight text-tw mb-3">{title}</h2>
      {subtitle && <p className="text-ts text-[15px] leading-relaxed max-w-xl">{subtitle}</p>}
    </div>
  );
}
