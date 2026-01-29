"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VideosPage() {
  const { language, toggleLanguage } = useLanguage();
  const [videos, setVideos] = useState([]);
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
      pageTitle: "Videos",
      pageSubtitle: "Watch Ashish Sharma's interviews, speeches, and campaign videos",
      watchNow: "Watch Now",
      noVideos: "No videos available yet.",
      footerText: "Independent Candidate for House of Representatives",
      constituency: "Kapilvastu-1",
      symbol: "Election Symbol: Jeep",
      copyright: "© 2025 Ashish Sharma. All rights reserved."
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
      pageTitle: "भिडियोहरू",
      pageSubtitle: "आशीष शर्माका अन्तर्वार्ता, भाषण र अभियान भिडियोहरू हेर्नुहोस्",
      watchNow: "अहिले हेर्नुहोस्",
      noVideos: "अहिलेसम्म कुनै भिडियो उपलब्ध छैन।",
      footerText: "प्रतिनिधि सभाका लागि स्वतन्त्र उम्मेदवार",
      constituency: "कपिलवस्तु-१",
      symbol: "चुनाव चिन्ह: जीप",
      copyright: "© २०२५ आशीष शर्मा। सर्वाधिकार सुरक्षित।"
    }
  };

  const t = content[language];

  useEffect(() => {
    const stored = localStorage.getItem("cms_videos");
    if (stored) {
      setVideos(JSON.parse(stored));
    } else {
      // Default videos
      setVideos([
        {
          id: 1,
          title: language === "np" ? "आशीष शर्मासँग विशेष अन्तर्वार्ता" : "Exclusive Interview with Ashish Sharma",
          channel: "Nepal Television",
          date: "2025-01-15",
          thumbnail: "/images/video-thumb-1.jpg",
          url: "https://www.youtube.com/watch?v=example1",
          description: language === "np" ? "नेपाल टेलिभिजनमा आशीष शर्माको विशेष अन्तर्वार्ता" : "Exclusive interview with Ashish Sharma on Nepal Television"
        },
        {
          id: 2,
          title: language === "np" ? "कपिलवस्तुको विकास योजना" : "Development Plan for Kapilvastu",
          channel: "Kantipur TV",
          date: "2025-01-10",
          thumbnail: "/images/video-thumb-2.jpg",
          url: "https://www.youtube.com/watch?v=example2",
          description: language === "np" ? "कपिलवस्तुको विकास योजनाबारे आशीष शर्माको प्रस्तुति" : "Ashish Sharma's presentation on Kapilvastu development plan"
        },
        {
          id: 3,
          title: language === "np" ? "युवा र रोजगारी" : "Youth and Employment",
          channel: "Image Channel",
          date: "2025-01-05",
          thumbnail: "/images/video-thumb-3.jpg",
          url: "https://www.youtube.com/watch?v=example3",
          description: language === "np" ? "युवा रोजगारीबारे आशीष शर्माको दृष्टिकोण" : "Ashish Sharma's vision on youth employment"
        }
      ]);
    }
  }, [language]);

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

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

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>{t.pageTitle}</h1>
          <p>{t.pageSubtitle}</p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section">
        <div className="container">
          {videos.length === 0 ? (
            <p className="no-content">{t.noVideos}</p>
          ) : (
            <div className="videos-grid">
              {videos.map((video) => {
                const youtubeId = getYouTubeId(video.url);
                return (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      {youtubeId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="video-placeholder">
                          <span>▶</span>
                        </div>
                      )}
                    </div>
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <div className="video-meta">
                        <span className="video-channel">{video.channel}</span>
                        <span className="video-date">{video.date}</span>
                      </div>
                      <p>{video.description}</p>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        {t.watchNow}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

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
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .video-card {
          background: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .video-thumbnail {
          position: relative;
          padding-bottom: 56.25%;
          background: #000;
        }

        .video-thumbnail iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a1a, #333);
        }

        .video-placeholder span {
          font-size: 3rem;
          color: var(--primary);
        }

        .video-info {
          padding: 1.5rem;
        }

        .video-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .video-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        .video-channel {
          color: var(--primary);
          font-weight: 500;
        }

        .video-info p {
          color: var(--text-light);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .no-content {
          text-align: center;
          padding: 3rem;
          color: var(--text-light);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .videos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
