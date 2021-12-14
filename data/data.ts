/** CONFIGFILE
 * The main configuration file. This defines the content of the application.
 */
import home from '@/data/pages/home'
import about from '@/data/pages/about'
import error from '@/data/pages/error'

const ConfigFile = {
  name: "LandingZone",
  pages: {
    /** Page */
    ...home,
    ...about,
    ...error
  }
}
export default ConfigFile;
