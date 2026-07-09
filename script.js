// --- 1. DATA ---

const rolesData = [
    {
        icon: "◆",
        title: "Software Engineer",
        desc: "Pengembangan platform WebGIS, front-end React, dan aplikasi spasial interaktif untuk lembaga riset & pemerintah.",
        tags: ["Python", "React", "Leaflet.js", "GeoDjango"]
    },
    {
        icon: "≋",
        title: "Oceanographer",
        desc: "Analisis dan visualisasi data metocean, pemodelan oseanografi, remote sensing, dan survei hidrografi.",
        tags: ["Metocean", "Pemodelan", "Remote Sensing", "Hidrografi"]
    },
    {
        icon: "⟟",
        title: "Instrumentation Engineer",
        desc: "Desain sensor lapangan berbasis IoT dan pengoperasian instrumen oseanografi profesional untuk survei kelautan.",
        tags: ["Arduino", "CTD", "RTK/GNSS", "IoT"]
    }
];

const softwareOseData = [
    { name: "Python", file: "python", fallback: "Py" },
    { name: "Matlab", file: "matlab", fallback: "M" },
    { name: "Fortran", file: "fortran", fallback: "Fx" },
    { name: "Ocean Data View", file: "odv", fallback: "ODV" },
    { name: "ArcGIS", file: "arcgis", fallback: "AG" },
    { name: "QGIS", file: "qgis", fallback: "Q" },
    { name: "Global Mapper", file: "globalmapper", fallback: "GM" },
    { name: "COMCOT", file: "comcot", fallback: "CC" },
    { name: "Surfer", file: "surfer", fallback: "Sf" },
    { name: "AutoCAD", file: "autocad", fallback: "AC" },
    { name: "ReflexW", file: "reflexw", fallback: "Rx" },
    { name: "Google Earth Pro", file: "gearth", fallback: "GE" },
    { name: "Google Earth Engine", file: "gee", fallback: "GEE" },
    { name: "SWAN", file: "swan", fallback: "SW" },
    { name: "WRPlot", file: "wrplot", fallback: "WR" }
];

const expertiseData = [
    {
        title: "Remote Sensing",
        desc: "Interpretasi citra satelit oseanografi dan pengolahan data penginderaan jauh multispektral.",
        file: "remote-sensing"
    },
    {
        title: "Pemodelan Oseanografi",
        desc: "Simulasi numerik dinamika laut, gelombang (SWAN), dan pemodelan tsunami (COMCOT).",
        file: "pemodelan"
    },
    {
        title: "Prosesing & Visualisasi Data",
        desc: "Pengolahan data metocean mentah menjadi produk visual interaktif dan dashboard.",
        file: "visualisasi"
    },
    {
        title: "Survey Hidrografi",
        desc: "Survei batimetri, topografi pesisir, dan akuisisi data lapangan menggunakan SBES & RTK.",
        file: "hidrografi"
    }
];

const instrumentsData = [
    { name: "CTD", desc: "Conductivity, Temperature, Depth", file: "ctd" },
    { name: "WQM", desc: "Water Quality Monitor", file: "wqm" },
    { name: "Current Meter", desc: "Pengukur arus laut", file: "current-meter" },
    { name: "Refraktometer", desc: "Salinitas air laut", file: "refraktometer" },
    { name: "pH Meter", desc: "Keasaman air", file: "ph-meter" },
    { name: "Theodolit", desc: "Survei topografi presisi", file: "theodolit" },
    { name: "GPS", desc: "Positioning geospasial", file: "gps" },
    { name: "AWS", desc: "Automatic Weather Station", file: "aws" },
    { name: "Tide Gauge", desc: "Perekam pasang surut", file: "tide-gauge" },
    { name: "SBES", desc: "Single-Beam Echosounder", file: "sbes" },
    { name: "Nivo", desc: "Waterpass survei elevasi", file: "nivo" },
    { name: "RTK", desc: "Real-Time Kinematic positioning", file: "rtk" },
    { name: "GNSS", desc: "Global Navigation Satellite System", file: "gnss" }
];

