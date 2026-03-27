import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/stone/g, 'zinc');
fs.writeFileSync('src/App.tsx', content);
