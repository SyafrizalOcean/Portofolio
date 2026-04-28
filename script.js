// --- 1. STRUKTUR DATA PORTFOLIO ---

const skillsData = [
    { category: "WebGIS & Programming", items: ["Python", "GeoDjango", "Leaflet.js", "HTML/CSS/JS", "RestAPI"] },
    { category: "IoT & Hardware", items: ["Arduino Microcontrollers", "Hardware Assembly", "Solar-Powered Systems", "C++", "Flutter"] },
    { category: "Marine Data Processing", items: ["Rasterio", "NumPy", "Cartopy", "Oceanographic Modeling"] }
];

const projectsData = [
    {
        title: "Oceanographic Dynamic Dashboard",
        role: "WebGIS Developer & IoT Intern",
        description: "Membangun antarmuka web front-end interaktif yang menampilkan pemetaan dinamis, termasuk animasi vektor arus laut dan temporal heatmaps untuk Sea Surface Temperature (SST). Terintegrasi dengan operasi CRUD penuh.",
        tech: ["HTML/CSS/JS", "Python", "Data Viz"]
    },
    {
        title: "VARUNA WATCH Coastal Sensor",
        role: "Lead Instrument Engineer",
        description: "Menciptakan prototipe sensor pesisir untuk mengukur permukaan laut secara real-time. Merancang sistem kelistrikan mandiri 100% off-grid dengan baterai agar web monitoring tetap berjalan tanpa henti.",
        tech: ["Arduino", "C++", "IoT"]
    },
    {
        title: "Central Kalimantan Geoportal",
        role: "WebGIS Developer",
        description: "Mengembangkan geoportal interaktif untuk memvisualisasikan regulasi zonasi pesisir dan data met-ocean (CMEMS). Memproses algoritma arus laut dengan mengkalkulasi komponen vektor arah (u1 dan u2) secara presisi.",
        tech: ["HTML/CSS/JS", "Python", "GeoDjango", "Leaflet.js", "RestAPI"]
    },
    {
        title: "Batu Tara Submarine Morphology",
        role: "Research Assistant",
        description: "Menghasilkan Digital Elevation Models (DEM) resolusi 20 meter. Mengkalibrasi data mentah topografi pada ketinggian spesifik 748 meter untuk menghasilkan visualisasi 3D struktur vulkanik bawah laut yang akurat.",
        tech: ["Rasterio", "NumPy", "Matplotlib", "Python"]
    }
];

// --- 2. DOM MANIPULATION ---

const renderSkills = () => {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map((skill, index) => `
        <div class="card fade-in" style="transition-delay: ${index * 0.15}s">
            <h3>${skill.category}</h3>
            <div class="tech-stack">
                ${skill.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
};

const renderProjects = () => {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map((proj, index) => `
        <div class="card fade-in" style="transition-delay: ${index * 0.2}s">
            <h3>${proj.title}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 15px; font-weight: bold; font-size: 0.85em; letter-spacing: 0.5px;">${proj.role.toUpperCase()}</p>
            <p>${proj.description}</p>
            <div class="tech-stack">
                ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
};

// --- 3. ANIMASI INTERAKTIF ---

// Efek Typewriter
const roles = ["WebGIS Developer", "Software Engineer", "Oceanographer", "IoT Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentRole = roles[roleIndex];
    const typewriterElement = document.getElementById('typewriter');
    
    if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2500; // Jeda sebelum menghapus
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Jeda sebelum mengetik kata baru
    }

    setTimeout(typeEffect, typeSpeed);
};

// Intersection Observer tingkat lanjut untuk scroll dinamis
const setupScrollAnimation = () => {
    // Kita menargetkan semua elemen dengan class fade-in, baik teks maupun card
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Menambahkan class visible untuk memicu animasi CSS
                entry.target.classList.add('visible');
                // Menghentikan observasi setelah animasi berjalan agar tidak terulang terus
                observer.unobserve(entry.target);
            }
        });
    }, { 
        // Animasi akan terpicu ketika 15% bagian dari elemen sudah masuk layar
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => observer.observe(el));
};

// --- 4. INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    typeEffect();
    
    // Perlu sedikit jeda agar DOM ter-render sepenuhnya sebelum observer dipasang ke kartu dinamis
    setTimeout(setupScrollAnimation, 100);
});