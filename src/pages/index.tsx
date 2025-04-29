// src/pages/index.tsx
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Services from "../components/ServicesList";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accueil – Portfolio de Gabriel Reuziault</title>
        <meta name="description" content="Bienvenue sur le portfolio de Gabriel Reuziault, développeur Web & Mobile." />
      </Head>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-32"
      >
        {/* 1. Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* 2. Services */}
        <section id="services" className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-heading font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mes Services
          </motion.h2>
          <Services />
        </section>

        {/* 3. Témoignages
        <section id="testimonials" className="bg-neutral-50 py-20">
          <motion.h2
            className="text-3xl font-heading font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Témoignages
          </motion.h2>
          <Testimonials />
        </section>
        */}

        {/* 4. CTA final */}
        <section id="cta">
          <CTA />
        </section>
      </motion.div>
    </>
  );
};

export default IndexPage;
