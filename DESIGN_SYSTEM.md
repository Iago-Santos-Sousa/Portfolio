# Design System do Portfólio

Este documento descreve os tokens, componentes e regras visuais do portfólio. A estilização usa **Tailwind CSS v4**. Os tokens ficam em `src/styles/index.css` e só são consumidos por utilitários do Tailwind.

> **Regra de ouro:** não use cores hexadecimais, `style={{}}` ou CSS avulso dentro dos componentes. Se um valor visual ainda não existe, crie um token em `src/styles/index.css` e documente-o aqui.

---

## 1. Princípios

1. **Vivo e confiável.** Azul elétrico transmite engenharia e confiança. Verde vivo marca sucesso e destaque. Branco dá respiro.
2. **Conteúdo primeiro.** Os dados vêm de `src/data/*.ts`. Os componentes só cuidam da apresentação.
3. **Acessível por padrão.** O contraste mínimo é WCAG AA. Os alvos de toque têm pelo menos 44px. O foco é sempre visível. As animações respeitam `prefers-reduced-motion`.
4. **Mobile-first.** Comece pelo layout de 320px e expanda com `sm`, `md`, `lg` e `xl`.

---

## 2. Cores

### 2.1 Escalas de marca (fixas)

Definidas em `@theme` e disponíveis como `bg-primary-600`, `text-accent-700` etc.

| Token | Papel | 500 | 600 | 700 |
|---|---|---|---|---|
| `primary-*` | Azul elétrico: ações, links, foco | `#3b82f6` | `#2563eb` | `#1d4ed8` |
| `accent-*` | Verde vivo: destaques, sucesso, rótulos | `#10b981` | `#059669` | `#047857` |

Cada escala vai de 50 a 950.

### 2.2 Tokens semânticos (trocam no dark mode)

Use estes tokens sempre que possível. Eles mudam de valor automaticamente no tema escuro, então o componente não precisa de `dark:`.

| Utilitário | Light | Dark | Uso |
|---|---|---|---|
| `bg-background` | `#ffffff` | `#020617` (slate-950) | Fundo da página |
| `bg-surface` | `#f8fafc` (slate-50) | `#0f172a` (slate-900) | Seções alternadas e mídia |
| `bg-surface-elevated` | `#ffffff` | `#111c33` | Cards, botões secundários |
| `text-foreground` | `#0f172a` | `#f1f5f9` | Texto principal e títulos |
| `text-muted` | `#475569` | `#94a3b8` | Texto de apoio |
| `border-border` | `#e2e8f0` | `#1e293b` | Bordas e divisores |
| `text-brand` | `primary-600` | `primary-400` | Valores e hovers de link |
| `text-highlight` | `accent-700` | `accent-400` | Eyebrows e acentos verdes |

### 2.3 Gradiente de marca

- **Texto:** use o utilitário `text-gradient`, que vai de `primary-600` a `accent-600` (no dark, de `primary-400` a `accent-400`). Use-o só em texto grande, como o cargo no Hero e palavras de destaque em títulos.
- **Botão primário e logo:** gradiente de `primary-600` a `accent-700`, com texto branco.

### 2.4 Contraste verificado (WCAG AA)

| Combinação | Razão |
|---|---|
| Branco sobre `primary-600` / `accent-700` | 5.17 / 5.48 |
| `text-highlight` (`accent-700`) sobre branco / slate-50 | 5.48 / 5.24 |
| `text-muted` sobre branco | 7.58 |
| `text-muted` (dark) sobre slate-950 | 7.87 |
| `accent-400` sobre slate-950 | 10.49 |
| `primary-400` sobre slate-900 | 7.02 |

Não use texto branco sobre `accent-500` (2.54). Não use `accent-500` ou `accent-600` em texto pequeno sobre fundo claro.

---

## 3. Dark mode

- A estratégia é por **classe**: `@custom-variant dark (&:where(.dark, .dark *));`. Com a classe `dark` no `<html>`, os utilitários `dark:` passam a valer.
- O `ThemeProvider` (`src/providers/ThemeProvider.tsx`) guarda a preferência em `localStorage` (`"light"` ou `"dark"`). Sem preferência salva, ele segue o `prefers-color-scheme` do sistema. Valores legados (`light-theme`/`dark-theme`) são migrados automaticamente.
- Um script inline no `index.html` aplica o tema antes da primeira pintura, o que evita flash de tema errado.
- Ao criar um componente:
  1. Prefira tokens semânticos (`bg-surface`, `text-muted`), que já funcionam nos dois temas.
  2. Ao usar uma escala de marca, declare o par: `bg-primary-50 dark:bg-primary-500/10`.
  3. Teste nos dois temas antes de concluir.

