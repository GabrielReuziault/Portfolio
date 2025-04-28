// src/components/ProjectModal.tsx
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
}

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-neutral-900 rounded-lg max-w-3xl w-full p-6 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 transition"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-heading font-bold mb-4">
          {project.title}
        </h2>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          {project.description}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold">Technologies utilisées :</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            {project.tech.map((t) => (
              <li
                key={t}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
            >
              Voir le code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90 transition"
            >
              Voir en live
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
