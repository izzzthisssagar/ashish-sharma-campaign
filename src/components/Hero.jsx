"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero({ hero }) {
  const { language } = useLanguage();
  const t = translations[language];

  const hasImg = Boolean(hero?.image?.src);
  const hasSymbol = Boolean(hero?.electionSymbol?.src);

  return (
    <section className="hero">
      <div className="container heroGrid">
        <div>
          <div className="kicker">{t.hero.kicker}</div>
          <h1 className="h1">{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>

          {hasSymbol && (
            <div className="electionSymbol">
              <div className="symbolCard">
                <Image
                  src={hero.electionSymbol.src}
                  alt={hero.electionSymbol.alt}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
                <div className="symbolText">
                  <span className="symbolLabel">{t.hero.symbolLabel}</span>
                  <span className="symbolName">{t.hero.symbolName} (जीप)</span>
                </div>
              </div>
            </div>
          )}

          <div className="pills">
            {t.pills?.map((p) => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>

        <div className="heroCard">
          <div className="heroPhoto">
            {hasImg ? (
              <Image src={hero.image.src} alt={hero.image.alt} fill priority style={{ objectFit: "cover" }} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