---

## 4. Tipografia

| Família | Token | Uso |
|---|---|---|
| Inter Variable | `font-sans` (padrão) | Texto e títulos |
| JetBrains Mono Variable | `font-mono` | Eyebrows, badges de tecnologia, detalhes técnicos |

As fontes são self-hosted via `@fontsource-variable`, com `font-display: swap` e subsets carregados sob demanda.

| Componente | Estilo |
|---|---|
| `Heading level={1}` | `clamp(2.25rem, 6vw, 4rem)`, extrabold, tracking-tight |
| `Heading level={2}` | `clamp(1.875rem, 4vw, 2.75rem)`, bold |
| `Heading level={3}` | `text-xl`, bold |
| `Heading level={4}` | `text-base`, semibold |
| `Text variant="lead"` | `text-lg md:text-xl`, muted |
| `Text variant="body"` | `text-base`, foreground |
| `Text variant="muted"` | `text-sm`, muted |
| Eyebrow de seção | `font-mono text-sm uppercase tracking-wider text-highlight` |

A página tem um único `h1`, o nome no Hero. Cada seção tem um `h2`, e os cards usam `h3`.

---

## 5. Espaçamento e layout

- A grade de espaçamento é de **4px**, a escala padrão do Tailwind.
- **Container:** `max-w-6xl` (1152px) com `px-4 sm:px-6 lg:px-8`, no componente `ui/Container`.
- **Seções:** `py-16 md:py-24` e `scroll-mt-16`, para compensar o header sticky de 64px.
- **Grids:**
  - Projetos: 1 coluna até `md`, 2 colunas a partir de `md` e 3 a partir de `lg`.
  - Habilidades: 1 coluna até `sm`, 2 colunas a partir de `sm` e 3 a partir de `lg`.
  - Sobre: 1 coluna até `lg` e `320px + 1fr` a partir de `lg`.
- **Breakpoints:** `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- **Gaps:** `gap-6` entre cards, `gap-3` entre botões, `gap-2` entre badges.

---

## 6. Forma, elevação e movimento

| Elemento | Raio | Elevação |
|---|---|---|
| Card | `rounded-xl` | `shadow-sm`; no hover, `-translate-y-1 shadow-xl shadow-primary-600/10 border-primary-500/40`; cursor `cursor-pointer` |
| Botão, IconButton, Badge | `rounded-full` | Botão primário: `shadow-lg shadow-primary-600/25` |
| Ícone de categoria | `rounded-lg` | Sem sombra |

**Movimento:**
- Transições de 150 a 300ms (`duration-200` e `duration-300`).
- Entrada do Hero com `animate-fade-up`.
- Animações decorativas usam o prefixo `motion-safe:`.
- Com `prefers-reduced-motion: reduce`, as animações e transições são desligadas globalmente.

---

## 7. Componentes

A arquitetura segue o **Composite Pattern**. Folhas são componentes indivisíveis. Compostos agregam folhas ou outros compostos pela mesma interface (`children`/props). As seções são compostos de compostos, e `App` é o composto raiz.

```
src/components/
  ui/          FOLHAS      Button, IconButton, Badge, Heading, Text, Image, Container
  composite/   COMPOSTOS   Card(.Media/.Header/.Body/.Footer), Section(.Header/.Content),
                           TechStack, SocialLinks, NavMenu, ThemeToggle, StatCard,
                           ProjectCard, SkillCard
  layout/                  Header, MobileMenu, Footer
  sections/                HeroSection, AboutSection, ProjectsSection, SkillsSection
