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
    { name: "GNSS", desc: "Global Navigation Satellite System (RTK)", file: "gnss" }
];

const partnersData = [
    { name: "ITB", file: "itb" },
    { name: "BRIN", file: "brin" },
    { name: "KKP", file: "kkp" },
    { name: "LPDP", file: "lpdp" },
    { name: "PT Brajakara", file: "brajakara" },
    { name: "PT Prihaditama", file: "prihaditama" },
    { name: "Protokol ITB", file: "protokol-itb" },
    { name: "Hidayahsubuh", file: "hidayahsubuh" },
    { name: "ALC Indonesia", file: "alc" },
    { name: "Jinje Smart Academy", file: "jinje" },
    { name: "Sakola Kembara", file: "sakola-kembara" },
    { name: "Rumah Amal Salman", file: "rumah-amal-salman" }
];

const skillsData = [
    {
        icon: "◆",
        type: "hard",
        category: "Front-end Development",
        desc: "Pengembangan antarmuka WebGIS interaktif dan aplikasi web responsif dengan library modern.",
        items: ["React", "JavaScript", "HTML/CSS", "Leaflet.js", "WebGIS UI", "Responsive Design"]
    },
    {
        icon: "▤",
        type: "hard",
        category: "Back-end Development",
        desc: "Pengembangan REST API, integrasi database geospasial, dan back-end scalable untuk platform WebGIS.",
        items: ["Python", "GeoDjango", "Django REST Framework", "REST API", "PostgreSQL", "PostGIS"]
    },
    {
        icon: "≋",
        type: "hard",
        category: "Marine Data & Oceanography",
        desc: "Pengolahan dan analisis data metocean, penginderaan jauh, pemodelan numerik, dan survei hidrografi lapangan.",
        items: ["Metocean Data Processing", "Remote Sensing", "Ocean Modeling", "Hydrographic Survey", "Data Visualization", "Matlab", "Fortran"]
    },
    {
        icon: "⚡",
        type: "hard",
        category: "IoT & Instrumentation",
        desc: "Desain dan implementasi sensor IoT untuk pemantauan lingkungan dengan mikrokontroler dan sistem tenaga mandiri.",
        items: ["Arduino", "ESP32", "C++", "Sensor Development", "Solar-Powered Systems", "IoT Data Acquisition"]
    },
    {
        icon: "⬢",
        type: "soft",
        category: "Leadership & Management",
        desc: "Manajemen proyek skala besar, kepemimpinan tim lintas divisi, dan pengelolaan sumber daya manusia.",
        items: ["Project Management", "Event Management (15.000+)", "Team Leadership (50+)", "Conflict Resolution", "Recruitment", "Performance Appraisal"]
    },
    {
        icon: "⟟",
        type: "soft",
        category: "Communication",
        desc: "Komunikasi publik, protokoler high-stakes event, dan koordinasi lintas fungsi dengan stakeholder VIP.",
        items: ["Public Speaking", "Master of Ceremonies (MC)", "Stakeholder Management", "Cross-Functional Coordination", "Bilingual (ID · EN)"]
    }
];

const workData = [
    {
        avatar: "BRIN", logo: "brin",
        date: "Okt 2025 — Sekarang",
        title: "Geospatial Web Developer & Field Researcher",
        org: "National Research and Innovation Agency (BRIN)",
        desc: "Mengembangkan antarmuka front-end platform web DiVolca.Net menggunakan React, mengintegrasikan multi-source API vulkanologi untuk mendukung mitigasi bencana nasional."
    },
    {
        avatar: "PTP", logo: "prihaditama",
        date: "Mar — Apr 2026",
        title: "Marine Geophysics Intern",
        org: "PT. Prihaditama Geosciences & Oceanography Consulting",
        desc: "Memproses data Sub-Bottom Profiler (SBP) dan Ground Penetrating Radar (GPR) menggunakan ReflexW; menyusun 2D utility alignment dan peta batas subsurface di AutoCAD sebagai deliverable engineering."
    },
    {
        avatar: "KKP", logo: "kkp",
        date: "Sep 2024 — Des 2025",
        title: "Research Assistant & WebGIS Developer",
        org: "ITB × Kementerian Kelautan dan Perikanan (KKP)",
        desc: "Membangun geoportal WebGIS interaktif dengan GeoDjango dan Leaflet.js, mengintegrasikan data metocean real-time (arus, gelombang, angin) dari CMEMS dan ECMWF untuk perencanaan spasial pesisir."
    },
    {
        avatar: "PTB", logo: "brajakara",
        date: "Jun 2024 — Agu 2025",
        title: "Web Developer & IoT Instrumentation Intern",
        org: "PT. Brajakara Teknologi Media",
        desc: "Mengimplementasikan animasi vektor arus laut dinamis dan heatmap SST dengan Python; merakit sistem IoT berbasis Arduino dan antarmuka CRUD untuk manajemen data oseanografi."
    }
];

