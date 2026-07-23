"use client";

import { useState } from "react";

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
      <div className="bg-white border border-border p-8 rounded-2xl text-center shadow-sm">
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-left">
      <div>
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
          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </div>

      <div>
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
          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </div>

      <div>
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
          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors font-manrope"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary py-4 text-center text-white cursor-pointer font-bold rounded-xl transition-all disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Cuéntanos tu proyecto"}
      </button>
      
      {status === "error" && (
        <p className="text-red-500 text-sm font-mono text-center">
          Ocurrió un error. Por favor inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}
