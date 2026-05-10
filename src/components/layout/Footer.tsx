import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "GitHub", icon: "🐙", href: "https://github.com/yourname" },
  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter", icon: "🐦", href: "https://twitter.com/yourname" },
  { label: "Email", icon: "✉️", href: "mailto:hello@yourname.dev" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border px-5 md:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-text-muted font-mono text-[13px]">
        © {year} — Built with Next.js & Tailwind ·{" "}
        <span className="text-accent-purple">Open to work</span>
      </p>
      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[20px] text-text-muted hover:text-accent-purple transition-colors"
          >
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
