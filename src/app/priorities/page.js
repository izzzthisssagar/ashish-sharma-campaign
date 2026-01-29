"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrioritiesPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

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
      pageTitle: "Our Priorities",
      pageSubtitle: "Key focus areas for the development of Kapilvastu-1",
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
      pageTitle: "हाम्रा प्राथमिकताहरू",
      pageSubtitle: "कपिलवस्तु-१ को विकासका लागि मुख्य केन्द्रबिन्दु क्षेत्रहरू",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Genesis Web Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const priorities = language === "en" ? [
    {
      title: "Infrastructure Development",
      description: "Building quality roads, bridges, and modern public facilities to connect communities and enable economic growth.",
      icon: "🛣️"
    },
    {
      title: "Quality Education",
      description: "Establishing schools, providing scholarships, and developing skills training programs for all age groups.",
      icon: "📚"
    },
    {
      title: "Healthcare Access",
      description: "Setting up hospitals and health posts in every ward to ensure accessible healthcare for all residents.",
      icon: "🏥"
    },
    {
      title: "Employment Generation",
      description: "Creating local jobs through entrepreneurship support, skill development, and attracting investments.",
      icon: "💼"
    },
    {
      title: "Agricultural Modernization",
      description: "Providing irrigation facilities, modern technology, and market access for farmers.",
      icon: "🌾"
    },
    {
      title: "Women Empowerment",
      description: "Programs for economic independence, skill training, and leadership development for women.",
      icon: "👩"
    },
    {
      title: "Youth Development",
      description: "Sports facilities, vocational training, and entrepreneurship opportunities for young people.",
      icon: "⚽"
    },
    {
      title: "Tourism Promotion",
      description: "Developing the Lumbini region's tourism potential and promoting local heritage sites.",
      icon: "🏛️"
    },
    {
      title: "Clean Drinking Water",
      description: "Ensuring safe and clean drinking water access for all households in the constituency.",
      icon: "💧"
    },
  ] : [
    {
      title: "पूर्वाधार विकास",
      description: "समुदायहरूलाई जोड्न र आर्थिक वृद्धि सक्षम पार्न गुणस्तरीय सडक, पुल र आधुनिक सार्वजनिक सुविधाहरू निर्माण।",
      icon: "🛣️"
    },
    {
      title: "गुणस्तरीय शिक्षा",
      description: "विद्यालयहरू स्थापना, छात्रवृत्ति प्रदान, र सबै उमेर समूहका लागि सीप तालिम कार्यक्रमहरू विकास।",
      icon: "📚"
    },
    {
      title: "स्वास्थ्य पहुँच",
      description: "सबै बासिन्दाहरूका लागि पहुँचयोग्य स्वास्थ्य सेवा सुनिश्चित गर्न प्रत्येक वडामा अस्पताल र स्वास्थ्य चौकी स्थापना।",
      icon: "🏥"
    },
    {
      title: "रोजगारी सिर्जना",
      description: "उद्यमशीलता समर्थन, सीप विकास र लगानी आकर्षित मार्फत स्थानीय रोजगारी सिर्जना।",
      icon: "💼"
    },
    {
      title: "कृषि आधुनिकीकरण",
      description: "किसानहरूका लागि सिँचाइ सुविधा, आधुनिक प्रविधि र बजार पहुँच प्रदान।",
      icon: "🌾"
    },
    {
      title: "महिला सशक्तीकरण",
      description: "महिलाहरूका लागि आर्थिक स्वतन्त्रता, सीप तालिम र नेतृत्व विकासका कार्यक्रमहरू।",
      icon: "👩"
    },
    {
      title: "युवा विकास",
      description: "युवाहरूका लागि खेलकुद सुविधा, व्यावसायिक तालिम र उद्यमशीलता अवसरहरू।",
      icon: "⚽"
    },
    {
      title: "पर्यटन प्रवर्द्धन",
      description: "लुम्बिनी क्षेत्रको पर्यटन क्षमता विकास र स्थानीय सम्पदा स्थलहरूको प्रवर्द्धन।",
      icon: "🏛️"
    },
    {
      title: "सफा खानेपानी",
      description: "निर्वाचन क्षेत्रका सबै घरधुरीमा सुरक्षित र सफा खानेपानी पहुँच सुनिश्चित गर्ने।",
      icon: "💧"
    },
  ];

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
              <Link href="/priorities" className="nav-link active">{text.priorities}</Link>
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
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>{text.pageSubtitle}</p>
        </div>
      </section>

      {/* Priorities Content */}
      <section className="page-content">
        <div className="container">
          <div className="priorities-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {priorities.map((priority, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{priority.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#0095f6' }}>{priority.title}</h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>{priority.description}</p>
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
