import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <p className="font-mono text-[11px] text-accent-teal tracking-[3px] uppercase mb-2">
        {label}
      </p>
      <h2 className="font-display text-[clamp(26px,4vw,40px)] font-bold leading-tight text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
