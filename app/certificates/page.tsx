"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  FiAward,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiDownload,
  FiExternalLink,
  FiMaximize2,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/fade-in";
import { useTranslations } from "@/lib/i18n";
import { CertificateItem, certificatesMock } from "./mockCertificates";

export default function CertificatesPage() {
  const [query, setQuery] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const [selectedCert, setSelectedCert] =
    React.useState<CertificateItem | null>(null);

  const t = useTranslations("certificates");
  const tc = useTranslations("common");
  const tItems = useTranslations("certificateItems");

  const allTags = React.useMemo(() => {
    const set = new Set<string>();
    certificatesMock.forEach((cert) =>
      cert.tags.forEach((tag) => set.add(tag)),
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const totalHours = React.useMemo(() => {
    const sum = certificatesMock.reduce((acc, item) => {
      const numeric = parseFloat(item.workload.replace("h", ""));
      return acc + (Number.isNaN(numeric) ? 0 : numeric);
    }, 0);
    return `${sum}h`;
  }, []);

  const filteredCertificates = React.useMemo(() => {
    return certificatesMock.filter((cert) => {
      const translatedTitle = tItems(`${cert.translationKey}.title`);
      const translatedIssuer = tItems(`${cert.translationKey}.issuer`);
      const translatedDescription = tItems(
        `${cert.translationKey}.description`,
      );
      const translatedRole = tItems(`${cert.translationKey}.role`);

      const searchableText =
        `${cert.title} ${cert.issuer} ${translatedTitle} ${translatedIssuer} ${translatedDescription} ${translatedRole} ${cert.tags.join(" ")}`.toLowerCase();

      const matchesQuery = searchableText.includes(query.toLowerCase());
      const matchesTag = selectedTag ? cert.tags.includes(selectedTag) : true;
      return matchesQuery && matchesTag;
    });
  }, [query, selectedTag, tItems]);

  // Lightbox keyboard navigation
  React.useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredCertificates.findIndex(
          (c) => c.id === selectedCert.id,
        );
        if (currentIndex !== -1 && filteredCertificates.length > 1) {
          const nextIndex = (currentIndex + 1) % filteredCertificates.length;
          setSelectedCert(filteredCertificates[nextIndex]);
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredCertificates.findIndex(
          (c) => c.id === selectedCert.id,
        );
        if (currentIndex !== -1 && filteredCertificates.length > 1) {
          const prevIndex =
            (currentIndex - 1 + filteredCertificates.length) %
            filteredCertificates.length;
          setSelectedCert(filteredCertificates[prevIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, filteredCertificates]);

  const handleNavigateModal = (direction: "prev" | "next") => {
    if (!selectedCert || filteredCertificates.length <= 1) return;
    const currentIndex = filteredCertificates.findIndex(
      (c) => c.id === selectedCert.id,
    );
    if (currentIndex === -1) return;
    const targetIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredCertificates.length
        : (currentIndex - 1 + filteredCertificates.length) %
          filteredCertificates.length;
    setSelectedCert(filteredCertificates[targetIndex]);
  };

  return (
    <main
      aria-labelledby="certificates-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <FadeIn direction="down" className="mb-8">
        <Badge variant="outline" className="mb-3">
          {t("badge")}
        </Badge>
        <h1
          id="certificates-heading"
          className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
        >
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t("description")}
        </p>
      </FadeIn>

      {/* Stats Strip */}
      <FadeIn
        delay={0.1}
        className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardContent className="p-5">
            <p className="text-2xl font-black text-primary">
              {certificatesMock.length}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              {t("statsTotal")}
            </p>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardContent className="p-5">
            <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400">{totalHours}</p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              {t("statsHours")}
            </p>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/60 backdrop-blur">
          <CardContent className="p-5">
            <p className="text-lg font-extrabold text-foreground sm:text-xl">
              {t("statsFocusValue")}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              {t("statsFocus")}
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Search & Tag Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/50 p-4 sm:p-5">
        <div className="relative w-full">
          <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-10 text-sm outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={t("searchLabel")}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={tc("clearFilter")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
            className="h-8 rounded-full text-xs"
          >
            {tc("all")}
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setSelectedTag((prev) => (prev === tag ? null : tag))
              }
              className="h-8 rounded-full text-xs"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert) => {
            const title = tItems(`${cert.translationKey}.title`);
            const issuer = tItems(`${cert.translationKey}.issuer`);
            const role = tItems(`${cert.translationKey}.role`);
            const description = tItems(`${cert.translationKey}.description`);

            return (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                key={cert.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Certificate Image Preview */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  aria-label={`${t("viewCertificate")}: ${title}`}
                  className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden border-b bg-muted/30"
                >
                  <Image
                    src={cert.image}
                    alt={`${title} - ${issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-foreground shadow-md">
                      <FiMaximize2 size={14} />
                      {t("viewCertificate")}
                    </span>
                  </div>
                </div>

                {/* Certificate Metadata */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="outline" className="text-xs">
                      <FiAward className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      {role}
                    </Badge>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="h-3.5 w-3.5" />
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="h-3.5 w-3.5" />
                        {cert.workload}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-base font-bold leading-snug md:text-lg">
                      {title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-primary sm:text-sm">
                      {issuer}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {description}
                  </p>

                  {cert.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                      {cert.tags.map((tag) => (
                        <Badge
                          key={`${cert.id}-${tag}`}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-3 flex flex-wrap gap-2.5 border-t pt-3">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => setSelectedCert(cert)}
                      className="gap-2 rounded-xl text-xs"
                    >
                      <FiMaximize2 size={14} />
                      {t("viewCertificate")}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2 rounded-xl text-xs"
                    >
                      <a
                        href={encodeURI(cert.fileUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink size={14} />
                        {t("openOriginal")}
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2 rounded-xl text-xs"
                    >
                      <a href={encodeURI(cert.fileUrl)} download>
                        <FiDownload size={14} />
                        {t("downloadFile")}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredCertificates.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed p-10 text-center">
          <p className="text-sm text-muted-foreground">
            {t("noCertificatesFound")}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery("");
              setSelectedTag(null);
            }}
            className="mt-4"
          >
            {tc("clearFilter")}
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={tItems(`${selectedCert.translationKey}.title`)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border bg-card shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b px-4 py-3 sm:px-6">
                <div className="min-w-0 pr-4">
                  <h3 className="truncate text-sm font-bold sm:text-base">
                    {tItems(`${selectedCert.translationKey}.title`)}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">
                    {tItems(`${selectedCert.translationKey}.issuer`)} •{" "}
                    {selectedCert.date} ({selectedCert.workload})
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hidden gap-1.5 text-xs sm:inline-flex"
                  >
                    <a href={encodeURI(selectedCert.fileUrl)} download>
                      <FiDownload size={14} />
                      {t("downloadFile")}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedCert(null)}
                    aria-label={t("closePreview")}
                  >
                    <FiX size={18} />
                  </Button>
                </div>
              </div>

              {/* Modal Body / Image */}
              <div className="relative flex min-h-[50vh] flex-1 items-center justify-center bg-muted/40 p-2 sm:min-h-[65vh] sm:p-6">
                {filteredCertificates.length > 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleNavigateModal("prev")}
                    aria-label={t("previous")}
                    className="absolute left-3 z-10 rounded-full bg-background/90 shadow-md hover:bg-background"
                  >
                    <FiChevronLeft size={20} />
                  </Button>
                )}

                <div className="relative h-[55vh] w-full sm:h-[65vh]">
                  <Image
                    src={selectedCert.image}
                    alt={tItems(`${selectedCert.translationKey}.title`)}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {filteredCertificates.length > 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleNavigateModal("next")}
                    aria-label={t("next")}
                    className="absolute right-3 z-10 rounded-full bg-background/90 shadow-md hover:bg-background"
                  >
                    <FiChevronRight size={20} />
                  </Button>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t px-4 py-3 sm:px-6">
                <Badge variant="outline" className="text-xs">
                  {tItems(`${selectedCert.translationKey}.role`)}
                </Badge>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-1.5 text-xs"
                  >
                    <a
                      href={encodeURI(selectedCert.fileUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={14} />
                      {t("openOriginal")}
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="gap-1.5 text-xs sm:hidden"
                  >
                    <a href={encodeURI(selectedCert.fileUrl)} download>
                      <FiDownload size={14} />
                      {t("downloadFile")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
