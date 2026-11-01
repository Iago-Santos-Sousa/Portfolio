import { Building2, Briefcase, Landmark, Rocket } from "lucide-react";
import type { Profile } from "@/types";
import { EMAIL } from "./socials";

export const profile: Profile = {
  name: "Iago Dos Santos Sousa",
  shortName: "Iago",
  role: "Engenheiro de Software Full Stack",
  headline: "Node.js · TypeScript · NestJS · React · Next.js",
  location: "Brasília, DF",
  email: EMAIL,
  yearsOfExperience: 5,
  summary: [
    "Sou Engenheiro de Software Full Stack com mais de 5 anos de experiência construindo aplicações web escaláveis no ecossistema JavaScript/TypeScript e Java/Spring Boot.",
    "Meu foco é o back-end com Node.js, NestJS e arquiteturas de microsserviços: APIs RESTful de alta performance, sistemas multi-tenant, mensageria assíncrona, integrações de pagamento e otimização de performance em produção.",
    "No front-end, entrego interfaces com React.js, Next.js, TypeScript e Tailwind CSS. Também integro agentes de IA com RAG e MCP para automatizar processos de negócio.",
  ],
  languages: ["Português (nativo)", "Inglês (avançado/C1)"],
  stats: [
    {
      id: "experience",
      value: "5+",
      label: "anos de experiência",
      icon: Briefcase,
    },
    {
      id: "saas",
      value: "120+",
      label: "empresas atendidas em SaaS multi-tenant",
      icon: Building2,
    },
    {
      id: "cartorios",
      value: "400+",
      label: "cartórios usando plataforma que desenvolvi",
      icon: Landmark,
    },
    {
      id: "cicd",
      value: "35→7 min",
      label: "redução no tempo de build e deploy",
      icon: Rocket,
    },
  ],
};
