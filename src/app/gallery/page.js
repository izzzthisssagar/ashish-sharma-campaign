"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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
      developedBy: "Website Designed & Developed by: Illuminati Technology",
      constituency: "Kapilvastu-1",
      location: "Location",
      date: "Date",
      viewDetails: "Click to view details",
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
      developedBy: "वेबसाइट डिजाइन र विकास: Illuminati Technology",
      constituency: "कपिलवस्तु-१",
      location: "स्थान",
      date: "मिति",
      viewDetails: "विवरण हेर्न क्लिक गर्नुहोस्",
    },
  };

  const text = t[language];

  const defaultGallery = [
    {
      id: 1,
      image: "/portrait.jpg",
      title: language === "np" ? "अभियान शुभारम्भ कार्यक्रम" : "Campaign Launch Event",
      titleNp: "अभियान शुभारम्भ कार्यक्रम",
      description: language === "np" ? "कपिलवस्तुमा चुनावी अभियानको आधिकारिक शुभारम्भ" : "Official launch of election campaign in Kapilvastu",
      descriptionNp: "कपिलवस्तुमा चुनावी अभियानको आधिकारिक शुभारम्भ",
      location: language === "np" ? "कपिलवस्तु, नेपाल" : "Kapilvastu, Nepal",
      locationNp: "कपिलवस्तु, नेपाल",
      date: "2082-01-15"
    },
    {
      id: 2,
      image: "/portrait.jpg",
      title: language === "np" ? "जनसभा" : "Public Meeting",
      titleNp: "जनसभा",
      description: language === "np" ? "स्थानीय नागरिकहरूसँग भेटघाट र विचार आदानप्रदान" : "Meeting and interaction with local citizens",
      descriptionNp: "स्थानीय नागरिकहरूसँग भेटघाट र विचार आदानप्रदान",
      location: language === "np" ? "तौलिहवा, कपिलवस्तु" : "Taulihawa, Kapilvastu",
      locationNp: "तौलिहवा, कपिलवस्तु",
      date: "2082-01-18"
    },
    {
      id: 3,
      image: "/portrait.jpg",
      title: language === "np" ? "युवा कार्यक्रम" : "Youth Program",
      titleNp: "युवा कार्यक्रम",
      description: language === "np" ? "युवा रोजगारी र शिक्षाबारे संवाद कार्यक्रम" : "Dialogue program on youth employment and education",
      descriptionNp: "युवा रोजगारी र शिक्षाबारे संवाद कार्यक्रम",
      location: language === "np" ? "कृष्णनगर, कपिलवस्तु" : "Krishnanagar, Kapilvastu",
      locationNp: "कृष्णनगर, कपिलवस्तु",
      date: "2082-01-20"
    },
    {
      id: 4,
      image: "/portrait.jpg",
      title: language === "np" ? "सामुदायिक भ्रमण" : "Community Visit",
      titleNp: "सामुदायिक भ्रमण",
      description: language === "np" ? "विभिन्न टोलहरूमा घरदैलो अभियान" : "Door-to-door campaign in various neighborhoods",
      descriptionNp: "विभिन्न टोलहरूमा घरदैलो अभियान",
      location: language === "np" ? "बुद्धभूमि, कपिलवस्तु" : "Buddhabhumi, Kapilvastu",
      locationNp: "बुद्धभूमि, कपिलवस्तु",
      date: "2082-01-22"
    },
    {
      id: 5,
      image: "/portrait.jpg",
      title: language === "np" ? "मिडिया अन्तर्वार्ता" : "Media Interview",
      titleNp: "मिडिया अन्तर्वार्ता",
      description: language === "np" ? "स्थानीय मिडियासँग विशेष अन्तर्वार्ता" : "Special interview with local media",
      descriptionNp: "स्थानीय मिडियासँग विशेष अन्तर्वार्ता",
      location: language === "np" ? "कपिलवस्तु" : "Kapilvastu",
      locationNp: "कपिलवस्तु",
      date: "2082-01-25"
    },
    {
      id: 6,
      image: "/portrait.jpg",
      title: language === "np" ? "चुनावी र्यालि" : "Election Rally",
      titleNp: "चुनावी र्यालि",
      description: language === "np" ? "समर्थकहरूको विशाल जमघट" : "Massive gathering of supporters",
      descriptionNp: "समर्थकहरूको विशाल जमघट",
      location: language === "np" ? "तौलिहवा, कपिलवस्तु" : "Taulihawa, Kapilvastu",
      locationNp: "तौलिहवा, कपिलवस्तु",
      date: "2082-01-28"
    },
    {
      id: 7,
      image: "/portrait.jpg",
      title: language === "np" ? "पत्रकार सम्मेलन" : "Press Conference",
      titleNp: "पत्रकार सम्मेलन",
      description: language === "np" ? "विकास योजना सार्वजनिक गर्ने कार्यक्रम" : "Development plan announcement event",
      descriptionNp: "विकास योजना सार्वजनिक गर्ने कार्यक्रम",
      location: language === "np" ? "कपिलवस्तु" : "Kapilvastu",
      locationNp: "कपिलवस्तु",
      date: "2082-02-01"
    },
    {
      id: 8,
      image: "/portrait.jpg",
      title: language === "np" ? "सांस्कृतिक कार्यक्रम" : "Cultural Event",
      titleNp: "सांस्कृतिक कार्यक्रम",
      description: language === "np" ? "स्थानीय संस्कृति र परम्पराको सम्मान" : "Honoring local culture and traditions",
      descriptionNp: "स्थानीय संस्कृति र परम्पराको सम्मान",
      location: language === "np" ? "लुम्बिनी क्षेत्र" : "Lumbini Region",
      locationNp: "लुम्बिनी क्षेत्र",
      date: "2082-02-05"
    },
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
          <div className="gallery-grid-enhanced">
            {displayGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item-enhanced"
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image || "/portrait.jpg"} alt={item.title || "Gallery Image"} />
                <div className="gallery-hover-info">
                  <h4 className="gallery-hover-title">
                    {language === "np" ? (item.titleNp || item.title) : item.title}
                  </h4>
                  <p className="gallery-hover-desc">
                    {language === "np" ? (item.descriptionNp || item.description) : item.description}
                  </p>
                  <div className="gallery-hover-meta">
                    <span>📍 {language === "np" ? (item.locationNp || item.location) : item.location}</span>
                    <span>📅 {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.image || "/portrait.jpg"} alt={selectedImage.title} />
            <div className="gallery-lightbox-info">
              <h3>{language === "np" ? (selectedImage.titleNp || selectedImage.title) : selectedImage.title}</h3>
              <p>{language === "np" ? (selectedImage.descriptionNp || selectedImage.description) : selectedImage.description}</p>
              <div className="gallery-lightbox-meta">
                <span>📍 {text.location}: {language === "np" ? (selectedImage.locationNp || selectedImage.location) : selectedImage.location}</span>
                <span>📅 {text.date}: {selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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

      <style jsx>{`
        .gallery-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .gallery-item-enhanced {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          background: #1a1a1a;
        }

        .gallery-item-enhanced img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-enhanced:hover img {
          transform: scale(1.05);
        }

        .gallery-hover-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item-enhanced:hover .gallery-hover-info {
          transform: translateY(0);
        }

        .gallery-hover-title {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .gallery-hover-desc {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .gallery-hover-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          color: #0095f6;
        }

        .gallery-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .gallery-lightbox-content {
          max-width: 900px;
          width: 100%;
          background: #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .gallery-lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0,0,0,0.7);
          color: #fff;
          border: none;
          font-size: 20px;
          cursor: pointer;
          z-index: 10;
          transition: background 0.3s;
        }

        .gallery-lightbox-close:hover {
          background: #0095f6;
        }

        .gallery-lightbox-content img {
          width: 100%;
          max-height: 60vh;
          object-fit: cover;
        }

        .gallery-lightbox-info {
          padding: 24px;
          color: #fff;
        }

        .gallery-lightbox-info h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #0095f6;
        }

        .gallery-lightbox-info p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          margin-bottom: 16px;
        }

        .gallery-lightbox-meta {
          display: flex;
          gap: 24px;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        @media (max-width: 768px) {
          .gallery-grid-enhanced {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 16px;
          }

          .gallery-hover-info {
            transform: translateY(0);
            background: linear-gradient(transparent 0%, rgba(0,0,0,0.85) 50%);
          }

          .gallery-lightbox-meta {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
