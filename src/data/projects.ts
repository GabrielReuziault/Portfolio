// src/data/projects.ts
export interface Project {
   id: string;
   title: string;
   category: string;
   thumbnail: string;
   description: string;
   tech: string[];
   repo?: string;
   live?: string;
 }
 
 const projectsData: Project[] = [
   {
     id: "proj-1",
     title: "Application Kanban (BTS)",
     category: "Web",
     thumbnail: "/images/portfolio/kanban.jpg",
     description:
       "Application de gestion de tâches en full‑stack Kotlin (Spring Boot) & Next.js, avec organisation Agile Scrum.",
     tech: ["Next.js", "Ant Design"],
     repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/kanban/projet-z/kanban-front",
   },

   {
     id: "proj-2",
     title: "Portfolio Personnel",
     category: "UX/UI",
     thumbnail: "/images/portfolio/portfolio.jpg",
     description:
       "Site vitrine développé en Next.js, Tailwind CSS et Framer Motion, avec CMS headless et formulaire de contact.",
     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
     repo: "https://github.com/GabrielReuziault/Portfolio",
     live: "http://srv1-vm-2104.sts-sio-caen.info",
   },
   {
     id: "proj-3",
     title: "Application Hopital-Datadunk (Stage)",
     category: "Mobile",
     thumbnail: "/images/portfolio/hopital-datadunk.jpg",
     description:
       "App mobile React Hopital-Datadunk, une déclinaison médicale de DataDunk destinée au suivi des patients à partir de données de capteurs.",
     tech: ["React", "Expo", "SQLite", "Push Notifications"],
     repo: "https://github.com/grinto-dev/hopital-api",
    live: "https://hopital.datadunk.io",
   },
     {
         id: "proj-4",
         title: "Application TodoList (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/todolist.jpg",
         description:
             "Application de gestion de listes permettant d'ajouter des tâches à cocher pour indiquer leur réalisation.",
         tech: ["Spring Boot", "Maeven", "Java"],
         repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/todos/todoapp-gabriel",
     },
     {
         id: "proj-5",
         title: "Application Gestion bancaire (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/my-budget.jpg",
         description:
             "Application de gestion bancaire permettant de saisir des revenus et des dépenses afin de suivre l’évolution du solde du compte.",
         tech: ["php", "Symfony", "Twig", "daisyUI", "Font Awesome"],
         repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/my-budget/projet-y",
     },
     {
         id: "proj-6",
         title: "Application Album Photo (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/album.jpg",
         description:
             "Projet de galerie photo, développé en début de formation, proposant un affichage en grille " +
             "des albums, avec fonctionnalités d’ajout, de suppression et de modification des albums, " +
             "ainsi que de gestion des photos via une base de données locale sous phpMyAdmin.",
         tech: ["php", "mysqli"],
         repo: "https://github.com/GabrielReuziault/Album-photo",
     },
     {
         id: "proj-7",
         title: "Application Kanban - Backend (BTS)",
         category: "Backend",
         thumbnail: "/images/portfolio/kanban.jpg",
         description:
             "Back-end du projet Kanban",
         tech: ["Spring Boot", "Kotlin", "H2 Database"],
         repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/kanban/projet-z/kanban",
     },
 ];
 
 export default projectsData;
 