const teachingData = [
    {
        avatar: "JIN", logo: "jinje",
        date: "Jun 2026 — Sekarang",
        title: "Private Tutor — Mathematics & Physics",
        org: "Bimbel Jinje Smart Academy",
        desc: "Mengajar les privat online Matematika dan Fisika untuk siswa SMP dan SMA, mengadaptasi kurikulum sesuai profil belajar masing-masing siswa."
    },
    {
        avatar: "ALC", logo: "alc",
        date: "Sep 2025 — Mei 2026",
        title: "Physics Olympiad Coach (Regional & Provincial)",
        org: "ALC Indonesia",
        desc: "Melatih siswa SMA dan SMP untuk Olimpiade Fisika tingkat Kabupaten dan Provinsi di 4 sekolah mitra di Jawa Barat, Kalimantan Tengah, dan Jawa Timur. Delivery secara daring dan luring."
    }
];

const orgData = [
    {
        avatar: "HS", logo: "hidayahsubuh",
        date: "Jun 2025 — Sekarang",
        title: "Founder & Community Lead",
        org: "Hidayahsubuh.id",
        desc: "Mendirikan dan memimpin komunitas kemanusiaan 130+ anggota; menjalankan 20+ program sosial termasuk Qurban, kunjungan panti asuhan, dan distribusi sembako."
    },
    {
        avatar: "ITB", logo: "itb",
        date: "Feb — Jul 2025",
        title: "Head Teaching Assistant — Numerical Methods",
        org: "Institut Teknologi Bandung (ITB)",
        desc: "Memimpin tim asisten praktikum satu semester; mengelola scheduling, timeline operasional, dan sistem grading terstandar untuk 6 modul komputasi inti."
    },
    {
        avatar: "PITB", logo: "protokol-itb",
        date: "Jul 2024 — Sekarang",
        title: "Core Protocol Officer",
        org: "Protokol ITB",
        desc: "Mengkoordinasi protokoler acara kampus dengan 15.000+ peserta per event (Wisuda, Studium Generale); menjadi liaison utama untuk VIP dan pimpinan universitas."
    },
    {
        avatar: "CDT", logo: "itb",
        date: "Des 2023 — Feb 2025",
        title: "Operational & Event Coordinator",
        org: "Character Development Training (CDT) ITB 2024",
        desc: "Memimpin 50 anggota panitia lapangan untuk program orientasi 5.000 mahasiswa; merancang rundown acara dan menjadi MC utama."
    },
    {
        avatar: "OGG", logo: "itb",
        date: "Des 2022 — Jun 2023",
        title: "Head of Human Resource (PMSDM)",
        org: "Olimpiade Geografi dan Geosains (OGG) FITB ITB",
        desc: "Memimpin siklus rekrutmen dan appraisal panitia serta kepala divisi dengan framework terstruktur di Notion dan Excel; menangani relasi personal dan resolusi konflik internal."
    },
    {
        avatar: "FBM", logo: "itb",
        date: "Okt 2022 — Apr 2024",
        title: "External Relations Staff",
        org: "Forum Bidikmisi ITB",
        desc: "Menjadi liaison eksternal untuk capacity-building seminar; berkoordinasi dengan subject matter expert untuk delivery sesi edukatif."
    }
];

