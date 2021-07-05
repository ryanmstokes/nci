import { Pages } from '@/nci/app/interfaces'
import injectObject from '@/nci/app/injectors/inject-object'
/** recurseInject
 * A function that takes 2 objects and searches for a key in obj1 and finds the
 * corresponding key in obj2 and injects obj2 value into obj1
 * @returns An object of type Pages with injected css styles
 */
const recurseInject = (obj1: any, obj2: any): Pages => {

  const res = JSON.parse(JSON.stringify(obj1));

  function recurse(obj1: any, obj2: any) {
    for (const key in obj1) {
      let value = obj1[key];
      /** Only iterate through the object if the object contains a type property */
      if (value.type) {
        for (const key2 in value) {
          /** iterate through the Theme */
          if (typeof value[key2] !== 'object') {
            for (const obj2key in obj2) {
              /** If the key of the theme matches the object type e.g. "title", "image", "button" etc */
              obj2key == value.type ? value = injectObject(obj2[obj2key], value) : undefined
            }
          } else {
            recurse(value, obj2);
          }
        }
      } else if (value && typeof value === 'object') {
        /** Its a nested object, repeat! */
        recurse(value, obj2);
      }
    }
    return res;
  };
  return recurse(res, obj2);
}

export default recurseInject
