import { nciConfig } from "../../nci.config"

/** Import App Config Type */
import { AppConfig } from '@/nci/app/interfaces'

const appConfig = {
  config: nciConfig.config,
  theme: nciConfig.theme,
} as AppConfig;

export default appConfig;
