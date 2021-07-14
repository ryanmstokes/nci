import { mount } from '@vue/test-utils'
import nciImage from '@/nci/app/components/nci-image/index.vue'

import { image } from '@/nci/app/components/nci-image/stories/image/index.stories';

/** Img Component Tests */
/**
 * Loads an image and checks that it exists in the DOM
 * @test Check the image component mounted and prop are equal.
 */
describe('nci-image component', () => {

  /** Check the image component mounted */
  /**
   * Loads an image and checks that it exists in the DOM
   * @param {string} title Title of the image.
   * @param {number} path Path to the image.
   * @param {number} styles CSS class list.
   */
  test('Does the component successfully load an image?', () => {

    const wrapper = mount(nciImage, {
      propsData: image.args,
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().title).toBe('Some Image');
    expect(wrapper.props().path).toBe('logo.svg');

    /** Check an image exists in the DOM */
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
})
