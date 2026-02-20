"use client";

import React from "react";
import { useTranslations } from "@/lib/i18n";

function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="h-[10vh]">
      <p className="flex items-center justify-center gap-2 p-4">
        <span>&copy;</span> {t("developedBy")}
      </p>
    </footer>
  );
}

export default Footer;
