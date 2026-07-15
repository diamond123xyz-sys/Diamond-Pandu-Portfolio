document.addEventListener('DOMContentLoaded', () => {
    // 1. Contextual Personalization (Deteksi Parameter URL)
    const urlParams = new URLSearchParams(window.location.search);
    const guestRole = urlParams.get('role');
    
    let skillsList = ["Graphic Design", "Brand Identity", "Visual Direction"];
    
    if (guestRole === 'frontend') {
        skillsList = ["Graphic Design", "UI/UX Design", "Front-End Development", "Digital Transformation"];
    } else if (guestRole === 'uiux') {
        skillsList = ["Graphic Design", "User Research", "Prototyping", "UI/UX Design", "Product Strategy"];
    } else {
        skillsList = ["Graphic Design", "UI/UX Design", "Front-End Development"];
    }

    skillsList.unshift("Diamond Pandu's Portofolio");
    skillsList.push("Check it out!");

    const typoDisplay = document.getElementById('ag-typo-display');
    const percentageText = document.getElementById('ag-percentage');
    const progressBar = document.getElementById('ag-progress-fill');
    const logText = document.getElementById('ag-log-text');
    const loaderScreen = document.getElementById('ag-loader-screen');
    
    if(loaderScreen && typoDisplay && percentageText && progressBar && logText) {
        const logs = [
            "Antigravity Agent: Mapping layout structures...",
            "Antigravity Agent: Compiling visual identity assets...",
            "Antigravity Agent: Optimizing micro-interactions...",
            "Decrypting typography scales...",
            "Deploying clean front-end code..."
        ];

        const imagesArray = Array.from(document.images);
        let loadedImages = 0;
        const totalImages = imagesArray.length;
        let currentProgress = 0;
        let targetProgress = 0;

        if (totalImages === 0) targetProgress = 100;
        imagesArray.forEach(img => {
            if (img.complete) {
                loadedImages++;
                targetProgress = Math.floor((loadedImages / totalImages) * 100);
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    targetProgress = Math.floor((loadedImages / totalImages) * 100);
                });
                img.addEventListener('error', () => {
                    loadedImages++; 
                    targetProgress = Math.floor((loadedImages / totalImages) * 100);
                });
            }
        });

        let skillIndex = 0;
        let logIndex = 0;

        const lerpProgress = setInterval(() => {
            if (currentProgress < targetProgress) currentProgress += 1;
            
            if(currentProgress < 100 && targetProgress === currentProgress) {
                 currentProgress += Math.random() > 0.5 ? 1 : 0; 
            }

            if (currentProgress > 100) currentProgress = 100;

            percentageText.innerText = `${Math.floor(currentProgress)}%`;
            progressBar.style.width = `${currentProgress}%`;

            if (currentProgress % Math.floor(100 / skillsList.length) === 0 && skillIndex < skillsList.length) {
                typoDisplay.style.opacity = 0;
                setTimeout(() => {
                    typoDisplay.innerText = skillsList[skillIndex];
                    typoDisplay.style.opacity = 1;
                    skillIndex++;
                }, 100);
            }

            if (currentProgress % 20 === 0 && logIndex < logs.length) {
                logText.innerText = logs[logIndex];
                logIndex++;
            }

            if (currentProgress === 100) {
                clearInterval(lerpProgress);
                logText.innerText = "All systems go. Transitioning UX...";
                
                let uri = '';
                if (guestRole === 'frontend') uri = 'pages/portfolio-vinix.html';
                else uri = 'pages/portfolio-bulog.html';

                if(uri && document.body.contains(loaderScreen)) {
                   const link = document.createElement('link');
                   link.rel = 'prefetch';
                   link.href = uri;
                   document.head.appendChild(link);
                }
                
                setTimeout(() => {
                    loaderScreen.classList.add('loaded');
                    document.body.style.overflowY = "visible";
                }, 500);
            }
        }, 20);
    } else {
        document.body.style.overflowY = "visible";
    }

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
            'hero-badge': 'Portofolio Diamond Pandu',
            'hero-title': 'Dari Imajinasi hingga <span>Eksekusi,</span><br> Mengubah Ide Kreatif menjadi<br> Realitas Visual yang <span>Memukau.</span>',
            'hero-subtitle': 'Saya adalah seorang <strong>Desainer Komunikasi Visual & Transformasi Digital</strong> dengan keahlian komprehensif di bidang Desain UI/UX, Pemrograman Front-End, serta Desain Grafis. Berpengalaman luas dalam memberikan solusi visual strategis untuk berbagai institusi berskala besar, termasuk Kementerian dan BUMN.',
            'about-header-title': 'Tentang <span>Saya</span>',
            'about-subtitle': 'Saya adalah seorang <strong>Desainer Komunikasi Visual & Transformasi Digital</strong> dengan keahlian komprehensif di bidang Desain UI/UX, Pemrograman Front-End, serta Desain Grafis. Berpengalaman luas dalam memberikan solusi visual strategis untuk berbagai institusi berskala besar, termasuk Kementerian dan BUMN.',
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
            'exp-header-title': 'Pengalaman Profesional & <span>Portofolio</span>',
            'exp-header-subtitle': 'Rekam jejak karir yang berfokus pada transformasi digital dan komunikasi visual strategis.',
            'exp-1-date': 'Februari 2026 – Juli 2026',
            'exp-1-role': 'Front-End Web Developer & UI/UX Designer (Internship)',
            'exp-1-bullet-1': 'Merancang dan mengembangkan UI/UX serta Front-End untuk platform <strong>Indigo by Telkom – AI Synergy & Risk Engine</strong>, sebuah dashboard analitik risiko berbasis AI yang di-deploy live di Vercel.',
            'exp-1-bullet-2': 'Mendesain antarmuka dan membangun Front-End website <strong>Minton – Badminton Ecosystem Platform</strong>, mencakup fitur <em>booking</em> lapangan, pendaftaran turnamen, dan komunitas pemain.',
            'exp-1-bullet-3': 'Menerapkan metodologi <em>design thinking</em> end-to-end: riset pengguna, <em>wireframing</em>, <em>high-fidelity prototyping</em> di Figma, dan pengujian iteratif untuk validasi setiap keputusan desain.',
            'exp-1-bullet-4': 'Mengembangkan antarmuka web responsif menggunakan HTML, CSS, dan JavaScript murni, memastikan performa optimal dan kompatibilitas lintas perangkat.',
            'exp-2-date': 'Desember 2025 – Januari 2026',
            'exp-2-role': 'Graphic Designer (Remote Freelance Project)',
            'exp-2-bullet-1': 'Penanggung jawab desain 40+ slide presentasi PROPER PT Pertamina Geothermal Energy Tbk Area Lahendong untuk penilaian kinerja lingkungan oleh Kementerian LHK RI.',
            'exp-2-bullet-2': 'Mengembangkan konsep visual bertema inovasi sosial dan energi hijau, dengan palet warna khusus (hijau-kuning-putih) yang merepresentasikan ekosistem panas bumi dan pemberdayaan masyarakat petani binaan.',
            'exp-2-bullet-3': 'Berhasil menyajikan data kinerja lingkungan kompleks menjadi infografis yang komunikatif, mendukung pencapaian perusahaan meraih predikat <strong>PROPER Hijau</strong> dari Kementerian LHK.',
            'exp-3-date': 'November 2025 – Januari 2026',
            'exp-3-role': 'Graphic Designer (Hybrid Contract Worker)',
            'exp-3-bullet-1': 'Penanggung jawab desain 40+ slide presentasi PROPER PT Kilang Pertamina Internasional RU IV Cilacap, bekerja secara hybrid di kantor maupun remote.',
            'exp-3-bullet-2': 'Menerapkan pendekatan visual data-driven dengan infografis yang menggambarkan dampak pengelolaan limbah, emisi, hingga program CSR perusahaan secara terukur.',
            'exp-3-bullet-3': 'Mendukung keberhasilan perusahaan meraih predikat <strong>PROPER EMAS</strong> dari Kementerian LHK melalui penyajian visual yang profesional dan strategis.',
            'exp-4-date': 'Februari 2025 – September 2025',
            'exp-4-role': 'Multimedia Designer (Magenta BUMN On-Site Intern)',
            'exp-4-bullet-1': 'Mendesain 50+ aset visual untuk kampanye digital & non-digital sesuai visual guideline perusahaan, mencakup konten media sosial, banner, poster, dan motion graphic.',
            'exp-4-bullet-2': 'Memproduksi 2 video motion graphic untuk kampanye Instagram Reels: "Beras untuk Generasi Emas" dan "Packaging Baru Setra Ramos" yang menargetkan audiens millennial.',
            'exp-4-bullet-3': 'Mengoptimasi desain media cetak (poster SPHP, banner beras ramos, poster K3) untuk kebutuhan komunikasi Bagian Marketing Communication dan Hubungan Masyarakat.',
            'exp-4-bullet-4': '<em>Pencapaian: Sertifikat Magenta BUMN dengan Nilai A (Sangat Memuaskan).</em>',
            'exp-5-date': 'September 2024 – Desember 2024',
            'exp-5-role': 'Graphic Designer & Illustrator (MSIB Batch 7)',
            'exp-5-bullet-1': 'Mendesain sistem identitas visual berupa maskot & branding elements untuk Program Nasional Pusat Perbukuan, dan <strong>meraih Juara 1</strong> dalam kompetisi Desain Maskot & Branding BSKAP 2024.',
            'exp-5-bullet-2': 'Mendesain Buku Pedoman ZI-WBK | WBBM BSKAP 2024 (60+ halaman) dengan tata letak yang informatif dan konsisten dengan identitas lembaga.',
            'exp-5-bullet-3': 'Membuat ilustrasi Buku Non-Teks Komik Jenjang E untuk Kampanye Anti-Bullying, menerjemahkan pesan edukasi ke dalam visual yang menarik bagi pembaca anak.',
            'exp-5-bullet-4': 'Berkolaborasi dengan divisi humas dalam perancangan aset konten media sosial resmi BSKAP Kemendikbudristek.',
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
            'cert-3-title': 'Sertifikat EFSET English',
            'cert-3-desc': 'Tingkat: C2 Proficient (Advanced)',
            'cert-4-title': 'Sertifikat TOEFL ITP',
            'cert-4-desc': 'Skor: 543/677 (High Intermediate)',
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
            'contact-header': 'Mari ciptakan solusi digital <span>berdampak besar</span> bersama.',
            'contact-subtitle': 'Membutuhkan tenaga profesional di bidang desain komunikasi visual atau front-end development? Saya siap berdiskusi untuk membawa nilai tambah bagi perusahaan Anda.',
            'form-name': 'Nama Lengkap / Perusahaan',
            'form-email': 'Email Profesional',
            'form-message': 'Detail Pesan / Penawaran',
            'form-btn': 'Kirim Pesan <i class="fas fa-paper-plane"></i>',
            'exp-btn-portfolio': 'Lihat Portofolio <i class="fas fa-external-link-alt"></i>',
            'exp-1-location': 'Yogyakarta, Indonesia',
            'exp-2-location': 'Sulawesi Utara (Remote)',
            'exp-3-location': 'Cilacap, Jawa Tengah',
            'exp-4-location': 'Yogyakarta, Indonesia',
            'exp-5-location': 'Jakarta, Indonesia',
            'footer-desc': 'Desainer Komunikasi Visual & Transformasi Digital',
            'cv-id': 'Versi Bahasa Indonesia',
            'cv-en': 'English Version'
        },
        'en': {
            'nav-home': 'Home',
            'nav-experience': 'Experience',
            'nav-skills': 'Skills & Education',
            'nav-achievements': 'Achievements',
            'nav-contact': 'Contact Me',
            'hero-badge': 'Diamond Pandu\'s Portfolio',
            'hero-title': 'From Imagination to <span>Execution,</span><br> I turn Creative Ideas into<br> Striking Visual <span>Realities.</span>',
            'hero-subtitle': 'I am a <strong>Visual Communication & Digital Transformation Designer</strong> with comprehensive expertise in UI/UX, Front-End Development, and Graphic Design. Experienced in delivering strategic visual solutions for various major institutions including BUMN and Ministries.',
            'about-header-title': 'About <span>Me</span>',
            'about-subtitle': 'I am a <strong>Visual Communication & Digital Transformation Designer</strong> with comprehensive expertise in UI/UX, Front-End Development, and Graphic Design. Experienced in delivering strategic visual solutions for various major institutions including BUMN and Ministries.',
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
            'exp-header-title': 'Professional Experience & <span>Portfolio</span>',
            'exp-header-subtitle': 'Career track record focused on digital transformation and strategic visual communication.',
            'exp-1-date': 'February 2026 – July 2026',
            'exp-1-role': 'Front-End Web Developer & UI/UX Designer (Internship)',
            'exp-1-bullet-1': 'Designed and developed UI/UX and Front-End for the <strong>Indigo by Telkom – AI Synergy & Risk Engine</strong> platform, an AI-powered risk analytics dashboard deployed live on Vercel.',
            'exp-1-bullet-2': 'Designed the interface and built the Front-End for the <strong>Minton – Badminton Ecosystem Platform</strong> website, featuring court <em>booking</em>, tournament registration, and player community features.',
            'exp-1-bullet-3': 'Applied end-to-end <em>design thinking</em> methodology: user research, <em>wireframing</em>, <em>high-fidelity prototyping</em> in Figma, and iterative testing to validate every design decision.',
            'exp-1-bullet-4': 'Developed responsive web interfaces using pure HTML, CSS, and JavaScript, ensuring optimal performance and cross-device compatibility.',
            'exp-2-date': 'December 2025 – January 2026',
            'exp-2-role': 'Graphic Designer (Remote Freelance Project)',
            'exp-2-bullet-1': 'Person in Charge of designing 40+ PROPER presentation slides for PT Pertamina Geothermal Energy Tbk Lahendong Area for environmental performance assessment by the Ministry of Environment and Forestry.',
            'exp-2-bullet-2': 'Developed a visual concept themed around social innovation and green energy, with a curated color palette (green-yellow-white) representing the geothermal ecosystem and empowerment of local farmers.',
            'exp-2-bullet-3': 'Successfully transformed complex environmental performance data into communicative infographics, supporting the company in achieving the <strong>Green PROPER</strong> rating from the Ministry of Environment.',
            'exp-3-date': 'November 2025 – January 2026',
            'exp-3-role': 'Graphic Designer (Hybrid Contract Worker)',
            'exp-3-bullet-1': 'Person in Charge of designing 40+ PROPER presentation slides for PT Kilang Pertamina Internasional RU IV Cilacap, working in a hybrid on-site and remote arrangement.',
            'exp-3-bullet-2': 'Applied a data-driven visual approach with infographics illustrating the impact of waste management, emissions, and CSR programs in measurable terms.',
            'exp-3-bullet-3': 'Supported the company in achieving the <strong>GOLD PROPER</strong> rating from the Ministry of Environment through professional and strategic visual presentation.',
            'exp-4-date': 'February 2025 – September 2025',
            'exp-4-role': 'Multimedia Designer (Magenta BUMN On-Site Intern)',
            'exp-4-bullet-1': 'Designed 50+ visual assets for digital & non-digital campaigns aligned with company visual guidelines, including social media content, banners, posters, and motion graphics.',
            'exp-4-bullet-2': 'Produced 2 motion graphic videos for Instagram Reels campaigns: "Rice for the Golden Generation" and "New Setra Ramos Packaging" targeting millennial audiences.',
            'exp-4-bullet-3': 'Optimized print media designs (SPHP poster, Ramos rice banner, K3 poster) for the Marketing Communication and Public Relations Department.',
            'exp-4-bullet-4': '<em>Achievement: Magenta BUMN Certificate with Grade A (Very Satisfactory).</em>',
            'exp-5-date': 'September 2024 – December 2024',
            'exp-5-role': 'Graphic Designer & Illustrator (MSIB Batch 7)',
            'exp-5-bullet-1': 'Designed the visual identity system including mascots & branding elements for the National Center for Books Program, and <strong>won 1st Place</strong> in the BSKAP 2024 Mascot & Branding Design competition.',
            'exp-5-bullet-2': 'Designed the ZI-WBK | WBBM BSKAP 2024 Manual Book (60+ pages) with informative layouts consistent with the institution\'s identity.',
            'exp-5-bullet-3': 'Created E-Level Non-Text Comic Book Illustrations for the Anti-Bullying Campaign, translating educational messages into engaging visuals for young readers.',
            'exp-5-bullet-4': 'Collaborated with the PR division in designing official BSKAP Kemendikbudristek social media content assets.',
            'exp-1-location': 'Yogyakarta, Indonesia',
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
            'cert-3-title': 'EFSET English Certificate',
            'cert-3-desc': 'Level: C2 Proficient (Advanced)',
            'cert-4-title': 'TOEFL ITP Certificate',
            'cert-4-desc': 'Score: 543/677 (High Intermediate)',
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
            'contact-header': 'Let\'s create <span>impactful</span> digital solutions together.',
            'contact-subtitle': 'Need professional services in visual communication design or front-end development? I am ready to discuss bringing added value to your company.',
            'form-name': 'Full Name / Company',
            'form-email': 'Professional Email',
            'form-message': 'Project Details / Offer',
            'form-btn': 'Send Message <i class="fas fa-paper-plane"></i>',
            'exp-btn-portfolio': 'View Portfolio <i class="fas fa-external-link-alt"></i>',
            'footer-desc': 'Visual Communication & Digital Transformation Designer',
            'cv-id': 'Indonesian Version',
            'cv-en': 'English Version'
        }
    };

    // Language Logic
    const langId = document.getElementById('lang-id');
    const langEn = document.getElementById('lang-en');

    window.currentLang = localStorage.getItem('portfolio-lang') || 'id';

    // Call setLanguage unconditionally to handle redirects on load
    setLanguage(window.currentLang);

    if (langId && langEn) {
        langId.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('id'); });
        langEn.addEventListener('click', (e) => { e.stopPropagation(); setLanguage('en'); });
    }

    function setLanguage(lang) {
        window.currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        // Language Redirections for subpages
        const pathSegments = window.location.pathname.split('/');
        const pageName = pathSegments[pathSegments.length - 1];
        
        const redirects = {
            'id': {
                'portfolio-vinix-en.html': 'portfolio-vinix.html',
                'portfolio-bskap-en.html': 'portfolio-bskap.html',
                'portfolio-bulog-en.html': 'portfolio-bulog.html',
                'portfolio-pertamina-geothermal-en.html': 'portfolio-pertamina-geothermal.html',
                'portfolio-pertamina-internasional-en.html': 'portfolio-pertamina-internasional.html',
                'case-study-indigo-en.html': 'case-study-indigo.html',
                'case-study-minton-en.html': 'case-study-minton.html'
            },
            'en': {
                'portfolio-vinix.html': 'portfolio-vinix-en.html',
                'portfolio-bskap.html': 'portfolio-bskap-en.html',
                'portfolio-bulog.html': 'portfolio-bulog-en.html',
                'portfolio-pertamina-geothermal.html': 'portfolio-pertamina-geothermal-en.html',
                'portfolio-pertamina-internasional.html': 'portfolio-pertamina-internasional-en.html',
                'case-study-indigo.html': 'case-study-indigo-en.html',
                'case-study-minton.html': 'case-study-minton-en.html'
            }
        };

        if (redirects[lang] && redirects[lang][pageName]) {
            window.location.href = redirects[lang][pageName];
            return;
        }

        if (langId && langEn) {
            if (lang === 'id') {
                langId.classList.add('active');
                langEn.classList.remove('active');
            } else {
                langEn.classList.add('active');
                langId.classList.remove('active');
            }
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
    const body = document.body;

    const savedThemeConfig = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedThemeConfig);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
        });
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            body.setAttribute('data-theme', 'light');
            if (themeToggle) {
                const themeIcon = themeToggle.querySelector('i');
                if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
            }
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            if (themeToggle) {
                const themeIcon = themeToggle.querySelector('i');
                if (themeIcon) { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
            }
            localStorage.setItem('portfolio-theme', 'dark');
        }
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
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
    }

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

            const successMsg = window.currentLang === 'id' ? 'Pesan Terkirim' : 'Message Sent';
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

    // 8. Certificate Modal Logic
    const certCards = document.querySelectorAll('.cert-card');
    const certModal = document.getElementById('certModal');
    const certModalClose = document.getElementById('certModalClose');
    const certModalFrame = document.getElementById('certModalFrame');

    if (certCards.length > 0 && certModal && certModalClose && certModalFrame) {
        certCards.forEach(card => {
            card.addEventListener('click', () => {
                const src = card.getAttribute('data-cert-src');

                if (!src) return;

                // Clear previous contents
                certModalFrame.innerHTML = '';

                const img = document.createElement('img');
                img.src = src;
                img.className = 'cert-modal-img';
                img.alt = card.querySelector('strong')?.innerText || 'Certificate';
                certModalFrame.appendChild(img);

                // Open modal
                certModal.style.display = 'flex';
                // Force refraction for animations
                certModal.offsetHeight;
                certModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable page scrolling
            });
        });

        // Close modal helper
        const closeModal = () => {
            certModal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable page scrolling
            setTimeout(() => {
                certModal.style.display = 'none';
                certModalFrame.innerHTML = ''; // Clear iframe to stop pdf loading
            }, 300);
        };

        certModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });

        // Close on clicking outside the frame
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeModal();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // CV Dropdown Logic
    const cvBtn = document.querySelector('.cv-dropdown-btn');
    const cvDropdown = document.getElementById('cvDropdown');

    if (cvBtn && cvDropdown) {
        cvBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cvDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!cvBtn.contains(e.target) && !cvDropdown.contains(e.target)) {
                cvDropdown.classList.remove('show');
            }
        });
    }
});
