// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import './css/./custom.css';
import MatchCard from './components/MatchCard.vue';
import Matches from './components/Matches.vue';
import SeasonRecapCard from './components/SeasonRecapCard.vue';
import MatchReportCard from './components/MatchReportCard.vue';
import MatchReports from './components/MatchReports.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('MatchCard', MatchCard);
    app.component('Matches', Matches);
    app.component('SeasonRecapCard', SeasonRecapCard);
    app.component('MatchReportCard', MatchReportCard);
    app.component('MatchReports', MatchReports);
  },
} satisfies Theme;
