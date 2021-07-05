const injectObject = (themeObject: any, componentObject: any) => {
  let someObj = componentObject;
  for (const key in someObj) {
    /** If the lower themekey matches componnent property e.g "size" == "size" */
    /** Iterate a level lower in the theme to get the key and values */
    for (const key2 in themeObject) {
      /** If the value of the component property matches the theme key e.g. "xs" == "xs" */
      if (key === key2) {
        for (const key3 in themeObject[key2]) {
          if (someObj[key2] == key3) {

            /** Inject the value of the theme property into the component */
            if (!someObj.styles) { someObj.styles = '' }

            someObj.styles = themeObject[key2][key3] + " " + someObj.styles
            delete someObj[key2]
          }
        }
      }
    }
  }
  return someObj
}

export default injectObject
