import type { Project } from "@/types";
import dataPulseCover from "@/assets/images/projects/datapulse.svg";
import lumyCover from "@/assets/images/projects/lumy.svg";
import takeHomeCover from "@/assets/images/projects/take-home.svg";

const GITHUB = "https://github.com/Iago-Santos-Sousa";
const COVER_SIZE = { width: 640, height: 360 } as const;

export const projects: Project[] = [
  {
    id: "datapulse",
    title: "DataPulse",
    subtitle: "Ingestão de CSV em larga escala",
    description:
      "Processa arquivos CSV com milhões de linhas sem carregar o arquivo inteiro em memória e sem renderizar milhões de registros no navegador.",
    highlights: [
      "Upload em streaming e fila no RabbitMQ que enfileira só o jobId",
      "Spring Batch em chunks de 2.000 registros com JDBC batch por transação",
      "Progresso por polling e consulta paginada no front-end",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Batch",
      "PostgreSQL",
      "RabbitMQ",
      "React",
      "TypeScript",
      "TanStack Query",
      "Docker",
    ],
    repoUrl: `${GITHUB}/Desafio-Full-Stack`,
    cover: {
      src: dataPulseCover,
      alt: "Ilustração do DataPulse: arquivo CSV dividido em chunks até o banco de dados",
      ...COVER_SIZE,
    },
  },
  {
    id: "lumy",
    title: "Lumy",
    subtitle: "Gestão de faturas de energia",
    description:
      "Plataforma full stack que extrai dados de faturas de energia elétrica (CEMIG) em PDF, estrutura no PostgreSQL e apresenta em dashboards interativos.",
    highlights: [
      "Extração de dados de PDFs por número do cliente e mês de referência",
      "API REST em NestJS com persistência estruturada em PostgreSQL",
      "Gráficos de consumo e economia com Chart.js",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Vite",
      "Chart.js",
      "Docker",
    ],
    repoUrl: `${GITHUB}/lumi`,
    demoUrl: "https://lumi-front-end.vercel.app",
    cover: {
      src: lumyCover,
      alt: "Ilustração do Lumy: dashboard com gráfico de consumo de energia",
      ...COVER_SIZE,
    },
  },
  {
    id: "take-home",
    title: "Agendamento de Exames",
    subtitle: "Portal para laboratórios",
    description:
      "Sistema completo para agendamento de exames laboratoriais, com criação e edição de agendamentos e validação de horários comerciais e conflitos.",
    highlights: [
      "Perfis de acesso para usuário comum e administrador",
      "Autenticação JWT em cookie httpOnly e cache com Redis",
      "CI no GitHub Actions e ambiente completo com Docker Compose",
    ],
    stack: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Zod",
      "Docker",
    ],
    repoUrl: `${GITHUB}/take-home`,
    cover: {
      src: takeHomeCover,
      alt: "Ilustração do portal de agendamento: calendário com horários marcados",
      ...COVER_SIZE,
    },
  },
];
