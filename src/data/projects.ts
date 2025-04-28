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
     repo: "https://github.com/username/kanban-app",
     live: "https://kanban.example.com",
   },
   {
     id: "proj-2",
     title: "Portfolio Personnel",
     category: "Web",
     thumbnail: "/images/portfolio/portfolio.jpg",
     description:
       "Site vitrine développé en Next.js, Tailwind CSS et Framer Motion, avec CMS headless et formulaire de contact.",
     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
     repo: "https://github.com/username/my-portfolio",
     live: "https://portfolio.example.com",
   },
   {
     id: "proj-3",
     title: "Application Mobile Santé",
     category: "Mobile",
     thumbnail: "/images/portfolio/health-app.jpg",
     description:
       "App mobile React Native pour le suivi de la santé, notifications push et stockage local sécurisé.",
     tech: ["React Native", "Expo", "SQLite", "Push Notifications"],
     repo: "https://github.com/username/health-app",
   },
   // Ajoute autant de projets que nécessaire…
 ];
 
 export default projectsData;
 