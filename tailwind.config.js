/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./posts/.vitepress/theme/components/*.vue', './posts/**/*.md'],
  important: true,
  theme: {
    extend: {
      colors: {
        'vp-gray': 'var(--vp-c-bg-soft)',
        'vp-hover': 'var(--c-bg-2)',
        'vp-accent': 'var(--c-accent)',
      },
      scrollSnapType: {
        x: 'x mandatory',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.snap-start': {
          scrollSnapAlign: 'start',
        },
        '.snap-center': {
          scrollSnapAlign: 'center',
        },
        '.snap-end': {
          scrollSnapAlign: 'end',
        },
        '.snap-none': {
          scrollSnapAlign: 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
