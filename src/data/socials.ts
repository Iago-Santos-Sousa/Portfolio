import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "@/types";

export const EMAIL = "iago.santos.sousa@gmail.com";

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Iago-Santos-Sousa",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iagosantossousa/",
    icon: FaLinkedin,
  },
  {
    id: "email",
    label: "E-mail",
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
];
