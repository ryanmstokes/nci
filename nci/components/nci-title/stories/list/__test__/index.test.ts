import { mount } from '@vue/test-utils'
import nciTitle from '@/nci/components/nci-title/index.vue'

import { Sizes } from '@/nci/components/nci-title/stories/list/index.stories';

import { Title } from '@/nci/app/interfaces'

interface TitleList {
  [name: string]: Title
}
/** Title Component Tests */
/**
 * Mounts a title and checks that it exists in the DOM
 * @test Check the title component mounted and prop are equal.
 */
describe('nci-title component', () => {

  /** Check the image component mounted */
  /**
   * Loads an image and checks that it exists in the DOM
   * @param {string} title Title of the image.
   * @param {number} path Path to the image.
   * @param {number} styles CSS class list.
   */
  test('Does the component successfully load a title?', () => {
    let list = Sizes.args as TitleList;
    Object.keys(list).forEach(key => {

      const item = list[key]

      const wrapper = mount(nciTitle, {
        propsData: item
      })

      /** Check the component mounted */
      expect(wrapper.vm).toBeTruthy();

      /** Check props match */
      expect(wrapper.props().value).toBe('Landing Zone');

      /** Check an image exists in the DOM */
      const mountedTitle = wrapper.find('h1');
      expect(mountedTitle.exists()).toBe(true);
    })
  });
})
