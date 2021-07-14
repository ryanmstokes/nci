import { mount } from '@vue/test-utils'
import nciAnchor from '@/nci/app/components/nci-anchor/index.vue'
import { Button } from '@/nci/app/interfaces';

/** Button Component Tests */
/**
 * Loads an image and checks that it exists in the DOM
 * @test Check the image component mounted and prop are equal.
 */
describe('nci-anchor component', () => {

  test('Successfully loads a button.', () => {

    let wrapper = mount(nciAnchor, {
      propsData: {
        type: "title",
        title: "Contact Us",
        href: "https://www.nuxt.org",
        size: "md",
        color: "primary",
        styles: "w-auto bg-gray-200"
      } as Button,
      stubs: ['nuxt-link']
    })
    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().title).toBe('Contact Us');
    expect(wrapper.props().href).toBe('https://www.nuxt.org');
    expect(wrapper.props().styles).toBe('w-auto bg-gray-200');

    /** Check an image exists in the DOM */
    const button = wrapper.find('a');
    expect(button.exists()).toBe(true);
  });
})
