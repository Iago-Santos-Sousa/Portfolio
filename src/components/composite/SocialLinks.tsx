import { IconButton } from "@/components/ui";
import { cn } from "@/lib/cn";
import { socials as defaultSocials } from "@/data/socials";
import type { SocialLink } from "@/types";

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export function SocialLinks({
  links = defaultSocials,
  className,
}: SocialLinksProps) {
  return (
    <ul aria-label="Redes sociais" className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <li key={link.id}>
          <IconButton
            href={link.href}
            icon={link.icon}
            label={link.label}
            external={link.id !== "email"}
          />
        </li>
      ))}
    </ul>
  );
}
