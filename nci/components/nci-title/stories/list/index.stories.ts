/** Import the Nuxt Image component  */
import nciTitle from '@/nci/components/nci-title/index.vue';

/** Import shared Typeface interfaces */
import { Title } from '@/nci/app/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';

import { storyList } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

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
  setup() {
    return { args };
  },
  template: StoryList.template,
});

const data = {
  type: "title",
  value: "Landing Zone",
  tag: "h1",
  styles: "title",
}

/** Bind and export the Story */
export const Sizes: Story<Title> = Template.bind({});

const StoryList = storyList(data, Theme.title, 'size', 'nci-title', "flex flex-col justify-left items-left text-left")

/** Associate the $args to the template instance */
Sizes.args = StoryList.list;

