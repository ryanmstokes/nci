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

const props = injectObject(Theme.anchor, config.nav)

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Nav', nciNav);

/** Export the sidebar Menu Item */
export default StoryMenuItem;
import { Route } from "@/nci/app/interfaces/";

const Template: Story<Nav> = (args: any) => ({
  components: { nciNav },
  props: generateProps(args),
  template: `<nci-nav v-bind="$props"/>`
});

let routes: Route[] = []

for (const key in config.pages) {
  routes.push({ path: "/" + key, component: {}, name: key })
}

const data = {
  styles: "nav",
  childStyles: props.styles,
  routes: routes,
  currentRoute: "home",
  selected: props.selected
}

/** Bind and export the Story */
export const nav: Story<any> = Template.bind({});
nav.args = data

