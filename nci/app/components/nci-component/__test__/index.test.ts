import { mount } from '@vue/test-utils'
import nciComponent from '@/nci/app/components/nci-component/index.vue'
import { Button } from '@/nci/app/interfaces';
import registerComponents from '@/nci/app/testing/registerComponents'
/** NCI-COMPONENT Tests */
/**
 * Pass a component definition and get a rendered component back.
 * @test Check the component loads
 */
describe('nci-component component', () => {

  beforeEach(() => {
    registerComponents();
  });

  test('Successfully loads a components.', () => {

    let wrapper = mount(nciComponent, {
      propsData: {
        component: {
          type: "anchor",
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
