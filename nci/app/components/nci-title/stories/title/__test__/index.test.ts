import { mount } from '@vue/test-utils'
import nciTitle from '@/nci/app/components/nci-title/index.vue'

import { title } from '@/nci/app/components/nci-title/stories/title/index.stories';

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

    const wrapper = mount(nciTitle, {
      propsData: title.args,
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().value).toBe('Some Title');

    /** Check an image exists in the DOM */
    const mountedTitle = wrapper.find('h1');
    expect(mountedTitle.exists()).toBe(true);
  });
})
