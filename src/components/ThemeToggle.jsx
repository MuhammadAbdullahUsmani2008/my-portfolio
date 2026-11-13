import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitial = () => document.documentElement.dataset.theme || "dark";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitial);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage unavailable (private mode) - the choice just won't persist
    }
    window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
  }, [theme]);

  // Keep every toggle on the page (desktop + mobile nav) in sync
  useEffect(() => {
    const onChange = (e) => setTheme(e.detail);
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-panel text-text transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
