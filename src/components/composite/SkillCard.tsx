import { Heading } from "@/components/ui";
import type { SkillCategory } from "@/types";
import { Card } from "./card";
import { TechStack } from "./TechStack";

/** Card de categoria de habilidades: funciona igual em mouse e toque. */
export function SkillCard({ category }: { category: SkillCategory }) {
  const { title, icon: Icon, skills } = category;

  return (
    <Card>
      <Card.Header className="flex-row items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
          <Icon aria-hidden size={22} />
        </span>
        <Heading level={3} className="text-lg">
          {title}
        </Heading>
      </Card.Header>
      <Card.Body>
        <TechStack items={skills} label={`Habilidades de ${title}`} variant="outline" />
      </Card.Body>
    </Card>
  );
}
