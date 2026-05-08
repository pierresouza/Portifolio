"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";

export default function ContactForm() {
  const t = useTranslations("contact");
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "proposal",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");

    try {
      const sentAt = new Date().toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      });

      if (!publicKey || !serviceId || !templateId) {
        throw new Error(
          "Configuração do EmailJS ausente. Defina NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.",
        );
      }

      // Inicializar EmailJS com a chave pública configurada
      emailjs.init(publicKey);

      // Enviar email
      await emailjs.send(serviceId, templateId, {
        to_email: "pierre.s3@hotmail.com",
        title: t(`subjectOptions.${formData.subject}`),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: "Formulário de Contato do Portfólio",
        time: sentAt,
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "proposal",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar a mensagem agora.",
      );
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">{t("nameLabel")}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">{t("emailLabel")}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">
          {t("phoneLabel")} <span className="text-xs font-normal text-muted-foreground">({t("optional")})</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder={t("phonePlaceholder")}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">{t("subjectLabel")}</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        >
          <option value="proposal">{t("subjectOptions.proposal")}</option>
          <option value="partnership">{t("subjectOptions.partnership")}</option>
          <option value="other">{t("subjectOptions.other")}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold">{t("messageLabel")}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      {status === "success" && (
        <div className="rounded-lg bg-green-100 p-4 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">
          ✓ {t("successMessage")}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-100 p-4 text-sm text-red-800 dark:bg-red-900 dark:text-red-200">
          ✗ {errorMessage || t("errorMessage")}
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
