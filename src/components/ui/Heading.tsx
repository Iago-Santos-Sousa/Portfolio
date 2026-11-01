import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Level = 1 | 2 | 3 | 4;

const styles: Record<Level, string> = {
  1: "text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-extrabold tracking-tight",
  2: "text-[clamp(1.875rem,4vw,2.75rem)] leading-tight font-bold tracking-tight",
  3: "text-xl leading-snug font-bold",
  4: "text-base leading-snug font-semibold",
};

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  children: ReactNode;
}

export function Heading({
  level = 2,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={cn("text-foreground", styles[level], className)} {...rest}>
      {children}
    </Tag>
  );
}
