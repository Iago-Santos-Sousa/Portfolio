import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { IconComponent } from "@/types";

export type BadgeVariant = "tech" | "outline" | "highlight";

const variants: Record<BadgeVariant, string> = {
  tech: "bg-primary-50 text-primary-700 ring-primary-600/15 dark:bg-primary-500/10 dark:text-primary-300 dark:ring-primary-400/20",
  outline: "bg-transparent text-muted ring-border",
  highlight:
    "bg-accent-50 text-accent-700 ring-accent-600/20 dark:bg-accent-500/10 dark:text-accent-300 dark:ring-accent-400/20",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: IconComponent;
  className?: string;
}

export function Badge({
  children,
  variant = "tech",
  icon: Icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium ring-1 ring-inset",
        variants[variant],
        className,
      )}
    >
      {Icon && <Icon aria-hidden size={14} />}
      {children}
    </span>
  );
}
