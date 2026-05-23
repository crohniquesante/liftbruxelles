import { SITE } from "@/lib/site";
import { IconPhone } from "./icons";

type PhoneCTAProps = {
  size?: "default" | "large" | "sticky";
  className?: string;
};

export function PhoneCTA({ size = "default", className = "" }: PhoneCTAProps) {
  const sizes = {
    default:
      "inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
    large:
      "inline-flex items-center gap-3 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-premium transition hover:bg-brand-700 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
    sticky:
      "flex w-full items-center justify-center gap-3 rounded-full bg-brand-600 py-4 text-lg font-bold text-white shadow-premium",
  };

  return (
    <a
      href={SITE.phoneHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizes[size]} ${className}`}
      aria-label={`Contacter ${SITE.name} sur WhatsApp au ${SITE.phoneDisplay}`}
    >
      <IconPhone />
      <span>{SITE.phoneDisplay}</span>
    </a>
  );
}
