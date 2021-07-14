// tests/unit/Button.spec.js

import { mount } from '@vue/test-utils';

import { Sizes } from '@/nci/app/components/nci-anchor/stories/list/index.stories';
import nciAnchor from '@/nci/app/components/nci-anchor/index.vue';
import { Button } from '@/nci/app/interfaces'

//👇 Imports a specific story for the test
interface ButtonList {
  [name: string]: Button
}
it('renders the button in the primary state', () => {

  let list = Sizes.args as ButtonList;

  if (list) {
    Object.keys(list).forEach(key => {

      const item = list[key]

      const wrapper = mount(nciAnchor, {
        propsData: item,
        stubs: ['nuxt-link']
      });

      /** Check the component mounted */
      expect(wrapper.vm).toBeTruthy();

      /** Check an image exists in the DOM */
      const button = wrapper.find('a');
      expect(button.exists()).toBe(true);
      expect(wrapper.text()).toContain('button')
    });
  }

});
