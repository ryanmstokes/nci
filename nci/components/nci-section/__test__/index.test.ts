import { mount } from '@vue/test-utils'
import nciSection from '@/nci/components/nci-section/index.vue';

import { Pages } from '@/nci/app/interfaces';
import Config from '@/nci/data/demo';

import registerComponents from '@/nci/app/testing/registerComponents'

/** Section Component Tests */
/**
 * Loads a collection of components
 * @test Check the title component mounted and props are equal.
 * @test Check the title tag matches the leve e.g. h1, h2 etc.
 * @test Check the length of the title is above 0.
 */
describe('nci-section component', () => {

  beforeEach(() => {
    registerComponents();
  });


  const pages = Config.pages as Pages;
  Object.keys(pages).forEach(key => {
    const pageSections = pages[key].sections
    if (pageSections) {

      Object.keys(pageSections).forEach(key2 => {
        test("testing section:" + key2, () => {

          let wrapper = mount(nciSection, {
            propsData: pageSections[key2]
          })
          /** Check the component mounted */
          expect(wrapper.vm).toBeTruthy();
        })
      })
    }

  });
})
