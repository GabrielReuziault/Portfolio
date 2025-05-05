// src/components/ServiceHero.tsx
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-br from-secondary to-primary text-white rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Mes Services
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Je propose une gamme complète de services pour transformer vos idées en
        applications modernes, performantes et centrées sur l’expérience utilisateur.
      </p>
    </motion.div>
  );
}