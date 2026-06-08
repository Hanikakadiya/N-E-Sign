const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

// Target gray-like text colors
const regex = /text-(white|black)\/(30|40|50|60|70)\b/g;
const regex2 = /text-gray-(300|400|500|600)\b/g;
const replacement = 'text-[var(--color-gray)]';

let modifiedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  if (regex.test(content)) {
    content = content.replace(regex, replacement);
    modified = true;
  }
  
  if (regex2.test(content)) {
    content = content.replace(regex2, replacement);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFiles++;
    console.log(`Modified: ${file}`);
  }
});

console.log(`\nTotal files modified: ${modifiedFiles}`);
