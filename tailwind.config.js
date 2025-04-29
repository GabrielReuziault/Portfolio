// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,css}",
   ],
   theme: {
     extend: {
       fontFamily: {
         sans: ["Inter", "sans-serif"],
         heading: ["Space Grotesk", "sans-serif"],
       },
       colors: {
         primary: "#0f62fe",
         secondary: "#00ffe5",
         neutral: {
           100: "#f5f5f5",
           900: "#1a1a1a",
         },
       },
     },
   },
   plugins: [],
 };
 