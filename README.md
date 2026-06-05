# personal-website

My personal portfolio website showcasing education, experience, skills, and projects.

## Project Structure

```
personal-website/
├── index.html                      # Main HTML file
├── README.md                       # Project documentation
│
├── css/
│   ├── reset.css                  # CSS reset & normalize
│   └── style.css                  # Main stylesheet
│
├── js/
│   ├── main.js                    # Core functionality (data loading, interactions)
│   └── animations.js              # Scroll and hover animations
│
└── data/
    ├── config.json                # Experience, skills, activities, site config
    ├── projects.json              # Portfolio projects data
    └── skills.json                # Skills reference (legacy)
```

## Architecture

- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
- **Data-driven** — content loaded from JSON files (config.json, projects.json)
- **GitHub Pages ready** — fully static, relative paths for any deployment folder
- **Performance-optimized** — minimal CSS, efficient DOM updates
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — mobile-first design from 480px to 1920px+

## Section Order

1. **Hero** — Terminal UI navigation
2. **About** — Brief personal introduction
3. **Skills** — Categorized by Languages, AI/ML, Backend, Tools, Domains
4. **Projects** — Portfolio projects with technologies and links
5. **Experience** — Professional and volunteer experience
6. **Education** — Academic credentials and achievements
7. **Activities** — Personal interests and hobbies
8. **Contact** — Social links

## Development

Serve locally:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment (GitHub Pages)

1. Push to GitHub repository
2. Enable Pages in repo settings (set source to `main` branch, `/` root)
3. Site deploys automatically on push

For a custom domain:
- Add `CNAME` file with your domain name in the repo root
