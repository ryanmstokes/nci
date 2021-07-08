import { clampGenerator } from '@/nci/app/factories/clamp/generator'

describe('Generating clamp values', () => {
  it('Should generate clamp values when passed corresponding values', () => {
    const clampValues = clampGenerator(250, 1000, ["xs", "sm", "md", "lg", "xs"], 0.5, 0.2, 14)
    expect(clampValues).toEqual(
      expect.objectContaining({
        "lg": "clamp( 1.1rem, 1.0333333333333332rem + 0.3733333333333333vw, 1.3rem )"
      })
    );
  })
})
