import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '2xl': [
          'clamp(3rem, 2.6488rem + 1.4298vw, 4rem)',
          {
            lineHeight: '1.4',
            fontWeight: defaultTheme.fontWeight.extrabold
          }
        ],
        xl: [
          'clamp(2.5rem, 2.3244rem + 0.7149vw, 3rem)',
          {
            lineHeight: '1.4',
            fontWeight: defaultTheme.fontWeight.extrabold
          }
        ],
        lg: [
          'clamp(1.5rem, 1.2366rem + 1.0724vw, 2.25rem)',
          {
            lineHeight: '1.4',
            fontWeight: defaultTheme.fontWeight.bold
          }
        ],
        base: [
          'clamp(1rem, 0.8244rem + 0.7149vw, 1.5rem)',
          {
            lineHeight: '1.4',
            fontWeight: defaultTheme.fontWeight.normal
          }
        ],
        sm: [
          'clamp(0.875rem, 0.7433rem + 0.5362vw, 1.25rem)',
          {
            lineHeight: '1.5',
            fontWeight: defaultTheme.fontWeight.normal
          }
        ]
      },
      colors: {
        transparent: 'transparent',
        black: 'var(--cs-black)',
        white: 'var(--cs-white)',
        primary: 'var(--cs-green)',
        current: 'inherit'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        portrait: '9 / 16'
      },
      spacing: {
        84: '21rem',
        88: '22rem',
        100: '25rem',
        screen: '100svw',
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: []
}
export default config
