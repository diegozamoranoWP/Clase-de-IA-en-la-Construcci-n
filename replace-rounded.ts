import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/rounded-2xl|rounded-xl|rounded-lg/g, 'rounded-none');
fs.writeFileSync('src/App.tsx', content);
