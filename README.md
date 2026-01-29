# Ashish Sharma - Campaign Website

Official campaign website for **Ashish Sharma**, Independent Candidate for House of Representatives Election 2082 from **Kapilvastu-1, Nepal**.

**Election Symbol:** Jeep (जीप) 🚙

## Features

- **Bilingual Support**: Full English and Nepali (नेपाली) language support
- **Dark Theme Design**: Modern, sleek dark theme with blue accent (#0095f6)
- **Responsive Design**: Mobile-first, works on all devices
- **CMS Admin Panel**: Built-in content management system with authentication
- **Dynamic Content**: News, Articles, Blogs, Videos, and Gallery sections
- **Contact Form**: Easy way for constituents to get in touch

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/React
- **Styling**: CSS Modules + Global CSS
- **Storage**: localStorage (client-side CMS)
- **Deployment**: Vercel-ready

## Pages

- `/` - Home page with hero section and key information
- `/about` - Candidate biography and background
- `/news` - Latest news and media coverage
- `/articles` - In-depth articles and writings
- `/blogs` - Personal blog posts
- `/videos` - Video content and interviews
- `/gallery` - Photo gallery
- `/priorities` - Key focus areas and policies
- `/contact` - Contact form and information
- `/admin` - CMS Dashboard (protected)

## Admin Panel

Access the admin panel at `/admin`

**Default Credentials:**
- Username: `admin`
- Password: `P@ssw0rd@135`

Features:
- Create, edit, and delete content
- Bilingual content support (EN/NP)
- Image URL support
- YouTube video embedding
- Content export/import (JSON)
- Featured content marking
- Tags and categorization
- Session-based authentication (2-hour expiry)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ashish-sharma-campaign.git

# Navigate to project directory
cd ashish-sharma-campaign

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── admin/           # CMS Dashboard with auth
│   │   ├── page.js      # Admin dashboard
│   │   └── admin.module.css
│   ├── about/           # About page
│   ├── articles/        # Articles listing & detail
│   ├── blogs/           # Blog listing & detail
│   ├── contact/         # Contact page
│   ├── gallery/         # Photo gallery
│   ├── news/            # News listing & detail
│   ├── priorities/      # Priorities page
│   ├── videos/          # Videos page
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   └── page.js          # Home page
├── components/          # Reusable components
└── context/
    └── LanguageContext.js  # Bilingual support
public/
├── portrait.jpg         # Candidate photo
├── jeep-symbol.jpg      # Election symbol
└── gallery/             # Gallery images
```

## Configuration

The website can be customized by editing:

1. **Candidate Info**: Update `/src/app/page.js` for homepage content
2. **Colors**: Primary color is `#0095f6` (defined in `globals.css`)
3. **Content**: Use the CMS at `/admin` or edit default content in page files
4. **Admin Credentials**: Update in `/src/app/admin/page.js`

## CMS Data Storage

Content is stored in browser localStorage under these keys:
- `cms_news` - News items
- `cms_articles` - Articles
- `cms_blogs` - Blog posts
- `cms_videos` - Video content
- `cms_gallery` - Gallery images
- `cmsContent` - Unified storage

**Important**: Export content regularly using the Admin panel's export feature for backup.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy

### Other Platforms

The site is a standard Next.js app and can be deployed to any platform supporting Node.js.

## Security Notes

- Admin credentials are stored in source code (for demo purposes)
- For production, implement proper authentication (NextAuth.js, etc.)
- Session expires after 2 hours of inactivity
- HTTPS is recommended for production deployment

## License

This project is created for the Ashish Sharma campaign.

## Contact

- **Email**: contact@ashishsharma.info
- **Phone**: +977 9800000000
- **Constituency**: Kapilvastu-1, Lumbini Pradesh, Nepal

---

**Vote for Change. Vote for Progress. Vote for Ashish Sharma.**

जीप चिन्हमा छाप लगाउनुहोस् 🚙
