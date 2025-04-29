// src/components/Timeline.tsx
import { motion } from "framer-motion";

type Step = {
  date: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  { date: "2023", title: "Baccalauréat NSI & Mathématiques", description: "Mention Assez Bien, Lycée Malherbe (Caen)." },
  { date: "2023–2025", title: "BTS SIO SLAM", description: "CaenSup Sainte‑Ursule – Développement  Web & Mobile." },
  { date: "Mai 2024", title: "Stage CNRS CRISMAT", description: "Gestion IT du laboratoire de recherche & Évolution de planning Python." },
  { date: "Déc. 2024 – Fév. 2025", title: "Stage Agence Web Grinto", description: "Dev. React, Node.js & php sur différents projets." },
];

export default function Timeline() {
  return (
    <div className="relative border-l-4 border-primary pl-8">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          {/* Point sur la ligne */}
          <span className="absolute -left-6 top-0 w-4 h-4 bg-primary rounded-full"></span>
          <time className="font-semibold text-primary">{step.date}</time>
          <h3 className="text-xl font-semibold mt-1 mb-1">{step.title}</h3>
          <p className="text-neutral-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
