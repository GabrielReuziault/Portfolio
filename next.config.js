// File: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
     // Exemple de domaine autorisé pour les images externes
     domains: ["images.unsplash.com"],
   },
 };
 
 module.exports = nextConfig;
 