/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'shield-navy': '#1D3557',
        'midnight-slate': '#0B132B',
        'forest-emerald-light': '#10B981',
        'forest-emerald': '#059669',
        'forest-emerald-dark': '#047857',
        'electric-amber': '#F59E0B',
        'threat-red': '#EF4444',
        'ice-glow': '#E0F2FE',
        'surface-crisp-white': '#FFFFFF',
        'surface-slate-subtle': '#F8FAFC',
        'surface-container-highest': '#d3e4fe',
        'surface-container-high': '#dce9ff',
        'surface-container': '#e5eeff',
        'surface-container-low': '#eff4ff',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#45464d',
        'secondary-container': '#fe6b00',
        primary: {
          DEFAULT: '#059669',
          hover: '#047857',
          light: '#10B981',
          dark: '#064E3B',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1280px',
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
