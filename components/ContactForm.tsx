"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Proposta de Trabalho",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // Inicializar EmailJS com sua chave pública
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

      // Enviar email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: "pierre.s3@hotmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Proposta de Trabalho",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder="seu.email@exemplo.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Assunto</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        >
          <option>Proposta de Trabalho</option>
          <option>Feedback/Sugestões</option>
          <option>Parceria</option>
          <option>Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold">Mensagem</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder="Conte-me mais sobre sua proposta..."
        />
      </div>

      {status === "success" && (
        <div className="rounded-lg bg-green-100 p-4 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
          ✓ Mensagem enviada com sucesso! Você receberá uma resposta em breve.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-100 p-4 text-sm text-red-800 dark:bg-red-900 dark:text-red-200">
          ✗ Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
