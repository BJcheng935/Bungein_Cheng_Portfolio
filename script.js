document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);

    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.classList.add('fade-out');
            // Enable scrolling on body
            document.body.style.overflow = 'auto';
        }, 500);
    });

    // Initially disable scrolling until preloader is gone
    document.body.style.overflow = 'hidden';

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Add back to top button
    const backToTopBtn = document.createElement('a');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.href = '#';
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // Add scrolled class to header
        const header = document.querySelector('header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Animate elements on scroll
        animateOnScroll();
    });

    // Smooth scroll for back to top button
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add mobile menu button
    const header = document.querySelector('header .container');
    const headerContent = document.querySelector('.header-content');
    const nav = document.querySelector('nav');

    // Restructure header content
    if (headerContent && header) {
        // Convert header content to logo section
        headerContent.className = 'logo-section';

        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        // Create new header content div that will contain logo and nav
        const newHeaderContent = document.createElement('div');
        newHeaderContent.className = 'header-content';

        // Remove existing elements and reorganize
        if (header.contains(headerContent)) {
            header.removeChild(headerContent);
        }
        if (header.contains(nav)) {
            header.removeChild(nav);
        }

        newHeaderContent.appendChild(headerContent);
        newHeaderContent.appendChild(mobileMenuBtn);
        header.appendChild(newHeaderContent);
        header.appendChild(nav);

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function () {
            nav.classList.toggle('show');
            if (nav.classList.contains('show')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Project data
    const projects = [
        {
            title: "GAN Data Generation Project",
            description: "Developed a Generative Adversarial Network using PyTorch to create high-quality synthetic tabular data.",
            technologies: ["Python", "PyTorch", "Pandas", "NumPy", "AI/ML"],
            category: "ai",
            links: { github: "https://github.com/BJcheng935/GAN-Data-Generation-Project.git" },
            image: "images/projects/gan-data-generation-project.jpg" // Default image name
        },
        {
            title: "Connect Four Game with AI",
            description: "Engineered a Java-based Connect Four game featuring multiple AI algorithms including UCT and Pure Monte Carlo Game Search.",
            technologies: ["Java", "AI", "Game Development"],
            category: "games",
            links: { github: "https://github.com/BJcheng935/Connect-Four-Game-Implementation.git" },
            image: "connect-four-game-with-ai.jpg" // Default image name
        },
        {
            title: "A* Pathfinding Algorithm",
            description: "Developed a Python-based pathfinding system implementing an A* algorithm with multiple heuristic functions.",
            technologies: ["Python", "Algorithms"],
            category: "ai",
            links: { github: "https://github.com/BJcheng935/AI-Pathfinding-Algorithm-Implementation.git" },
            image: "a-pathfinding-algorithm.jpg" // Default image name
        },
        {
            title: "UDP Communication System",
            description: "Developed a suite of Windows-based UDP communication programs with efficient non-blocking I/O.",
            technologies: ["C", "Linux", "Networking"],
            category: "systems",
            links: { github: "https://github.com/BJcheng935/UDP-Communication-System.git" },
            image: "udp-communication-system.jpg" // Default image name
        },
        {
            title: "GPT-2 Fine-Tuning Project",
            description: "Fine-tuned GPT-2 to generate narratives based on a dataset of children's daily activities.",
            technologies: ["Python", "PyTorch", "NLP", "AI"],
            category: "ai",
            links: { github: "https://github.com/BJcheng935/GPT-2-Finetuning-Project.git" },
            image: "gpt-2-fine-tuning-project.jpg" // Default image name
        },
        {
            title: "Reinforcement Learning Implementation",
            description: "Implemented three reinforcement learning algorithms to optimize policies in a stochastic environment.",
            technologies: ["Python", "AI", "Reinforcement Learning"],
            category: "ai",
            links: { github: "https://github.com/BJcheng935/Reinforcement-Learning-Algorithms-Implementation.git" },
            image: "reinforcement-learning-implementation.jpg" // Default image name
        },
        {
            title: "Implementation of Bootstrap",
            description: "Implemented three reinforcement learning algorithms to optimize policies in a stochastic environment.",
            technologies: ["HTML", "Bootstrap"],
            category: "websites",
            links: { github: "https://github.com/BJcheng935/WDC_Bootstrap.git" },
            image: "reinforcement-learning-implementation.jpg" // Default image name
        },
        {
            title: "Strife",
            description: "Implemented three reinforcement learning algorithms to optimize policies in a stochastic environment.",
            technologies: ["Javascript", "CSS", "Next.js"],
            category: "websites",
            links: { github: "https://github.com/BJcheng935/WDC_Next_Strife.git" },
            image: "reinforcement-learning-implementation.jpg" // Default image name
        }

    ];

    const experiences = [
        {
            title: "Crew Member",
            company: "Charley's Cheesesteaks",
            date: "Jan 2025 - Present",
            description: "Serve delicious cheesesteaks with a smile, ensuring top-notch customer satisfaction. Streamline order processing, reducing wait times."
        },
        {
            title: "Shift Manager",
            company: "La Vaca Grill",
            date: "Dec 2024 - Jan 2025",
            description: "Managed shift operations, optimizing staff schedules, and implementing cost-saving measures. Fostered a team-oriented environment."
        },
        {
            title: "Chef",
            company: "Goloso's Snacks",
            date: "Feb 2024 - Nov 2024",
            description: "Crafted innovative dishes, elevating culinary standards. Managed kitchen operations, ensuring timely service and quality control."
        },
        {
            title: "Shift Manager",
            company: "Charley's Cheesesteaks",
            date: "Dec 2018 - Feb 2024",
            description: "Led shift operations, enhancing team efficiency and customer satisfaction. Streamlined ordering process, reducing waste and improving profit margins."
        }
    ];

    // Render Projects
    const projectsGrid = document.querySelector('.projects-grid');
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';

        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

        filtered.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            // Add animate class with delay based on index
            setTimeout(() => {
                projectCard.classList.add('animate');
            }, 100 * index);

            // Use placeholder image if the actual image might not exist
            const imagePath = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`;

            projectCard.innerHTML = `
                <div class="project-image" >
                <img src="${project.image || imagePath}" alt="${project.title}" loading="lazy">
                </div>

                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.links.github}" class="btn" target="_blank"><i class="fab fa-github"></i> View Code</a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Render Experiences
    const timeline = document.querySelector('.timeline');
    function renderExperiences() {
        timeline.innerHTML = '';
        experiences.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

            // Add animation with delay
            setTimeout(() => {
                timelineItem.classList.add('animate');
            }, 200 * index);

            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-date">${exp.date}</div>
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    }

    // Filter project buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.dataset.filter);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Function to animate elements when they're in view
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight / 1.2 &&
            rect.bottom >= 0
        );
    }

    // Function to animate various elements on scroll
    function animateOnScroll() {
        // Animate skill bars
        document.querySelectorAll('.skill-level').forEach(skill => {
            if (isInViewport(skill) && !skill.classList.contains('animate')) {
                skill.classList.add('animate');
                // FIX: Set the width directly using the data-level attribute
                const level = skill.getAttribute('data-level');
                skill.style.width = `${level}%`;
            }
        });

        // Animate about section
        const aboutText = document.querySelector('.about-text');
        const aboutImage = document.querySelector('.about-image');
        if (aboutText && isInViewport(aboutText)) {
            aboutText.classList.add('animate');
        }
        if (aboutImage && isInViewport(aboutImage)) {
            aboutImage.classList.add('animate');
        }

        // Animate timeline items
        document.querySelectorAll('.timeline-item:not(.animate)').forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });

        // Animate contact section
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');
        if (contactInfo && isInViewport(contactInfo)) {
            contactInfo.classList.add('animate');
        }
        if (contactForm && isInViewport(contactForm)) {
            contactForm.classList.add('animate');
        }

        // Animate skill categories
        document.querySelectorAll('.skill-category:not(.animate)').forEach(category => {
            if (isInViewport(category)) {
                category.classList.add('animate');
            }
        });
    }

    // Initialize rendering
    renderProjects();
    renderExperiences();

    // Initial animations call
    setTimeout(animateOnScroll, 500);
});