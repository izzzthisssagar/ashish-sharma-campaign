"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

// Authentication credentials (in production, use proper auth system)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "P@ssw0rd@135"
};

export default function AdminDashboard() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // CMS state
  const [activeTab, setActiveTab] = useState("dashboard");
  const [contentType, setContentType] = useState("news");
  const [content, setContent] = useState({
    news: [],
    articles: [],
    blogs: [],
    videos: [],
    gallery: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [langTab, setLangTab] = useState("en");
  const [formData, setFormData] = useState({
    title: "",
    titleNp: "",
    slug: "",
    excerpt: "",
    excerptNp: "",
    body: "",
    bodyNp: "",
    source: "",
    image: "",
    videoUrl: "",
    date: new Date().toISOString().split("T")[0],
    tags: [],
    featured: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Check authentication on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    const authTime = sessionStorage.getItem("adminAuthTime");

    // Session expires after 2 hours
    if (authStatus === "true" && authTime) {
      const elapsed = Date.now() - parseInt(authTime);
      if (elapsed < 2 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem("adminAuthenticated");
        sessionStorage.removeItem("adminAuthTime");
      }
    }
    setIsLoading(false);
  }, []);

  // Load CMS content
  useEffect(() => {
    if (!isAuthenticated) return;

    const savedContent = localStorage.getItem("cmsContent");
    if (savedContent) {
      const parsed = JSON.parse(savedContent);
      setContent(parsed);
    } else {
      const loadedContent = {
        news: JSON.parse(localStorage.getItem("cms_news") || "[]"),
        articles: JSON.parse(localStorage.getItem("cms_articles") || "[]"),
        blogs: JSON.parse(localStorage.getItem("cms_blogs") || "[]"),
        videos: JSON.parse(localStorage.getItem("cms_videos") || "[]"),
        gallery: JSON.parse(localStorage.getItem("cms_gallery") || "[]"),
      };
      setContent(loadedContent);
    }
  }, [isAuthenticated]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    if (
      loginData.username === ADMIN_CREDENTIALS.username &&
      loginData.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      sessionStorage.setItem("adminAuthTime", Date.now().toString());
    } else {
      setLoginError("Invalid username or password");
    }
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setIsAuthenticated(false);
      sessionStorage.removeItem("adminAuthenticated");
      sessionStorage.removeItem("adminAuthTime");
      setLoginData({ username: "", password: "" });
    }
  };

  const saveContent = (newContent) => {
    setContent(newContent);
    localStorage.setItem("cmsContent", JSON.stringify(newContent));
    if (newContent.news) localStorage.setItem("cms_news", JSON.stringify(newContent.news));
    if (newContent.articles) localStorage.setItem("cms_articles", JSON.stringify(newContent.articles));
    if (newContent.blogs) localStorage.setItem("cms_blogs", JSON.stringify(newContent.blogs));
    if (newContent.videos) localStorage.setItem("cms_videos", JSON.stringify(newContent.videos));
    if (newContent.gallery) localStorage.setItem("cms_gallery", JSON.stringify(newContent.gallery));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean);
    setFormData((prev) => ({ ...prev, tags }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
      slug: formData.slug || generateSlug(formData.title),
      id: editingItem?.id || Date.now().toString(),
      createdAt: editingItem?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedContent = { ...content };

    if (isEditing && editingItem) {
      const index = updatedContent[contentType].findIndex((item) => item.id === editingItem.id);
      if (index !== -1) {
        updatedContent[contentType][index] = newItem;
      }
    } else {
      updatedContent[contentType] = [newItem, ...updatedContent[contentType]];
    }

    saveContent(updatedContent);
    resetForm();
    setActiveTab("content");
  };

  const handleEdit = (item, type) => {
    setContentType(type);
    setEditingItem(item);
    setIsEditing(true);
    setFormData({
      title: item.title || "",
      titleNp: item.titleNp || "",
      slug: item.slug || "",
      excerpt: item.excerpt || "",
      excerptNp: item.excerptNp || "",
      body: item.body || "",
      bodyNp: item.bodyNp || "",
      source: item.source || "",
      image: item.image || "",
      videoUrl: item.videoUrl || "",
      date: item.date || new Date().toISOString().split("T")[0],
      tags: item.tags || [],
      featured: item.featured || false,
    });
    setActiveTab("create");
  };

  const handleDelete = (id, type) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedContent = { ...content };
      updatedContent[type] = updatedContent[type].filter((item) => item.id !== id);
      saveContent(updatedContent);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingItem(null);
    setFormData({
      title: "",
      titleNp: "",
      slug: "",
      excerpt: "",
      excerptNp: "",
      body: "",
      bodyNp: "",
      source: "",
      image: "",
      videoUrl: "",
      date: new Date().toISOString().split("T")[0],
      tags: [],
      featured: false,
    });
    setShowPreview(false);
    setLangTab("en");
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", "cms-content.json");
    linkElement.click();
  };

  const importContent = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedContent = JSON.parse(event.target.result);
          saveContent({ ...content, ...importedContent });
          alert("Content imported successfully!");
        } catch (err) {
          alert("Error importing file. Please check the format.");
        }
      };
      reader.readAsText(file);
    }
  };

  const getTotalItems = () => {
    return Object.values(content).reduce((sum, arr) => sum + (arr?.length || 0), 0);
  };

  const getFilteredItems = (type) => {
    const items = content[type] || [];
    if (!searchTerm) return items;
    return items.filter(
      (item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.titleNp?.includes(searchTerm)
    );
  };

  const contentTypes = [
    { id: "news", label: "News", labelNp: "समाचार", icon: "📰", color: "#3b82f6" },
    { id: "articles", label: "Articles", labelNp: "लेख", icon: "📝", color: "#10b981" },
    { id: "blogs", label: "Blogs", labelNp: "ब्लग", icon: "✍️", color: "#f59e0b" },
    { id: "videos", label: "Videos", labelNp: "भिडियो", icon: "🎬", color: "#ef4444" },
    { id: "gallery", label: "Gallery", labelNp: "ग्यालरी", icon: "🖼️", color: "#8b5cf6" },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "create", label: isEditing ? "Edit Content" : "Create New", icon: isEditing ? "✏️" : "➕" },
    { id: "content", label: "All Content", icon: "📋" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginLoader}>Loading...</div>
        </div>
      </div>
    );
  }

  // Login page
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <div className={styles.loginLogo}>🏛️</div>
            <h1 className={styles.loginTitle}>Admin Login</h1>
            <p className={styles.loginSubtitle}>Ashish Sharma Campaign CMS</p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            {loginError && (
              <div className={styles.loginError}>
                <span>⚠️</span> {loginError}
              </div>
            )}

            <div className={styles.loginFormGroup}>
              <label className={styles.loginLabel}>
                <span className={styles.loginLabelIcon}>👤</span>
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className={styles.loginInput}
                placeholder="Enter username"
                required
                autoComplete="username"
              />
            </div>

            <div className={styles.loginFormGroup}>
              <label className={styles.loginLabel}>
                <span className={styles.loginLabelIcon}>🔒</span>
                Password
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className={styles.loginInput}
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.loginButton}>
              🔐 Login to Dashboard
            </button>
          </form>

          <div className={styles.loginFooter}>
            <p>🚙 Election Symbol: Jeep / जीप</p>
            <p>📍 Kapilvastu-1, Nepal</p>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard (authenticated)
  return (
    <div className={styles.admin}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <div className={styles.sidebarLogoIcon}>🏛️</div>
            <div className={styles.sidebarLogoText}>
              <h1>CMS Dashboard</h1>
              <span>Ashish Sharma Campaign</span>
            </div>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeTab === item.id ? styles.navItemActive : ""}`}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "create" && !isEditing) resetForm();
              }}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.viewSiteBtn}>
            🌐 <span>View Website</span>
          </Link>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            🚪 <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <h2 className={styles.topBarTitle}>
            Welcome, <span>Admin</span>
          </h2>
          <div className={styles.topBarActions}>
            <button className={`${styles.actionBtn} ${styles.actionBtnSecondary}`} onClick={exportContent}>
              📥 Export
            </button>
            <button
              className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
              onClick={() => {
                resetForm();
                setActiveTab("create");
              }}
            >
              ➕ New Content
            </button>
          </div>
        </div>

        {/* Dashboard View */}
        {activeTab === "dashboard" && (
          <>
            {/* Stats */}
            <div className={styles.statsGrid}>
              {contentTypes.map((type) => (
                <div
                  key={type.id}
                  className={`${styles.statCard} ${contentType === type.id ? styles.statCardActive : ""}`}
                  onClick={() => {
                    setContentType(type.id);
                    setActiveTab("content");
                  }}
                >
                  <div className={styles.statIcon} style={{ background: `${type.color}20` }}>
                    {type.icon}
                  </div>
                  <div className={styles.statValue}>{content[type.id]?.length || 0}</div>
                  <div className={styles.statLabel}>
                    {type.label} / {type.labelNp}
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Grid */}
            <div className={styles.dashboardGrid}>
              {/* Recent Items */}
              <div className={styles.dashCard}>
                <div className={styles.dashCardHeader}>
                  <h3 className={styles.dashCardTitle}>📋 Recent Items</h3>
                  <button
                    className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                    style={{ padding: "8px 14px", fontSize: "12px" }}
                    onClick={() => setActiveTab("content")}
                  >
                    View All
                  </button>
                </div>
                <div className={styles.recentList}>
                  {Object.entries(content)
                    .flatMap(([type, items]) =>
                      (items || []).map((item) => ({ ...item, type }))
                    )
                    .sort((a, b) => new Date(b.updatedAt || b.date) - new Date(a.updatedAt || a.date))
                    .slice(0, 5)
                    .map((item) => (
                      <div key={item.id} className={styles.recentItem}>
                        <div className={styles.recentItemImage}>
                          {item.image ? (
                            <img src={item.image} alt={item.title} />
                          ) : (
                            contentTypes.find((t) => t.id === item.type)?.icon || "📄"
                          )}
                        </div>
                        <div className={styles.recentItemInfo}>
                          <div className={styles.recentItemTitle}>{item.title}</div>
                          <div className={styles.recentItemMeta}>
                            {item.type} • {item.date}
                          </div>
                        </div>
                        <div className={styles.recentItemActions}>
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnEdit}`}
                            onClick={() => handleEdit(item, item.type)}
                          >
                            ✏️
                          </button>
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnDelete}`}
                            onClick={() => handleDelete(item.id, item.type)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  {getTotalItems() === 0 && (
                    <div className={styles.emptyState} style={{ padding: "30px" }}>
                      <div className={styles.emptyIcon}>📭</div>
                      <p>No content yet. Create your first post!</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className={styles.dashCard}>
                <div className={styles.dashCardHeader}>
                  <h3 className={styles.dashCardTitle}>⚡ Quick Actions</h3>
                </div>
                <div className={styles.quickActions}>
                  {contentTypes.map((type) => (
                    <button
                      key={type.id}
                      className={styles.quickAction}
                      onClick={() => {
                        setContentType(type.id);
                        resetForm();
                        setActiveTab("create");
                      }}
                    >
                      <div
                        className={styles.quickActionIcon}
                        style={{ background: `${type.color}20` }}
                      >
                        {type.icon}
                      </div>
                      <span>
                        Add New {type.label} / {type.labelNp}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Content List View */}
        {activeTab === "content" && (
          <div className={styles.contentSection}>
            <div className={styles.contentHeader}>
              <div className={styles.contentTabs}>
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`${styles.contentTab} ${contentType === type.id ? styles.contentTabActive : ""}`}
                    onClick={() => setContentType(type.id)}
                  >
                    <span>{type.icon}</span>
                    <span>{type.label}</span>
                    <span className={styles.count}>{content[type.id]?.length || 0}</span>
                  </button>
                ))}
              </div>
              <div className={styles.searchBox}>
                🔍
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.contentGrid}>
              {getFilteredItems(contentType).map((item) => (
                <div key={item.id} className={styles.contentCard}>
                  <div className={styles.contentCardImage}>
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      contentTypes.find((t) => t.id === contentType)?.icon
                    )}
                    {item.featured && <div className={styles.featuredBadge}>⭐ Featured</div>}
                  </div>
                  <div className={styles.contentCardBody}>
                    <div className={styles.contentCardMeta}>
                      <span
                        className={styles.contentCardType}
                        style={{
                          background: `${contentTypes.find((t) => t.id === contentType)?.color}20`,
                          color: contentTypes.find((t) => t.id === contentType)?.color,
                        }}
                      >
                        {contentType}
                      </span>
                      <span className={styles.contentCardDate}>{item.date}</span>
                    </div>
                    <h3 className={styles.contentCardTitle}>{item.title}</h3>
                    {item.titleNp && (
                      <p className={styles.contentCardTitle} style={{ fontSize: "14px", opacity: 0.7 }}>
                        {item.titleNp}
                      </p>
                    )}
                    <p className={styles.contentCardExcerpt}>{item.excerpt}</p>
                    <div className={styles.contentCardActions}>
                      <button
                        className={`${styles.contentCardBtn} ${styles.contentCardBtnEdit}`}
                        onClick={() => handleEdit(item, contentType)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className={`${styles.contentCardBtn} ${styles.contentCardBtnDelete}`}
                        onClick={() => handleDelete(item.id, contentType)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {getFilteredItems(contentType).length === 0 && (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  {contentTypes.find((t) => t.id === contentType)?.icon}
                </div>
                <p className={styles.emptyText}>
                  No {contentType} found.{" "}
                  {searchTerm ? "Try a different search." : "Create your first one!"}
                </p>
                <button
                  className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                  onClick={() => {
                    resetForm();
                    setActiveTab("create");
                  }}
                >
                  ➕ Create {contentTypes.find((t) => t.id === contentType)?.label}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Create/Edit Form View */}
        {activeTab === "create" && (
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>
                {isEditing ? "✏️ Edit" : "➕ Create New"}{" "}
                {contentTypes.find((t) => t.id === contentType)?.label}
              </h3>
              <div className={styles.formTypeSelect}>
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`${styles.formTypeBtn} ${contentType === type.id ? styles.formTypeBtnActive : ""}`}
                    onClick={() => setContentType(type.id)}
                    disabled={isEditing}
                  >
                    {type.icon} {type.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formMain}>
                  {/* Language Tabs */}
                  <div className={styles.formCard}>
                    <div className={styles.formCardTitle}>📝 Content</div>
                    <div className={styles.langTabs}>
                      <button
                        type="button"
                        className={`${styles.langTab} ${langTab === "en" ? styles.langTabActive : ""}`}
                        onClick={() => setLangTab("en")}
                      >
                        🇬🇧 English
                      </button>
                      <button
                        type="button"
                        className={`${styles.langTab} ${langTab === "np" ? styles.langTabActive : ""}`}
                        onClick={() => setLangTab("np")}
                      >
                        🇳🇵 नेपाली
                      </button>
                    </div>

                    {langTab === "en" ? (
                      <>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Title (English) *</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="Enter title in English"
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Excerpt / Summary</label>
                          <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            className={styles.formTextarea}
                            placeholder="Brief summary of the content..."
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Body Content</label>
                          <textarea
                            name="body"
                            value={formData.body}
                            onChange={handleInputChange}
                            className={`${styles.formTextarea} ${styles.formTextareaLarge}`}
                            placeholder="Write your full content here..."
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>शीर्षक (नेपाली)</label>
                          <input
                            type="text"
                            name="titleNp"
                            value={formData.titleNp}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="नेपालीमा शीर्षक लेख्नुहोस्"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>सारांश</label>
                          <textarea
                            name="excerptNp"
                            value={formData.excerptNp}
                            onChange={handleInputChange}
                            className={styles.formTextarea}
                            placeholder="सामग्रीको संक्षिप्त सारांश..."
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>मुख्य सामग्री</label>
                          <textarea
                            name="bodyNp"
                            value={formData.bodyNp}
                            onChange={handleInputChange}
                            className={`${styles.formTextarea} ${styles.formTextareaLarge}`}
                            placeholder="पूर्ण सामग्री यहाँ लेख्नुहोस्..."
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.formSidebar}>
                  {/* Media */}
                  <div className={styles.formCard}>
                    <div className={styles.formCardTitle}>🖼️ Media</div>
                    <div className={`${styles.imagePreview} ${!formData.image ? styles.imagePreviewEmpty : ""}`}>
                      {formData.image ? (
                        <img src={formData.image} alt="Preview" />
                      ) : (
                        <>
                          <span className={styles.imagePreviewIcon}>🖼️</span>
                          <span>No image selected</span>
                        </>
                      )}
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Image URL</label>
                      <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    {contentType === "videos" && (
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Video URL (YouTube)</label>
                        <input
                          type="text"
                          name="videoUrl"
                          value={formData.videoUrl}
                          onChange={handleInputChange}
                          className={styles.formInput}
                          placeholder="https://youtube.com/watch?v=..."
                        />
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className={styles.formCard}>
                    <div className={styles.formCardTitle}>⚙️ Details</div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Slug (URL)</label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="auto-generated"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Source</label>
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select Source</option>
                        <option value="Campaign">Campaign / अभियान</option>
                        <option value="Personal">Personal / व्यक्तिगत</option>
                        <option value="Media">Media / मिडिया</option>
                        <option value="Field Update">Field / क्षेत्र</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Tags (comma separated)</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags?.join(", ") || ""}
                        onChange={handleTagsChange}
                        className={styles.formInput}
                        placeholder="election, campaign, news"
                      />
                      {formData.tags?.length > 0 && (
                        <div className={styles.tagsList}>
                          {formData.tags.map((tag, i) => (
                            <span key={i} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.checkboxGroup}>
                        <input
                          type="checkbox"
                          name="featured"
                          checked={formData.featured}
                          onChange={handleInputChange}
                          className={styles.checkbox}
                        />
                        <span>⭐ Mark as Featured</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={`${styles.formBtn} ${styles.formBtnPrimary}`}>
                  {isEditing ? "💾 Update" : "✅ Publish"}{" "}
                  {contentTypes.find((t) => t.id === contentType)?.label}
                </button>
                <button
                  type="button"
                  className={`${styles.formBtn} ${styles.formBtnPreview}`}
                  onClick={() => setShowPreview(true)}
                >
                  👁️ Preview
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className={`${styles.formBtn} ${styles.formBtnSecondary}`}
                    onClick={() => {
                      resetForm();
                      setActiveTab("content");
                    }}
                  >
                    ❌ Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Settings View */}
        {activeTab === "settings" && (
          <div className={styles.settingsGrid}>
            <div className={styles.settingsCard}>
              <h3 className={styles.settingsCardTitle}>📥 Import Content</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px", fontSize: "14px" }}>
                Import content from a JSON file. This will merge with existing content.
              </p>
              <input
                type="file"
                id="importFile"
                className={styles.fileInput}
                accept=".json"
                onChange={importContent}
              />
              <label htmlFor="importFile" className={styles.fileLabel}>
                📁 Choose JSON File
              </label>
            </div>

            <div className={styles.settingsCard}>
              <h3 className={styles.settingsCardTitle}>📤 Export Content</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px", fontSize: "14px" }}>
                Download all your content as a JSON file for backup.
              </p>
              <button className={`${styles.actionBtn} ${styles.actionBtnPrimary}`} onClick={exportContent}>
                📥 Download Backup
              </button>
            </div>

            <div className={styles.settingsCard}>
              <h3 className={styles.settingsCardTitle}>🗑️ Clear All Content</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px", fontSize: "14px" }}>
                Remove all content from the CMS. This action cannot be undone!
              </p>
              <button
                className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                style={{ background: "rgba(239, 68, 68, 0.2)", color: "#ef4444" }}
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete ALL content? This cannot be undone!"
                    )
                  ) {
                    saveContent({
                      news: [],
                      articles: [],
                      blogs: [],
                      videos: [],
                      gallery: [],
                    });
                    alert("All content has been cleared.");
                  }
                }}
              >
                🗑️ Clear All Content
              </button>
            </div>

            <div className={styles.settingsCard}>
              <h3 className={styles.settingsCardTitle}>ℹ️ About</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.8" }}>
                <strong>Ashish Sharma Campaign CMS</strong>
                <br />
                Version 1.0.0
                <br />
                <br />
                Content is stored locally in your browser. Export regularly for backup.
                <br />
                <br />
                Election Symbol: 🚙 Jeep / जीप
                <br />
                Constituency: Kapilvastu-1
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Preview Modal */}
      {showPreview && (
        <div className={styles.previewModal} onClick={() => setShowPreview(false)}>
          <div className={styles.previewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.previewHeader}>
              <h3 className={styles.previewTitle}>👁️ Content Preview</h3>
              <button className={styles.closeBtn} onClick={() => setShowPreview(false)}>
                ✕
              </button>
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewImage}>
                {formData.image ? (
                  <img src={formData.image} alt="Preview" />
                ) : (
                  contentTypes.find((t) => t.id === contentType)?.icon
                )}
              </div>
              <div className={styles.previewMeta}>
                <span>{contentType}</span>
                <span>{formData.date}</span>
                {formData.source && <span>{formData.source}</span>}
              </div>
              <h2 className={styles.previewArticleTitle}>
                {formData.title || "Untitled"}
                {formData.titleNp && (
                  <span style={{ display: "block", fontSize: "20px", opacity: 0.7, marginTop: "8px" }}>
                    {formData.titleNp}
                  </span>
                )}
              </h2>
              <p className={styles.previewExcerpt}>
                {formData.excerpt || formData.excerptNp || "No excerpt provided."}
              </p>
              <div className={styles.previewBodyText}>
                {formData.body || formData.bodyNp || "No body content."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
