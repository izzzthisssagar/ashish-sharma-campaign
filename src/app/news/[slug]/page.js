"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsDetailPage() {
  const { language, toggleLanguage } = useLanguage();
  const params = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    en: {
      logo: "Ashish",
      helpBtn: "How can we help you?",
      nav: {
        home: "Home",
        about: "About Ashish",
        priorities: "Priorities",
        ashishIn: "Ashish in",
        news: "News",
        articles: "Articles",
        blogs: "Blogs",
        ashishOn: "Ashish on",
        interviews: "Interviews",
        videos: "Videos",
        gallery: "Gallery",
        contact: "Contact"
      },
      eyebrow: "News",
      backToNews: "← Back to News",
      notFound: "News article not found.",
      footerText: "Independent Candidate for House of Representatives",
      constituency: "Kapilvastu-1",
      symbol: "Election Symbol: Jeep",
      copyright: "© 2082 Ashish Sharma. All rights reserved.",
      developedBy: "Website Designed & Developed by: Illuminati Technology"
    },
    np: {
      logo: "आशीष",
      helpBtn: "हामी तपाईंलाई कसरी मद्दत गर्न सक्छौं?",
      nav: {
        home: "गृहपृष्ठ",
        about: "आशीषको बारेमा",
        priorities: "प्राथमिकताहरू",
        ashishIn: "आशीष मा",
        news: "समाचार",
        articles: "लेखहरू",
        blogs: "ब्लगहरू",
        ashishOn: "आशीष मा",
        interviews: "अन्तर्वार्ताहरू",
        videos: "भिडियोहरू",
        gallery: "ग्यालरी",
        contact: "सम्पर्क"
      },
      eyebrow: "समाचार",
      backToNews: "← समाचारमा फर्कनुहोस्",
      notFound: "समाचार लेख फेला परेन।",
      footerText: "प्रतिनिधि सभाका लागि स्वतन्त्र उम्मेदवार",
      constituency: "कपिलवस्तु-१",
      symbol: "चुनाव चिन्ह: जीप",
      copyright: "© २०८२ आशीष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Illuminati Technology"
    }
  };

  const t = content[language];

  useEffect(() => {
    const stored = localStorage.getItem("cms_news");
    if (stored) {
      const newsItems = JSON.parse(stored);
      const found = newsItems.find(item => item.slug === params.slug);
      setNewsItem(found || null);
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!newsItem) {
    return (
      <div className="page-wrapper">
        <header className="header">
          <div className="header-container">
            <Link href="/" className="logo">{t.logo}</Link>
            <button className="help-btn">{t.helpBtn}</button>
            <nav className="nav">
              <Link href="/">{t.nav.home}</Link>
              <Link href="/news">{t.nav.news}</Link>
            </nav>
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === "en" ? "नेपाली" : "English"}
            </button>
          </div>
        </header>
        <main className="content-detail">
          <div className="container">
            <p>{t.notFound}</p>
            <Link href="/news" className="btn btn-primary">{t.backToNews}</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo">{t.logo}</Link>

          <button className="help-btn">{t.helpBtn}</button>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/">{t.nav.home}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/priorities">{t.nav.priorities}</Link>

            <div className="nav-dropdown">
              <span className="nav-dropdown-trigger">{t.nav.ashishIn} ▼</span>
              <div className="nav-dropdown-menu">
                <Link href="/news">{t.nav.news}</Link>
                <Link href="/articles">{t.nav.articles}</Link>
                <Link href="/blogs">{t.nav.blogs}</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-dropdown-trigger">{t.nav.ashishOn} ▼</span>
              <div className="nav-dropdown-menu">
                <Link href="/videos">{t.nav.interviews}</Link>
                <Link href="/videos">{t.nav.videos}</Link>
              </div>
            </div>

            <Link href="/gallery">{t.nav.gallery}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </nav>

          <button
            className="lang-toggle"
            onClick={toggleLanguage}
          >
            {language === "en" ? "नेपाली" : "English"}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Content Detail */}
      <main className="content-detail">
        <div className="container">
          <Link href="/news" className="back-link">{t.backToNews}</Link>

          <article className="detail-article">
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{newsItem.title}</h1>
            <div className="meta">
              <span className="source">{newsItem.source}</span>
              <span className="date">{newsItem.date}</span>
            </div>

            {newsItem.image && (
              <div className="featured-image">
                <img src={newsItem.image} alt={newsItem.title} />
              </div>
            )}

            <div className="body" dangerouslySetInnerHTML={{ __html: newsItem.body || newsItem.excerpt }} />
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{t.logo}</h3>
              <p>{t.footerText}</p>
              <p>{t.constituency}</p>
              <p className="symbol">{t.symbol}</p>
            </div>
            <div className="footer-links">
              <Link href="/about">{t.nav.about}</Link>
              <Link href="/priorities">{t.nav.priorities}</Link>
              <Link href="/news">{t.nav.news}</Link>
              <Link href="/contact">{t.nav.contact}</Link>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.copyright} | {t.developedBy}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .content-detail {
          padding: 2rem 0 4rem;
          min-height: 60vh;
        }

        .back-link {
          display: inline-block;
          color: var(--primary);
          margin-bottom: 2rem;
          font-weight: 500;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .detail-article {
          max-width: 800px;
        }

        .eyebrow {
          display: inline-block;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .detail-article h1 {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-light);
        }

        .source {
          color: var(--primary);
          font-weight: 500;
        }

        .featured-image {
          margin-bottom: 2rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: auto;
        }

        .body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dark);
        }

        .body p {
          margin-bottom: 1.5rem;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .detail-article h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
