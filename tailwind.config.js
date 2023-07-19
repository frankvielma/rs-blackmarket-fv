/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        dmsans: ['var(--font-dmsans)'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-violet': '#00031A',
        'dark-gray': '#636363',
        gray: '#C4C4C4',
        'light-gray': '#E0E0E0',
        background: '#F4F7FA',
        'full-black': '#000000',
        focus: '#1D76EF',
        'tag-restored': '#559F21',
        hover: '#446CBC',
        'active-outline': '#9EBBF3',
        'status-error': '#D42F1A',
        links: '#076CE0',
        active: '#254A96',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
