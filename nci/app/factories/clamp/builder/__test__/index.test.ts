import { clampBuilder } from '@/nci/app/factories/clamp/builder'

describe('Generating clamp values', () => {
  it('Should generate clamp values when passed corresponding values', () => {
    const clampValues = clampBuilder(250, 1000, 0.5, 1.4, 14)
    expect(clampValues).toContain('clamp(')
  })
})
