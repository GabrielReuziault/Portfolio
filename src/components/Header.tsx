// src/components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur z-50 dark:bg-neutral-900/90">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-heading font-bold"
        >
          Gabriel&nbsp;Reuziault
        </div>
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-primary transition ${
                  router.pathname === href
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌞" : "🌓"}
          </button>
          <Link
            href="/contact"
            className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
