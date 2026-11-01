import { CircleCheck, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button, Heading, Image, Text } from "@/components/ui";
import type { Project } from "@/types";
import { Card } from "./card";
import { TechStack } from "./TechStack";

export function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, description, highlights, stack, repoUrl, demoUrl, cover } =
    project;

  return (
    <Card>
      <Card.Media>
        <Image
          {...cover}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Card.Media>
      <Card.Header>
        <span className="font-mono text-xs font-semibold tracking-wider text-highlight uppercase">
          {subtitle}
        </span>
        <Heading level={3}>{title}</Heading>
      </Card.Header>
      <Card.Body>
        <Text variant="muted">{description}</Text>
        <ul className="flex flex-col gap-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-foreground">
              <CircleCheck
                aria-hidden
                size={18}
                className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <TechStack items={stack} label={`Tecnologias do projeto ${title}`} className="mt-auto" />
      </Card.Body>
      <Card.Footer>
        <Button href={repoUrl} external variant="secondary" size="sm" icon={FaGithub}>
          Código
        </Button>
        {demoUrl && (
          <Button href={demoUrl} external size="sm" icon={ExternalLink} iconPosition="end">
            Demo
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
