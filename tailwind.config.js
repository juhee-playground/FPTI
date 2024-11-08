export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/styles/**/*.css',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: {
          default: '#73ce9e',
          darken: '#57a17a',
          opacity: '#73ce9e94',
        },
        secondary: {
          default: '#ff4500',
          dark: '#cc3700',
          light: '#fd9363',
          opacity: 'rgba(255, 69, 0, 0.5)',
        },
        background: '#4ac390',

        // Utility Colors
        hover: 'rgba(34, 139, 34, 0.7)',
        disabled: {
          border: '#cccccc',
          text: '#999999',
          background: '#f0f0f0',
        },

        // Basic Shades
        white: '#ffffff',
        black: '#000000',

        // Button Colors
        button: {
          basic: '#f4f4f4',
          hover: '#434343',
        },

        // Border Colors
        border: {
          basic: '#efefef',
          darken: '#cccccc',
          black: '#242424',
        },

        // Text Colors
        text: {
          default: '#262626',
          white: '#f4f4f4',
          placeholder: '#757575',
          error: '#e91e63',
        },

        // Status Colors
        success: {
          default: '#4caf50',
          lighter: '#d4edda',
        },
        error: {
          default: '#e91e63',
          lighter: '#f8d7da',
        },
        warning: {
          default: '#ffc107',
          lighter: '#fff3cd',
        },
        info: {
          default: '#2196f3',
          lighter: '#cce5ff',
        },
        cancel: {
          default: '#bdbdbd',
          lighter: '#f4f4f4',
        },
        leader: '#F7A4A4',
        supporter: '#F95959',
        attacker: '#1CC5DC',
        midfielder: '#defede',
        defender: '#14B1AB',
        trickster: '#86A7FC',
        passer: '#A63EC5',
        competitor: '#FF9F29',
        entertainer: '#FFD95A',
        'font-color': 'rgba(0, 0, 0, 1)',
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.8125rem', // 13px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        'button-text': '1.125rem',
        title: '2.5rem',
      },
      borderRadius: {
        button: '1.25rem', // 20px
      },
    },
  },
  plugins: [],
};
