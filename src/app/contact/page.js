"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    location: '',
    message: ''
  });

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
      pageTitle: "How can we help you?",
      pageSubtitle: "Get in touch with us. We'd love to hear from you.",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Kapilvastu, Lumbini Province, Nepal",
      socialMedia: "Social Media",
      formTitle: "Send us a message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone",
      professionPlaceholder: "Your Profession",
      locationPlaceholder: "Your Location",
      messagePlaceholder: "Your Message",
      submitBtn: "Send Message",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      copyright: "© 2082 Ashish Sharma. All rights reserved.",
      developedBy: "Website Designed & Developed by: Illuminati Technology",
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
      pageTitle: "हामी कसरी मद्दत गर्न सक्छौं?",
      pageSubtitle: "हामीलाई सम्पर्क गर्नुहोस्। तपाईंबाट सुन्न पाउँदा खुशी लाग्छ।",
      contactInfo: "सम्पर्क जानकारी",
      phone: "फोन",
      email: "इमेल",
      location: "ठेगाना",
      locationValue: "कपिलवस्तु, लुम्बिनी प्रदेश, नेपाल",
      socialMedia: "सामाजिक सञ्जाल",
      formTitle: "हामीलाई सन्देश पठाउनुहोस्",
      namePlaceholder: "तपाईंको नाम",
      emailPlaceholder: "तपाईंको इमेल",
      phonePlaceholder: "तपाईंको फोन",
      professionPlaceholder: "तपाईंको पेशा",
      locationPlaceholder: "तपाईंको ठेगाना",
      messagePlaceholder: "तपाईंको सन्देश",
      submitBtn: "सन्देश पठाउनुहोस्",
      quickLinks: "द्रुत लिङ्कहरू",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०८२ आशिष शर्मा। सर्वाधिकार सुरक्षित।",
      developedBy: "वेबसाइट डिजाइन र विकास: Illuminati Technology",
      constituency: "कपिलवस्तु-१",
    },
  };

  const text = t[language];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create message object with timestamp and unique ID
      const newMessage = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'unread'
      };

      // Get existing messages from localStorage
      const existingMessages = JSON.parse(localStorage.getItem('cms_contact_messages') || '[]');

      // Add new message to the beginning of the array
      existingMessages.unshift(newMessage);

      // Save back to localStorage
      localStorage.setItem('cms_contact_messages', JSON.stringify(existingMessages));

      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', profession: '', location: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error saving message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Link href="/contact" className="nav-link active">{text.contactUs}</Link>

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

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>{text.pageTitle}</h1>
          <p>{text.pageSubtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>{text.contactInfo}</h2>

              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-content">
                  <h4>{text.phone}</h4>
                  <p>+977 9800000000</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div className="contact-item-content">
                  <h4>{text.email}</h4>
                  <p>contact@ashishsharma.info</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <h4>{text.location}</h4>
                  <p>{text.locationValue}</p>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h4 style={{ marginBottom: '15px' }}>{text.socialMedia}</h4>
                <div className="footer-social">
                  <a href="https://www.facebook.com/share/1Js87C4Ln9/" target="_blank" rel="noopener noreferrer">f</a>
                  <a href="https://x.com/ashishsharmainf" target="_blank" rel="noopener noreferrer">𝕏</a>
                  <a href="https://www.instagram.com/ashishsharma.info/" target="_blank" rel="noopener noreferrer">ig</a>
                  <a href="https://www.linkedin.com/in/ashishsharmainfo/" target="_blank" rel="noopener noreferrer">in</a>
                  <a href="https://www.tiktok.com/@ashishsharma.info" target="_blank" rel="noopener noreferrer">tt</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>{text.formTitle}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={text.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder={text.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder={text.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={text.professionPlaceholder}
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={text.locationPlaceholder}
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder={text.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div style={{
                    padding: '12px 16px',
                    marginBottom: '20px',
                    backgroundColor: '#d4edda',
                    border: '1px solid #c3e6cb',
                    borderRadius: '8px',
                    color: '#155724',
                    fontSize: '14px'
                  }}>
                    {language === 'en' ? '✓ Message sent successfully! We will get back to you soon.' : '✓ सन्देश सफलतापूर्वक पठाइयो! हामी चाँडै तपाईंलाई सम्पर्क गर्नेछौं।'}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{
                    padding: '12px 16px',
                    marginBottom: '20px',
                    backgroundColor: '#f8d7da',
                    border: '1px solid #f5c6cb',
                    borderRadius: '8px',
                    color: '#721c24',
                    fontSize: '14px'
                  }}>
                    {language === 'en' ? '✗ Failed to send message. Please try again.' : '✗ सन्देश पठाउन असफल। कृपया पुन: प्रयास गर्नुहोस्।'}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? (language === 'en' ? 'Sending...' : 'पठाउँदै...')
                    : text.submitBtn}
                </button>
              </form>
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
