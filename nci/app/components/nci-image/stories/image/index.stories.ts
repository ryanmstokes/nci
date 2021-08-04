/** Import the Nuxt Image component  */
import nciImage from '@/nci/app/components/nci-image/index.vue';

/** Import shared Typeface interfaces */
import { Image } from '@/nci/app/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Image', nciImage);

/** Export the sidebar Menu Item */
export default StoryMenuItem;

/** Require the Placeholder Image to be used in the image component **/
const imagePath = 'logo.svg';

import injectObject from '@/nci/app/injectors/injectObject'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'

const Templateb: Story<Image> = (args: Image) => ({
  components: { nciImage },
  props: generateProps(injectObject(Theme.image, args)),
  template: `<nci-image v-bind="$props"/>`
});

const data = {
  title: "Some Image",
  description: "some description",
  path: imagePath,
  size: "xs",
  styles: "border"
}

/** Bind and export the Story */
export const image: Story<Image> = Templateb.bind({});
image.args = data


export { Sizes } from '@/nci/app/components/nci-image/stories/list/index.stories'
