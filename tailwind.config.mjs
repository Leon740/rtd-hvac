/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '32px'
      },
      fontFamily: {
        'inter-regular': 'InterTight_Regular',
        'inter-bold': 'InterTight_Bold'
      },
      fontSize: {
        16: '16px',
        20: '20px',
        32: '32px'
      },
      spacing: {
        0: 0,
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        96: '96px',
        128: '128px',
        256: '256px'
      },
      borderRadius: {
        8: '8px',
        16: '16px',
        full: '50%'
      },
      zIndex: {
        faqsTabsHeader10: '10',
        menu100: 100,
        header1000: 1000
      }
    }
  },
  plugins: []
};
