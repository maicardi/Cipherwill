import { t } from "@/common/i18n";
/**
 * WorksMenu component defining desktop and mobile navigation layouts for "How it works".
 * Owns the split-pane mega-menu contents and mobile links.
 * Does NOT handle the main header container states or styling.
 */

import Link from "next/link";

export function WorksMenuDesktop() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-2 text-forest max-w-3xl">
      {/* Left Pane: Single Column List */}
      <div className="flex-1 flex flex-col gap-1 min-w-[320px]">
        <Link href={"/how-it-works"} className="group">
          <div className="hover:bg-neutral-100/70 p-3 rounded-xl transition-all duration-200">
            <div className="font-semibold text-base text-forest group-hover:text-primary transition-colors">
              {t("Platform Overview")}
            </div>
            <div className="text-sm text-forest/70 mt-1 leading-relaxed">
              {t("How Cipherwill secures your digital legacy.")}
            </div>
          </div>
        </Link>
        <Link href={"/i/how-execution-timeline-works"} className="group">
          <div className="hover:bg-neutral-100/70 p-3 rounded-xl transition-all duration-200">
            <div className="font-semibold text-base text-forest group-hover:text-primary transition-colors">
              {t("Will Execution")}
            </div>
            <div className="text-sm text-forest/70 mt-1 leading-relaxed">
              {t("See how assets transfer securely when needed.")}
            </div>
          </div>
        </Link>
        <Link href={"/how-factors-work"} className="group">
          <div className="hover:bg-neutral-100/70 p-3 rounded-xl transition-all duration-200">
            <div className="font-semibold text-base text-forest group-hover:text-primary transition-colors">
              {t("Security Factors")}
            </div>
            <div className="text-sm text-forest/70 mt-1 leading-relaxed">
              {t("Discover client-side decryption safeguards.")}
            </div>
          </div>
        </Link>
        <Link href={"/i/cascade-encryption"} className="group">
          <div className="hover:bg-neutral-100/70 p-3 rounded-xl transition-all duration-200">
            <div className="font-semibold text-base text-forest group-hover:text-primary transition-colors">
              {t("Encryption Layers")}
            </div>
            <div className="text-sm text-forest/70 mt-1 leading-relaxed">
              {t("A deep-dive into our Cascade Encryption.")}
            </div>
          </div>
        </Link>
        <Link href={"/i/time-capsule-encryption"} className="group">
          <div className="hover:bg-neutral-100/70 p-3 rounded-xl transition-all duration-200">
            <div className="font-semibold text-base text-forest group-hover:text-primary transition-colors">
              {t("Time Capsule")}
            </div>
            <div className="text-sm text-forest/70 mt-1 leading-relaxed">
              {t("Understand our time-released cryptographic vault.")}
            </div>
          </div>
        </Link>
      </div>

      {/* Right Pane: Reassurance Card (Simplified, Larger & Earthy) */}
      <div className="w-72 bg-clay/10 border border-clay/20 p-5 rounded-xl flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-forest text-lg leading-tight">
            {t("Completely Private")}
          </h4>
          <p className="text-base text-forest/80 mt-2 leading-relaxed">
            {t("Your data is encrypted client-side. We can never read your keys or see your data.")}
          </p>
        </div>
        <Link href="/app" className="font-semibold text-sm text-primary hover:text-primary-700 mt-4 inline-flex items-center transition-colors">
          {t("Get Started →")}
        </Link>
      </div>
    </div>
  );
}

export function WorksMenuMobile() {
  return (
    <div className="p-2 flex flex-col gap-2 font-medium">
      <Link href={"/how-it-works"}>{t("Platform Overview")}</Link>
      <Link href={"/i/how-execution-timeline-works"}>{t("Will Execution")}</Link>
      <Link href={"/how-factors-work"}>{t("Security Factors")}</Link>
      <Link href={"/i/cascade-encryption"}>{t("Encryption Layers")}</Link>
      <Link href={"/i/time-capsule-encryption"}>{t("Time Capsule Encryption")}</Link>
    </div>
  );
}
