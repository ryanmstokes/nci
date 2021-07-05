/** Import the Nuxt Image component  */
import nciImage from '@/nci/components/nci-image/index.vue';

/** Import shared Typeface interfaces */
import { Image } from '@/nci/app/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyList } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

/** SINGLE COMPONENT */

/** VARIANTS */
/** Story Template Constructor */
/**
 * Template setup function
 * @function Template
 * @param {string} components Define the component that should be passed to the template.
 * @param {function} setup Return the args to make them available to the component.
 * @param {string} template Compiled HTML template string
 */
const Template: Story<Image> = (args: Image) => ({
  components: { nciImage },
  setup() {
    return { args };
  },
  template: StoryList.template,
});

/** Require the Placeholder Image to be used in the image component **/
const imagePath = 'logo.svg';

/** Underscore syntax will show title with space **/
export const Sizes: Story<Image> = Template.bind({});

const data = {
  type: "image",
  title: "Landing Zone",
  description: "My awesome image description",
  path: "logo.svg",
  styles: "border"
}

const StoryList = storyList(data, Theme.image, 'size', 'nci-image', "flex flex-col justify-left items-left text-left")

/** Associate the $args to the template instance */
Sizes.args = StoryList.list;

