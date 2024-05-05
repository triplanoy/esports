// scripts/generate-match-reports.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const matchDir = path.resolve(__dirname, '../../../match-reports');

function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const matchFiles = getFiles(matchDir);

const matches = matchFiles
  .filter((file) => !file.endsWith('index.md'))
  .map((file) => {
    const src = fs.readFileSync(file, 'utf-8');
    const match = matter(src);
    const slug = path.relative(matchDir, file).replace(/\.md$/, '');
    match.data.slug = slug;
    return match;
  });

fs.writeFileSync(
  path.resolve(__dirname, '../../data/match-reports.json'),
  JSON.stringify(matches)
);
