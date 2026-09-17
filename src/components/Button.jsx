import { Moon, Sun } from "lucide-react";

export function ThemeButton({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="
        inline-flex items-center justify-center gap-2
        rounded-lg px-4 py-1.5
        text-[15px] font-medium
        text-slate-600
        transition-colors
        hover:bg-slate-100 hover:text-slate-900
        dark:text-slate-300
        dark:hover:bg-slate-800 dark:hover:text-white
      "
    >
      <span>{isDark ? "Light" : "Dark"}</span>
      {isDark ? (
        <Sun size={17} strokeWidth={2} />
      ) : (
        <Moon size={17} strokeWidth={2} />
      )}

    </button>
  );
}