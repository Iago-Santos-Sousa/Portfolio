import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import type { Skill } from "@/types";

interface TechStackProps {
  items: Array<string | Skill>;
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const toSkill = (item: string | Skill): Skill =>
  typeof item === "string" ? { name: item } : item;

export function TechStack({
  items,
  label,
  variant = "tech",
  className,
}: TechStackProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map(toSkill).map((skill) => (
        <li key={skill.name}>
          <Badge variant={variant} icon={skill.icon}>
            {skill.name}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
