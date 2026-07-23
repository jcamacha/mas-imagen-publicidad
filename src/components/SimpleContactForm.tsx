"use client";
 
import { useState } from "react";
import { motion } from "framer-motion";

const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};
 
export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ nombre: "", telefono: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };
 
  if (status === "success") {
    return (
      <div className="p-8 text-center shadow-sm">
        <p className="text-emerald-600 font-semibold text-lg font-manrope">
          ¡Gracias! Hemos recibido tu mensaje.
        </p>
        <p className="text-text-muted text-sm mt-2 font-manrope">
          Te contactaremos hoy mismo sin compromiso.
        </p>
      </div>
    );
  }
 
  return (
    <motion.form
      variants={formContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto text-left"
    >
      <motion.div variants={inputVariants}>
        <label htmlFor="simple-nombre" className="block text-sm font-semibold text-text mb-1 font-manrope">
          Nombre Completo
        </label>
        <input
          id="simple-nombre"
          type="text"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Juan Pérez"
          className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </motion.div>
 
      {"nombre" in formData && (
        <div className="hidden-field" aria-hidden="true">
          <input
            type="text"
            name="nombre_completo_honey"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      )}
 
      <motion.div variants={inputVariants}>
        <label htmlFor="simple-telefono" className="block text-sm font-semibold text-text mb-1 font-manrope">
          Teléfono
        </label>
        <input
          id="simple-telefono"
          type="tel"
          name="telefono"
          required
          value={formData.telefono}
          onChange={handleChange}
          placeholder="5512345678"
          className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </motion.div>
 
      <motion.div variants={inputVariants}>
        <label htmlFor="simple-mensaje" className="block text-sm font-semibold text-text mb-1 font-manrope">
          Mensaje breve
        </label>
        <textarea
          id="simple-mensaje"
          name="mensaje"
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Platícanos sobre tu proyecto..."
          rows={3}
          className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </motion.div>
 
      <motion.button
        variants={inputVariants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary py-4 text-center cursor-pointer font-bold rounded-xl transition-all disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Cuéntanos tu proyecto"}
      </motion.button>
      
      {status === "error" && (
        <p className="text-red-500 text-sm font-mono text-center">
          Ocurrió un error. Por favor inténtalo de nuevo.
        </p>
      )}
    </motion.form>
  );
}
