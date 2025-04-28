// src/pages/services.tsx
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import ServiceHero from "../components/ServiceHero";
import ServicesList from "../components/ServicesList";
import CTA from "../components/CTA";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ServicesPage: NextPage = () => (
  <>
    <Head>
      <title>Services – Gabriel Reuziault</title>
      <meta
        name="description"
        content="Découvrez les services proposés par Gabriel Reuziault en développement web, mobile et UX/UI."
      />
    </Head>

    <motion.div
      className="space-y-24 pt-12 pb-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section id="services-hero" className="container mx-auto px-6">
        <ServiceHero />
      </section>

      {/* Liste des services */}
      <section id="services-list" className="container mx-auto px-6">
        <ServicesList />
      </section>

      {/* CTA final */}
      <section id="services-cta">
        <CTA />
      </section>
    </motion.div>
  </>
);

export default ServicesPage;
