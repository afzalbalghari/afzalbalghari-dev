import Link from "next/link";
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
    "bg-accent-purple text-white border-transparent hover:bg-transparent hover:border-accent-purple hover:text-accent-purple",
  secondary:
    "bg-transparent text-text-primary border-border hover:border-border-hover hover:bg-surface",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 px-6 py-[11px] rounded-lg",
    "text-sm font-mono border transition-all duration-200",
    variantStyles[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
