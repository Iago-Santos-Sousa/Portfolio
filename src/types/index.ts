import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

export type Theme = "light" | "dark";

export interface NavItem {
  id: string;
  label: string;
  href: `#${string}`;
}

export interface SocialLink {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: IconComponent;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  yearsOfExperience: number;
  summary: string[];
  languages: string[];
  stats: Stat[];
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  cover: ImageAsset;
}

export interface Skill {
  name: string;
  icon?: IconComponent;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconComponent;
  skills: Skill[];
}
