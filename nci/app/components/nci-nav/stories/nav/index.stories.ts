import nciNav from '@/nci/app/components/nci-nav/index.vue'

import { Nav } from '@/nci/app/interfaces/'

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem } from '@/nci/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import Theme from '@/nci/theme/default-light';

import recurseInject from '@/nci/app/injectors/recurseInject'

import injectObject from '@/nci/app/injectors/injectObject'

/** Create a single component export and corresponding template and args */
import generateProps from '@/nci/storybook/factories/generateProps'

import config from '@/nci/data/demo'

const content = recurseInject(config.pages, Theme)
const props = injectObject(Theme.anchor, config.nav)

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Nav', nciNav);

/** Export the sidebar Menu Item */
export default StoryMenuItem;

const Template: Story<Nav> = (args: Nav) => ({
  components: { nciNav },
  props: generateProps(args), /* dont need injectObject here? */
  template: `<nci-nav v-bind="$props"/>`
});


/* Construct the routes object from the config.pages */

const routes = [
  {
    path: "https://www.nuxt.org",
    name: "Home"
  },
  {
    path: "https://www.nuxt.org",
    name: "About"
  }
]

const data = {
  styles: "nav",
  childStyles: props.styles,
  routes: routes,
  currentRoute: "/home"
}

/** Bind and export the Story */
export const nav: Story<Nav> = Template.bind({});
nav.args = data

