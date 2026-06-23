document.addEventListener('DOMContentLoaded', () => {
    // Experience Toggle Logic
    const expItems = document.querySelectorAll('.exp-item');
    expItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            expItems.forEach(i => i.classList.remove('active'));

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Translation Data
    const translations = {
        'id': {
            'nav-home': 'Home',
            'nav-experience': 'Pengalaman',
            'nav-skills': 'Keahlian & Edukasi',
            'nav-achievements': 'Pencapaian',
            'nav-contact': 'Hubungi Saya',
            'hero-badge': 'Siap untuk Peluang Karir Baru',
            'hero-title': 'Paduan <span>Estetika</span> & <br>Inovasi <span>Digital.</span>',
            'hero-subtitle': 'Saya adalah seorang <strong>Visual Communication & Digital Transformation Designer</strong> dengan keahlian komprehensif di bidang UI/UX, Front-End Development, dan Desain Grafis. Berpengalaman dalam memberikan solusi visual strategis untuk berbagai institusi besar termasuk BUMN dan Kementerian.',
            'hero-btn-exp': 'Lihat Pengalaman <i class="fas fa-arrow-right"></i>',
            'hero-btn-cv': 'Unduh CV <i class="fas fa-download"></i>',
            'hero-trust': 'Berpengalaman memberikan dampak positif di:',
            'trust-1': 'BUMN',
            'trust-2': 'Kementerian',
            'trust-3': 'Korporat Multinasional',
            'trust-4': 'BUMN',
            'card-1-title': 'UI/UX & Front-End',
            'card-1-subtitle': 'Google Certified',
            'card-2-title': 'Graphic Design',
            'card-2-subtitle': 'Adobe Certified',
            'exp-header-title': 'Pengalaman <span>Profesional</span>',
            'exp-header-subtitle': 'Rekam jejak karir yang berfokus pada transformasi digital dan komunikasi visual strategis.',
            'exp-1-date': 'Februari 2026 – Juli 2026',
            'exp-1-role': 'Front-End Web Developer & UI/UX Designer (Internship)',
            'exp-1-bullet-1': 'Menerapkan metodologi <em>design thinking</em> melalui tahapan riset pengguna, <em>wireframing</em>, <em>high-fidelity prototyping</em>, dan pengujian iteratif untuk memastikan setiap antarmuka digital selaras dengan kebutuhan fungsional pengguna dan tujuan strategis bisnis.',
            'exp-1-bullet-2': '<strong>Mengembangkan dan menstrukturisasi antarmuka web (Front-End) secara presisi menggunakan HTML, CSS, dan JavaScript, menjembatani hasil rancangan UI/UX ke dalam produk web yang fungsional, interaktif, responsif, dan siap rilis.</strong>',
            'exp-2-date': 'Desember 2025 – Januari 2026',
            'exp-2-role': 'Graphic Designer (Remote Freelance Project)',
            'exp-2-bullet-1': 'Penanggung jawab Project Desain Presentasi PROPER PT Pertamina Geothermal Energy Tbk Area Lahendong untuk penilaian kinerja pengelolaan lingkungan hidup oleh Kementerian Lingkungan Hidup dan Kehutanan (40+ desain).',
            'exp-2-bullet-2': 'Berhasil mengolah data kinerja lingkungan dan sosial yang kompleks menjadi visual yang komunikatif dan profesional guna mendukung target perusahaan meraih predikat PROPER EMAS.',
            'exp-3-date': 'November 2025 – Januari 2026',
            'exp-3-role': 'Graphic Designer (Hybrid Contract Worker)',
            'exp-3-bullet-1': 'Penanggung jawab Project Desain Presentasi PROPER PT Kilang Pertamina Internasional Refinery Unit IV Cilacap untuk penilaian kinerja (40+ desain).',
            'exp-3-bullet-2': 'Berhasil mengolah data kinerja lingkungan dan sosial yang kompleks menjadi visual yang komunikatif guna mendukung raihan predikat PROPER EMAS.',
            'exp-4-date': 'Februari 2025 – September 2025',
            'exp-4-role': 'Multimedia Designer (Magenta BUMN On-Site Intern)',
            'exp-4-bullet-1': 'Mendesain aset visual untuk keperluan kampanye digital & non-digital sesuai dengan visual guideline perusahaan dan kebutuhan komunikasi Bagian Marketing Communication dan Hubungan Masyarakat.',
            'exp-4-bullet-2': 'Optimasi visual media cetak dan media sosial Perum Bulog Kanwil Yogyakarta.',
            'exp-4-bullet-3': '<em>Pencapaian: Sertifikat Magenta BUMN dengan Nilai A (Sangat Memuaskan).</em>',
            'exp-5-date': 'September 2024 – Desember 2024',
            'exp-5-role': 'Graphic Designer & Illustrator (MSIB Batch 7)',
            'exp-5-bullet-1': 'Membuat ilustrasi, ikon, dan aset branding untuk Program Nasional Pusat Perbukuan.',
            'exp-5-bullet-2': 'Berkolaborasi dengan divisi humas dalam penyusunan desain konten sosial media.',
            'exp-5-bullet-3': 'Mendesain Buku Pedoman ZI-WBK | WBBM BSKAP 2024 dan Ilustrasi Buku Non-Teks Komik Jenjang E untuk Kampanye Anti-Bullying.',
            'skills-header': 'Keahlian & <span>Software</span>',
            'hard-skills-title': 'Hard Skills',
            'skill-1': 'UI/UX Design',
            'skill-2': 'Front-End (HTML, CSS, JS)',
            'skill-3': 'Logo & Branding Elements',
            'skill-4': 'Iconography',
            'skill-5': 'Digital Layout',
            'skill-6': 'Aset Media Sosial',
            'soft-skills-title': 'Soft Skills',
            'soft-1': 'Kreativitas Tinggi & Kepekaan Estetika',
            'soft-2': 'Kolaborasi Tim & Komunikasi Proyek',
            'soft-3': 'Kemampuan Adaptasi & Iterasi berdasarkan Feedback',
            'software-title': 'Software Mastery',
            'edu-header': 'Edukasi & <span>Sertifikasi</span>',
            'gpa': 'IPK: 3.69 / 4.00',
            'degree': 'S1 Desain Komunikasi Visual',
            'edu-date': 'Agustus 2021 – Januari 2026',
            'edu-bullet-1': 'Fokus pada desain branding, ilustrasi digital, komunikasi visual, dan layout digital.',
            'edu-bullet-2': 'Aktif dalam kepanitiaan, proyek desain, dan kompetisi (Juara 3 Nasional PPK ORMAWA).',
            'cert-header': 'Sertifikasi Internasional & Nasional',
            'cert-1-desc': 'Graphic Design and Illustration using Adobe Illustrator',
            'cert-2-desc': 'UX Design Professional',
            'cert-3-title': 'Sertifikat Bahasa Asing',
            'cert-3-desc': 'EFSET (C2 Proficient) | TOEFL ITP (Skor: 543/677)',
            'ach-header-title': 'Pencapaian & <span>Aktivitas</span>',
            'ach-header-subtitle': 'Dedikasi dan apresiasi atas karya serta partisipasi aktif di bidang desain kreatif.',
            'ach-card-1-title': 'Penghargaan',
            'ach-1': '<strong>Juara 1</strong> – Desain Maskot & Branding, BSKAP Kemendikbudristek (2024)',
            'ach-2': '<strong>Juara 3 Nasional</strong> – Kategori SDG’s Terkuat, Abdidaya PPK ORMAWA (2023)',
            'ach-3': '<strong>Juara 2 Provinsi</strong> – Lomba Mural, Solo Technopark (2022)',
            'ach-4': '<strong>Juara 3 Nasional</strong> – Lomba Manga, Mangafest UGM (2021)',
            'ach-card-2-title': 'Pameran Karya',
            'ach-card-3-title': 'Pelatihan & Organisasi',
            'ach-org': '<strong>PPK ORMAWA HIMA DKV ISI Surakarta</strong> - Memberikan Workshop Desain & Digital Marketing (2023)',
            'ach-train-1': 'Bootcamp UI/UX Design Special Skill Indonesia (Predikat “Excellent”)',
            'ach-train-2': 'Rakamin PBI – UI/UX Designer Nuri',
            'ach-train-3': 'Rakamin PBI – UX Researcher Telkom Digital Amoeba',
            'contact-header': 'Mari ciptakan solusi digital <span>berdampak besar</span> bersama.',
            'contact-subtitle': 'Membutuhkan tenaga profesional di bidang desain komunikasi visual atau front-end development? Saya siap berdiskusi untuk membawa nilai tambah bagi perusahaan Anda.',
            'form-name': 'Nama Lengkap / Perusahaan',
            'form-email': 'Email Profesional',
            'form-message': 'Detail Pesan / Penawaran',
            'form-btn': 'Kirim Pesan <i class="fas fa-paper-plane"></i>',
            'exp-btn-portfolio': 'Lihat Portofolio <i class="fas fa-external-link-alt"></i>',
            'exp-1-location': 'Jakarta, Indonesia',
            'exp-2-location': 'Sulawesi Utara (Remote)',
            'exp-3-location': 'Cilacap, Jawa Tengah',
            'exp-4-location': 'Yogyakarta, Indonesia',
            'exp-5-location': 'Jakarta, Indonesia'
        },
        'en': {
            'nav-home': 'Home',
            'nav-experience': 'Experience',
            'nav-skills': 'Skills & Education',
            'nav-achievements': 'Achievements',
            'nav-contact': 'Contact Me',
            'hero-badge': 'Ready for New Opportunities',
            'hero-title': 'Merging <span>Aesthetics</span> & <br>Digital <span>Innovation.</span>',
            'hero-subtitle': 'I am a <strong>Visual Communication & Digital Transformation Designer</strong> with comprehensive expertise in UI/UX, Front-End Development, and Graphic Design. Experienced in delivering strategic visual solutions for various major institutions including BUMN and Ministries.',
            'hero-btn-exp': 'View Experience <i class="fas fa-arrow-right"></i>',
            'hero-btn-cv': 'Download CV <i class="fas fa-download"></i>',
            'hero-trust': 'Experienced in delivering positive impact at:',
            'trust-1': 'State-Owned Enterprises (BUMN)',
            'trust-2': 'Government Ministries',
            'trust-3': 'Multisector Corporations',
            'trust-4': 'BUMN',
            'card-1-title': 'UI/UX & Front-End',
            'card-1-subtitle': 'Google Certified',
            'card-2-title': 'Graphic Design',
            'card-2-subtitle': 'Adobe Certified',
            'exp-header-title': 'Professional <span>Experience</span>',
            'exp-header-subtitle': 'Career track record focused on digital transformation and strategic visual communication.',
            'exp-1-date': 'February 2026 – July 2026',
            'exp-1-role': 'Front-End Web Developer & UI/UX Designer (Internship)',
            'exp-1-bullet-1': 'Applying design thinking methodology through user research, wireframing, high-fidelity prototyping, and iterative testing to ensure every digital interface aligns with user functional needs and strategic business goals.',
            'exp-1-bullet-2': '<strong>Developing and structuring web interfaces (Front-End) precisely using HTML, CSS, and JavaScript, bridging UI/UX designs into functional, interactive, responsive, and production-ready web products.</strong>',
            'exp-2-date': 'December 2025 – January 2026',
            'exp-2-role': 'Graphic Designer (Remote Freelance Project)',
            'exp-2-bullet-1': 'Person in Charge of the PROPER Presentation Design Project for PT Pertamina Geothermal Energy Tbk Lahendong Area for environmental management performance assessment by the Ministry of Environment and Forestry (40+ designs).',
            'exp-2-bullet-2': 'Successfully processed complex environmental and social performance data into communicative and professional visuals to support the company\'s target to achieve the GOLD PROPER rating.',
            'exp-3-date': 'November 2025 – January 2026',
            'exp-3-role': 'Graphic Designer (Hybrid Contract Worker)',
            'exp-3-bullet-1': 'Person in Charge of the PROPER Presentation Design Project for PT Kilang Pertamina Internasional Refinery Unit IV Cilacap for performance assessment (40+ designs).',
            'exp-3-bullet-2': 'Successfully processed complex environmental and social performance data into communicative visuals to support the achievement of the GOLD PROPER rating.',
            'exp-4-date': 'February 2025 – September 2025',
            'exp-4-role': 'Multimedia Designer (Magenta BUMN On-Site Intern)',
            'exp-4-bullet-1': 'Designing visual assets for digital & non-digital campaigns in accordance with company visual guidelines and communication needs of the Marketing Communication and Public Relations Department.',
            'exp-4-bullet-2': 'Optimizing print and social media visuals for Perum Bulog Yogyakarta Regional Office.',
            'exp-4-bullet-3': '<em>Achievement: Magenta BUMN Certificate with Grade A (Very Satisfactory).</em>',
            'exp-5-date': 'September 2024 – December 2024',
            'exp-5-role': 'Graphic Designer & Illustrator (MSIB Batch 7)',
            'exp-5-bullet-1': 'Creating illustrations, icons, and branding assets for the National Center for Books Program.',
            'exp-5-bullet-2': 'Collaborating with the PR division in preparing social media content designs.',
            'exp-5-bullet-3': 'Designing the ZI-WBK | WBBM BSKAP 2024 Manual Book and E-Level Non-Text Comic Book Illustrations for the Anti-Bullying Campaign.',
            'exp-1-location': 'Jakarta, Indonesia',
            'exp-2-location': 'North Sulawesi (Remote)',
            'exp-3-location': 'Cilacap, Central Java',
            'exp-4-location': 'Yogyakarta, Indonesia',
            'exp-5-location': 'Jakarta, Indonesia',
            'skills-header': 'Skills & <span>Software</span>',
            'hard-skills-title': 'Hard Skills',
            'skill-1': 'UI/UX Design',
            'skill-2': 'Front-End (HTML, CSS, JS)',
            'skill-3': 'Logo & Branding Elements',
            'skill-4': 'Iconography',
            'skill-5': 'Digital Layout',
            'skill-6': 'Social Media Assets',
            'soft-skills-title': 'Soft Skills',
            'soft-1': 'High Creativity & Aesthetic Sensitivity',
            'soft-2': 'Team Collaboration & Project Communication',
            'soft-3': 'Adaptability & Iteration based on Feedback',
            'software-title': 'Software Mastery',
            'edu-header': 'Education & <span>Certifications</span>',
            'gpa': 'GPA: 3.69 / 4.00',
            'degree': 'Bachelor of Visual Communication Design',
            'edu-date': 'August 2021 – January 2026',
            'edu-bullet-1': 'Focused on branding design, digital illustration, visual communication, and digital layout.',
            'edu-bullet-2': 'Active in various committees, design projects, and competitions (National 3rd Place PPK ORMAWA).',
            'cert-header': 'International & National Certifications',
            'cert-1-desc': 'Graphic Design and Illustration using Adobe Illustrator',
            'cert-2-desc': 'UX Design Professional',
            'cert-3-title': 'Foreign Language Certificate',
            'cert-3-desc': 'EFSET (C2 Proficient) | TOEFL ITP (Score: 543/677)',
            'ach-header-title': 'Achievements & <span>Activities</span>',
            'ach-header-subtitle': 'Dedication and appreciation for work and active participation in the field of creative design.',
            'ach-card-1-title': 'Awards',
            'ach-1': '<strong>1st Place</strong> – Mascot & Branding Design, BSKAP Kemendikbudristek (2024)',
            'ach-2': '<strong>National 3rd Place</strong> – Strongest SDG\'s Category, Abdidaya PPK ORMAWA (2023)',
            'ach-3': '<strong>Provincial 2nd Place</strong> – Mural Competition, Solo Technopark (2022)',
            'ach-4': '<strong>National 3rd Place</strong> – Manga Competition, Mangafest UGM (2021)',
            'ach-card-2-title': 'Exhibitions',
            'ach-card-3-title': 'Training & Organization',
            'ach-org': '<strong>PPK ORMAWA HIMA DKV ISI Surakarta</strong> - Provided Design & Digital Marketing Workshops (2023)',
            'ach-train-1': 'Bootcamp UI/UX Design Special Skill Indonesia (Graduated with "Excellent" Rating)',
            'ach-train-2': 'Rakamin PBI – UI/UX Designer Nuri',
            'ach-train-3': 'Rakamin PBI – UX Researcher Telkom Digital Amoeba',
            'contact-header': 'Let\'s create <span>impactful</span> digital solutions together.',
            'contact-subtitle': 'Need professional services in visual communication design or front-end development? I am ready to discuss bringing added value to your company.',
            'form-name': 'Full Name / Company',
            'form-email': 'Professional Email',
            'form-message': 'Project Details / Offer',
            'form-btn': 'Send Message <i class="fas fa-paper-plane"></i>',
            'exp-btn-portfolio': 'View Portfolio <i class="fas fa-external-link-alt"></i>'
        }
    };

    // Language Logic
    const langId = document.getElementById('lang-id');
    const langEn = document.getElementById('lang-en');

    let currentLang = localStorage.getItem('portfolio-lang') || 'id';
    setLanguage(currentLang);

    langId.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('id'); });
    langEn.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('en'); });

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        if (lang === 'id') {
            langId.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langEn.classList.add('active');
            langId.classList.remove('active');
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        const placeholders = {
            'id': {
                'name': 'Masukkan nama atau institusi',
                'email': 'Masukkan alamat email',
                'message': 'Jelaskan kebutuhan desain atau pengembangan web Anda...'
            },
            'en': {
                'name': 'Enter name or institution',
                'email': 'Enter email address',
                'message': 'Describe your design or web development needs...'
            }
        };

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput) nameInput.placeholder = placeholders[lang].name;
        if (emailInput) emailInput.placeholder = placeholders[lang].email;
        if (messageInput) messageInput.placeholder = placeholders[lang].message;
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

    function applyTheme(theme) {
        if (theme === 'light') {
            body.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger i');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple Form Submission Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            const successMsg = currentLang === 'id' ? 'Pesan Terkirim' : 'Message Sent';
            btn.innerHTML = `${successMsg} <i class="fas fa-check"></i>`;
            btn.style.backgroundColor = '#10b981';
            btn.style.boxShadow = '0 4px 14px 0 rgba(16, 185, 129, 0.5)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.boxShadow = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // Add subtle reveal animations on scroll
    const revealElements = document.querySelectorAll('.exp-item, .skills-column, .edu-column, .achieve-card');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        revealOnScroll.observe(el);
    });
    // Experience Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            expItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hide');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});
