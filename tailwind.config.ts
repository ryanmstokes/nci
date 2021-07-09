/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

//* TAILWIND CONFIGURATION
import { fontSize, spacing, colors } from './nci/app/factories/clamp/theme-config'
//*cant use @ or ~ in this file or its dependencies. See: https://github.com/tailwindlabs/discuss/issues/119

export default {
  purge: {
    enabled: false
  },
  jit: false,
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        }
      },
      colors: colors,
      fontSize: fontSize,
      spacing: spacing,
      lineHeight: {
        'full': "100%"
      },
      animation: {
        'fade-in': 'fade-in ease 6s'
      },
    },
  },
  variants: {
    extend: {},
  }
}
