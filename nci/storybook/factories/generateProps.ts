const generateProps = (args: any): { [name: string]: { [type: string]: string | number | object } } => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let props = {} as { [name: string]: { [type: string]: string | number | object } };
  for (const key in args) {
    props[key] = {
      type: eval(capitalizeFirstLetter(typeof args[key])),
      default: () => args[key]
    }
  }
  return props
}

export default generateProps
