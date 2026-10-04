import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setDark((v) => !v)}
      className="theme-toggle"
      data-cursor
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}