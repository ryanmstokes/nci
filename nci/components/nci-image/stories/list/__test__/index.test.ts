// tests/unit/Button.spec.js

import { mount } from '@vue/test-utils';

import { Sizes } from '@/nci/components/nci-image/stories/list/index.stories';
import nciImage from '@/nci/components/nci-image/index.vue';
import { Image } from '@/nci/app/interfaces'

// Imports a specific story for the test
interface ImageList {
  [name: string]: Image
}
it('renders the button in the primary state', () => {
  let list = Sizes.args as ImageList;
  if (list) {
    Object.keys(list).forEach(key => {

      const item = list[key]
      const wrapper = mount(nciImage, {
        propsData: item,
      });

      /** Check the component mounted */
      expect(wrapper.vm).toBeTruthy();

      /** Check props match */
      expect(wrapper.props().title).toBe('Landing Zone');
      expect(wrapper.props().path).toBe('logo.svg');

      /** Check an image exists in the DOM */
      const img = wrapper.find('img');
      expect(img.exists()).toBe(true);
    });
  }

});
