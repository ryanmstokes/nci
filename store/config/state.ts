import { Config } from "@/nci/app/interfaces";

/** Store state
 * @function state
 * @property {string} name Name of the application.
 * @property {object} pages The main page content object of the application.
 * @property {object} Theme The Theme used for converting component properties to Tailwind classes.
 * @returns Complex nested object of `Config` type.
*/
const state = (): Config => ({
  name: undefined,
  pages: undefined,
  theme: undefined
})

export default state
