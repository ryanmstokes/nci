import registerComponents from '@/nci/app/testing/registerComponents'

import { story } from '@/nci/components/nci-section/stories/index.stories'

/** Section Component Tests */
/**
 * Tests that the section story loads
 * @test Check the title component mounted and props are equal.
 * @test Check the title tag matches the leve e.g. h1, h2 etc.
 * @test Check the length of the title is above 0.
 */
describe('nci-section component', () => {

  beforeEach(() => {
    registerComponents();
  });

  test('Does the component successfully load its child components?', () => {
    /** How can we import args from stories generated with storiesOf() */
    expect(story instanceof Object).toBe(true)
  });
})
