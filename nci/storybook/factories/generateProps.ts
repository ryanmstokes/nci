import { propTypes, generatedPropType } from '@/nci/storybook/interfaces/interfaces-storybook'

const generateProps = (args: any): generatedPropType => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let props = {} as generatedPropType;
  for (const key in args) {

    let propType: string = ""
    args[key] instanceof Array
      ? propType = "[]"
      : propType = capitalizeFirstLetter(typeof args[key])

    props[key] = {
      type: eval(propType),
      default: () => args[key]
    }
  }

  return props
}

export default generateProps
