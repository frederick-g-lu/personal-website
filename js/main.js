// ===== Main JavaScript File =====

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const currentYear = document.getElementById('current-year');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const experienceContainer = document.getElementById('experience-container');
const heroTerminalNav = document.getElementById('hero-terminal-nav');
const heroNavInput = document.getElementById('hero-nav-input');

// ===== Mobile Menu Toggle =====
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (navLinks.length > 0 && navMenu && hamburger) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
}, { passive: true });

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    if (navLinks.length === 0) return;
    
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// ===== Set Current Year =====
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ===== Skills Data (Embedded for cross-browser compatibility) =====
const skillsData = [
    {
        "name": "Python",
        "icon": "fab fa-python",
        "level": "Experienced"
    },
    {
        "name": "Java",
        "icon": "fab fa-java",
        "level": "Experienced"
    },
    {
        "name": "C++",
        "icon": "fas fa-code",
        "level": "Intermediate"
    },
    {
        "name": "JavaScript",
        "icon": "fab fa-js",
        "level": "Intermediate"
    },
    {
        "name": "HTML",
        "icon": "fab fa-html5",
        "level": "Intermediate"
    },
    {
        "name": "Git",
        "icon": "fab fa-git-alt",
        "level": "Intermediate"
    },
    {
        "name": "GitHub",
        "icon": "fab fa-github",
        "level": "Experienced"
    },
    {
        "name": "TensorFlow",
        "icon": "fas fa-brain",
        "level": "Experienced"
    },
    {
        "name": "AWS",
        "icon": "fab fa-aws",
        "level": "Beginner"
    },
    {
        "name": "SQL",
        "icon": "fas fa-database",
        "level": "Beginner"
    },
    {
        "name": "FastAPI",
        "icon": "fas fa-server",
        "level": "Intermediate"
    },
    {
        "name": "Linux",
        "icon": "fab fa-linux",
        "level": "Beginner"
    },
    {
        "name": "Android Studio",
        "icon": "fab fa-android",
        "level": "Intermediate"
    },
    {
        "name": "NumPy",
        "icon": "fas fa-chart-line",
        "level": "Experienced"
    },
    {
        "name": "Pandas",
        "icon": "fas fa-table",
        "level": "Experienced"
    },
    {
        "name": "API Integration",
        "icon": "fas fa-plug",
        "level": "Intermediate"
    },
    {
        "name": "Backend Development",
        "icon": "fas fa-server",
        "level": "Intermediate"
    },
    {
        "name": "Database Development",
        "icon": "fas fa-database",
        "level": "Intermediate"
    },
    {
        "name": "Frontend Development",
        "icon": "fas fa-server",
        "level": "Intermediate"
    }
];

// ===== Load Skills =====
function loadSkills() {
    try {
        if (!skillsGrid) {
            console.error('Skills grid element not found');
            return;
        }
        
        skillsGrid.innerHTML = '';
        
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">${skill.level}</div>
            `;
            skillsGrid.appendChild(skillCard);
        });
    } catch (error) {
        console.error('Error loading skills:', error);
        if (skillsGrid) {
            skillsGrid.innerHTML = '<p style="color: var(--text-muted);">Unable to load skills.</p>';
        }
    }
}

// ===== Projects Data (Embedded for cross-browser compatibility) =====
// Removed - now loading from data/projects.json instead
// const projectsData = [
//     {
//         "title": "AI Squat Counter",
//         "description": "Award-winning AI-powered squat counter using pretrained TensorFlow models. Won Best Use of AI/ML Award at Purdue Indy Hackathon 2025. Adapted TensorFlow models to fit project goals, planned and executed a weeklong project plan, continuing previous work on AI in sports and health.",
//         "technologies": ["Python", "TensorFlow", "AI/ML", "Computer Vision"],
//         "icon": "fas fa-dumbbell",
//         "liveUrl": "",
//         "githubUrl": "https://github.com/frederick-g-lu",
//         "year": "2025"
//     },
//     {
//         "title": "Undergraduate Student Research",
//         "description": "Analyzed sales, service, and replacement data to identify defect-prone products. Processed and organized 200,000+ data points to develop a predictive function for cumulative defects over six years. Identified six high-loss products through team analysis with $50,000+ impact.",
//         "technologies": ["Python", "Data Analysis", "Pandas", "NumPy", "SQL"],
//         "icon": "fas fa-chart-bar",
//         "liveUrl": "",
//         "githubUrl": "https://github.com/frederick-g-lu",
//         "year": "2025"
//     },
//     {
//         "title": "AiShifu: AI Karate Pose Trainer",
//         "description": "Published research paper on an interactive algorithm utilizing a pose detection neural network to help martial arts students improve their forms during solo practice. Featured in Journal of Student Research with almost 400 downloads and 16+ references.",
//         "technologies": ["Python", "TensorFlow", "Computer Vision", "Neural Networks", "Human Pose Estimation"],
//         "icon": "fas fa-user-ninja",
//         "liveUrl": "https://doi.org/10.47611/jsrhs.v12i3.5063",
//         "githubUrl": "https://github.com/frederick-g-lu",
//         "year": "2023"
//     }
// ];

// ===== Load Experience =====
function loadExperience() {
    try {
        if (!experienceContainer) {
            console.error('Experience container element not found');
            return;
        }
        
        experienceContainer.innerHTML = '';
        
        // Fetch config.json to get experience data
        fetch('data/config.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(config => {
                const experienceData = config.experience || [];
                
                if (experienceData.length === 0) {
                    experienceContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No experience data available.</p>';
                    return;
                }
                
                experienceData.forEach(exp => {
                    const experienceCard = document.createElement('div');
                    experienceCard.className = 'experience-card';
                    experienceCard.innerHTML = `
                        <div class="experience-header">
                            <h3 class="experience-position">${exp.position}</h3>
                            <h4 class="experience-company">${exp.company}</h4>
                            <p class="experience-period">${exp.period}</p>
                        </div>
                        <div class="experience-highlights">
                            <ul>
                                ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                    experienceContainer.appendChild(experienceCard);
                });
            })
            .catch(error => {
                console.error('Error loading experience:', error);
                if (experienceContainer) {
                    experienceContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load experience.</p>';
                }
            });
    } catch (error) {
        console.error('Error loading experience:', error);
        if (experienceContainer) {
            experienceContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load experience.</p>';
        }
    }
}

