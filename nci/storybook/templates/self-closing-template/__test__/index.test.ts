import { selfClosingTemplate } from '@/nci/storybook';

describe('Storybook template generation', () => {
  it('should return a HTML template string with an args data-attribute', () => {
    const item = selfClosingTemplate('Awesome Image', 'args.variant.sm', undefined);
    /** It's type should be equal to a string */
    expect(typeof item).toBe('string');
  })
})
