/** Import the Nuxt Image component  */
import nciAnchor from '@/nci/components/nci-anchor/index.vue';

/** Import shared Typeface interfaces */
import { Button } from '@/nci/app/interfaces';

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
const Template: Story<Button> = (args: Button) => ({
  components: { nciAnchor },
  setup() {
    return { args };
  },
  template: StoryList.template,
});

/** Bind and export the Story */
export const Sizes: Story<Button> = Template.bind({});

const data = {
  title: "button",
  href: "http://www.nuxt.org",
  color: "primary",
  styles: 'self-start'
}
const StoryList = storyList(data, Theme.anchor, 'size', 'nci-anchor', "flex flex-col flex-start justify-left items-left text-left")
/** Associate the $args to the template instance */
Sizes.args = StoryList.list;
