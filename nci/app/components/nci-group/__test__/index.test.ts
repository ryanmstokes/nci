import { mount } from '@vue/test-utils'
import nciGroup from '@/nci/app/components/nci-group/index.vue'
import registerComponents from '@/nci/app/testing/registerComponents'
/** NCI-GROUP Tests */
/**
 * Pass a component definition and get a rendered component back.
 * @test Check the component loads
 */
describe('nci-group component', () => {

  beforeEach(() => {
    registerComponents();
  });

  test('Successfully loads a group.', () => {

    let wrapper = mount(nciGroup, {
      propsData: {
        group: {
          type: 'group',
          styles: 'flex flex-col justify-center items-center text-center md:justify-left md:items-center md:text-left md:ml-7 md:pr-4 hero md:py-10',
          components: {
            title: {
              type: 'title',
              value: 'Landing Zone',
              tag: 'h1',
              styles: 'text-black-500 text-xl3 my-2.5 title md:self-start'
            },
            description: {
              type: 'title',
              value: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem.',
              tag: 'p',
              styles: 'text-black-500 text-sm my-0.5 description'
            },
            button: {
              type: 'anchor',
              href: 'https://www.nuxtjs.org',
              title: 'Contact Us',
              styles: 'bg-transparent uppercase rounded border border-primary text-primary hover:bg-gray-300 hover:border-transparent hover:text-white text-sm py-3 px-8 my-5 mx-2 md:self-start'
            }
          }
        }
      },
    })
    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

  });
})
