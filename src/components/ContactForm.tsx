// src/components/ContactForm.tsx
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Échec de l’envoi, réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {error && <p className="mb-4 text-red-600">{error}</p>}
      {success && <p className="mb-4 text-green-600">Message envoyé ! Merci.</p>}

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Nom</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-300 rounded focus:ring-2 focus:ring-primary"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-neutral-300 rounded focus:ring-2 focus:ring-primary"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="block mb-1 font-semibold">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="w-full p-3 border border-neutral-300 rounded focus:ring-2 focus:ring-primary"
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
      >
        {loading ? "Envoi…" : "Envoyer"}
      </button>
    </motion.form>
  );
}
