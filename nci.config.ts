/** Import the config file */
import Config from "./nci/data/demo";

/** Import the Theme file */
import Theme from "./nci/theme/default-light";

/** Import App Config Type */
import { AppConfig } from '@/nci/app/interfaces'

const nciConfig = {
  config: Config,
  theme: Theme,
} as AppConfig;

export default nciConfig;
