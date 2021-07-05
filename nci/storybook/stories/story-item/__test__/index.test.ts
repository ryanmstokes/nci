import { storyItem } from '@/nci/storybook';

describe('Generating stories', () => {
  it('should generate a storybook story item definition object', () => {
    const item = storyItem('Awesome Image', { title: "button", component: {} });
    expect(item).toEqual(expect.objectContaining({
      title: expect.any(String),
      component: expect.any(Object)
    }));
  })
})
