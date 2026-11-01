import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

interface NavMenuProps {
  items: NavItem[];
  activeId: string | null;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
}

const orientations = {
  horizontal: "flex items-center gap-1",
  vertical: "flex flex-col gap-1",
};

export function NavMenu({
  items,
  activeId,
  orientation = "horizontal",
  onNavigate,
  className,
}: NavMenuProps) {
  return (
    <ul className={cn(orientations[orientation], className)}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                orientation === "vertical" && "text-base",
                isActive
                  ? "bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300"
                  : "text-muted hover:text-brand",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
