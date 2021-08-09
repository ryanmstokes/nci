import { mount } from '@vue/test-utils';

import nciNav from '@/nci/app/components/nci-nav/index.vue';

//👇 Imports a specific story for the test
import { nav } from '@/nci/app/components/nci-nav/stories/nav/index.stories';

it('renders the button in the primary state', () => {
  const wrapper = mount(nciNav, {
    propsData: nav.args,
    stubs: ['nuxt-link']
  });

  expect(wrapper).toBeTruthy();
});
