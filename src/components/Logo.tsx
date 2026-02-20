import { Link } from "react-router-dom";

export default function Logo({ size = "md", variant = "default" }: { size?: "sm" | "md" | "lg"; variant?: "default" | "light" }) {
  const sizes = {
    sm: { icon: 34, text: "text-base", sub: "text-[9px]", uid: "logo-grad-sm" },
    md: { icon: 42, text: "text-lg", sub: "text-[10px]", uid: "logo-grad-md" },
    lg: { icon: 54, text: "text-2xl", sub: "text-xs", uid: "logo-grad-lg" },
  };
  const s = sizes[size];

  const textColor = variant === "light" ? "text-white" : "text-heading";
  const subColor = variant === "light" ? "text-white/60" : "text-muted-foreground";

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Prep with Smile — Home">
      {/* Icon: speech bubble with a smile inside */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
        <defs>
          <linearGradient id={`${s.uid}-bg`} x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(174, 84%, 30%)" />
            <stop offset="60%" stopColor="hsl(168, 82%, 35%)" />
            <stop offset="100%" stopColor="hsl(24, 94%, 53%)" />
          </linearGradient>
          <linearGradient id={`${s.uid}-smile`} x1="14" y1="27" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
        {/* Speech bubble shape */}
        <path
          d="M6 8 C6 4.7 8.7 2 12 2 H42 C45.3 2 48 4.7 48 8 V32 C48 35.3 45.3 38 42 38 H32 L26 48 L20 38 H12 C8.7 38 6 35.3 6 32 Z"
          fill={`url(#${s.uid}-bg)`}
        />
        {/* Eyes */}
        <circle cx="20" cy="17" r="2.2" fill="white" opacity="0.95" />
        <circle cx="34" cy="17" r="2.2" fill="white" opacity="0.95" />
        {/* Smile arc */}
        <path
          d="M17 26 C20 31.5 34 31.5 37 26"
          stroke={`url(#${s.uid}-smile)`}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Shine dot */}
        <circle cx="38" cy="8" r="3" fill="white" opacity="0.25" />
      </svg>

      <div className="leading-tight">
        <div className={`font-display font-bold ${textColor} ${s.text} tracking-tight`}>
          Prep with <span className="text-gradient-orange">Smile</span>
        </div>
        <div className={`font-body uppercase tracking-widest ${subColor} ${s.sub} font-semibold`}>
          Inglese &amp; Carriera
        </div>
      </div>
    </Link>
  );
}
