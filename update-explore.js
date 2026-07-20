const fs = require('fs');

const projects = [
    {
        id: 'vinix',
        html: `                <!-- VINIX -->
                <a href="portfolio-vinix.html" class="other-project-card">
                    <div class="card-thumb">
                        <img src="../assets/vinix7/indigo.png" alt="VINIX Project">
                    </div>
                    <div class="card-body">
                        <div class="other-project-logo">
                            <img src="../assets/img/vinix.png" class="logo-light">
                            <img src="../assets/img/vinix.png" class="logo-dark">
                        </div>
                        <div class="other-project-content">
                            <span class="category">Digital Transformation</span>
                            <h3>PT VINIX Seven Aurum</h3>
                            <h4 class="project-role">Front-End Web Developer & UI/UX Designer</h4>
                            <p class="project-date">Feb 2026 – Jul 2026</p>
                            <div class="view-project-link">See Project <i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </a>`
    },
    {
        id: 'pge',
        html: `                <!-- PGE -->
                <a href="portfolio-pertamina-geothermal.html" class="other-project-card">
                    <div class="card-thumb">
                        <img src="../assets/pt pge/hero section.webp" alt="PGE Project">
                    </div>
                    <div class="card-body">
                        <div class="other-project-logo">
                            <img src="../assets/img/pertamina geothermal.png" class="logo-light">
                            <img src="../assets/img/pertamina geothermal putih.png" class="logo-dark">
                        </div>
                        <div class="other-project-content">
                            <span class="category">Visual Communication</span>
                            <h3>PT Pertamina Geothermal Energy</h3>
                            <h4 class="project-role">Graphic Designer (Freelance)</h4>
                            <p class="project-date">Des 2025 – Jan 2026</p>
                            <div class="view-project-link">See Project <i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </a>`
    },
    {
        id: 'kpi',
        html: `                <!-- KPI -->
                <a href="portfolio-pertamina-internasional.html" class="other-project-card">
                    <div class="card-thumb">
                        <img src="../assets/pt kpi/hero section.png" alt="KPI Project">
                    </div>
                    <div class="card-body">
                        <div class="other-project-logo">
                            <img src="../assets/img/PT Kilang Pertamina Internasional.svg" class="logo-light">
                            <img src="../assets/img/PT Kilang Pertamina Internasional Putih.png" class="logo-dark">
                        </div>
                        <div class="other-project-content">
                            <span class="category">Visual Communication</span>
                            <h3>PT Kilang Pertamina Internasional</h3>
                            <h4 class="project-role">Graphic Designer (Contract)</h4>
                            <p class="project-date">Nov 2025 – Jan 2026</p>
                            <div class="view-project-link">See Project <i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </a>`
    },
    {
        id: 'bulog',
        html: `                <!-- BULOG -->
                <a href="portfolio-bulog.html" class="other-project-card">
                    <div class="card-thumb">
                        <img src="../assets/bulog/banner-sphp.webp" alt="BULOG Project">
                    </div>
                    <div class="card-body">
                        <div class="other-project-logo">
                            <img src="../assets/img/bulog.png" class="logo-light">
                            <img src="../assets/img/BULOG Putih-8 1.png" class="logo-dark">
                        </div>
                        <div class="other-project-content">
                            <span class="category">Visual Communication</span>
                            <h3>Perum BULOG</h3>
                            <h4 class="project-role">Multimedia Designer (Magenta BUMN Intern)</h4>
                            <p class="project-date">Feb 2025 – Sep 2025</p>
                            <div class="view-project-link">See Project <i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </a>`
    },
    {
        id: 'bskap',
        html: `                <!-- BSKAP -->
        <a href="portfolio-bskap.html" class="other-project-card">
            <div class="card-thumb">
                <img src="../assets/bskap/komik 1.png" alt="BSKAP Project">
            </div>
            <div class="card-body">
                <div class="other-project-logo bskap-logo-wrapper">
                    <img src="../assets/img/Logo Kemendikbud.png" class="logo-light">
                    <img src="../assets/img/bskap putih.png" class="logo-dark">
                </div>
                <div class="other-project-content">
                    <span class="category">Visual Communication</span>
                    <h3>BSKAP Kemendikbudristek</h3>
                    <h4 class="project-role">Graphic Designer (MSIB Intern)</h4>
                    <p class="project-date">Sep 2024 – Des 2024</p>
                    <div class="view-project-link">See Project <i class="fas fa-arrow-right"></i></div>
                </div>
            </div>
        </a>`
    }
];

const files = fs.readdirSync('pages').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync('pages/' + f, 'utf8');
    
    // Determine the current file's project identity
    let currentId = '';
    if (f.includes('vinix') || f.includes('minton') || f.includes('indigo')) {
        currentId = 'vinix';
    } else if (f.includes('pertamina-geothermal')) {
        currentId = 'pge';
    } else if (f.includes('pertamina-internasional')) {
        currentId = 'kpi';
    } else if (f.includes('bulog')) {
        currentId = 'bulog';
    } else if (f.includes('bskap')) {
        currentId = 'bskap';
    }

    const filteredProjects = projects.filter(p => p.id !== currentId);
    let newGridHtml = '<div class="other-projects-grid">\n' + filteredProjects.map(p => p.html).join('\n') + '\n            </div>';

    content = content.replace(/<div class="other-projects-grid">[\s\S]*?<\/div>(\s*<\/div>\s*<\/section>)/, newGridHtml + '$1');
    fs.writeFileSync('pages/' + f, content);
    console.log('Updated ' + f);
});