const partnersData = [
    { name: "PT Brajakara", file: "brajakara" },
    { name: "PT Prihaditama", file: "prihaditama" },
    { name: "ITB", file: "itb" },
    { name: "KKP", file: "kkp" },
    { name: "BRIN", file: "brin" }
];

const skillsData = [
    {
        icon: "◆",
        category: "WebGIS Development",
        desc: "Membangun platform spasial interaktif untuk visualisasi data geografis.",
        items: ["Python", "GeoDjango", "Leaflet.js", "JavaScript", "React"]
    },
    {
        icon: "▤",
        category: "Spatial Data & GIS",
        desc: "Pemrosesan dan analisis data spasial dari berbagai sumber.",
        items: ["QGIS", "PostGIS", "Rasterio", "NumPy", "Cartopy"]
    },
    {
        icon: "⟟",
        category: "Backend & Database",
        desc: "Pengembangan REST API dan manajemen database geospasial.",
        items: ["Django REST", "PostgreSQL", "PostGIS", "SQL"]
    },
    {
        icon: "≋",
        category: "Marine Data Analysis",
        desc: "Analisis data oseanografi dan metocean untuk pemodelan.",
        items: ["Metocean Data", "CMEMS", "ECMWF", "Matplotlib"]
    }
];

const workData = [
    {
        avatar: "BRIN",
        date: "Okt 2025 — Sekarang",
        title: "Geospatial Web Developer & Field Researcher",
        org: "National Research and Innovation Agency (BRIN)",
        desc: "Mengembangkan antarmuka front-end platform web DiVolca.Net menggunakan React, mengintegrasikan multi-source API vulkanologi untuk mendukung mitigasi bencana nasional."
    },
    {
        avatar: "PTP",
        date: "Mar — Apr 2026",
        title: "Marine Geophysics Intern",
        org: "PT. Prihaditama Geosciences & Oceanography Consulting",
        desc: "Memproses data Sub-Bottom Profiler (SBP) dan Ground Penetrating Radar (GPR) menggunakan ReflexW; menyusun 2D utility alignment dan peta batas subsurface di AutoCAD sebagai deliverable engineering."
    },
    {
        avatar: "KKP",
        date: "Sep 2024 — Des 2025",
        title: "Research Assistant & WEBGIS Developer",
        org: "ITB × Kementerian Kelautan dan Perikanan (KKP)",
        desc: "Membangun geoportal WebGIS interaktif dengan GeoDjango dan Leaflet.js, mengintegrasikan data metocean real-time (arus, gelombang, angin) dari CMEMS dan ECMWF untuk perencanaan spasial pesisir."
    },
    {
        avatar: "PTB",
        date: "Jun 2024 — Agu 2025",
        title: "Web Developer & IoT Instrumentation Intern",
        org: "PT. Brajakara Teknologi Media",
        desc: "Mengimplementasikan animasi vektor arus laut dinamis dan heatmap SST dengan Python; merakit sistem IoT berbasis Arduino dan antarmuka CRUD untuk manajemen data oseanografi."
    }
];

