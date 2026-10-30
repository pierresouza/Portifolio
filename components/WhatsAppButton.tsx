"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "@/lib/i18n";

export default function WhatsAppButton() {
  const t = useTranslations("home");

  const message = encodeURIComponent(
    "Olá Pierre! Vi seu portfólio e gostaria de um orçamento para o meu projeto.",
  );
  const whatsappUrl = `https://wa.me/5511975310001?text=${message}`;

  const label = t("whatsappCta") || "Conversar no WhatsApp";

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative flex min-h-[48px] items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </span>
        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline-block">
          {label}
        </span>
      </a>
    </aside>
  );
}
