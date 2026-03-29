# [YOUR NAME] — ECE ePortfolio

Personal portfolio website for **[YOUR FULL NAME]**, B.S. Electrical and Computer Engineering student at Georgia Institute of Technology.

**Live Site:** `https://[github-username].github.io/[repo-name]/`

---

## About This Site

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no dependencies. Open any `.html` file directly in a browser to preview locally.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, site navigation overview, inspirational quote |
| About | `about.html` | Biography, career goals, milestone timeline |
| Resume | `resume.html` | Full HTML resume + PDF download button |
| Projects | `projects.html` | Featured Discovery Project + project card grid |
| Contact | `contact.html` | Social links + static contact form |

---

## How to Publish to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** (the `+` icon → "New repository")
3. Name it something like `portfolio` or `[your-username].github.io`
4. Set it to **Public**
5. Do **not** initialize with a README (you already have one)
6. Click **Create repository**

### Step 2 — Push the Files

In your terminal, from inside the `portfolio/` folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/[REPO-NAME].git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings**
2. In the left sidebar, click **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4 — View Your Live Site

After 1–2 minutes, your site will be live at:

```
https://[YOUR-USERNAME].github.io/[REPO-NAME]/
```

GitHub Pages may take a few minutes on first deploy. Refresh the URL after waiting briefly.

---

## Adding Your Resume PDF

1. Export your resume as `resume.pdf`
2. Place `resume.pdf` in the **root of this folder** (same level as `index.html`)
3. Commit and push it to GitHub
4. The "Download PDF" button on `resume.html` will link to it automatically

---

## Customization Guide

Search for bracket placeholders `[LIKE THIS]` in all `.html` files and replace with your information. Use **Find & Replace** in VS Code (`Cmd+Shift+H` on Mac, `Ctrl+Shift+H` on Windows) to replace across all files at once.

### Key Replacements

| Placeholder | What to replace it with |
|---|---|
| `[YOUR FULL NAME]` | Your full name (e.g., Alex Johnson) |
| `[YOUR NAME]` | Your first/last name as needed |
| `[INITIALS]` | Your initials for the nav logo (e.g., AJ) |
| `[student@gatech.edu]` | Your actual email address |
| `[LINKEDIN-HANDLE]` | Your LinkedIn profile slug (e.g., alex-johnson-ece) |
| `[GITHUB-USERNAME]` | Your GitHub username |
| `[INSTAGRAM-HANDLE]` | Your Instagram username |
| `[HOMETOWN, STATE]` | Your hometown and state |
| `[CONCENTRATION]` | Your ECE thread or concentration |
| `[MONTH YEAR]` | Your expected graduation date |
| `[PROJECT TITLE]` | Your Discovery Project title |

### Replacing Placeholder Images

All placeholder images use `https://placehold.co/...` URLs. To replace them:

1. Add your image file to the `portfolio/` folder (e.g., `headshot.jpg`)
2. In the HTML, find the `<img src="https://placehold.co/...">` tag
3. Replace the `src` with your filename: `src="headshot.jpg"`
4. Update the `alt` attribute to describe your image

---

## File Structure

```
portfolio/
├── index.html        # Homepage
├── about.html        # About Me page
├── resume.html       # Resume page
├── projects.html     # Projects page
├── contact.html      # Contact page
├── styles.css        # All styles (single file)
├── script.js         # All JavaScript (single file)
├── resume.pdf        # ← Upload your own PDF here
└── README.md         # This file
```

---

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Navy | `#1a2744` | Primary backgrounds, headers |
| Gold | `#c9a84c` | Accents, CTAs, highlights |
| Navy Dark | `#111b33` | Footer, hero gradient |
| Navy Light | `#243060` | Cards, hover states |
| Off-White | `#f5f6fa` | Page backgrounds |

---

## Technologies

- **HTML5** — semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — custom properties, CSS Grid, Flexbox, transitions, `@media` queries
- **JavaScript (ES6+)** — `IntersectionObserver` API, DOM manipulation, form validation
- **Google Fonts** — [Inter](https://fonts.google.com/specimen/Inter)
- **Hosting** — [GitHub Pages](https://pages.github.com/) (free, static)

---

## Contact Form Note

The contact form on `contact.html` is **static** — it does not send email automatically. This is a limitation of GitHub Pages (no server-side code). Options to make it functional:

- **[Formspree](https://formspree.io/)** — free tier, add `action="https://formspree.io/f/[YOUR-ID]"` to the `<form>` tag
- **[Netlify Forms](https://www.netlify.com/products/forms/)** — if you switch hosting to Netlify
- **[EmailJS](https://www.emailjs.com/)** — client-side email sending via JavaScript

---

*Built with HTML, CSS, and vanilla JavaScript.*
