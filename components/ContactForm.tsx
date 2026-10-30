"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import PhoneInput from "@/components/PhoneInput";

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
  const [phoneState, setPhoneState] = useState({
    formatted: "",
    fullWithDdi: "",
    isValid: true,
  });
  const [phoneHasError, setPhoneHasError] = useState(false);
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

    if (phoneHasError || (!phoneState.isValid && phoneState.formatted)) {
      setStatus("error");
      setErrorMessage(t("phoneInvalid"));
      setLoading(false);
      return;
    }

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

      emailjs.init(publicKey);

      await emailjs.send(serviceId, templateId, {
        to_email: "pierre.s3@hotmail.com",
        title: t(`subjectOptions.${formData.subject}`),
        name: formData.name,
        email: formData.email,
        phone: phoneState.fullWithDdi || "Não informado",
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
      setPhoneState({
        formatted: "",
        fullWithDdi: "",
        isValid: true,
      });
      setPhoneHasError(false);
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

  const inputClasses =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            {t("nameLabel")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder={t("namePlaceholder")}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            {t("emailLabel")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder={t("emailPlaceholder")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold">
          {t("phoneLabel")}{" "}
          <span className="text-xs font-normal text-muted-foreground">
            ({t("optional")})
          </span>
        </label>
        <PhoneInput
          id="phone"
          name="phone"
          value={phoneState.formatted}
          defaultCountryCode="BR"
          disabled={loading}
          onChange={({ formatted, fullWithDdi, isValid }) => {
            setPhoneState({ formatted, fullWithDdi, isValid });
            setFormData((prev) => ({ ...prev, phone: fullWithDdi }));
          }}
          onErrorChange={(hasError) => setPhoneHasError(hasError)}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold">
          {t("subjectLabel")}
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="proposal">{t("subjectOptions.proposal")}</option>
          <option value="partnership">{t("subjectOptions.partnership")}</option>
          <option value="other">{t("subjectOptions.other")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={inputClasses}
          placeholder={t("messagePlaceholder")}
        />
      </div>

      {status === "success" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
          <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{t("successMessage")}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage || t("errorMessage")}</span>
        </div>
      )}

      <Button
        type="submit"
        size="md"
        disabled={loading}
        className="w-full gap-2 rounded-xl font-bold"
      >
        <FiSend className="h-4 w-4" />
        {loading ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
