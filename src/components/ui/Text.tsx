import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TextVariant = "body" | "muted" | "lead";

const variants: Record<TextVariant, string> = {
  body: "text-base leading-relaxed text-foreground",
  muted: "text-sm leading-relaxed text-muted",
  lead: "text-lg leading-relaxed text-muted md:text-xl",
};

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  children: ReactNode;
}

export function Text({
  variant = "body",
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <p className={cn(variants[variant], className)} {...rest}>
      {children}
    </p>
  );
}
