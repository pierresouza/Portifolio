"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, locales, defaultLocale } from "./config";

import ptMessages from "../../messages/pt.json";
import enMessages from "../../messages/en.json";
import esMessages from "../../messages/es.json";

const messages: Record<Locale, typeof ptMessages> = {
  pt: ptMessages,
  en: enMessages,
  es: esMessages,
};

type Messages = typeof ptMessages;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if path not found
    }
  }

  return typeof result === "string" ? result : path;
}

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  // Check localStorage first
  const stored = localStorage.getItem("locale");
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }

  // Detect browser language
  const browserLang = navigator.language.toLowerCase();

  // Check for exact match first
  for (const locale of locales) {
    if (browserLang.startsWith(locale)) {
      return locale;
    }
  }

  // Map common language codes
  if (browserLang.startsWith("pt")) return "pt";
  if (browserLang.startsWith("en")) return "en";
  if (browserLang.startsWith("es")) return "es";

  return defaultLocale;
}

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Detect browser language on first load
    const detectedLocale = detectBrowserLocale();
    setLocaleState(detectedLocale);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update HTML lang attribute
    document.documentElement.lang = newLocale === "pt" ? "pt-BR" : newLocale;
  };

  const t = (key: string): string => {
    return getNestedValue(
      messages[locale] as unknown as Record<string, unknown>,
      key,
    );
  };

  // Prevent hydration mismatch by rendering with default locale first
  const currentMessages = messages[locale];

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t, messages: currentMessages }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useTranslations(namespace?: string) {
  const { t } = useLocale();

  const translate = (key: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return t(fullKey);
  };

  return translate;
}
