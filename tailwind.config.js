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
          DEFAULT: '#73ce9e',
          opacity: '#73ce9e94',
        },
        secondary: {
          DEFAULT: '#ff4500',
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
          basic: '#262626',
          white: '#f4f4f4',
          placeholder: '#757575',
          error: '#e91e63',
        },

        // Status Colors
        success: {
          DEFAULT: '#4caf50',
          lighter: '#d4edda',
        },
        error: {
          DEFAULT: '#e91e63',
          lighter: '#f8d7da',
        },
        warning: {
          DEFAULT: '#ffc107',
          lighter: '#fff3cd',
        },
        info: {
          DEFAULT: '#2196f3',
          lighter: '#cce5ff',
        },
        cancel: {
          DEFAULT: '#bdbdbd',
          lighter: '#f4f4f4',
        },
        'font-color': 'rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
