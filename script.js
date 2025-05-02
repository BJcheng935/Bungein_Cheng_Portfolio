// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);
    document.body.style.overflow = 'hidden';
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'auto';
      }, 500);
    });
  
    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Back-to-top button
    const backToTopBtn = document.createElement('a');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.href = '#';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    backToTopBtn.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Header scroll behavior
    window.addEventListener('scroll', () => {
      // Back-to-top visibility
      if (window.pageYOffset > 300) backToTopBtn.classList.add('show');
      else backToTopBtn.classList.remove('show');
  
      // Header shrink
      const headerEl = document.querySelector('header');
      if (window.pageYOffset > 50) headerEl.classList.add('scrolled');
      else headerEl.classList.remove('scrolled');
    });
  
    // Mobile menu toggle
    const headerContainer = document.querySelector('header .container');
    const originalHeaderContent = document.querySelector('.header-content');
    const nav = document.getElementById('main-nav');
  
    if (headerContainer && originalHeaderContent && nav) {
      originalHeaderContent.classList.add('logo-section');
  
      const mobileMenuBtn = document.createElement('button');
      mobileMenuBtn.className = 'mobile-menu-btn';
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-controls', 'main-nav');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  
      const newHeaderContent = document.createElement('div');
      newHeaderContent.className = 'header-content';
  
      headerContainer.replaceChild(newHeaderContent, originalHeaderContent);
      newHeaderContent.appendChild(originalHeaderContent);
      newHeaderContent.appendChild(mobileMenuBtn);
      headerContainer.appendChild(nav);
  
      mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
        const expanded = nav.classList.contains('show');
        mobileMenuBtn.setAttribute('aria-expanded', expanded.toString());
        mobileMenuBtn.innerHTML = expanded
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });
    }
  
    // Example data arrays (import or fetch your own in practice)
    const projects = [
      /* { title, description, technologies, links: { github }, image, category } */
    ];
    const experiences = [
      /* { role, company, period, description } */
    ];
  
    // Render projects with hover-lift utility
    function renderProjects(filter = 'all') {
      const grid = document.querySelector('.projects-grid');
      if (!grid) return;
      grid.innerHTML = '';
      const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);
  
      filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'hover-lift');
        setTimeout(() => card.classList.add('animate'), 100 * i);
        const placeholder = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`;
  
        card.innerHTML = `
          <div class="project-image">
            <img src="${project.image || placeholder}" alt="${project.title}" loading="lazy">
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.links.github}" class="btn" target="_blank">
                <i class="fab fa-github"></i> View Code
              </a>
            </div>
          </div>`;
        grid.appendChild(card);
      });
    }
  
    // Render experiences (example)
    function renderExperiences() {
      const list = document.querySelector('.timeline');
      if (!list) return;
      list.innerHTML = '';
      experiences.forEach((exp, i) => {
        const item = document.createElement('div');
        item.classList.add('timeline-item', 'hover-lift');
        setTimeout(() => item.classList.add('animate'), 150 * i);
        item.innerHTML = `
          <h4>${exp.role} @ ${exp.company}</h4>
          <span class="period">${exp.period}</span>
          <p>${exp.description}</p>`;
        list.appendChild(item);
      });
    }
  
    // Intersection Observer for on-scroll animations
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.project-card, .timeline-item, .skill-category')
      .forEach(el => io.observe(el));
  
    // Initial render calls
    renderProjects();
    renderExperiences();
  });
  