'use client';

import * as React from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'lk-theme';

function getSystemPreference(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {}
  return null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove(theme === 'light' ? 'dark' : 'light');
  root.classList.add(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  // Initialize from storage or system
  React.useEffect(() => {
    const stored = readStoredTheme();
    const initial = stored ?? getSystemPreference();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  // Respond to system changes if user never explicitly chose
  React.useEffect(() => {
    if (theme == null) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const stored = readStoredTheme();
      if (stored) return; // user preference overrides
      const system = media.matches ? 'dark' : 'light';
      setTheme(system);
      applyTheme(system);
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [theme]);

  function toggle() {
    if (theme == null) return;
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    applyTheme(next);
  }

  // While theme unknown (before hydration), render a non-interactive skeleton to avoid layout shift
  const isReady = theme !== null;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!isReady}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      className={
        'relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ' +
        className
      }
    >
      <SunIcon
        className={
          'absolute h-5 w-5 transition-all ' +
          (theme === 'light'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0')
        }
      />
      <MoonIcon
        className={
          'absolute h-5 w-5 transition-all ' +
          (theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0')
        }
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <path
        strokeLinecap="round"
        d="M12 1v2m0 18v2M4.22 4.22l1.41 1.41M18.37 18.37l1.41 1.41M1 12h2m18 0h2M5.63 18.37l1.41-1.41M18.37 5.63l1.41-1.41"
      />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z"
      />
    </svg>
  );
}