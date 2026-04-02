# Personal Website

A modern, responsive personal website showcasing skills, projects, and professional experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Dynamic Content**: Skills and projects loaded from JSON files
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Contact Form**: Functional contact form (ready for backend integration)
- **Performance Optimized**: Fast loading times and optimized assets

## Folder Structure

```
personal-website/
│
├── index.html          # Main HTML file
├── README.md           # Project documentation
│
├── css/
│   ├── reset.css      # CSS reset/normalize
│   └── style.css      # Main stylesheet
│
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── animations.js  # Animation and scroll effects
│
├── data/
│   ├── skills.json    # Skills data
│   ├── projects.json  # Projects data
│   └── config.json    # Site configuration
│
├── assets/
│   └── (images, icons, etc.)
│
└── pages/
    └── (additional HTML pages if needed)
```

## Getting Started

1. **Customize Content**:
   - Update `index.html` with your personal information
   - Edit `data/skills.json` with your skills
   - Edit `data/projects.json` with your projects
   - Update `data/config.json` with your contact information

2. **Customize Styling**:
   - Modify CSS variables in `css/style.css` to match your brand colors
   - Adjust fonts, spacing, and layout as needed

3. **Add Assets**:
   - Place images in the `assets/` folder
   - Update image paths in HTML/CSS files

4. **Deploy**:
   - Upload all files to your web hosting service
   - Ensure JSON files are accessible (CORS may need configuration)

## Customization Guide

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Adding Skills

Edit `data/skills.json`:

```json
{
    "name": "Skill Name",
    "icon": "fab fa-icon-class",
    "level": "Beginner/Intermediate/Advanced"
}
```

### Adding Projects

Edit `data/projects.json`:

```json
{
    "title": "Project Title",
    "description": "Project description",
    "technologies": ["Tech1", "Tech2"],
    "icon": "fas fa-icon",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/username/repo"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, please reach out through the contact form on the website.


# personal-website
My own personal website portfolio
