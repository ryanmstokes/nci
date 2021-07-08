import { fontSize, spacing, colors } from "@/nci/app/factories/clamp/theme-config"

describe('Generating set of clamp values', () => {
  it('Should generate clamp values when passing config params', () => {
    expect(fontSize).toBeInstanceOf(Object)
    expect(spacing).toBeInstanceOf(Object)
    expect(colors).toBeInstanceOf(Object)
  })
})
