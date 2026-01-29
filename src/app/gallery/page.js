"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    try {
      const storedGallery = localStorage.getItem('cms_gallery');
      if (storedGallery) {
        setGallery(JSON.parse(storedGallery));
      }
    } catch (e) {
      console.error('Error loading gallery:', e);
    }
  }, []);

  const t = {
    en: {
      home: "Home",
      about: "About",
      ashishIn: "Ashish in",
      ashishOn: "Ashish on",
      articles: "Articles",
      priorities: "Priorities",
      blogs: "Blogs",
      contactUs: "Contact Us",
      gallery: "Gallery",
      videos: "Videos",
      news: "News",
      interviews: "Interviews",
      helpBtn: "How can we help you?",
      pageTitle: "Photo Gallery",
      noGallery: "No photos yet. Check back soon!",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      copyright: "© 2082 Ashish Sharma. All rights reserved.",
      developedBy: "Website Designed & Developed by: Genesis Web Technology",
      constituency: "Kapilvastu-1",
    },
    np: {
      home: "गृहपृष्ठ",
      about: "परिचय",
      ashishIn: "आशिष मा",
      ashishOn: "आशिष को",
      articles: "लेखहरू",
      priorities: "प्राथमिकताहरू",
      blogs: "ब्लगहरू",
      contactUs: "सम्पर्क",
      gallery: "ग्यालरी",
      videos: "भिडियो",
      news: "समाचार",
      interviews: "अन्तर्वार्ता",
      helpBtn: "हामी कसरी मद्दत गर्न सक्छौं?",
      pageTitle: "फोटो ग्यालरी",
      noGallery: "अहिलेसम्म कुनै फोटो छैन। चाँडै फर्केर हेर्नुहोस्!",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Genesis Web Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const defaultGallery = [
    { id: 1, image: "/portrait.jpg", title: "Campaign Event" },
    { id: 2, image: "/portrait.jpg", title: "Public Meeting" },
    { id: 3, image: "/portrait.jpg", title: "Youth Program" },
    { id: 4, image: "/portrait.jpg", title: "Community Visit" },
    { id: 5, image: "/portrait.jpg", title: "Interview" },
    { id: 6, image: "/portrait.jpg", title: "Rally" },
    { id: 7, image: "/portrait.jpg", title: "Press Conference" },
    { id: 8, image: "/portrait.jpg", title: "Cultural Event" },
  ];

  const displayGallery = gallery.length > 0 ? gallery : defaultGallery;

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <Link href="/" className="logo-text">Ashish</Link>
              <Link href="/contact" className="help-btn">{text.helpBtn}</Link>
            </div>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
              <Link href="/" className="nav-link">{text.home}</Link>
              <Link href="/about" className="nav-link">{text.about}</Link>

              <div className="nav-dropdown">
                <button className="nav-dropdown-btn">
                  {text.ashishIn}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className="nav-dropdown-menu">
                  <Link href="/news">{text.news}</Link>
                  <Link href="/gallery">{text.gallery}</Link>
                </div>
              </div>

              <div className="nav-dropdown">
                <button className="nav-dropdown-btn">
                  {text.ashishOn}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className="nav-dropdown-menu">
                  <Link href="/videos">{text.interviews}</Link>
                </div>
              </div>

              <Link href="/articles" className="nav-link">{text.articles}</Link>
              <Link href="/priorities" className="nav-link">{text.priorities}</Link>
              <Link href="/blogs" className="nav-link">{text.blogs}</Link>
              <Link href="/contact" className="nav-link">{text.contactUs}</Link>

              <button onClick={toggleLanguage} className="lang-btn">
                {language === "en" ? "नेपाली" : "English"}
              </button>
            </nav>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>{text.pageTitle}</h1>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="page-content">
        <div className="container">
          <div className="gallery-grid">
            {displayGallery.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image || "/portrait.jpg"} alt={item.title || "Gallery Image"} />
                <div className="gallery-overlay">
                  <span>🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Ashish Sharma</h3>
              <p>{language === "np" ? "स्वतन्त्र उम्मेदवार" : "Independent Candidate"}</p>
              <p>{text.constituency}</p>
              <p>contact@ashishsharma.info</p>
              <p>+977 9800000000</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/share/1Js87C4Ln9/" target="_blank" rel="noopener noreferrer">f</a>
                <a href="https://x.com/ashishsharmainf" target="_blank" rel="noopener noreferrer">𝕏</a>
                <a href="https://www.instagram.com/ashishsharma.info/" target="_blank" rel="noopener noreferrer">ig</a>
                <a href="https://www.linkedin.com/in/ashishsharmainfo/" target="_blank" rel="noopener noreferrer">in</a>
                <a href="https://www.tiktok.com/@ashishsharma.info" target="_blank" rel="noopener noreferrer">tt</a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">{text.quickLinks}</h4>
              <ul className="footer-links">
                <li><Link href="/about">{text.about}</Link></li>
                <li><Link href="/priorities">{text.priorities}</Link></li>
                <li><Link href="/blogs">{text.blogs}</Link></li>
                <li><Link href="/contact">{text.contactUs}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">{text.followUs}</h4>
              <ul className="footer-links">
                <li><a href="https://www.facebook.com/share/1Js87C4Ln9/" target="_blank">Facebook</a></li>
                <li><a href="https://x.com/ashishsharmainf" target="_blank">X (Twitter)</a></li>
                <li><a href="https://www.instagram.com/ashishsharma.info/" target="_blank">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/ashishsharmainfo/" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">{text.copyright} | {text.developedBy}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
