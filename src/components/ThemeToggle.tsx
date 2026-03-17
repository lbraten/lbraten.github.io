import { useEffect, useRef, useState } from "react";

type Theme = "dark" | "light";

function detectTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    const initial = detectTheme();
    document.documentElement.dataset.theme = initial;
    setTheme(initial);

    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    root.classList.add("theme-transition");
    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }
    transitionTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
      transitionTimer.current = null;
    }, 420);

    root.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      type="button"
      aria-label="Toggle dark and light mode"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        ◐
      </span>
      <span className="theme-toggle__label">Theme</span>
    </button>
  );
}
