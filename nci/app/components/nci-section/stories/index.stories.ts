
/** Import Storybook resources */
import { storiesOf } from '@storybook/vue';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

import recurseInject from '@/nci/app/injectors/recurseInject'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'

import config from '@/nci/data/demo'

const content = recurseInject(config.pages, Theme)

import { SimpleObject, Sections, Section } from '@/nci/app/interfaces'
const pages = content;
const sectionArray = {}
let story: any;
const generateSections = () => {

  Object.keys(pages).forEach(page => {
    const pageSections = pages[page].sections as Sections
    if (pageSections) {
      const blah = {} as any;
      Object.keys(pageSections).forEach(section => {
        story = storiesOf('Pages/' + page + '/sections', module)
        const param = pageSections[section] as Section;

        Object.keys(param).forEach((key) => {
          const paramb = param[key]
          /** See https://github.com/storybookjs/storybook/issues/12288 for how to add controls and decorators to storiesOf() API */
          blah[key] = {
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
          argTypes: blah,
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
