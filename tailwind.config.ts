import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: { DEFAULT: '1rem', lg: '2rem' } },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#b9e5ff',
          300: '#8bd7ff',
          400: '#55c2ff',
          500: '#2aa6ff',
          600: '#1785f2',
          700: '#166ad1',
          800: '#1756a8',
          900: '#174985'
        }
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(1200px 600px at 10% 10%, rgba(42,166,255,0.12), transparent 50%), radial-gradient(800px 400px at 90% 20%, rgba(124,58,237,0.12), transparent 50%), radial-gradient(1000px 500px at 50% 100%, rgba(34,197,94,0.10), transparent 50%)',
        'noise': "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.03\\'/></svg>')"
      }
    },
  },
  plugins: [],
} satisfies Config
