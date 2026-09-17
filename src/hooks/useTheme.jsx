import { useEffect, useState } from "react";

const DEFAULT_THEME = "light";

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    let isMounted = true;

    const loadTheme = async () => {
      const savedTheme = await readStoredTheme();
      const nextTheme = savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : DEFAULT_THEME;

      if (isMounted) {
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }
    };

    applyTheme(DEFAULT_THEME);
    loadTheme();

    const storage = globalThis.chrome?.storage;
    const handleStorageChange = (changes, areaName) => {
      const nextTheme = changes.theme?.newValue;

      if (areaName === "local" && (nextTheme === "dark" || nextTheme === "light")) {
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }
    };

    storage?.onChanged?.addListener(handleStorageChange);

    return () => {
      isMounted = false;
      storage?.onChanged?.removeListener(handleStorageChange);
    };
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    applyTheme(newTheme);

    await writeStoredTheme(newTheme);
  };

  return { theme, toggleTheme };
}

function applyTheme(theme) {
  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );
}

async function readStoredTheme() {
  const storage = globalThis.chrome?.storage?.local;

  if (storage) {
    const result = await storage.get("theme");
    return result.theme;
  }

  return window.localStorage.getItem("theme");
}

async function writeStoredTheme(theme) {
  const storage = globalThis.chrome?.storage?.local;

  if (storage) {
    await storage.set({ theme });
    return;
  }

  window.localStorage.setItem("theme", theme);
}