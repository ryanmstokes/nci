import injectObject from '@/nci/app/injectors/inject-object'

export const storyList = (data: any, themeObject: any, size: any, component: string, decorator: string) => {

  let list: { [name: string]: { [name: string]: string } } = {};

  let template = '<div class="' + decorator + '">';
  for (const key in themeObject[size]) {
    let injectedObject = injectObject(themeObject, data)
    list[key] = {
      ...injectedObject,
      styles: injectedObject.styles + " " + themeObject[size][key]
    }
    template += `<` + component + ` v-bind="args.` + key + `"/>`
  }
  template += "</div>"
  return { list, template }
}
