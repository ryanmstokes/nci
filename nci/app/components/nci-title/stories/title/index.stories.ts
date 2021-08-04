/** Import the Nuxt Image component  */
import nciTitle from '@/nci/app/components/nci-title/index.vue';

/** Import shared Typeface interfaces */
import { Title } from '@/nci/app/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem, } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

import injectObject from '@/nci/app/injectors/injectObject'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'


/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Title', nciTitle);

/** Export the sidebar Menu Item */
export default StoryMenuItem;

/** Story Template Constructor */
/**
 * Template setup function
 * @function Template
 * @param {string} components Define the component that should be passed to the template.
 * @param {function} setup Return the args to make them available to the component.
 * @param {string} template Compiled HTML template string
 */
const Template: Story<Title> = (args: Title) => ({
  components: { nciTitle },
  props: generateProps(args),
  args: args,
  template: `<nci-title v-bind="$props"/>`
});

const data = {
  type: "title",
  value: "Some Title",
  tag: "h1",
  size: "xl3",
  styles: "title",
}


/** Bind and export the Story */
export const title: Story<Title> = Template.bind({});
const blah = injectObject(Theme.title, data)
const result = blah;
title.args = result

export { Sizes } from '@/nci/app/components/nci-title/stories/list/index.stories'
