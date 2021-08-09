import { shallowMount, createLocalVue } from '@vue/test-utils'
import nciPage from '@/nci/app/components/nci-page/index.vue';
import VueRouter from 'vue-router'

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

jest.mock('vue-router')

describe('nci-page component', () => {

  beforeEach(() => {
    registerComponents();
  });


  const pages = Config.pages as Pages;

  Object.keys(pages).forEach(key => {
    test('Testing page:' + key, () => {

      const nav = {
        routes: [{
          path: "/home",
          name: "home"
        },
        {
          path: "/about",
          name: "about"
        }],
        styles: "nav",
        childStyles: "blah",
        currentRoute: key
      }


      let wrapper = shallowMount(nciPage, {
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
