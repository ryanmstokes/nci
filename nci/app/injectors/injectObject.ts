
import { ThemeObject, SimpleObject } from '@/nci/app/interfaces'

const injectObject = (themeObject: ThemeObject, componentObject: any) => { //**  componentObject type should be defined may be Image | Button etc */

  for (const key in componentObject) {

    for (const key2 in themeObject) {

      /** If the value of the component property matches the theme key e.g. "xs" == "xs" */
      if (key === key2) {

        for (const key3 in themeObject[key2]) {

          if (componentObject[key2] == key3) {
            if (componentObject)
              if (key2 !== 'selected') {
                /** Inject the value of the theme property into the component */
                if (!componentObject.styles) { componentObject.styles = '' }

                componentObject.styles = themeObject[key2][key3] + " " + componentObject.styles
                delete componentObject[key2]
              } else {
                componentObject.selected = themeObject[key2][key3]
              }
          }
        }
      }
    }
  }
  return componentObject
}

export default injectObject



