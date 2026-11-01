import { ArrowUp, Mail } from "lucide-react";
import { SocialLinks } from "@/components/composite";
import { Container, IconButton } from "@/components/ui";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center gap-2 font-medium text-foreground transition-colors hover:text-brand"
          >
            <Mail aria-hidden size={18} className="text-highlight" />
            {profile.email}
          </a>
          <p className="text-sm text-muted">
            © {year} {profile.name}.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <IconButton href="#inicio" icon={ArrowUp} label="Voltar ao topo" />
        </div>
      </Container>
    </footer>
  );
}
