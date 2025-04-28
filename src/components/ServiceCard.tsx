// src/components/ServiceCard.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-neutral-700 rounded-lg
                 shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </motion.div>
  );
}