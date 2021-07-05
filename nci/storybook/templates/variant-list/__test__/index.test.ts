import { variantList } from '@/nci/storybook';
import Theme from '@/nci/theme/default-light';

describe('component style variation factory', () => {
  it('should return an object with different component style variations', () => {
    const variants = variantList(Theme.image.size, 'nci-image', "border", undefined);
    expect(typeof variants).toBe('string');
  })
})
