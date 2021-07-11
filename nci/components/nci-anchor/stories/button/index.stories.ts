/** Import the Nuxt Image component  */
import nciAnchor from '@/nci/components/nci-anchor/index.vue';

/** Import shared Typeface interfaces */
import { Button } from '@/nci/app/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

import injectObject from '@/nci/app/injectors/inject-object'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Button', nciAnchor);

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
const Templateb: Story<Button> = (args: Button) => ({
  components: { nciAnchor },
  props: generateProps(args),
  template: `<nci-anchor v-bind="$props"/>`
});

const datab = {
  href: "https://www.nuxt.org",
  title: "Contact Us",
  size: "sm",
  color: "primary",
  styles: ""
}
/** Bind and export the Story */
export const button: Story<Button> = Templateb.bind({})
button.args = injectObject(Theme.anchor, datab)
button.decorators = [() => ({ template: '<div class="mt-10"><story /></div>' })];
//console.log(injectObject(Theme.anchor, datab))
export { Sizes } from '@/nci/components/nci-anchor/stories/list/index.stories'
