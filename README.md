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
├── data/
│   ├── config.json                # Experience data & site configuration
│   ├── projects.json              # Portfolio projects data
│   └── skills.json                # Skills reference (currently embedded in main.js)
```

## Architecture

- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
- **Data-driven** — content loaded from JSON files (`config.json`, `projects.json`)
- **GitHub Pages ready** — fully static, relative paths for any deployment folder
- **Performance-optimized** — minimal CSS, efficient DOM updates
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — mobile-first design from 480px to 1920px+

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