const volunteerData = [
    {
        avatar: "ITB", logo: "itb",
        date: "Okt 2025 — Sekarang",
        title: "Technical Assistant — EQUITY Community Development Program",
        org: "Institut Teknologi Bandung × LPDP · Cirebon",
        desc: "Merakit dan memasang fasilitas pengering rumput laut hibrida panel surya + heater elektrik untuk mengoptimalkan pasca-panen petani pesisir Muara. Output terdaftar HAKI (Solar-Powered Seaweed Drying System)."
    },
    {
        avatar: "ITB", logo: "itb",
        date: "Mar — Sep 2025",
        title: "Lead Instrument Engineer & Web Developer — VARUNA WATCH",
        org: "Institut Teknologi Bandung · Selayar Islands",
        desc: "Memimpin pengembangan sensor pesisir untuk mitigasi tsunami; menghasilkan HAKI (Sep 2025). Deploy lapangan di pulau terpencil Madu dan Karumpa serta membangun sistem visualisasi data real-time."
    },
    {
        avatar: "ITB", logo: "itb",
        date: "Mei 2024 — Jul 2025",
        title: "Program Facilitator & Educator — Sekolah Siaga Bencana",
        org: "Institut Teknologi Bandung · Garut",
        desc: "Edukasi siswa lokal tentang mitigasi bencana pesisir; menerjemahkan konsep oseanografi kompleks (rip current, gelombang bencana) menjadi panduan keselamatan yang applicable."
    },
    {
        avatar: "SK", logo: "sakola-kembara",
        date: "2023 — 2026",
        title: "Volunteer UTBK Instructor",
        org: "Sakola Kembara · Cirebon, Cililin, Bandung",
        desc: "Coaching UTBK pro-bono untuk siswa SMA prasejahtera di 3 kota selama 3 tahun berturut-turut. Sesi weekend paralel dengan aktivitas akademik dan profesional."
    },
    {
        avatar: "KWI", logo: "itb",
        date: "Mar — Mei 2024",
        title: "Project Leader Ramadhan ITB Cirebon 1445 H",
        org: "Keluarga Mahasiswa Islam ITB Kampus Cirebon (KAWAI ITB)",
        desc: "Memimpin rangkaian program Ramadhan di ITB Kampus Cirebon; mengoordinasi tim untuk pelaksanaan kegiatan spiritual dan sosial."
    },
    {
        avatar: "ASR", logo: "itb",
        date: "Nov 2022 — Apr 2023",
        title: "Volunteer — Asrama ITB Mengajar",
        org: "Asrama ITB",
        desc: "Mengajar dan mendampingi belajar untuk siswa di sekitar area Asrama ITB sebagai bagian dari program pengabdian mahasiswa baru."
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
    }
];

const hakiData = [
    {
        letter: "VW",
        title: "VARUNA WATCH — Coastal Environmental Sensor",
        type: "Ciptaan",
        role: "Pencipta Utama · Lead Instrument Engineer",
        date: "September 2025",
        number: "EC002025184212",
        related: "Proyek IoT · VARUNA WATCH",
        institution: "Direktorat Jenderal Kekayaan Intelektual"
    },
    {
        letter: "SD",
        title: "Solar-Powered Seaweed Drying Oven System",
        type: "Ciptaan",
        role: "Co-Creator · Technical Assistant",
        date: "April 2026",
        number: "EC002026053738",
        related: "Proyek IoT · LPDP EQUITY Program",
        institution: "Direktorat Jenderal Kekayaan Intelektual"
    }
];

