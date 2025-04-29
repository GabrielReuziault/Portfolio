// src/components/ContactHero.tsx
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-r from-neutral-100 to-neutral-50
                  rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Parlons de votre projet
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-neutral-600 ">
        Remplissez le formulaire ci‑dessous, je vous répondrai sous 24 heures.
      </p>
    </motion.div>
  );
}
