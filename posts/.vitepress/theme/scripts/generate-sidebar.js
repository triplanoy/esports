const fs = require('fs');
const path = require('path');

function formatName(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) =>
      word === 'cs2' ? 'CS2' : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}

function formatMatchReportName(name) {
  let [team, date] = name.split('_');
  team = team.replace(/-/g, ' ');
  if (date) {
    const readableDate = `${date.slice(6, 8)}.${date.slice(4, 6)}.${date.slice(
      0,
      4
    )}`;
    return `${team} ${readableDate}`;
  } else {
    return `${team}`;
  }
}

function getSidebarItems(dir, base = '') {
  let items = fs.readdirSync(dir).flatMap((file) => {
    if (file === 'index.md' || file === '.DS_Store') {
      return [];
    }
    const absolutePath = path.resolve(dir, file);
    const relativePath = path.join(base, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      const name = formatName(file);
      return {
        text: name,
        collapsed: false,
        items: getSidebarItems(absolutePath, relativePath),
      };
    } else {
      let name;
      if (base.startsWith('match-reports')) {
        name = formatMatchReportName(path.basename(file, path.extname(file)));
      } else {
        name = formatName(path.basename(file, path.extname(file)));
      }
      const link = `/${relativePath.replace(/\.md$/, '')}`;
      return { text: name, link };
    }
  });

  if (base.startsWith('match-reports')) {
    items = items.sort((a, b) => {
      const dateA = a.link ? a.link.slice(-8) : '';
      const dateB = b.link ? b.link.slice(-8) : '';
      if (dateA < dateB) {
        return 1;
      } else if (dateA > dateB) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  return items;
}

const matchReports = getSidebarItems('posts/match-reports', 'match-reports');
const seasonRecaps = getSidebarItems('posts/season-recaps', 'season-recaps');
const seasonPreviews = getSidebarItems(
  'posts/season-previews',
  'season-previews'
);

const sidebar = [
  { text: 'Otteluraportit', collapsed: false, items: matchReports },
  {
    text: 'Kausiyhteenvedot',
    collapsed: false,
    items: seasonRecaps,
    link: '/season-recaps/',
  },
  {
    text: 'Kausiennakot',
    collapsed: false,
    items: seasonPreviews,
    link: '/season-previews/',
  },
];

fs.writeFileSync(
  'posts/.vitepress/data/sidebar.json',
  JSON.stringify(sidebar, null, 2)
);
