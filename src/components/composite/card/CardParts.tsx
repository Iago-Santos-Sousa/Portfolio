import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SlotProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Card composto (Composite Pattern): o contêiner aceita qualquer combinação
 * de partes (Media, Header, Body, Footer) pela mesma interface `children`.
 */
export function CardRoot({ className, children, ...rest }: SlotProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-600/10",
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  );
}

export function CardMedia({ className, children, ...rest }: SlotProps) {
  return (
    <div
      className={cn("relative aspect-video overflow-hidden bg-surface", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...rest }: SlotProps) {
  return (
    <div className={cn("flex flex-col gap-1 px-5 pt-5 sm:px-6", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardBody({ className, children, ...rest }: SlotProps) {
  return (
    <div
      className={cn("flex flex-1 flex-col gap-4 px-5 py-4 sm:px-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...rest }: SlotProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 border-t border-border px-5 py-4 sm:px-6",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

