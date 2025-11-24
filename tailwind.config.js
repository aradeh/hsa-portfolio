module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        luxury: {
          dark: '#0f0f0f',
          light: '#1a1a1a',
          gold: '#d4af37',
          text: '#ffffff',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(212, 175, 55, 0.15)',
        'luxury-lg': '0 20px 60px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
};
