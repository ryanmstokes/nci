import injectObject from '@/nci/app/injectors/inject-object'
import { ThemeObject, SimpleObject } from '@/nci/app/interfaces'

export const storyList = (data: SimpleObject, themeObject: ThemeObject, property: string, component: string, decorator: string) => {

  let list: { [name: string]: { [name: string]: string } } = {};

  let template = '<div class="' + decorator + '">';
  for (const key in themeObject[property]) {
    let injectedObject = injectObject(themeObject, data)
    list[key] = {
      ...injectedObject,
      styles: injectedObject.styles + " " + themeObject[property][key]
    }
    template += `<` + component + ` v-bind="args.` + key + `"/>`
  }
  template += "</div>"
  return { list, template }
}
