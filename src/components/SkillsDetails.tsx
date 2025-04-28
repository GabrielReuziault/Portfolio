// src/components/SkillsDetails.tsx
import { motion } from "framer-motion";

const categories = [
  {
    title: "Développement",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "Bases de données",
    items: ["MySQL", "MariaDB", "PostgreSQL", "H2", "Modélisation MCD/MLD"],
  },
  {
    title: "Méthodologies",
    items: ["POO", "UML", "Agile/Scrum", "Git & GitHub"],
  },
  {
    title: "Outils & Autres",
    items: ["IntelliJ", "Webstorm", "PhpStorm", "Docker", "Tailwind CSS", "Chakra UI"],
  },
];

export default function SkillsDetails() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-2">{cat.title}</h4>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300">
            {cat.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}