const projectsData = [
    {
        category: "it",
        image: "images/project-1.png",
        fallback: "images/project-1.svg",
        title: "DiVolca.Net Volcanology Platform",
        role: "BRIN · 2025 — Present",
        description: "Antarmuka front-end platform web vulkanologi dengan React, mengintegrasikan multi-source API untuk mendukung sistem peringatan dini dan mitigasi bencana nasional.",
        tech: ["React", "JavaScript", "REST API", "Frontend"]
    },
    {
        category: "it",
        image: "images/project-2.png",
        fallback: "images/project-2.svg",
        title: "KKP Coastal Geoportal",
        role: "ITB × KKP · 2024 — 2025",
        description: "Geoportal interaktif untuk data metocean real-time dari CMEMS dan ECMWF, mendukung perencanaan spasial pesisir pemerintah pusat.",
        tech: ["GeoDjango", "Leaflet.js", "PostGIS", "CMEMS API"]
    },
    {
        category: "it",
        image: "images/project-3.png",
        fallback: "images/project-3.svg",
        title: "Oceanographic Dynamic Dashboard",
        role: "PT. Brajakara · 2024 — 2025",
        description: "Dashboard oseanografi dengan animasi vektor arus laut dan temporal heatmap Sea Surface Temperature (SST), lengkap dengan operasi CRUD.",
        tech: ["Python", "JavaScript", "Data Viz", "IoT"]
    },
    {
        category: "ose",
        image: "images/project-4.png",
        fallback: "images/project-4.svg",
        title: "Subsurface Mapping — SBP & GPR",
        role: "PT. Prihaditama · 2026",
        description: "Pengolahan data Sub-Bottom Profiler dan Ground Penetrating Radar dengan ReflexW; penyusunan 2D utility alignment dan peta subsurface di AutoCAD.",
        tech: ["ReflexW", "AutoCAD", "Marine Geophysics"]
    },
    {
        category: "ose",
        image: "images/project-7.png",
        fallback: "images/project-7.svg",
        title: "Batu Tara Submarine Morphology",
        role: "Research Assistant · 2023",
        description: "Digital Elevation Model resolusi 20 meter dengan kalibrasi topografi mentah pada ketinggian 748m untuk visualisasi 3D struktur vulkanik bawah laut.",
        tech: ["Rasterio", "NumPy", "Matplotlib", "Python"]
    },
    {
        category: "iot",
        image: "images/project-5.png",
        fallback: "images/project-5.svg",
        title: "VARUNA WATCH Coastal Sensor",
        role: "ITB · 2025 — HAKI Awarded",
        description: "Prototipe sensor pesisir untuk pengukuran real-time permukaan laut dan mitigasi tsunami. Sistem off-grid berbasis Arduino + panel surya. Terdaftar HAKI (Sep 2025).",
        tech: ["Arduino", "IoT", "C++", "Solar Power", "HAKI"]
    },
    {
        category: "iot",
        image: "images/project-6.png",
        fallback: "images/project-6.svg",
        title: "Solar-Powered Seaweed Drying System",
        role: "ITB × LPDP · 2026 — HAKI Awarded",
        description: "Fasilitas pengering rumput laut hibrida panel surya + heater elektrik untuk optimasi pasca-panen petani pesisir Cirebon. Program EQUITY Community Development. Terdaftar HAKI (Apr 2026).",
        tech: ["Solar Power", "Hybrid System", "IoT Monitoring", "HAKI"]
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
        <button type="button" class="instrument-card fade-in"
                style="transition-delay:${i * 0.04}s"
                data-name="${it.name}"
                data-desc="${it.desc}"
                data-img="images/instrument/${it.file}.jpg">
            <div class="instrument-photo" data-label="${it.name}">
                <img src="images/instrument/${it.file}.jpg" alt="${it.name}" onerror="this.remove()">
            </div>
            <div class="instrument-body">
                <strong>${it.name}</strong>
                <span>${it.desc}</span>
                <span class="instrument-view">Klik untuk lihat foto</span>
            </div>
        </button>
    `).join('');
};

const setupInstrumentModal = () => {
    const modal = document.getElementById('instrumentModal');
    if (!modal) return;
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalFallback = document.getElementById('modalFallback');
    const modalImageWrap = document.getElementById('modalImageWrap');

    const open = (name, desc, imgSrc) => {
        modalTitle.textContent = name;
        modalDesc.textContent = desc;
        modalFallback.textContent = name;
        modalImageWrap.classList.remove('has-image');
        modalImg.style.display = 'none';
        modalImg.onload = () => {
            modalImg.style.display = 'block';
            modalImageWrap.classList.add('has-image');
        };
        modalImg.onerror = () => {
            modalImg.style.display = 'none';
            modalImageWrap.classList.remove('has-image');
        };
        modalImg.src = imgSrc;
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.instrument-card').forEach(card => {
        card.addEventListener('click', () => {
            open(card.dataset.name, card.dataset.desc, card.dataset.img);
        });
    });
    document.getElementById('modalClose').addEventListener('click', close);
    modal.querySelector('.modal-backdrop').addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) close();
    });
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
    const hardContainer = document.getElementById('skills-hard-container');
    const softContainer = document.getElementById('skills-soft-container');
    const buildCards = (items, offset = 0) => items.map((skill, i) => `
        <div class="card skill-card skill-${skill.type} fade-in" style="transition-delay:${(i + offset) * 0.1}s">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.category}</h3>
            <p>${skill.desc}</p>
            <div class="tech-stack">
                ${skill.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
    const hard = skillsData.filter(s => s.type === 'hard');
    const soft = skillsData.filter(s => s.type === 'soft');
    if (hardContainer) hardContainer.innerHTML = buildCards(hard);
    if (softContainer) softContainer.innerHTML = buildCards(soft, hard.length);
};

const renderTimeline = (containerId, data) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map((item, i) => `
        <div class="timeline-item fade-in" style="transition-delay:${i * 0.06}s">
            <div class="timeline-avatar" data-fallback="${item.avatar}">
                ${item.logo ? `<img src="images/partner/${item.logo}.png" alt="${item.org}" onerror="this.remove()">` : ''}
            </div>
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
    const containers = {
        it: document.getElementById('projects-it'),
        ose: document.getElementById('projects-ose'),
        iot: document.getElementById('projects-iot')
    };
    const cardHtml = (proj, i) => `
        <div class="card project-card fade-in" style="transition-delay:${i * 0.1}s">
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
    `;
    Object.entries(containers).forEach(([cat, container]) => {
        if (!container) return;
        const items = projectsData.filter(p => p.category === cat);
        container.innerHTML = items.map(cardHtml).join('');
    });
};

const setupProjectTabs = () => {
    const buttons = document.querySelectorAll('#projects .tab-btn');
    const panels = {
        it: document.getElementById('projects-it'),
        ose: document.getElementById('projects-ose'),
        iot: document.getElementById('projects-iot')
    };
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.ptab;
            Object.entries(panels).forEach(([k, panel]) => {
                if (!panel) return;
                panel.style.display = k === tab ? 'grid' : 'none';
                panel.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
            });
        });
    });
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

const renderHaki = () => {
    const container = document.getElementById('haki-container');
    if (!container) return;
    container.innerHTML = hakiData.map((h, i) => `
        <div class="haki-card fade-in" style="transition-delay:${i * 0.12}s">
            <div class="haki-seal-wrap">
                <div class="haki-seal">${h.letter}</div>
                <div class="haki-type">${h.type}</div>
            </div>
            <div class="haki-body">
                <div class="haki-eyebrow">Kekayaan Intelektual (HAKI)</div>
                <h3>${h.title}</h3>
                <div class="haki-role">${h.role}</div>
                <div class="haki-meta">
                    <div class="haki-meta-row"><span>No. Registrasi</span><strong>${h.number}</strong></div>
                    <div class="haki-meta-row"><span>Tanggal</span><strong>${h.date}</strong></div>
                    <div class="haki-meta-row"><span>Instansi</span><strong>${h.institution}</strong></div>
                    <div class="haki-meta-row"><span>Terkait</span><strong>${h.related}</strong></div>
                </div>
            </div>
        </div>
    `).join('');
};

const renderCerts = () => {
    const container = document.getElementById('cert-container');
    container.innerHTML = certData.map((c, i) => `
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
    const buttons = document.querySelectorAll('#experience .tab-btn');
    const panels = {
        work: document.getElementById('timeline-work'),
        teach: document.getElementById('timeline-teach'),
        org: document.getElementById('timeline-org')
    };
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            Object.entries(panels).forEach(([k, panel]) => {
                if (!panel) return;
                panel.style.display = k === tab ? 'block' : 'none';
                panel.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
            });
        });
    });
};

// --- 4. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderRoles();
    renderSkills();
    renderTimeline('timeline-work', workData);
    renderTimeline('timeline-teach', teachingData);
    renderTimeline('timeline-org', orgData);
    renderTimeline('timeline-volunteer', volunteerData);
    renderSoftwareOse();
    renderExpertise();
    renderInstruments();
    renderProjects();
    renderAwards();
    renderHaki();
    renderPartners();
    renderCerts();
    typeEffect();
    setupScrollProgress();
    setupNavToggle();
    setupExperienceTabs();
    setupProjectTabs();
    setupInstrumentModal();
    setTimeout(() => {
        setupScrollAnimation();
        animateStats();
    }, 100);
});