const orgData = [
    {
        avatar: "HS",
        date: "Jun 2025 — Sekarang",
        title: "Founder & Community Lead",
        org: "Hidayahsubuh.id",
        desc: "Mendirikan dan memimpin komunitas kemanusiaan 130+ anggota; menjalankan 20+ program sosial termasuk Qurban, kunjungan panti asuhan, dan distribusi sembako."
    },
    {
        avatar: "ITB",
        date: "Feb — Jul 2025",
        title: "Head Teaching Assistant — Numerical Methods",
        org: "Institut Teknologi Bandung (ITB)",
        desc: "Memimpin tim asisten praktikum satu semester; mengelola scheduling, timeline operasional, dan sistem grading terstandar untuk 6 modul komputasi inti."
    },
    {
        avatar: "PITB",
        date: "Jul 2024 — Sekarang",
        title: "Core Protocol Officer",
        org: "Protokol ITB",
        desc: "Mengkoordinasi protokoler acara kampus dengan 15.000+ peserta per event (Wisuda, Studium Generale); menjadi liaison utama untuk VIP dan pimpinan universitas."
    },
    {
        avatar: "CDT",
        date: "Des 2023 — Feb 2025",
        title: "Operational & Event Coordinator",
        org: "Character Development Training (CDT) ITB 2024",
        desc: "Memimpin 50 anggota panitia lapangan untuk program orientasi 5.000 mahasiswa; merancang rundown acara dan menjadi MC utama."
    },
    {
        avatar: "OGG",
        date: "Des 2022 — Jun 2023",
        title: "Head of Human Resource (PMSDM)",
        org: "Olimpiade Geografi dan Geosains (OGG) FITB ITB",
        desc: "Memimpin siklus rekrutmen dan appraisal panitia serta kepala divisi dengan framework terstruktur di Notion dan Excel; menangani relasi personal dan resolusi konflik internal."
    },
    {
        avatar: "FBM",
        date: "Okt 2022 — Apr 2024",
        title: "External Relations Staff",
        org: "Forum Bidikmisi ITB",
        desc: "Menjadi liaison eksternal untuk capacity-building seminar; berkoordinasi dengan subject matter expert untuk delivery sesi edukatif."
    }
];

const achievementData = [
    {
        badge: "C",
        title: "Cum Laude Candidate",
        issuer: "Institut Teknologi Bandung (ITB)",
        detail: "GPA 3.74/4.00 · 4× Dean's List Awardee · Head TA Numerical Methods.",
        year: "2022 — 2026"
    },
    {
        badge: "H",
        title: "Intellectual Property Rights (HAKI) × 2",
        issuer: "Direktorat Jenderal Kekayaan Intelektual",
        detail: "VARUNA WATCH Coastal Sensor (Sep 2025) & Solar-Powered Seaweed Drying Oven System — co-creator (Apr 2026).",
        year: "2025 & 2026"
    },
    {
        badge: "S",
        title: "Dual Scholarship Recipient",
        issuer: "KIP Kuliah (KIPK) & PT Timah Tbk",
        detail: "Penerima beasiswa nasional (Kemendikbud) dan korporasi (PT Timah Tbk) sepanjang studi S1.",
        year: "2022 — 2026"
    },
    {
        badge: "D",
        title: "Official ITB Delegate",
        issuer: "Startup Ecosystem × NUS Singapore & KIPK Forum Kemendikbud",
        detail: "Delegasi ITB di Startup Ecosystem Program with Universitas Tarumanagara × NUS Singapore (Jan 2025) dan National KIPK Forum di Kementerian Pendidikan (Mei 2024).",
        year: "2024 & 2025"
    },
    {
        badge: "B",
        title: "Co-author Buku Edukasi",
        issuer: "\"Menjelajahi Laut dan Mengenal Bencananya\"",
        detail: "Buku edukatif untuk meningkatkan literasi laut di kawasan Kalaotoa. ISBN 978-623-127-880-7.",
        year: "Mei 2026"
    }
];

