import { clampGenerator } from '../generator/'
import appConfig from '../../../appConfig'

const theme = appConfig.theme

/**
 * fontSize
 * List of Clamp font sizes used in tailwind.coonfig.ts
 */
const fontSize = clampGenerator(
  theme?.config.font.minWidth as number,
  theme?.config.font.maxWidth as number,
  theme?.config.font.sizes as string[] | number[],
  theme?.config.font.start as number,
  theme?.config.font.spacing as number,
  16
)

/**
 * spacing
 * List of Clamp space sizes used in tailwind.coonfig.ts
 */
const spacing = clampGenerator(
  theme?.config.spacing.minWidth as number,
  theme?.config.spacing.maxWidth as number,
  [...Array(25).keys()] as string[] | number[],
  theme?.config.spacing.start as number,
  theme?.config.spacing.spacing as number,
  16
)

/**
 * colors
 * The themes customised colors
 */
const colors = theme?.config.colors

export { fontSize, spacing, colors }
