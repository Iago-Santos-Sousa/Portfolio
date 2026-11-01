import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Theme } from "@/types";
import { ThemeContext } from "./theme-context";

const STORAGE_KEY = "theme";

/**
 * Lê o tema salvo (aceita os valores legados "light-theme"/"dark-theme")
 * e, sem preferência salva, segue o `prefers-color-scheme` do sistema.
 */
function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored.startsWith("dark") ? "dark" : "light";
  } catch {
    // localStorage indisponível (modo privado): cai no padrão do sistema.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignora falha de persistência; o tema continua aplicado na sessão.
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
