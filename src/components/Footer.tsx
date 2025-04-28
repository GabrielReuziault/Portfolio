// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 text-center py-6 mt-12">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Gabriel Reuziault. Tous droits réservés.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/GabrielReuziault"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gabriel-reuziault-2a22842a5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