const projectsData = [
    {
        image: "images/project-1.png",
        fallback: "images/project-1.svg",
        title: "DiVolca.Net Volcanology Platform",
        role: "BRIN · 2025 — Present",
        description: "Antarmuka front-end platform web vulkanologi dengan React, mengintegrasikan multi-source API untuk mendukung sistem peringatan dini dan mitigasi bencana nasional.",
        tech: ["React", "JavaScript", "REST API", "Frontend"]
    },
    {
        image: "images/project-2.png",
        fallback: "images/project-2.svg",
        title: "KKP Coastal Geoportal",
        role: "ITB × KKP · 2024 — 2025",
        description: "Geoportal interaktif untuk data metocean real-time dari CMEMS dan ECMWF, mendukung perencanaan spasial pesisir pemerintah pusat.",
        tech: ["GeoDjango", "Leaflet.js", "PostGIS", "CMEMS API"]
    },
    {
        image: "images/project-3.png",
        fallback: "images/project-3.svg",
        title: "Oceanographic Dynamic Dashboard",
        role: "PT. Brajakara · 2024 — 2025",
        description: "Dashboard oseanografi dengan animasi vektor arus laut dan temporal heatmap Sea Surface Temperature (SST), lengkap dengan operasi CRUD.",
        tech: ["Python", "JavaScript", "Data Viz", "IoT"]
    },
    {
        image: "images/project-4.png",
        fallback: "images/project-4.svg",
        title: "Subsurface Mapping — SBP & GPR",
        role: "PT. Prihaditama · 2026",
        description: "Pengolahan data Sub-Bottom Profiler dan Ground Penetrating Radar dengan ReflexW; penyusunan 2D utility alignment dan peta subsurface di AutoCAD.",
        tech: ["ReflexW", "AutoCAD", "Marine Geophysics"]
    }
];

const certData = [
    {
        badge: "T",
        title: "TOEFL Preparation",
        issuer: "EPLC — English Language Proficiency Course",
        duration: "2 Bulan",
        year: "2026"
    },
    {
        badge: "S",
        title: "Startup Ecosystem Exposure — SEE 2025 × NUS",
        issuer: "DKST ITB × National University of Singapore",
        duration: "1 Minggu",
        year: "2025"
    }
];

// --- 2. RENDER ---

const renderRoles = () => {
    const container = document.getElementById('roles-container');
    container.innerHTML = rolesData.map((r, i) => `
        <div class="role-card fade-in" style="transition-delay:${i * 0.1}s">
            <div class="role-icon">${r.icon}</div>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <ul class="role-tags">
                ${r.tags.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
    `).join('');
};

const renderSoftwareOse = () => {
    const container = document.getElementById('software-ose-container');
    container.innerHTML = softwareOseData.map((s, i) => `
        <div class="software-card fade-in" style="transition-delay:${i * 0.04}s">
            <div class="software-logo" data-fallback="${s.fallback}">
                <img src="images/software/${s.file}.png" alt="${s.name}" onerror="this.remove()">
            </div>
            <div class="software-name">${s.name}</div>
        </div>
    `).join('');
};

const renderExpertise = () => {
    const container = document.getElementById('expertise-container');
    container.innerHTML = expertiseData.map((e, i) => `
        <div class="expertise-card fade-in" style="transition-delay:${i * 0.08}s">
            <div class="expertise-photo" data-label="${e.title}">
                <img src="images/skill/${e.file}.jpg" alt="${e.title}" onerror="this.remove()">
            </div>
            <div class="expertise-body">
                <h3>${e.title}</h3>
                <p>${e.desc}</p>
            </div>
        </div>
    `).join('');
};

const renderInstruments = () => {
    const container = document.getElementById('instrument-container');
    container.innerHTML = instrumentsData.map((it, i) => `
        <div class="instrument-card fade-in" style="transition-delay:${i * 0.04}s">
            <div class="instrument-photo" data-label="${it.name}">
                <img src="images/instrument/${it.file}.jpg" alt="${it.name}" onerror="this.remove()">
            </div>
            <div class="instrument-body">
                <strong>${it.name}</strong>
                <span>${it.desc}</span>
            </div>
        </div>
    `).join('');
};

const renderPartners = () => {
    const container = document.getElementById('partners-container');
    container.innerHTML = partnersData.map((p, i) => `
        <div class="partner-card fade-in" data-name="${p.name}" style="transition-delay:${i * 0.06}s">
            <img src="images/partner/${p.file}.png" alt="${p.name}" onerror="this.remove()">
        </div>
    `).join('');
};

