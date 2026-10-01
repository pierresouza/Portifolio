export interface CountryPhoneConfig {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  minDigits: number;
  maxDigits: number;
  format: (digits: string) => string;
  validateRegex: RegExp;
}

export const COUNTRIES: CountryPhoneConfig[] = [
  {
    code: "BR",
    name: "Brasil",
    dialCode: "+55",
    flag: "🇧🇷",
    placeholder: "(11) 99999-9999",
    minDigits: 10,
    maxDigits: 11,
    format: (digits: string) => {
      // 10 digits: (XX) XXXX-XXXX
      // 11 digits: (XX) XXXXX-XXXX
      const d = digits.slice(0, 11);
      if (d.length <= 2) {
        return d.length > 0 ? `(${d}` : "";
      }
      if (d.length <= 6) {
        return `(${d.slice(0, 2)}) ${d.slice(2)}`;
      }
      if (d.length <= 10) {
        return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
      }
      return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
    },
    validateRegex: /^\(\d{2}\)\s(?:9\d{4}|\d{4})-\d{4}$/,
  },
  {
    code: "US",
    name: "Estados Unidos / Canadá",
    dialCode: "+1",
    flag: "🇺🇸",
    placeholder: "(555) 000-0000",
    minDigits: 10,
    maxDigits: 10,
    format: (digits: string) => {
      const d = digits.slice(0, 10);
      if (d.length <= 3) {
        return d.length > 0 ? `(${d}` : "";
      }
      if (d.length <= 6) {
        return `(${d.slice(0, 3)}) ${d.slice(3)}`;
      }
      return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
    },
    validateRegex: /^\(\d{3}\)\s\d{3}-\d{4}$/,
  },
  {
    code: "PT",
    name: "Portugal",
    dialCode: "+351",
    flag: "🇵🇹",
    placeholder: "912 345 678",
    minDigits: 9,
    maxDigits: 9,
    format: (digits: string) => {
      const d = digits.slice(0, 9);
      if (d.length <= 3) return d;
      if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
      return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 9)}`;
    },
    validateRegex: /^\d{3}\s\d{3}\s\d{3}$/,
  },
  {
    code: "ES",
    name: "Espanha",
    dialCode: "+34",
    flag: "🇪🇸",
    placeholder: "612 34 56 78",
    minDigits: 9,
    maxDigits: 9,
    format: (digits: string) => {
      const d = digits.slice(0, 9);
      if (d.length <= 3) return d;
      if (d.length <= 5) return `${d.slice(0, 3)} ${d.slice(3)}`;
      if (d.length <= 7) return `${d.slice(0, 3)} ${d.slice(3, 5)} ${d.slice(5)}`;
      return `${d.slice(0, 3)} ${d.slice(3, 5)} ${d.slice(5, 7)} ${d.slice(7, 9)}`;
    },
    validateRegex: /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
  },
  {
    code: "GB",
    name: "Reino Unido",
    dialCode: "+44",
    flag: "🇬🇧",
    placeholder: "7911 123456",
    minDigits: 10,
    maxDigits: 11,
    format: (digits: string) => {
      const d = digits.slice(0, 11);
      if (d.length <= 4) return d;
      if (d.length <= 10) return `${d.slice(0, 4)} ${d.slice(4)}`;
      return `${d.slice(0, 5)} ${d.slice(5, 11)}`;
    },
    validateRegex: /^\d{4,5}\s\d{6}$/,
  },
  {
    code: "AR",
    name: "Argentina",
    dialCode: "+54",
    flag: "🇦🇷",
    placeholder: "(11) 1234-5678",
    minDigits: 10,
    maxDigits: 11,
    format: (digits: string) => {
      const d = digits.slice(0, 11);
      if (d.length <= 2) return d.length > 0 ? `(${d}` : "";
      if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
      return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    },
    validateRegex: /^\(\d{2}\)\s\d{4}-\d{4,5}$/,
  },
  {
    code: "FR",
    name: "França",
    dialCode: "+33",
    flag: "🇫🇷",
    placeholder: "06 12 34 56 78",
    minDigits: 9,
    maxDigits: 10,
    format: (digits: string) => {
      const d = digits.slice(0, 10);
      const parts = [];
      for (let i = 0; i < d.length; i += 2) {
        parts.push(d.slice(i, i + 2));
      }
      return parts.join(" ");
    },
    validateRegex: /^(?:\d{2}\s){4}\d{1,2}$/,
  },
  {
    code: "DE",
    name: "Alemanha",
    dialCode: "+49",
    flag: "🇩🇪",
    placeholder: "151 12345678",
    minDigits: 10,
    maxDigits: 11,
    format: (digits: string) => {
      const d = digits.slice(0, 11);
      if (d.length <= 3) return d;
      return `${d.slice(0, 3)} ${d.slice(3)}`;
    },
    validateRegex: /^\d{3,4}\s\d{7,8}$/,
  },
  {
    code: "IT",
    name: "Itália",
    dialCode: "+39",
    flag: "🇮🇹",
    placeholder: "312 345 6789",
    minDigits: 9,
    maxDigits: 10,
    format: (digits: string) => {
      const d = digits.slice(0, 10);
      if (d.length <= 3) return d;
      if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
      return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
    },
    validateRegex: /^\d{3}\s\d{3}\s\d{3,4}$/,
  },
  {
    code: "JP",
    name: "Japão",
    dialCode: "+81",
    flag: "🇯🇵",
    placeholder: "90-1234-5678",
    minDigits: 10,
    maxDigits: 10,
    format: (digits: string) => {
      const d = digits.slice(0, 10);
      if (d.length <= 2) return d;
      if (d.length <= 6) return `${d.slice(0, 2)}-${d.slice(2)}`;
      return `${d.slice(0, 2)}-${d.slice(2, 6)}-${d.slice(6, 10)}`;
    },
    validateRegex: /^\d{2}-\d{4}-\d{4}$/,
  },
  {
    code: "OTHER",
    name: "Outro / Internacional",
    dialCode: "+",
    flag: "🌐",
    placeholder: "1234567890",
    minDigits: 7,
    maxDigits: 15,
    format: (digits: string) => {
      return digits.slice(0, 15);
    },
    validateRegex: /^\d{7,15}$/,
  },
];

export const DEFAULT_COUNTRY = COUNTRIES[0]; // Brasil
