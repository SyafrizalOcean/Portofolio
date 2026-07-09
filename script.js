// --- 1. DATA PORTFOLIO ---

const skillsData = [
    {
        icon: "🗺️",
        category: "WebGIS & Programming",
        desc: "Membangun platform spasial interaktif dan API untuk data geospasial.",
        items: ["Python", "GeoDjango", "Leaflet.js", "HTML/CSS/JS", "REST API"]
    },
    {
        icon: "📡",
        category: "IoT & Hardware",
        desc: "Merancang sensor lapangan mandiri energi untuk pemantauan lingkungan.",
        items: ["Arduino", "Hardware Assembly", "Solar-Powered Systems", "C++", "Flutter"]
    },
    {
        icon: "🌊",
        category: "Marine Data Processing",
        desc: "Mengolah data oseanografi mentah menjadi visualisasi yang bermakna.",
        items: ["Rasterio", "NumPy", "Cartopy", "Oceanographic Modeling", "Matplotlib"]
    }
];

const experienceData = [
    {
        date: "2024 — Sekarang",
        title: "Oceanography Student",
        org: "Institut Teknologi Bandung (ITB)",
        desc: "Fokus pada oseanografi fisik, pemodelan komputasi, dan aplikasi data laut untuk pengambilan keputusan pesisir."
    },
    {
        date: "2024",
        title: "WebGIS Developer & IoT Intern",
        org: "Oceanographic Research Project",
        desc: "Membangun dashboard oseanografi dinamis dengan animasi vektor arus laut dan heatmap SST temporal terintegrasi CRUD."
    },
    {
        date: "2024",
        title: "Lead Instrument Engineer",
        org: "VARUNA WATCH Project",
        desc: "Memimpin desain sensor pesisir off-grid berbasis Arduino dan tenaga surya untuk pemantauan permukaan laut real-time."
    },
    {
        date: "2023",
        title: "Research Assistant",
        org: "Batu Tara Submarine Morphology Study",
        desc: "Menghasilkan Digital Elevation Model resolusi 20 meter dan kalibrasi topografi bawah laut vulkanik."
    }
];

const projectsData = [
    {
        image: "images/project-1.png",
        title: "Oceanographic Dynamic Dashboard",
        role: "WebGIS Developer & IoT Intern",
        description: "Antarmuka web interaktif dengan pemetaan dinamis, animasi vektor arus laut, dan temporal heatmap Sea Surface Temperature (SST). Terintegrasi CRUD penuh.",
        tech: ["HTML/CSS/JS", "Python", "Data Viz", "Leaflet.js"]
    },
    {
        image: "images/project-2.svg",
        title: "VARUNA WATCH Coastal Sensor",
        role: "Lead Instrument Engineer",
        description: "Prototipe sensor pesisir pengukur permukaan laut real-time. Sistem kelistrikan mandiri 100% off-grid berbasis panel surya + baterai untuk web monitoring 24/7.",
        tech: ["Arduino", "C++", "IoT", "Solar Power"]
    },
    {
        image: "images/project-3.svg",
        title: "Central Kalimantan Geoportal",
        role: "WebGIS Developer",
        description: "Geoportal interaktif untuk visualisasi regulasi zonasi pesisir dan data met-ocean (CMEMS). Kalkulasi komponen vektor arus (u1 & u2) yang presisi.",
        tech: ["HTML/CSS/JS", "GeoDjango", "Leaflet.js", "REST API"]
    },
    {
        image: "images/project-4.svg",
        title: "Batu Tara Submarine Morphology",
        role: "Research Assistant",
        description: "Digital Elevation Model resolusi 20 meter. Kalibrasi data topografi mentah pada ketinggian 748m untuk visualisasi 3D struktur vulkanik bawah laut.",
        tech: ["Rasterio", "NumPy", "Matplotlib", "Python"]
    }
];

// --- 2. RENDER ---

const renderSkills = () => {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map((skill, index) => `
        <div class="card fade-in" style="transition-delay: ${index * 0.12}s">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.category}</h3>
            <p>${skill.desc}</p>
            <div class="tech-stack">
                ${skill.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
};

const renderExperience = () => {
    const container = document.getElementById('timeline-container');
    container.innerHTML = experienceData.map((exp, index) => `
        <div class="timeline-item fade-in" style="transition-delay: ${index * 0.1}s">
            <div class="timeline-date">${exp.date}</div>
            <h3 class="timeline-title">${exp.title}</h3>
            <div class="timeline-org">${exp.org}</div>
            <p class="timeline-desc">${exp.desc}</p>
        </div>
    `).join('');
};

const renderProjects = () => {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map((proj, index) => `
        <div class="card project-card fade-in" style="transition-delay: ${index * 0.15}s">
            <div class="project-image">
                <img src="${proj.image}" alt="${proj.title}" loading="lazy">
            </div>
            <div class="project-body">
                <div class="project-role">${proj.role}</div>
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <div class="tech-stack">
                    ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
};

// --- 3. ANIMASI ---

// Typewriter
const roles = ["WebGIS Developer", "Software Engineer", "Oceanographer", "IoT Enthusiast"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

const typeEffect = () => {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 30 : 80;
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }
    setTimeout(typeEffect, typeSpeed);
};

// Scroll animations
const setupScrollAnimation = () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elements.forEach(el => observer.observe(el));
};

// Stat counter
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            const suffix = el.dataset.suffix || '';
            const duration = 1400;
            const start = performance.now();
            const step = (now) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.floor(eased * target) + suffix;
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target + suffix;
            };
            requestAnimationFrame(step);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
};

// Cursor glow
const setupCursorGlow = () => {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;
    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
};

// Scroll progress bar
const setupScrollProgress = () => {
    const bar = document.getElementById('scrollBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = percent + '%';
    });
};

// Mobile nav toggle
const setupNavToggle = () => {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => links.classList.remove('open'))
    );
};

// --- 4. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    typeEffect();
    setupCursorGlow();
    setupScrollProgress();
    setupNavToggle();
    setTimeout(() => {
        setupScrollAnimation();
        animateStats();
    }, 100);
});