const renderSkills = () => {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillsData.map((skill, i) => `
        <div class="card fade-in" style="transition-delay:${i * 0.1}s">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.category}</h3>
            <p>${skill.desc}</p>
            <div class="tech-stack">
                ${skill.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
};

const renderTimeline = (containerId, data) => {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map((item, i) => `
        <div class="timeline-item fade-in" style="transition-delay:${i * 0.08}s">
            <div class="timeline-avatar">${item.avatar}</div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-org">${item.org}</div>
                <p class="timeline-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
};

const renderProjects = () => {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map((proj, i) => `
        <div class="card project-card fade-in" style="transition-delay:${i * 0.12}s">
            <div class="project-image">
                <img src="${proj.image}" alt="${proj.title}" loading="lazy" onerror="this.onerror=null;this.src='${proj.fallback}'">
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

const renderAwards = () => {
    const container = document.getElementById('award-container');
    container.innerHTML = achievementData.map((a, i) => `
        <div class="award-card fade-in" style="transition-delay:${i * 0.08}s">
            <div class="award-badge">${a.badge}</div>
            <div class="award-body">
                <h3>${a.title}</h3>
                <div class="award-issuer">${a.issuer}</div>
                <div class="award-detail">${a.detail}</div>
                <span class="award-year">${a.year}</span>
            </div>
        </div>
    `).join('');
};

const renderCerts = () => {
    const container = document.getElementById('cert-container');
    const cards = certData.map((c, i) => `
        <div class="cert-card fade-in" style="transition-delay:${i * 0.1}s">
            <div class="cert-badge">${c.badge}</div>
            <div class="cert-body">
                <h3>${c.title}</h3>
                <div class="cert-issuer">${c.issuer}</div>
                <div class="cert-meta">
                    <span>${c.year}</span>
                    <span>${c.duration}</span>
                </div>
            </div>
        </div>
    `).join('');
    const placeholder = `
        <div class="cert-placeholder fade-in">
            <strong>+ Ruang untuk sertifikasi berikutnya</strong><br>
            Tambahkan sertifikat baru di <code>script.js</code> → array <code>certData</code>.
        </div>
    `;
    container.innerHTML = cards + placeholder;
};

// --- 3. INTERAKSI ---

const roles = ["Software Engineer", "Oceanographer", "Instrumentation Engineer"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

const swapHeroPhoto = (index) => {
    document.querySelectorAll('.hero-photo-img').forEach((img) => {
        img.classList.toggle('active', +img.dataset.roleIndex === index);
    });
};

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
    let typeSpeed = isDeleting ? 30 : 75;
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        swapHeroPhoto(roleIndex);
        typeSpeed = 400;
    }
    setTimeout(typeEffect, typeSpeed);
};

const setupScrollAnimation = () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

const animateStats = () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            const format = el.dataset.format;
            const duration = 1200;
            const start = performance.now();
            const step = (now) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                const val = eased * target;
                if (format === 'decimal') {
                    el.textContent = (val / 100).toFixed(2);
                } else {
                    el.textContent = Math.floor(val);
                }
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = format === 'decimal' ? (target / 100).toFixed(2) : target;
            };
            requestAnimationFrame(step);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-num').forEach(s => observer.observe(s));
};

const setupScrollProgress = () => {
    const bar = document.getElementById('scrollBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        bar.style.width = percent + '%';
    });
};

const setupNavToggle = () => {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => links.classList.remove('open'))
    );
};

const setupExperienceTabs = () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const work = document.getElementById('timeline-work');
    const org = document.getElementById('timeline-org');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            if (tab === 'work') { work.style.display = 'block'; org.style.display = 'none'; }
            else { work.style.display = 'none'; org.style.display = 'block'; }
            org.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
            work.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        });
    });
};

// --- 4. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderRoles();
    renderSkills();
    renderTimeline('timeline-work', workData);
    renderTimeline('timeline-org', orgData);
    renderSoftwareOse();
    renderExpertise();
    renderInstruments();
    renderProjects();
    renderAwards();
    renderPartners();
    renderCerts();
    typeEffect();
    setupScrollProgress();
    setupNavToggle();
    setupExperienceTabs();
    setTimeout(() => {
        setupScrollAnimation();
        animateStats();
    }, 100);
});
