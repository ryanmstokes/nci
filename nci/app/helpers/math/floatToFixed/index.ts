/**
 * Takes a number with decimal places and returns a number with less/defined decimal places
 * @param number
 * @param places
 * @returnsa number with less/defined decimal places
 */
export const floatToFixed = (number: number, places: number) => {
  return parseFloat((number).toFixed(places));
}
