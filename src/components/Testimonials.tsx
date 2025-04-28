// src/components/Testimonials.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const data: Testimonial[] = [
  {
    quote:
      "Gabriel a transformé notre site en un portail interactif moderne ! Son code est propre et ses conseils UX ; précieux.",
    author: "Marie Dupont",
    role: "CEO, StartupX",
  },
  {
    quote:
      "Professionnel, disponible et très réactif – je recommande vivement son expertise Next.js et design.",
    author: "Jean Martin",
    role: "CTO, TechCorp",
  },
  {
    quote:
      "Un prestataire créatif qui comprend vite les besoins et va toujours plus loin que demandé.",
    author: "Claire Bernard",
    role: "Product Manager, eComShop",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % data.length);
  const prev = () => setIdx((i) => (i - 1 + data.length) % data.length);

  return (
    <div className="relative max-w-2xl mx-auto px-6">
      <AnimatePresence initial={false}>
        <motion.div
          key={idx}
          className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg italic mb-4">“{data[idx].quote}”</p>
          <p className="font-semibold">{data[idx].author}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">{data[idx].role}</p>
        </motion.div>
      </AnimatePresence>
      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button onClick={prev} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          Précédent
        </button>
        <button onClick={next} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          Suivant
        </button>
      </div>
    </div>
  );
}
