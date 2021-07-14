import { mount } from '@vue/test-utils'
import nciImage from '@/nci/app/components/nci-image/index.vue'
import { Image } from '@/nci/app/interfaces';

describe('nci-image component', () => {

  test('Does the component successfully load an image?', () => {
    const props = (type: string, title: string, description: string, path: string, size: string, styles: string): Image => {
      return {
        type: type,
        title: title,
        description: description,
        path: path,
        size: size,
        styles: styles
      }
    };

    const wrapper = mount(nciImage, {
      propsData: props("image", "Logo", "My awesome logo description", "logo.svg", "md", "w-auto bg-gray-200")
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().title).toBe('Logo');
    expect(wrapper.props().path).toBe('logo.svg');
    expect(wrapper.props().styles).toBe('w-auto bg-gray-200');

    /** Check an image exists in the DOM */
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });

})
