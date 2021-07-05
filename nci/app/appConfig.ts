/** Import the config file */
import Config from "../data/demo";

/** Import the Theme file */
import Theme from "../theme/default-light";

/** Import App Config Type */
import { AppConfig } from '@/nci/app/interfaces'

const appConfig = {
  config: Config,
  theme: Theme,
} as AppConfig;

export default appConfig;
