import { Link } from "react-router-dom";

export default function Logo({ size = "md", variant = "dark" }: { size?: "sm" | "md" | "lg"; variant?: "dark" | "light" }) {
  const sizes = {
    sm: { icon: 32, text: "text-base", sub: "text-[9px]" },
    md: { icon: 38, text: "text-lg", sub: "text-[10px]" },
    lg: { icon: 48, text: "text-2xl", sub: "text-xs" },
  };
  const s = sizes[size];
  const isLight = variant === "light";

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <svg width={s.icon} height={s.icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#logo-grad)" />
        <text x="10" y="31" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="26" fill="white">P</text>
        <path d="M16 36 C21 41, 35 41, 40 33" stroke="#F97316" strokeWidth="3" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="hsl(174, 84%, 32%)" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-tight">
        <span className={`font-display block ${s.text} ${isLight ? "text-white" : "text-heading"}`}>
          Prep with <span className="text-gradient-orange">Smile</span>
        </span>
        <span className={`font-body uppercase tracking-widest ${s.sub} ${isLight ? "text-white/60" : "text-muted-foreground"}`}>
          Inglese & Carriera
        </span>
      </div>
    </Link>
  );
}
