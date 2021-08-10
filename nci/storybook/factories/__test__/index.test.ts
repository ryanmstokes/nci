import generateProps from '@/nci/storybook/factories/generateProps'

describe('Generating props', () => {
  it('should generate props for a story', () => {
    const props = generateProps(
      {
        type: "title",
        value: "Some Title",
        tag: "h1",
        size: "xl3",
        styles: "title",
      });
    console.log('generatedprops:', props)
    expect(props).toEqual(
      expect.objectContaining({
        type: {
          default: expect.any(Function),
          type: expect.any(Function)
        }
      })
    );
  })
})
