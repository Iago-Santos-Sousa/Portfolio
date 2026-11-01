import { FaGithub } from "react-icons/fa6";
import { ProjectCard, Section } from "@/components/composite";
import { Button } from "@/components/ui";
import { projects as defaultProjects } from "@/data/projects";
import { socials } from "@/data/socials";
import type { Project } from "@/types";

const githubUrl = socials.find((s) => s.id === "github")?.href ?? "#";

export function ProjectsSection({ projects = defaultProjects }: { projects?: Project[] }) {
  return (
    <Section id="projetos">
      <Section.Header
        sectionId="projetos"
        eyebrow="Projetos"
        title="Projetos em destaque"
        description="Aplicações full stack com foco em escalabilidade, processamento de dados e boas práticas de arquitetura."
      />
      <Section.Content className="flex flex-col items-center gap-10">
        <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <Button href={githubUrl} external variant="secondary" icon={FaGithub}>
          Ver todos no GitHub
        </Button>
      </Section.Content>
    </Section>
  );
}
