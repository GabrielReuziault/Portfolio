// src/components/CTA.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      className="py-20 bg-primary text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-heading font-bold mb-4">
        Prêt à travailler ensemble ?
      </h2>
      <p className="mb-8">
        Contactez-moi pour discuter de votre projet et recevoir un devis personnalisé.
      </p>
      <Link href="/contact" className="px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:shadow-xl transition">
          Me contacter
      </Link>
    </motion.div>
  );
}