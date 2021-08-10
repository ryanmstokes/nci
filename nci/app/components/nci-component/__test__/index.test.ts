import { mount } from '@vue/test-utils'
import nciComponent from '@/nci/app/components/nci-component/index.vue'
import { Button } from '@/nci/app/interfaces';

/** NCI-COMPONENT Tests */
/**
 * Pass a component definition and get a rendered component back.
 * @test Check the component loads
 */
describe('nci-anchor component', () => {

  test('Successfully loads a button.', () => {

    let wrapper = mount(nciComponent, {
      propsData: {
        component: {
          type: "title",
          title: "Contact Us",
          href: "https://www.nuxt.org",
          size: "md",
          color: "primary",
          styles: "w-auto bg-gray-200"
        } as Button
      },
    })
    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

  });
})
