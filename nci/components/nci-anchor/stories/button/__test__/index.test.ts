// tests/unit/Button.spec.js

import { mount } from '@vue/test-utils';

import nciAnchor from '@/nci/components/nci-anchor/index.vue';

//👇 Imports a specific story for the test
import { button } from '@/nci/components/nci-anchor/stories/button/index.stories';

it('renders the button in the primary state', () => {
  const wrapper = mount(nciAnchor, {
    propsData: button.args,
    stubs: ['nuxt-link']
  });
  expect(wrapper).toBeTruthy();
});
