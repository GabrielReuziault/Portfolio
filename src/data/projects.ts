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
     tech: ["Spring Boot", "Kotlin", "Next.js", "Ant Design", "H2 Database"],
     repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/kanban/projet-z/kanban-front",
   },
   {
     id: "proj-2",
     title: "Portfolio Personnel",
     category: "Web",
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
       "App mobile React Native Hopital-Datadunk, une déclinaison médicale de DataDunk destinée au suivi des patients à partir de données de capteurs.",
     tech: ["React Native", "Expo", "SQLite", "Push Notifications"],
     repo: "https://github.com/grinto-dev/hopital-api",
    live: "https://hopital.datadunk.io",
   },
     {
         id: "proj-4",
         title: "Application Todo (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/todo.jpg",
         description:
             "...",
         tech: [""],
         repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/todos/todoapp-gabriel",
     },
     {
         id: "proj-5",
         title: "Application My-Budjet (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/my-budjet.jpg",
         description:
             "...",
         tech: [""],
         repo: "https://gitlab.com/caensup9475439/2-sio-slam/2024/my-budget/projet-y",
     },
     {
         id: "proj-6",
         title: "Application Album Photo (BTS)",
         category: "Web",
         thumbnail: "/images/portfolio/album-photo.jpg",
         description:
             "Projet réalisé en début de formation visant à gérer une galerie photo, avec affichage en grille des albums, " +
             "et fonctionnalités d'ajout, de suppression et de modification d'albums, ainsi que de gestion des photos. ",
         tech: ["php", "css"],
         repo: "https://github.com/GabrielReuziault/Album photo",
     },
 ];
 
 export default projectsData;
 