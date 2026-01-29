"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CTA({ cta }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="ctaSection">
      <div className="container">
        <div className="ctaCard">
          <div className="ctaContent">
            <h2 className="ctaTitle">{t.cta.title}</h2>
            <p className="ctaSubtitle">{t.cta.subtitle}</p>
            <p className="ctaBody">{t.cta.body}</p>
            <div className="ctaActions">
              <Link className="btn primary" href={cta.primary.href}>{t.cta.contactUs}</Link>
              <Link className="btn" href={cta.secondary.href}>{t.cta.learnMore}</Link>
            </div>
          </div>
          <div className="ctaSymbol">
            <Image
              src="/jeep-symbol.jpg"
              alt="Election Symbol - Jeep"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
            />
            <span className="ctaSymbolText">{t.cta.symbolText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
