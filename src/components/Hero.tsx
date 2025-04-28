// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const phrases = [
  "Développeur Web & Mobile ",
  "Passionné par l’UX/UI ",
  ];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const timeout = setTimeout(() => {
      setText((prev) =>
        forward
          ? current.substring(0, prev.length + 1)
          : current.substring(0, prev.length - 1)
      );
      if (forward && text === current) {
        setForward(false);
      } else if (!forward && text === "") {
        setForward(true);
        setIndex((i) => i + 1);
      }
    }, forward ? 120 : 60);
    return () => clearTimeout(timeout);
  }, [text, forward, index]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Bonjour, je suis Gabriel.
        </h1>
        <motion.h2
          className="text-xl md:text-2xl font-light h-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {text}
          <span className="inline-block animate-blink">|</span>
        </motion.h2>
        <Link
          href="/about"
          className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          En savoir plus
        </Link>
      </motion.div>
    </div>
  );
}
