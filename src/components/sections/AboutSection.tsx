import { Languages } from "lucide-react";
import { Section, SocialLinks, StatCard } from "@/components/composite";
import { Badge, Image, Text } from "@/components/ui";
import { profile as defaultProfile } from "@/data/profile";
import type { Profile } from "@/types";
import avatar320Avif from "@/assets/images/avatar-320.avif";
import avatar640Avif from "@/assets/images/avatar-640.avif";
import avatar320Webp from "@/assets/images/avatar-320.webp";
import avatar640Webp from "@/assets/images/avatar-640.webp";
import avatarPng from "@/assets/images/avatar-320.png";

const avatarSources = [
  { type: "image/avif", srcSet: `${avatar320Avif} 320w, ${avatar640Avif} 640w` },
  { type: "image/webp", srcSet: `${avatar320Webp} 320w, ${avatar640Webp} 640w` },
];

export function AboutSection({ profile = defaultProfile }: { profile?: Profile }) {
  return (
    <Section id="sobre" tone="muted">
      <div className="grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-6 lg:sticky lg:top-24">
          <div className="rounded-full bg-linear-to-br from-primary-500 to-accent-500 p-1 shadow-xl shadow-primary-600/20">
            <Image
              src={avatarPng}
              sources={avatarSources}
              sizes="(min-width: 1024px) 256px, 208px"
              alt={`Avatar ilustrado de ${profile.name}`}
              width={320}
              height={320}
              className="size-52 rounded-full bg-surface-elevated lg:size-64"
            />
          </div>
          <SocialLinks />
        </div>

        <div>
          <Section.Header
            sectionId="sobre"
            eyebrow="Sobre mim"
            title={
              <>
                Back-end sólido, <span className="text-gradient">produto completo</span>
              </>
            }
          />
          <Section.Content className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {profile.summary.map((paragraph) => (
                <Text key={paragraph} className="text-muted md:text-lg">
                  {paragraph}
                </Text>
              ))}
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {profile.stats.map((stat) => (
                <li key={stat.id}>
                  <StatCard {...stat} />
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2">
              <Languages aria-hidden size={18} className="text-highlight" />
              <span className="sr-only">Idiomas:</span>
              {profile.languages.map((language) => (
                <Badge key={language} variant="outline">
                  {language}
                </Badge>
              ))}
            </div>
          </Section.Content>
        </div>
      </div>
    </Section>
  );
}
