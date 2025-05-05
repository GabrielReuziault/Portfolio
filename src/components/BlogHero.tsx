// src/components/BlogHero.tsx
import { motion } from "framer-motion";
import Link from 'next/link'

/**
 * Section d’introduction pour la page Blog
 */
export default function BlogHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-br from-primary to-secondary text-white rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Ma Veille
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Articles et retours d’expérience sur développement web/mobile et la cybersécurité.
      </p>
      <Link
        href="/blog/new"
        className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition" >
      Nouvel article
      </Link>
    </motion.div>
  );
}