```

### Folhas (`ui/`)

| Componente | Variantes / props | Regras |
|---|---|---|
| `Button` | `variant: primary \| secondary \| ghost`, `size: sm \| md \| lg`, `icon`, `iconPosition`, `href`, `external` | Com `href` renderiza `<a>`; sem `href`, `<button>`. Nunca aninhe `<a><button>`. Altura mínima de 44px. |
| `IconButton` | `icon`, `label` (obrigatório), `href?`, `external?` | 44×44px. `label` vira `aria-label` e `title`. |
| `Badge` | `variant: tech \| outline \| highlight`, `icon?` | Usa `font-mono text-xs`. |
| `Heading` | `level: 1–4` | Ver tipografia. |
| `Text` | `variant: body \| muted \| lead` | Ver tipografia. |
| `Image` | `width`, `height` (obrigatórios), `sources?`, `priority?` | Lazy loading e `decoding="async"` por padrão. Use `<picture>` com AVIF/WebP. |
| `Container` | | Largura máxima e padding lateral padrão. |

### Compostos (`composite/`)

- **`Card`**: `<Card><Card.Media/><Card.Header/><Card.Body/><Card.Footer/></Card>`. Todas as partes são opcionais.
- **`Section`**: `<Section id tone="default|muted"><Section.Header sectionId eyebrow title description/><Section.Content/></Section>`. O título fica ligado à seção por `aria-labelledby`.
- **`TechStack`**: lista de `Badge` a partir de `string[]` ou `Skill[]`.
- **`SocialLinks`**: fonte única dos links sociais (`src/data/socials.ts`).

### Como estender

- Para incluir um projeto ou uma habilidade, adicione uma entrada em `src/data/projects.ts` ou `src/data/skills.ts`. Não é preciso alterar JSX.
- Para criar uma variante, adicione uma chave ao objeto `variants`/`sizes` do componente. Não espalhe ternários de classe pelos componentes.
- Para combinar classes, use `cn()` (`src/lib/cn.ts`, com clsx e tailwind-merge).

---

## 8. Ícones

As bibliotecas são **lucide-react** (ícones de interface) e **react-icons** (logos de marcas e tecnologias, via `react-icons/si` e `react-icons/fa6`). Ambas fazem tree-shaking, e os ícones são renderizados como SVG inline, sem requests extras.

| Regra | Valor |
|---|---|
| Tamanho em botões | 18px (`Button`), 20px (`IconButton`) |
| Tamanho em cards e estatísticas | 22px, dentro de um contêiner de 44px |
| Tamanho em badges | 14px |
| Stroke (lucide) | 2, o padrão |
| Ícone decorativo | `aria-hidden` |
| Botão só com ícone | `aria-label` obrigatório (via `IconButton label`) |

**Onde os ícones aparecem na UI:**

| Local | Ícones |
|---|---|
| Header | `CodeXml` (logo), `Menu`/`X` (menu mobile), `Sun`/`Moon` (tema) |
| Hero | `MapPin` (localização), `ArrowRight` (CTA), `FaLinkedin`, `ArrowDown` (rolar) |
| Sobre | `Briefcase`, `Building2`, `Landmark`, `Rocket` (estatísticas), `Languages` |
| Projetos | `CircleCheck` (destaques), `FaGithub` (código), `ExternalLink` (demo) |
| Habilidades | `Server`, `LayoutDashboard`, `Database`, `Workflow`, `Cloud`, `BrainCircuit` (categorias) e logos `Si*` de cada tecnologia |
| Social / Footer | `FaGithub`, `FaLinkedin`, `Mail`, `ArrowUp` |

O lucide-react 1.x não tem ícones de marca. Para GitHub, LinkedIn, AWS e Java, use `react-icons/fa6`.

---

## 9. Imagens

- O avatar tem versões em AVIF, WebP e PNG, em 320px e 640px, servidas por `<picture>` com `srcset` e `sizes`.
- As capas dos projetos são SVGs leves de 640×360 (16:9) em `src/assets/images/projects/`.
- Toda imagem declara `width` e `height`, o que evita CLS.
- A otimização no build usa `vite-plugin-image-optimizer` (sharp e svgo).
- O texto `alt` deve descrever a imagem. Não use `alt=""` em imagens de conteúdo.

---

## 10. Acessibilidade (checklist)

- [ ] Um único `h1` e hierarquia de títulos correta.
- [ ] Link "Pular para o conteúdo" como primeiro elemento focável.
- [ ] `focus-visible:ring-2 ring-primary-500` em todo elemento interativo.
- [ ] Alvos de toque ≥ 44×44px.
- [ ] Menu mobile com `aria-expanded`/`aria-controls` e fechamento por `Escape`.
- [ ] Links externos com `target="_blank" rel="noopener noreferrer"`.
- [ ] Contraste AA nos dois temas (ver 2.4).
- [ ] `prefers-reduced-motion` respeitado.
