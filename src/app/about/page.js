"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
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
      heroTitle: "Ashish Sharma",
      heroSubtitle: "Independent Candidate for House of Representatives",
      aboutP1: "Ashish Sharma is an Independent Candidate for the House of Representatives of Nepal from Kapilvastu-1 constituency for Election 2082. With over two decades of experience in corporate leadership and business management, he brings a vision of development, transparency, and progress to public service.",
      aboutP2: "As the Managing Director of Ashviana Corporation and former Senior General Manager at Chaudhary Group (2003-2016), he has demonstrated exceptional leadership in building successful organizations and creating employment opportunities across Nepal.",
      aboutP3: "Currently serving as Board Director at Nabil Bank, Ashish brings financial expertise and governance experience to his political vision. His commitment to transparent governance and sustainable development has earned him respect in both business and civic communities.",
      aboutP4: "He is dedicated to transforming Kapilvastu into a model constituency through infrastructure development, quality education, accessible healthcare, and local employment generation. His vision encompasses modern farming support, women empowerment programs, youth development initiatives, and tourism promotion.",
      prioritiesTitle: "Priorities",
      priority1: "Infrastructure Development - Quality roads, bridges and modern facilities",
      priority2: "Quality Education - Schools, scholarships and skill development",
      priority3: "Healthcare Access - Hospitals and health posts in every ward",
      priority4: "Employment Generation - Local jobs and entrepreneurship support",
      priority5: "Agricultural Modernization - Irrigation, technology and market access",
      priority6: "Women Empowerment - Programs for economic independence",
      priority7: "Youth Development - Sports facilities, training and opportunities",
      priority8: "Tourism Promotion - Developing Lumbini region tourism",
      priority9: "Clean Drinking Water - Safe water access for all households",
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
      heroTitle: "आशिष शर्मा",
      heroSubtitle: "प्रतिनिधिसभाका लागि स्वतन्त्र उम्मेदवार",
      aboutP1: "आशिष शर्मा कपिलवस्तु-१ निर्वाचन क्षेत्रबाट निर्वाचन २०८२ का लागि नेपालको प्रतिनिधिसभाका स्वतन्त्र उम्मेदवार हुन्। कर्पोरेट नेतृत्व र व्यवसाय व्यवस्थापनमा दुई दशकभन्दा बढी अनुभवका साथ, उनले सार्वजनिक सेवामा विकास, पारदर्शिता र प्रगतिको दृष्टिकोण ल्याउँछन्।",
      aboutP2: "अश्विनिया कर्पोरेशनका प्रबन्ध निर्देशक र चौधरी ग्रुपका पूर्व वरिष्ठ महाप्रबन्धक (२००३-२०१६) को रूपमा, उनले नेपालभर सफल संस्थाहरू निर्माण गर्न र रोजगारीका अवसरहरू सिर्जना गर्न असाधारण नेतृत्व प्रदर्शन गरेका छन्।",
      aboutP3: "हाल नबिल बैंकको बोर्ड निर्देशकको रूपमा सेवारत, आशिषले आफ्नो राजनीतिक दृष्टिकोणमा वित्तीय विशेषज्ञता र शासन अनुभव ल्याउँछन्। पारदर्शी शासन र दिगो विकासप्रतिको उनको प्रतिबद्धताले उनलाई व्यापार र नागरिक दुवै समुदायमा सम्मान दिलाएको छ।",
      aboutP4: "उनी पूर्वाधार विकास, गुणस्तरीय शिक्षा, पहुँचयोग्य स्वास्थ्य सेवा र स्थानीय रोजगारी सिर्जना मार्फत कपिलवस्तुलाई एक आदर्श निर्वाचन क्षेत्रमा रूपान्तरण गर्न समर्पित छन्।",
      prioritiesTitle: "प्राथमिकताहरू",
      priority1: "पूर्वाधार विकास - गुणस्तरीय सडक, पुल र आधुनिक सुविधा",
      priority2: "गुणस्तरीय शिक्षा - विद्यालय, छात्रवृत्ति र सीप विकास",
      priority3: "स्वास्थ्य पहुँच - प्रत्येक वडामा अस्पताल र स्वास्थ्य चौकी",
      priority4: "रोजगारी सिर्जना - स्थानीय रोजगारी र उद्यमशीलता समर्थन",
      priority5: "कृषि आधुनिकीकरण - सिँचाइ, प्रविधि र बजार पहुँच",
      priority6: "महिला सशक्तीकरण - आर्थिक स्वतन्त्रताका लागि कार्यक्रमहरू",
      priority7: "युवा विकास - खेलकुद सुविधा, तालिम र अवसरहरू",
      priority8: "पर्यटन प्रवर्द्धन - लुम्बिनी क्षेत्रको पर्यटन विकास",
      priority9: "सफा खानेपानी - सबै घरधुरीमा सुरक्षित पानी पहुँच",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Genesis Web Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const priorities = [
    text.priority1,
    text.priority2,
    text.priority3,
    text.priority4,
    text.priority5,
    text.priority6,
    text.priority7,
    text.priority8,
    text.priority9,
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
              <Link href="/about" className="nav-link active">{text.about}</Link>

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

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div>
              <img src="/portrait.jpg" alt="Ashish Sharma" className="about-hero-img" />
            </div>

            <div className="about-hero-content">
              <h1>{text.heroTitle}</h1>
              <p className="subtitle">{text.heroSubtitle}</p>
              <p>{text.aboutP1}</p>
              <p>{text.aboutP2}</p>
              <p>{text.aboutP3}</p>
              <p>{text.aboutP4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="priorities-section">
        <div className="container">
          <h2>{text.prioritiesTitle}</h2>
          <ul className="priorities-list">
            {priorities.map((priority, index) => (
              <li key={index}>{priority}</li>
            ))}
          </ul>
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
