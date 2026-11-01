# Portfólio · Iago Dos Santos Sousa

Portfólio pessoal de Engenheiro de Software Full Stack.

**[Ver online](https://iago-santos-sousa.github.io/Portfolio/)**

## Stack

- React 19 + TypeScript (strict)
- Vite 8
- Tailwind CSS v4 (design system com dark mode)
- lucide-react e react-icons
- ESLint 10 (flat config) + typescript-eslint

## Scripts

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run typecheck  # checagem de tipos
npm run lint       # ESLint
npm run build      # typecheck + build de produção (dist/)
npm run preview    # serve o build em http://localhost:4173/Portfolio/
npm run deploy     # publica dist/ no GitHub Pages
```

Requer Node.js 20.19+ ou 22.12+.

## Arquitetura

O projeto segue camadas e o **Composite Pattern**: componentes folha (`ui/`) são compostos em componentes maiores (`composite/`), que formam o layout e as seções da página.

```
src/
  types/        contratos TypeScript (Project, SkillCategory, Profile...)
  data/         conteúdo tipado: perfil, projetos, habilidades, redes, navegação
  providers/    ThemeProvider (light/dark)
  hooks/        useTheme, useActiveSection (scroll spy)
  lib/          cn() (clsx + tailwind-merge)
  styles/       index.css com os tokens do design system
  components/
    ui/         folhas: Button, IconButton, Badge, Heading, Text, Image, Container
    composite/  compostos: Card, Section, TechStack, SocialLinks, NavMenu...
    layout/     Header, MobileMenu, Footer
    sections/   Hero, Sobre, Projetos, Habilidades
```

Para adicionar um projeto ou uma habilidade, edite `src/data/projects.ts` ou `src/data/skills.ts`.

## Design system

Tokens, cores, tipografia, componentes, ícones e regras de acessibilidade: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
