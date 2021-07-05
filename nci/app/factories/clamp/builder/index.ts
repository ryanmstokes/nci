import { floatToFixed } from '../../../helpers/math/floatToFixed/'
/** clampBuilder
 *
 * @param minWidthPx
 * @param maxWidthPx
 * @param minFontSize
 * @param maxFontSize
 * @param root
 * @returns
 */
export const clampBuilder = (minWidthPx: number, maxWidthPx: number, minFontSize: number, maxFontSize: number, root: number) => {
  const pixelsPerRem = root;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  //const slope = floatToFixed(((maxFontSize - minFontSize) / (maxWidth - minWidth)) * 100, 8);
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)

  const yAxisIntersection = -minWidth * slope + minFontSize
  return `clamp( ${floatToFixed(minFontSize, 2)}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${floatToFixed(maxFontSize, 2)}rem )`;
}

/** More Info:
 * Approach and calculated clamp values taken from:
 * https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 * https://codesandbox.io/s/clamp-linear-intepolation-based-on-viewport-width-builder-xgkft?from-embed
 * Typography is scaled between 360px>1280px
 * Generates classes "text-xs", "text-sm"...
 * */
