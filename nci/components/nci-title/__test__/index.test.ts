import { mount } from '@vue/test-utils'
import nciTitle from '@/nci/components/nci-title/index.vue';
import { Title } from '@/nci/app/interfaces';

/** Img Component Tests */
/**
 * Loads an title and checks that it exists in the DOM
 * @test Check the title component mounted and props are equal.
 * @test Check the title tag matches the leve e.g. h1, h2 etc.
 * @test Check the length of the title is above 0.
 */
describe('nci-title component', () => {

  /** Check the image component mounted */
  /**
   * Loads an image and checks that it exists in the DOM
   * @param {string} title Title of the image.
   * @param {number} path Path to the image.
   * @param {number} styles CSS class list.
   */
  test('Does the component successfully load an title tag?', () => {

    const props = (type: string, value: string, tag: string, size: string, styles: string): Title => {
      return {
        type: type,
        value: value,
        tag: tag,
        size: size,
        styles: styles
      }
    };

    let wrapper = mount(nciTitle, {
      propsData: props("title", "My Awesome Website", "h1", "lg", "title")
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().value).toBe('My Awesome Website');
    expect(wrapper.props().tag).toBe("h1");

    /** Check an image exists in the DOM */
    expect(wrapper.find('h1').exists()).toBe(true);

  });
})
