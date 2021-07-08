
import { clampBuilder } from '../builder/'
/**
 *
 * @param minWidth
 * @param maxWidth
 * @param clampSizes
 * @param start
 * @param space
 * @param base
 * @returns returns an object list of Clamp CSS strings e.g. clamp( 0.7rem, 0.6217391304347826rem + 0.3478260869565217vw, 0.9rem )
 */
export const clampGenerator = (minWidth: number, maxWidth: number, clampSizes: string[] | number[], start: number, space: number, base: number) => {
  interface Clamps {
    [name: string]: string
  }
  let clamps: Clamps = {}
  let count = start
  clampSizes.forEach((item: string | number) => {
    const min = count
    const max = count + space
    count += space
    clamps[item] = clampBuilder(minWidth, maxWidth, min, max, base)
  })
  return clamps;
}

/*
return {
  xs: "clamp(blah)",
  sm: "clamp(blah)"
}
*/
