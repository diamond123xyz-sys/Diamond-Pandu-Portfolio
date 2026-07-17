const fs = require('fs');
const files = fs.readdirSync('pages').filter(f => f.endsWith('.html'));

let replacedCount = 0;
for(let f of files) {
  let content = fs.readFileSync('pages/' + f, 'utf8');
  if(content.includes('<h2 class="other-projects-title">Explore Other Projects</h2>')) {
    content = content.replace(
      '<h2 class="other-projects-title">Explore Other Projects</h2>',
      '<h2 class="other-projects-title"><i class="fas fa-compass" style="color: var(--accent-primary);"></i> Explore Other Projects</h2>'
    );
    fs.writeFileSync('pages/' + f, content);
    replacedCount++;
  }
}
console.log('Replaced in ' + replacedCount + ' files.');
