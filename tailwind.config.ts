import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      // Tell Tailwind to use CSS variables for these colors
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
        'surface-dark': 'rgb(var(--color-surface-dark-rgb) / <alpha-value>)',
        'surface-light': 'rgb(var(--color-surface-light-rgb) / <alpha-value>)',
      },
      // Also map your dynamic fonts
      fontFamily: {
        sans: ['var(--font-secondary)', ...defaultTheme.fontFamily.sans],
        primary: ['var(--font-primary)', ...defaultTheme.fontFamily.sans],
      }
    }
  }
}
