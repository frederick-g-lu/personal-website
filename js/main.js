// ===== Main JavaScript File =====

// DOM Elements
const currentYear = document.getElementById('current-year');
const skillsCategories = document.getElementById('skills-categories');
const projectsGrid = document.getElementById('projects-grid');
const experienceContainer = document.getElementById('experience-container');
const activitiesGrid = document.getElementById('activities-grid');
const heroTerminalNav = document.getElementById('hero-terminal-nav');
const heroNavInput = document.getElementById('hero-nav-input');

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

// ===== Set Current Year =====
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ===== Load Skills (Categorized) =====
function loadSkills() {
    try {
        if (!skillsCategories) {
            console.error('Skills categories element not found');
            return;
        }

        skillsCategories.innerHTML = '';

        fetch('data/config.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(config => {
                const skillsData = config.skills || {};

                if (Object.keys(skillsData).length === 0) {
                    skillsCategories.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No skills data available.</p>';
                    return;
                }

                Object.entries(skillsData).forEach(([category, skills]) => {
                    const categoryCard = document.createElement('div');
                    categoryCard.className = 'skill-category';
                    categoryCard.innerHTML = `
                        <h3 class="skill-category-title">${category}</h3>
                        <div class="skill-list">
                            ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    `;
                    skillsCategories.appendChild(categoryCard);
                });
            })
            .catch(error => {
                console.error('Error loading skills:', error);
                if (skillsCategories) {
                    skillsCategories.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load skills.</p>';
                }
            });
    } catch (error) {
        console.error('Error loading skills:', error);
        if (skillsCategories) {
            skillsCategories.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load skills.</p>';
        }
    }
}

// ===== Load Experience =====
function loadExperience() {
    try {
        if (!experienceContainer) {
            console.error('Experience container element not found');
            return;
        }

        experienceContainer.innerHTML = '';

        fetch('data/config.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
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

        fetch('data/projects.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
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

// ===== Load Activities =====
function loadActivities() {
    try {
        if (!activitiesGrid) {
            console.error('Activities grid element not found');
            return;
        }

        activitiesGrid.innerHTML = '';

        fetch('data/config.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(config => {
                const activitiesData = config.activities || [];

                if (activitiesData.length === 0) {
                    activitiesGrid.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No activities data available.</p>';
                    return;
                }

                activitiesData.forEach(activity => {
                    const activityCard = document.createElement('div');
                    activityCard.className = 'activity-card';
                    activityCard.innerHTML = `
                        <h3 class="activity-title">${activity.title}</h3>
                        <p class="activity-description">${activity.description}</p>
                    `;
                    activitiesGrid.appendChild(activityCard);
                });
            })
            .catch(error => {
                console.error('Error loading activities:', error);
                if (activitiesGrid) {
                    activitiesGrid.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load activities.</p>';
                }
            });
    } catch (error) {
        console.error('Error loading activities:', error);
        if (activitiesGrid) {
            activitiesGrid.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Unable to load activities.</p>';
        }
    }
}
function setupHeroTerminalNav() {
    if (!heroTerminalNav || !heroNavInput) return;

    const defaultPlaceholder = 'type: home, about, skills, projects, experience, education, activities, contact';
    heroNavInput.placeholder = defaultPlaceholder;

    const aliases = {
        home: 'home',
        about: 'about',
        skills: 'skills',
        projects: 'projects',
        project: 'projects',
        experience: 'experience',
        work: 'experience',
        education: 'education',
        school: 'education',
        activities: 'activities',
        interests: 'activities',
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
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

function initialize() {
    setTimeout(() => {
        loadSkills();
        loadExperience();
        loadProjects();
        loadActivities();
        setupHeroTerminalNav();

        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        }
    }, 50);
}