// ===== Load Projects =====
function loadProjects() {
    try {
        if (!projectsGrid) {
            console.error('Projects grid element not found');
            return;
        }
        
        projectsGrid.innerHTML = '';
        
        // Fetch projects from JSON file
        fetch('data/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(projectsData => {
                projectsData.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <div class="project-image">
                            <i class="${project.icon || 'fas fa-code'}"></i>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tech">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo</a>` : ''}
                                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
                            </div>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                });
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                if (projectsGrid) {
                    projectsGrid.innerHTML = '<p style="color: var(--text-muted);">Unable to load projects.</p>';
                }
            });
    } catch (error) {
        console.error('Error loading projects:', error);
        if (projectsGrid) {
            projectsGrid.innerHTML = '<p style="color: var(--text-muted);">Unable to load projects.</p>';
        }
    }
}

// ===== Contact Form Handler =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just log it and show an alert
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Smooth Scroll for Navigation Links =====
// Wait for DOM to be ready
function setupSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Check if browser supports smooth scroll
                    if ('scrollBehavior' in document.documentElement.style) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Fallback for older browsers
                        const targetPosition = target.offsetTop - 80;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
}

// ===== Hero Terminal Navigation =====
function setupHeroTerminalNav() {
    if (!heroTerminalNav || !heroNavInput) return;

    const defaultPlaceholder = 'type: home, about, education, experience, skills, projects, contact';
    heroNavInput.placeholder = defaultPlaceholder;

    const aliases = {
        home: 'home',
        about: 'about',
        education: 'education',
        school: 'education',
        experience: 'experience',
        work: 'experience',
        skills: 'skills',
        projects: 'projects',
        project: 'projects',
        contact: 'contact',
        email: 'contact'
    };

    heroTerminalNav.addEventListener('submit', (event) => {
        event.preventDefault();

        const value = (heroNavInput.value || '').trim().toLowerCase();
        const targetId = aliases[value];

        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                heroNavInput.value = '';
                heroNavInput.placeholder = defaultPlaceholder;
                return;
            }
        }

        heroNavInput.value = '';
        heroNavInput.placeholder = defaultPlaceholder;
    });

    heroNavInput.addEventListener('blur', () => {
        heroNavInput.placeholder = defaultPlaceholder;
    });
}

// ===== Initialize on DOM Load =====
// Use DOMContentLoaded or fallback for older browsers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    // DOM already loaded
    initialize();
}

function initialize() {
    // Wait a brief moment to ensure all elements are ready
    setTimeout(() => {
        loadSkills();
        loadExperience();
        loadProjects();
        setupSmoothScroll();
        setupHeroTerminalNav();
        
        // Re-initialize animations after content loads
        if (typeof initSkillAnimations === 'function') {
            setTimeout(() => {
                initSkillAnimations();
            }, 100);
        }
    }, 50);
}

