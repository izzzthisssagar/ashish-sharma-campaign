"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      const storedNews = localStorage.getItem('cms_news');
      if (storedNews) {
        setNews(JSON.parse(storedNews));
      }
    } catch (e) {
      console.error('Error loading news:', e);
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
      pageTitle: "Ashish in News",
      noNews: "No news yet. Check back soon!",
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
      pageTitle: "आशिष समाचारमा",
      noNews: "अहिलेसम्म कुनै समाचार छैन। चाँडै फर्केर हेर्नुहोस्!",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Genesis Web Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const defaultNews = [
    {
      id: 1,
      title: language === "np" ? "आशिष शर्माद्वारा कपिलवस्तु-१ बाट उम्मेदवारी घोषणा" : "Ashish Sharma Announces Candidacy from Kapilvastu-1",
      excerpt: language === "np" ? "अनुभवी व्यवसायी आशिष शर्माले प्रतिनिधिसभा निर्वाचन २०८२ का लागि स्वतन्त्र उम्मेदवारी घोषणा गरेका छन्।" : "Experienced businessman Ashish Sharma has announced his independent candidacy for the House of Representatives Election 2082.",
      date: "2082-01-15",
      source: "Kantipur Daily",
      image: "/portrait.jpg",
    },
    {
      id: 2,
      title: language === "np" ? "जनसम्पर्क अभियान सुरु" : "Public Outreach Campaign Begins",
      excerpt: language === "np" ? "कपिलवस्तुका विभिन्न वडाहरूमा घरदैलो अभियान सुरु भएको छ।" : "Door-to-door campaign has begun across various wards of Kapilvastu.",
      date: "2082-01-20",
      source: "Online Khabar",
      image: "/portrait.jpg",
    },
    {
      id: 3,
      title: language === "np" ? "युवा संवाद कार्यक्रम आयोजना" : "Youth Dialogue Program Organized",
      excerpt: language === "np" ? "कपिलवस्तुका युवाहरूसँग रोजगारी र शिक्षाबारे छलफल भयो।" : "Discussion on employment and education held with youth of Kapilvastu.",
      date: "2082-01-25",
      source: "Nagarik News",
      image: "/portrait.jpg",
    },
  ];

  const displayNews = news.length > 0 ? news : defaultNews;

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

      {/* News Content */}
      <section className="page-content">
        <div className="container">
          <div className="news-grid">
            {displayNews.map((item) => (
              <Link href={`/news/${item.id}`} key={item.id} className="news-card">
                <div className="news-card-img">
                  <img src={item.image || "/portrait.jpg"} alt={item.title} />
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">{item.source || "News"}, {item.date}</div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-excerpt">{item.excerpt}</p>
                </div>
              </Link>
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
