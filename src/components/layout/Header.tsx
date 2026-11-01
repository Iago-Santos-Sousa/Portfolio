import { useCallback, useState } from "react";
import { CodeXml, Menu, X } from "lucide-react";
import { NavMenu, ThemeToggle } from "@/components/composite";
import { Container, IconButton } from "@/components/ui";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "./MobileMenu";

const MOBILE_MENU_ID = "mobile-menu";
const sectionIds = navigation.map((item) => item.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex min-h-11 items-center gap-2 rounded-full font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label={`${profile.name}, voltar ao início`}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-linear-to-br from-primary-600 to-accent-700 text-white">
            <CodeXml aria-hidden size={20} />
          </span>
          <span className="text-lg">
            {profile.shortName}
            <span className="text-highlight">.dev</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <NavMenu items={navigation} activeId={activeId} />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <IconButton
            icon={menuOpen ? X : Menu}
            label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden"
          />
        </div>
      </Container>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={menuOpen}
        items={navigation}
        activeId={activeId}
        onClose={closeMenu}
      />
    </header>
  );
}
