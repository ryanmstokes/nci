import { mount } from '@vue/test-utils'
import nciPage from '@/nci/app/components/nci-page/index.vue';

import { Pages, Page } from '@/nci/app/interfaces';
import Config from '@/nci/data/demo';

import registerComponents from '@/nci/app/testing/registerComponents'

/** Slide Component Tests */
/**
 * Loads a collection of components
 * @test Check the title component mounted and props are equal.
 * @test Check the title tag matches the leve e.g. h1, h2 etc.
 * @test Check the length of the title is above 0.
 */
describe('nci-page component', () => {

  beforeEach(() => {
    registerComponents();
  });


  const pages = Config.pages as Pages;
  const nav = {
    design: {
      styles: "nav",
      childStyles: "blah",
      size: "sm",
      color: "primary",
    },
    routes: [{
      path: "/about",
      name: "route"
    }]
  }

  Object.keys(pages).forEach(key => {
    test('Testing page:' + key, () => {

      let wrapper = mount(nciPage, {
        propsData: {
          page: pages[key] as Page,
          nav: nav,
        },
        stubs: ['nuxt-link']
      })

      /** Check the component mounted */
      expect(wrapper.vm).toBeTruthy();
    })
  })
})
