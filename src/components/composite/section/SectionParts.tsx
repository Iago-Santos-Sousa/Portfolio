import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container, Heading, Text } from "@/components/ui";

interface SectionRootProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  tone?: "default" | "muted";
}

export function SectionRoot({
  id,
  tone = "default",
  className,
  children,
  ...rest
}: SectionRootProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "scroll-mt-16 py-16 md:py-24",
        tone === "muted" && "bg-surface",
        className,
      )}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  sectionId: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  sectionId,
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 max-w-2xl md:mb-14", className)}>
      <span className="mb-3 inline-block font-mono text-sm font-semibold tracking-wider text-highlight uppercase">
        {eyebrow}
      </span>
      <Heading id={`${sectionId}-title`} level={2}>
        {title}
      </Heading>
      {description && (
        <Text variant="lead" className="mt-4">
          {description}
        </Text>
      )}
    </header>
  );
}

export function SectionContent({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

