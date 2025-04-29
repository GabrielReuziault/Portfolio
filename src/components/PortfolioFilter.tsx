// src/components/PortfolioFilter.tsx
import { motion } from "framer-motion";

interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function PortfolioFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full transition ${
            active === cat
              ? "bg-primary text-white"
              : "bg-neutral-100 text-neutral-800 "
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
