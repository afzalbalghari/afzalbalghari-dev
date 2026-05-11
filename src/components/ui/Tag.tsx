import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-surface border border-border",
        "rounded px-2.5 py-0.5 text-[12px] font-mono text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
