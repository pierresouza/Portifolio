import { CountryPhoneConfig, COUNTRIES, DEFAULT_COUNTRY } from "./countries";

/**
 * Retorna apenas os dígitos de uma string
 */
export function cleanDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Aplica a máscara do país aos dígitos informados
 */
export function formatPhoneNumber(
  value: string,
  country: CountryPhoneConfig,
): string {
  const digits = cleanDigits(value).slice(0, country.maxDigits);
  if (!digits) return "";
  return country.format(digits);
}

/**
 * Valida se o número atende aos requisitos do país (ou se está vazio caso opcional)
 */
export function validatePhoneNumber(
  formattedValue: string,
  country: CountryPhoneConfig,
): { isValid: boolean; errorKey?: string } {
  const trimmed = formattedValue.trim();
  if (!trimmed) {
    return { isValid: true };
  }

  const digits = cleanDigits(trimmed);

  if (digits.length < country.minDigits) {
    return { isValid: false, errorKey: "phoneTooShort" };
  }

  if (digits.length > country.maxDigits) {
    return { isValid: false, errorKey: "phoneTooLong" };
  }

  const matchesRegex = country.validateRegex.test(trimmed);
  if (!matchesRegex) {
    return { isValid: false, errorKey: "phoneInvalid" };
  }

  return { isValid: true };
}

/**
 * Retorna o número completo com DDI para envio ou link de WhatsApp
 */
export function getFullPhoneNumber(
  formattedValue: string,
  country: CountryPhoneConfig,
): string {
  const trimmed = formattedValue.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return trimmed;
  return `${country.dialCode} ${trimmed}`;
}

/**
 * Busca a configuração de um país pelo código ISO (ex: 'BR')
 */
export function getCountryByCode(code: string): CountryPhoneConfig {
  return COUNTRIES.find((c) => c.code === code) || DEFAULT_COUNTRY;
}
