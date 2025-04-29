// src/components/AboutHero.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Photo animée */}
      <motion.div
        className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/profil.jpg"
          alt="Photo de Gabriel Reuziault"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Texte bio */}
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-heading font-bold mb-4">Qui suis-je ?</h1>
        <p className="text-neutral-700  mb-4">
          Actuellement en deuxième année de BTS SIO SLAM à CaenSup Sainte‑Ursule, je me passionne pour 
          le développement web & mobile, l’UX/UI design et la méthodologie Agile.
        </p>
        <p className="text-neutral-700 ">
          Mon objectif : intégrer une Licence STS Développement Applicatif Web & Mobile en alternance 
          pour approfondir mes compétences en gestion de projet et conception digitale.
        </p>
      </motion.div>
    </div>
  );
}
