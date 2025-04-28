// src/pages/portfolio.tsx
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioGrid from "../components/PortfolioGrid";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects"; // tableau de projets

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const PortfolioPage: NextPage = () => {
  const [filter, setFilter] = useState<string>("Tous");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Filtrer les projets selon la catégorie
  const filtered = projectsData.filter(
    (p) => filter === "Tous" || p.category === filter
  );

  return (
    <>
      <Head>
        <title>Portfolio – Gabriel Reuziault</title>
        <meta
          name="description"
          content="Découvrez mes réalisations en développement web & mobile."
        />
      </Head>

      <motion.div
        className="space-y-16 pt-12 pb-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero */}
        <section id="portfolio-hero" className="container mx-auto px-6">
          <PortfolioHero />
        </section>

        {/* Filtre */}
        <section id="portfolio-filter" className="container mx-auto px-6">
          <PortfolioFilter
            categories={["Tous", "Web", "Mobile", "UX/UI", "Backend"]}
            active={filter}
            onChange={setFilter}
          />
        </section>

        {/* Grille de projets */}
        <section id="portfolio-grid" className="container mx-auto px-6">
          <PortfolioGrid
            projects={filtered}
            onSelect={(id) => setSelectedId(id)}
          />
        </section>
      </motion.div>

      {/* Modal projet */}
      <AnimatePresence>
        {selectedId && (
          <ProjectModal
            project={projectsData.find((p) => p.id === selectedId)!}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;
