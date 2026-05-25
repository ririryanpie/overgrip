import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#07070a',
        surface: '#111218',
        accent: {
          neon: '#c3ff3c',
          cyan: '#2df5ff',
          violet: '#ad6dff',
          fuchsia: '#ff4ed1'
        }
      },
      boxShadow: {
        neon: '0 0 30px rgba(173,109,255,0.45)'
      }
    }
  },
  plugins: []
}

export default config
