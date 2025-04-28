// src/components/PortfolioGrid.tsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}

interface Props {
  projects: Project[];
  onSelect: (id: string) => void;
}

export default function PortfolioGrid({ projects, onSelect }: Props) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj, i) => (
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <ProjectCard project={proj} onClick={() => onSelect(proj.id)} />
        </motion.div>
      ))}
    </div>
  );
}
