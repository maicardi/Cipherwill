/**
 * What it does: Localizes user-facing copy without changing stored values or APIs.
 * What it owns: Locale selection and English fallback.
 * What it does NOT do: Translate dynamic user data or identifiers.
 */
import { itPrimary } from "./i18n/it-primary";
import { itSecondary } from "./i18n/it-secondary";

const italian: Record<string, string> = { ...itPrimary, ...itSecondary };

export function currentLocale(): "en" | "it" {
  return process.env.NEXT_PUBLIC_CIPHERWILL_LOCALE === "it" ? "it" : "en";
}

export function t(english: string): string {
  return currentLocale() === "it" ? italian[english] ?? english : english;
}
