const fs = require('fs');
const files = fs.readdirSync('pages').filter(f => f.endsWith('.html'));

const navBlock = `            <div style="display: flex; gap: 1rem; align-items: center;">
                <div class="nav-actions" style="position: static; flex-direction: row; display: flex; gap: 1rem; align-items: center;">
                    <div id="lang-switch" class="lang-switch">
                        <span id="lang-id" class="active">ID</span>
                        <span class="lang-divider">|</span>
                        <span id="lang-en">EN</span>
                    </div>
                    <div id="theme-toggle" class="theme-toggle">
                        <i class="fas fa-moon"></i>
                    </div>
                </div>`;

for(let f of files) {
  let content = fs.readFileSync('pages/' + f, 'utf8');
  
  if (!content.includes('id="lang-switch"')) {
    // Regular page with just 'Kembali' button
    if (content.includes('<a href="../index.html" class="btn-primary-outline"><i class="fas fa-arrow-left"></i> Kembali</a>')) {
      content = content.replace(
        '<a href="../index.html" class="btn-primary-outline"><i class="fas fa-arrow-left"></i> Kembali</a>',
        navBlock + '\n                <a href="../index.html" class="btn-primary-outline"><i class="fas fa-arrow-left"></i> Kembali</a>\n            </div>'
      );
    } 
    // Case study page with multiple buttons
    else if (content.includes('<div style="display: flex; gap: 1rem; align-items: center;">')) {
       content = content.replace(
          '<div style="display: flex; gap: 1rem; align-items: center;">',
          navBlock
       );
    }
  }

  if (!content.includes('<script src="../script.js"></script>')) {
      content = content.replace('</body>', '    <script src="../script.js"></script>\n</body>');
  }

  fs.writeFileSync('pages/' + f, content);
}
console.log('Done!');
