// src/pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero";
import Timeline from "../components/Timeline";
import SkillsDetails from "../components/SkillsDetails";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>À propos – Gabriel Reuziault</title>
      <meta name="description" content="Découvrez le parcours et les compétences de Gabriel Reuziault" />
    </Head>

    <motion.div
      className="space-y-24 pt-12 pb-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section Intro */}
      <section id="about-hero" className="container mx-auto px-6">
        <AboutHero />
      </section>

      {/* Section Timeline */}
      <section id="timeline" className="bg-neutral-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-heading font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mon Parcours
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Section Skills */}
      <section id="skills" className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-heading font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Compétences
        </motion.h2>
        <SkillsDetails />
      </section>
    </motion.div>
  </>
);

export default AboutPage;
