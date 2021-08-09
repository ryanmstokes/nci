import { mount } from '@vue/test-utils'
import nciNav from '@/nci/app/components/nci-nav/index.vue'
import nciAnchor from '@/nci/app/components/nci-anchor/index.vue'
import { Pages, Page } from '@/nci/app/interfaces';
import Config from '@/nci/data/demo';

import registerComponents from '@/nci/app/testing/registerComponents'

/** Nav Component Tests */
/**
 * Loads a navigation link list
 * @test Check the nav component mounted and props are equal.
 * @test Check the linnk tag matches e.g. a, h2 etc.
 * @test Check the length of the link list.
 */
describe('nci-nav test', () => {

  beforeEach(() => {
    registerComponents();
  });

  test('Should load a list of navigation links', () => {
    const routes = [
      {
        path: "/about",
        name: "route"
      },
      {
        path: "/about",
        name: "route"
      }
    ]
    let wrapper = mount(nciNav, {
      propsData: {
        routes: routes,
        styles: "nav",
        childStyles: "item",
        currentRoute: "/home"
      },
      stubs: ['nuxt-link']
    })
    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.findAllComponents(nciAnchor).length).toBe(2) /** This is not returnign length!! */
  })

})


