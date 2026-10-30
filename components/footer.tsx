"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import Stars from "../public/stars.svg";
import { useTranslations } from "@/lib/i18n";

function Footer() {
  const t = useTranslations("footer");
  const th = useTranslations("header");
  const tc = useTranslations("common");

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: th("home") },
    { href: "/projects", label: th("projects") },
    { href: "/about", label: th("about") },
    { href: "/experience", label: th("experience") },
    { href: "/certificates", label: th("certificates") },
    { href: "/contact", label: th("contact") },
  ];

  const whatsappUrl = `https://wa.me/5511975310001?text=${encodeURIComponent(
    "Olá Pierre! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  )}`;

  return (
    <footer className="mt-16 border-t border-border/60 bg-muted/20 print:hidden" aria-label="Rodapé do site">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold" aria-label="Página inicial Pierre Souza">
              <Image src={Stars} alt="Logo Pierre Souza" width={22} height={22} />
              <span className="text-lg">Pierre Souza</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <FiMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{tc("location")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold tracking-wider text-foreground uppercase">
              {t("navigationTitle")}
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[40px] items-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold tracking-wider text-foreground uppercase">
              {t("contactTitle")}
            </h2>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 font-medium text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                <span>{t("whatsappAction")} • (11) 97531-0001</span>
              </a>
              <a
                href="mailto:pierre.s3@hotmail.com"
                className="inline-flex min-h-[40px] items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <FiMail className="h-4 w-4" aria-hidden="true" />
                <span>pierre.s3@hotmail.com</span>
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/pierre-souza/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn de Pierre Souza"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:scale-105 hover:text-foreground"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/pierresouza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do GitHub de Pierre Souza"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:scale-105 hover:text-foreground"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp com Pierre Souza"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:scale-105 hover:text-emerald-600"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {currentYear} Pierre Souza. {t("rights")}
          </p>
          <p>{t("developedBy")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
