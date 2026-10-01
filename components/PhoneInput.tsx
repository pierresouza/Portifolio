"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, AlertCircle, Check } from "lucide-react";
import {
  COUNTRIES,
  DEFAULT_COUNTRY,
  CountryPhoneConfig,
} from "@/lib/phone/countries";
import {
  cleanDigits,
  formatPhoneNumber,
  validatePhoneNumber,
  getFullPhoneNumber,
  getCountryByCode,
} from "@/lib/phone/formatters";
import { useTranslations } from "@/lib/i18n";

interface PhoneInputProps {
  id?: string;
  name?: string;
  value?: string;
  defaultCountryCode?: string;
  onChange: (data: {
    formatted: string;
    rawDigits: string;
    fullWithDdi: string;
    country: CountryPhoneConfig;
    isValid: boolean;
  }) => void;
  onErrorChange?: (hasError: boolean) => void;
  disabled?: boolean;
}

export default function PhoneInput({
  id = "phone",
  name = "phone",
  value = "",
  defaultCountryCode = "BR",
  onChange,
  onErrorChange,
  disabled = false,
}: PhoneInputProps) {
  const t = useTranslations("contact");
  const [selectedCountry, setSelectedCountry] = useState<CountryPhoneConfig>(
    () => getCountryByCode(defaultCountryCode) || DEFAULT_COUNTRY,
  );
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [touched, setTouched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Sincroniza se o valor inicial/externo mudar
  useEffect(() => {
    if (value !== displayValue) {
      const formatted = formatPhoneNumber(value, selectedCountry);
      setDisplayValue(formatted);
    }
  }, [value, selectedCountry]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = getCountryByCode(e.target.value);
    setSelectedCountry(newCountry);

    // Reformatar dígitos atuais com a nova máscara do país selecionado
    const currentDigits = cleanDigits(displayValue);
    const newFormatted = currentDigits
      ? formatPhoneNumber(currentDigits, newCountry)
      : "";

    setDisplayValue(newFormatted);

    const validation = validatePhoneNumber(newFormatted, newCountry);
    const hasError = !validation.isValid && Boolean(newFormatted);
    const errText = hasError
      ? t(validation.errorKey || "phoneInvalid")
      : "";

    setErrorMessage(errText);
    onErrorChange?.(hasError);

    onChange({
      formatted: newFormatted,
      rawDigits: cleanDigits(newFormatted),
      fullWithDdi: getFullPhoneNumber(newFormatted, newCountry),
      country: newCountry,
      isValid: validation.isValid,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const formatted = formatPhoneNumber(inputVal, selectedCountry);
    setDisplayValue(formatted);

    const validation = validatePhoneNumber(formatted, selectedCountry);
    const raw = cleanDigits(formatted);
    const hasError = !validation.isValid && Boolean(formatted);
    const errText = hasError
      ? t(validation.errorKey || "phoneInvalid")
      : "";

    if (touched) {
      setErrorMessage(errText);
      onErrorChange?.(hasError);
    }

    onChange({
      formatted,
      rawDigits: raw,
      fullWithDdi: getFullPhoneNumber(formatted, selectedCountry),
      country: selectedCountry,
      isValid: validation.isValid,
    });
  };

  const handleBlur = () => {
    setTouched(true);
    const validation = validatePhoneNumber(displayValue, selectedCountry);
    const hasError = !validation.isValid && Boolean(displayValue);
    const errText = hasError
      ? t(validation.errorKey || "phoneInvalid")
      : "";

    setErrorMessage(errText);
    onErrorChange?.(hasError);
  };

  const isCompleteAndValid =
    Boolean(displayValue) &&
    validatePhoneNumber(displayValue, selectedCountry).isValid;

  return (
    <div className="w-full">
      <div
        className={`mt-1 flex items-stretch rounded-lg border transition-all ${
          errorMessage
            ? "border-red-500 focus-within:ring-2 focus-within:ring-red-500/30"
            : "border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-600 dark:focus-within:border-blue-400"
        } bg-white dark:bg-gray-800`}
      >
        {/* Seletor de País com DDI e Bandeira */}
        <div className="relative flex items-center border-r border-gray-300 dark:border-gray-600">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            disabled={disabled}
            aria-label={t("phoneCountryLabel") || "País"}
            className="h-full cursor-pointer appearance-none bg-transparent py-2.5 pl-3 pr-8 text-sm font-medium text-gray-800 outline-none transition-colors hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700/50"
          >
            {COUNTRIES.map((c) => (
              <option
                key={c.code}
                value={c.code}
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              >
                {c.flag} {c.dialCode} - {c.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 h-4 w-4 text-gray-400" />
        </div>

        {/* Input do Telefone com Máscara Dinâmica */}
        <div className="relative flex flex-1 items-center">
          <input
            type="tel"
            id={id}
            name={name}
            value={displayValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={selectedCountry.placeholder}
            className="w-full min-w-0 bg-transparent px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500"
          />

          {isCompleteAndValid && (
            <span
              title="Número válido"
              className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/60 dark:text-green-400"
            >
              <Check className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Mensagem de Erro de Validação Dinâmica */}
      {errorMessage && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500 dark:text-red-400">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
}
