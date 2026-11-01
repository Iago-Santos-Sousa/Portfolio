import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      icon={isDark ? Sun : Moon}
      label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDark}
      onClick={toggleTheme}
    />
  );
}
