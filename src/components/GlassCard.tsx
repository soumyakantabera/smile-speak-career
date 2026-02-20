import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6",
        hover && "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
