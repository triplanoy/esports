import { defineConfig } from 'vitepress';
import sidebar from '../../posts/.vitepress/data/sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Triplan eSports',
  description: 'Kaikki ei halua pelata vain sählyä ja padelia',
  lang: 'fi-FI',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Etusivu', link: '/' },
      { text: 'Otteluraportit', link: '/match-reports/' },
      { text: 'Kausiyhteenvedot', link: '/season-recaps/' },
      { text: 'Kausiennakot', link: '/season-previews/' },
      { text: 'Joukkue', link: '/team' },
    ],
    sidebar: sidebar,
    aside: false,
    outline: false,
  },
});
