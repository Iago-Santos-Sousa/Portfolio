import { Section, SkillCard } from "@/components/composite";
import { skillCategories as defaultCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";

export function SkillsSection({
  categories = defaultCategories,
}: {
  categories?: SkillCategory[];
}) {
  return (
    <Section id="habilidades" tone="muted">
      <Section.Header
        sectionId="habilidades"
        eyebrow="Habilidades"
        title="Stack principal"
        description="Tecnologias que uso no dia a dia para construir, entregar e operar aplicações em produção."
      />
      <Section.Content>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.id}>
              <SkillCard category={category} />
            </li>
          ))}
        </ul>
      </Section.Content>
    </Section>
  );
}
