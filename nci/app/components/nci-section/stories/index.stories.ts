
/** Import Storybook resources */
import { storiesOf } from '@storybook/vue';

import { Story } from '@storybook/vue';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

import recurseInject from '@/nci/app/injectors/recurseInject'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'

import config from '@/nci/data/demo'

const content = recurseInject(config.pages, Theme)

import { Sections, Section } from '@/nci/app/interfaces'
const pages = content;
const sectionArray = {}
let story: any; /** Fix this - This shouuld be properly typed */
const generateSections = () => {

  Object.keys(pages).forEach(page => {
    const pageSections = pages[page].sections as Sections
    if (pageSections) {
      const args = {} as any; /** Fix this - Lack of documentation regarding types for deprecated storiesOf() - This is used as it is not possible to load multiple components dynamically due to es6 export syntax used in new Story syntax */
      Object.keys(pageSections).forEach(section => {
        story = storiesOf('Pages/' + page + '/sections', module)
        const param = pageSections[section] as Section;

        Object.keys(param).forEach((key) => {
          const paramb = param[key]
          /** See https://github.com/storybookjs/storybook/issues/12288 for how to add controls and decorators to storiesOf() API */
          args[key] = {
            name: key,
            type: { name: typeof paramb },
            defaultValue: paramb,
            description: 'demo description',
            table: {
              type: { summary: typeof paramb },
              defaultValue: { summary: paramb }
            },
            control: {
              type: "object"
            }
          }
        })
        story.addParameters({
          argTypes: args,
          controls: { hideNoControlsWarning: true }
        })
        story.add(section, () => ({
          props: generateProps(pageSections[section]),
          template: `<nci-section  v-bind="$props"/>`
        }))
      })
      return sectionArray
    }
  })

}
generateSections()
export { story }
