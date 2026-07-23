"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipo: "ambos",
    mensaje: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.empresa.trim()) newErrors.empresa = "La empresa es requerida";

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de correo no válido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s+/g, ""))) {
      newErrors.telefono = "El teléfono debe tener exactamente 10 dígitos";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      console.log("Spam detected via honeypot!");
      setStatus("success");
      return;
    }

    if (!validate()) return;

    setStatus("loading");
    console.log("Submitting contact form:", formData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        tipo: "ambos",
        mensaje: "",
        website: "",
      });
      alert(
        "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad."
      );
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-surface border border-border p-8 rounded-2xl text-left"
    >
      {/* Honeypot field */}
      <div className="hidden-field">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-semibold mb-2 text-white font-manrope"
          >
            Nombre Completo *
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez"
            className={`w-full bg-bg border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors ${
              errors.nombre ? "border-red-500" : "border-border"
            }`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1 font-mono">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="block text-sm font-semibold mb-2 text-white font-manrope"
          >
            Nombre de tu Negocio / Empresa *
          </label>
          <input
            id="empresa"
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Mi Negocio S.A."
            className={`w-full bg-bg border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors ${
              errors.empresa ? "border-red-500" : "border-border"
            }`}
          />
          {errors.empresa && (
            <p className="text-red-500 text-xs mt-1 font-mono">{errors.empresa}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-2 text-white font-manrope"
          >
            Correo Electrónico *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className={`w-full bg-bg border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-semibold mb-2 text-white font-manrope"
          >
            Teléfono (10 dígitos) *
          </label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="5512345678"
            className={`w-full bg-bg border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors ${
              errors.telefono ? "border-red-500" : "border-border"
            }`}
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1 font-mono">
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="tipo"
          className="block text-sm font-semibold mb-2 text-white font-manrope"
        >
          ¿Qué tipo de servicios requieres? *
        </label>
        <select
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors [&>option]:bg-surface"
        >
          <option value="digital">
            Presencia Digital (SEO, Web, Ads, Redes)
          </option>
          <option value="fisico">
            Presencia Física (Serigrafía, Uniformes, Merch)
          </option>
          <option value="ambos">Ambos Mundos (La especialidad de la casa)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-semibold mb-2 text-white font-manrope"
        >
          Cuéntanos sobre tu proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          placeholder="Hola, me interesa posicionar mi negocio con una web y además hacer 50 uniformes tipo polo para mi taller..."
          className={`w-full bg-bg border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors ${
            errors.mensaje ? "border-red-500" : "border-border"
          }`}
        />
        {errors.mensaje && (
          <p className="text-red-500 text-xs mt-1 font-mono">{errors.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary py-4 text-center text-white cursor-pointer font-bold rounded-xl transition-all disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar Cotización"}
      </button>

      {status === "success" && (
        <p className="text-emerald-500 font-semibold text-center text-sm font-mono mt-4">
          ¡Formulario enviado con éxito! Te contactaremos pronto.
        </p>
      )}
    </form>
  );
}
