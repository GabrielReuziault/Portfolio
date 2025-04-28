// src/pages/contact.tsx
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact – Gabriel Reuziault</title>
      <meta
        name="description"
        content="Contactez Gabriel Reuziault pour discuter de votre projet web ou mobile."
      />
    </Head>

    <motion.div
      className="space-y-20 pt-12 pb-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section id="contact-hero" className="container mx-auto px-6">
        <ContactHero />
      </section>

      {/* Formulaire */}
      <section id="contact-form" className="container mx-auto px-6">
        <ContactForm />
      </section>
    </motion.div>
  </>
);

export default ContactPage;
