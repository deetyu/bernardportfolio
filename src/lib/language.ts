import { spanish } from "@/data/translations";

export type Language = "en" | "es";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export function resolveLanguage(value: string | null): Language {
  return value === "es" ? "es" : "en";
}

export function translate(text: string, language: Language): string {
  if (language === "en") return text;
  return spanish[text.replace(/\s+/g, " ").trim()] ?? text;
}