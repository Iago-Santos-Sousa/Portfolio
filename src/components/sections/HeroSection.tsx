import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SocialLinks } from "@/components/composite";
import { Badge, Button, Container, Heading, Text } from "@/components/ui";
import { profile as defaultProfile } from "@/data/profile";
import { socials } from "@/data/socials";
import type { Profile } from "@/types";

const linkedinUrl = socials.find((s) => s.id === "linkedin")?.href ?? "#";

export function HeroSection({ profile = defaultProfile }: { profile?: Profile }) {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden py-16"
    >
      {/* Brilhos decorativos de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary-500/20 blur-3xl md:size-96" />
        <div className="absolute -right-24 -bottom-24 size-72 rounded-full bg-accent-500/20 blur-3xl md:size-96" />
      </div>

      <Container className="flex flex-col items-start gap-6 motion-safe:animate-fade-up">
        <Badge variant="highlight" icon={MapPin}>
          {profile.location}
        </Badge>

        <div className="flex flex-col gap-3">
          <Text variant="lead" className="font-medium">
            Olá, eu sou
          </Text>
          <Heading id="inicio-title" level={1}>
            {profile.name}
          </Heading>
          <p className="text-gradient text-[clamp(1.5rem,4vw,2.5rem)] leading-tight font-bold">
            {profile.role}
          </p>
        </div>

        <Text variant="lead" className="max-w-2xl">
          {profile.yearsOfExperience}+ anos construindo APIs de alta performance,
          microsserviços e sistemas multi-tenant.{" "}
          <span className="font-mono text-base text-foreground">{profile.headline}</span>
        </Text>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#projetos" size="lg" icon={ArrowRight} iconPosition="end">
            Ver projetos
          </Button>
          <Button href={linkedinUrl} external size="lg" variant="secondary" icon={FaLinkedin}>
            LinkedIn
          </Button>
        </div>

        <SocialLinks />
      </Container>

      <a
        href="#sobre"
        aria-label="Ir para a seção Sobre mim"
        className="absolute bottom-6 left-1/2 hidden size-11 -translate-x-1/2 items-center justify-center rounded-full text-muted md:flex transition-colors hover:text-brand motion-safe:animate-bounce"
      >
        <ArrowDown aria-hidden size={24} />
      </a>
    </section>
  );
}
