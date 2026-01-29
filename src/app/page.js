"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Load content from localStorage
    const loadContent = () => {
      try {
        const storedNews = localStorage.getItem('cms_news');
        const storedVideos = localStorage.getItem('cms_videos');
        const storedArticles = localStorage.getItem('cms_articles');

        if (storedNews) setNews(JSON.parse(storedNews).slice(0, 3));
        if (storedVideos) setVideos(JSON.parse(storedVideos).slice(0, 2));
        if (storedArticles) setArticles(JSON.parse(storedArticles).slice(0, 3));
      } catch (e) {
        console.error('Error loading content:', e);
      }
    };
    loadContent();
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
      heroTitle: "Ashish Sharma",
      heroSubtitle: "Independent Candidate for House of Representatives",
      heroDescription: "Ashish Sharma is an Independent Candidate for the House of Representatives of Nepal from Kapilvastu-1 constituency for Election 2082. With over two decades of experience in corporate leadership and business management, he brings a vision of development, transparency, and progress to public service. As Managing Director of Ashviana Corporation and former Senior General Manager at Chaudhary Group (2003-2016), he has demonstrated exceptional leadership in building successful organizations and creating employment opportunities. He is committed to transforming Kapilvastu into a model constituency through infrastructure development, quality education, accessible healthcare, and local employment generation.",
      electionSymbol: "Election Symbol",
      jeep: "Jeep (जीप)",
      inNews: "in news",
      inParliament: "in parliament",
      onInterview: "on interview",
      sArticles: "'s Articles",
      getInvolved: "Get Involved with the Campaign",
      getInvolvedDesc: "We are looking for dedicated individuals who share our vision for a better Kapilvastu.",
      contactBtn: "Contact Us",
      applyNow: "Apply Now",
      followFb: "Follow on Facebook",
      followX: "Follow on X",
      quickLinks: "Quick Links",
      inNewsLinks: "Ashish in news",
      inInterviewLinks: "Ashish in interview",
      inArticlesLinks: "Ashish's articles",
      copyright: "© 2082 Ashish Sharma. All rights reserved.",
      developedBy: "Website Designed & Developed by: Illuminati Technology",
      constituency: "Kapilvastu-1",
      readMore: "Read more...",
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
      heroDescription: "आशिष शर्मा कपिलवस्तु-१ निर्वाचन क्षेत्रबाट निर्वाचन २०८२ का लागि नेपालको प्रतिनिधिसभाका स्वतन्त्र उम्मेदवार हुन्। कर्पोरेट नेतृत्व र व्यवसाय व्यवस्थापनमा दुई दशकभन्दा बढी अनुभवका साथ, उनले सार्वजनिक सेवामा विकास, पारदर्शिता र प्रगतिको दृष्टिकोण ल्याउँछन्। अश्विनिया कर्पोरेशनका प्रबन्ध निर्देशक र चौधरी ग्रुपका पूर्व वरिष्ठ महाप्रबन्धक (२००३-२०१६) को रूपमा, उनले सफल संस्थाहरू निर्माण गर्न र रोजगारीका अवसरहरू सिर्जना गर्न असाधारण नेतृत्व प्रदर्शन गरेका छन्।",
      electionSymbol: "चुनाव चिन्ह",
      jeep: "जीप",
      inNews: "समाचारमा",
      inParliament: "संसदमा",
      onInterview: "अन्तर्वार्तामा",
      sArticles: "का लेखहरू",
      getInvolved: "अभियानमा सामेल हुनुहोस्",
      getInvolvedDesc: "हामी उत्कृष्ट कपिलवस्तुको लागि हाम्रो दृष्टिकोण साझा गर्ने समर्पित व्यक्तिहरूको खोजीमा छौं।",
      contactBtn: "सम्पर्क गर्नुहोस्",
      applyNow: "आवेदन दिनुहोस्",
      followFb: "फेसबुकमा फलो गर्नुहोस्",
      followX: "X मा फलो गर्नुहोस्",
      quickLinks: "द्रुत लिङ्कहरू",
      inNewsLinks: "आशिष समाचारमा",
      inInterviewLinks: "आशिष अन्तर्वार्तामा",
      inArticlesLinks: "आशिषका लेखहरू",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Illuminati Technology",
      constituency: "कपिलवस्तु-१",
      readMore: "थप पढ्नुहोस्...",
    },
  };

  const text = t[language];

  // Default content if localStorage is empty
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

  const defaultVideos = [
    {
      id: 1,
      title: language === "np" ? "आशिष शर्मासँग विशेष अन्तर्वार्ता" : "Special Interview with Ashish Sharma",
      source: "News24 Nepal",
      date: "2082-01-15",
      thumbnail: "/portrait.jpg",
    },
    {
      id: 2,
      title: language === "np" ? "कपिलवस्तु विकास योजना प्रस्तुति" : "Kapilvastu Development Plan Presentation",
      source: "Nepal Television",
      date: "2082-01-20",
      thumbnail: "/portrait.jpg",
    },
  ];

  const defaultArticles = [
    {
      id: 1,
      title: language === "np" ? "कपिलवस्तुको विकासका लागि नयाँ दृष्टिकोण" : "A New Vision for Kapilvastu Development",
      excerpt: language === "np" ? "कपिलवस्तुलाई विकासको मुख्यधारमा ल्याउन आवश्यक कदमहरू..." : "Steps needed to bring Kapilvastu into the mainstream of development...",
      date: "2082-01-10",
      source: "Kantipur",
      image: "/portrait.jpg",
    },
    {
      id: 2,
      title: language === "np" ? "युवा रोजगारी र स्थानीय उद्यमशीलता" : "Youth Employment and Local Entrepreneurship",
      excerpt: language === "np" ? "स्थानीय स्तरमा रोजगारी सिर्जनाका उपायहरू..." : "Measures for employment creation at the local level...",
      date: "2082-01-15",
      source: "Online Khabar",
      image: "/portrait.jpg",
    },
    {
      id: 3,
      title: language === "np" ? "शिक्षामा लगानी: भविष्यको आधार" : "Investment in Education: Foundation of the Future",
      excerpt: language === "np" ? "गुणस्तरीय शिक्षाले समाजको रूपान्तरण गर्छ..." : "Quality education transforms society...",
      date: "2082-01-20",
      source: "Nagarik",
      image: "/portrait.jpg",
    },
  ];

  const displayNews = news.length > 0 ? news : defaultNews;
  const displayVideos = videos.length > 0 ? videos : defaultVideos;
  const displayArticles = articles.length > 0 ? articles : defaultArticles;

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
              <Link href="/" className="nav-link active">{text.home}</Link>
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-image">
              <img src="/portrait.jpg" alt="Ashish Sharma" className="hero-img" />
            </div>

            <div className="hero-content">
              <h1 className="hero-title">{text.heroTitle}</h1>
              <p className="hero-subtitle">{text.heroSubtitle}</p>
              <p className="hero-description">{text.heroDescription}</p>

              <div className="hero-symbol">
                <img src="/jeep-symbol.jpg" alt="Jeep Symbol" className="symbol-img" />
                <div>
                  <div className="symbol-label">{text.electionSymbol}</div>
                  <div className="symbol-name">{text.jeep}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ashish in News Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="highlight">Ashish</span>
            <h2>{text.inNews}</h2>
          </div>

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

      {/* Ashish on Interview Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <span className="highlight">Ashish</span>
            <h2>{text.onInterview}</h2>
          </div>

          <div className="video-grid">
            {displayVideos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail || "/portrait.jpg"} alt={video.title} />
                  <div className="video-play">▶</div>
                </div>
                <div className="video-info">
                  <div className="video-meta">{video.source || "Video"}, {video.date}</div>
                  <h4 className="video-title">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ashish's Articles Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="highlight">Ashish</span>
            <h2>{text.sArticles}</h2>
          </div>

          <div className="articles-grid">
            {displayArticles.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id} className="article-card">
                <div className="article-card-img">
                  <img src={article.image || "/portrait.jpg"} alt={article.title} />
                </div>
                <div className="article-card-body">
                  <div className="article-card-meta">{article.source || "Article"}, {article.date}</div>
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="container">
          <h2>{text.getInvolved}</h2>
          <p>{text.getInvolvedDesc}</p>
          <div className="get-involved-buttons">
            <Link href="/contact" className="btn btn-primary">{text.contactBtn}</Link>
            <Link href="/contact" className="btn btn-outline">{text.applyNow}</Link>
          </div>
        </div>
      </section>

      {/* Social Feeds Section */}
      <section className="social-feeds">
        <div className="container">
          <div className="social-feeds-grid">
            {/* Facebook Feed */}
            <div className="social-feed-box">
              <div className="social-feed-header">
                <img src="/portrait.jpg" alt="Ashish Sharma" />
                <div>
                  <h4>Ashish Sharma</h4>
                  <span>{text.followFb}</span>
                </div>
              </div>
              <div className="social-feed-content">
                <p style={{ textAlign: 'center', color: '#888', padding: '40px 20px' }}>
                  <a href="https://www.facebook.com/share/1Js87C4Ln9/" target="_blank" rel="noopener noreferrer" style={{ color: '#0095f6' }}>
                    {text.followFb}
                  </a>
                </p>
              </div>
            </div>

            {/* Twitter/X Feed */}
            <div className="social-feed-box">
              <div className="social-feed-header">
                <img src="/portrait.jpg" alt="Ashish Sharma" />
                <div>
                  <h4>@ashishsharmainf</h4>
                  <span>{text.followX}</span>
                </div>
              </div>
              <div className="social-feed-content">
                <p style={{ textAlign: 'center', color: '#888', padding: '40px 20px' }}>
                  <a href="https://x.com/ashishsharmainf" target="_blank" rel="noopener noreferrer" style={{ color: '#0095f6' }}>
                    {text.followX}
                  </a>
                </p>
              </div>
            </div>
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
              <h4 className="footer-title">{text.inNewsLinks}</h4>
              <ul className="footer-links">
                {displayNews.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <Link href={`/news/${item.id}`}>{item.title.substring(0, 40)}...</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-title">{text.onInterview}</h4>
              <ul className="footer-links">
                {displayVideos.slice(0, 3).map((video) => (
                  <li key={video.id}>
                    <Link href="/videos">{video.title.substring(0, 40)}...</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-title">{text.inArticlesLinks}</h4>
              <ul className="footer-links">
                {displayArticles.slice(0, 3).map((article) => (
                  <li key={article.id}>
                    <Link href={`/articles/${article.id}`}>{article.title.substring(0, 40)}...</Link>
                  </li>
                ))}
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
