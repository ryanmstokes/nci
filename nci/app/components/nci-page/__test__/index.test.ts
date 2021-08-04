import { shallowMount, createLocalVue } from '@vue/test-utils'
import nciPage from '@/nci/app/components/nci-page/index.vue';
import VueRouter from 'vue-router'

import { Pages, Page } from '@/nci/app/interfaces';
import Config from '@/nci/data/demo';

import registerComponents from '@/nci/app/testing/registerComponents'
import { useRoute } from '@nuxtjs/composition-api';
import createMemoryHistory from 'vue-router'


const {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} = require('vue-router-mock')

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

  const router = createRouterMock({ value: { params: { index: '/home' } } })
  beforeEach(() => {
    // inject it globally to ensure `useRoute()`, `$route`, etc work
    // properly and give you access to test specific functions
    injectRouterMock(router)
  })

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

      /*jest.mock('vue-router', () => ({
        useRoute: jest.fn(() => ({ value: { params: { index: '/home' } } }))
      }))*/
      let wrapper = shallowMount(nciPage, {
        propsData: {
          page: pages[key] as Page,
          nav: nav,
        },
        stubs: ['nuxt-link'],
        history: createMemoryHistory,
        mocks: {
          getCurrentRoute: jest.fn(() => ({ value: { params: { index: '/home' } } }))
        }
      })
      /** Check the component mounted */
      expect(wrapper.vm).toBeTruthy();
    })
  })
})
