// src/data/posts.ts
export interface Post {
   id: string;
   title: string;
   date: string;
   excerpt: string;
   category: string;
   cover: string;
 }
 
 const postsData: Post[] = [
   {
     id: "post-1",
     title: "Comment optimiser le Core Web Vitals",
     date: "2025-02-15",
     excerpt: "Découvrez les bonnes pratiques pour améliorer LCP, FID et CLS...",
     category: "Performance",
     cover: "/images/blog/cwv.jpg",
   },
   {
     id: "post-2",
     title: "Créer un design system avec Tailwind CSS",
     date: "2025-03-10",
     excerpt: "Apprenez à structurer vos variables, composants et thèmes...",
     category: "UI/UX",
     cover: "/images/blog/tailwind-ds.jpg",
   },
   {
     id: "post-3",
     title: "Animations avancées avec Framer Motion",
     date: "2025-04-01",
     excerpt: "Créez des transitions de page et des micro‑animations fluides...",
     category: "Animation",
     cover: "/images/blog/framer.jpg",
   },
 ];
 
 export default postsData;