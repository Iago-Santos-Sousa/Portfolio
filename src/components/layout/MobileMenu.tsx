import { useEffect } from "react";
import { NavMenu } from "@/components/composite";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  id: string;
  open: boolean;
  items: NavItem[];
  activeId: string | null;
  onClose: () => void;
}

/** Painel de navegação para telas < md. Fecha com Escape ou ao navegar. */
export function MobileMenu({ id, open, items, activeId, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id={id}
      hidden={!open}
      className={cn(
        "border-t border-border bg-background/95 backdrop-blur-lg md:hidden",
        open && "motion-safe:animate-fade-up",
      )}
    >
      <nav aria-label="Navegação principal (mobile)" className="px-4 py-4">
        <NavMenu
          items={items}
          activeId={activeId}
          orientation="vertical"
          onNavigate={onClose}
        />
      </nav>
    </div>
  );
}
