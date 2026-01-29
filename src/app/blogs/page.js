"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogsPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    try {
      const storedBlogs = localStorage.getItem('cms_blogs');
      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs));
      }
    } catch (e) {
      console.error('Error loading blogs:', e);
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
      pageTitle: "Blogs",
      noBlogs: "No blogs yet. Check back soon!",
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
      pageTitle: "ब्लगहरू",
      noBlogs: "अहिलेसम्म कुनै ब्लग छैन। चाँडै फर्केर हेर्नुहोस्!",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Genesis Web Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const defaultBlogs = [
    {
      id: 1,
      title: language === "np" ? "मेरो राजनीतिक यात्राको सुरुवात" : "Beginning of My Political Journey",
      excerpt: language === "np" ? "कपिलवस्तुको जनताको सेवा गर्ने मेरो प्रतिबद्धता र यस यात्राको सुरुवातको कथा..." : "My commitment to serve the people of Kapilvastu and the story of how this journey began...",
      date: "2082-01-05",
      image: "/portrait.jpg",
    },
    {
      id: 2,
      title: language === "np" ? "विकासको सपना र वास्तविकता" : "Dreams and Reality of Development",
      excerpt: language === "np" ? "कपिलवस्तुको विकासका लागि मेरो दृष्टिकोण र यसलाई कसरी वास्तविकतामा बदल्ने..." : "My vision for Kapilvastu's development and how to turn it into reality...",
      date: "2082-01-10",
      image: "/portrait.jpg",
    },
  ];

  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs;

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
              <Link href="/blogs" className="nav-link active">{text.blogs}</Link>
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

      {/* Blogs Content */}
      <section className="page-content">
        <div className="container">
          <div className="articles-list">
            {displayBlogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="article-list-item">
                <div className="article-list-img">
                  <img src={blog.image || "/portrait.jpg"} alt={blog.title} />
                </div>
                <div className="article-list-content">
                  <div className="article-list-meta">Blog, {blog.date}</div>
                  <h2 className="article-list-title">{blog.title}</h2>
                  <p className="article-list-excerpt">{blog.excerpt}</p>
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
