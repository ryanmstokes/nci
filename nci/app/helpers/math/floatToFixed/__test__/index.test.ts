import { floatToFixed } from '@/nci/app/helpers/math/floatToFixed';

describe('Set float decimal length', () => {
  it('Should return a number with corresponding decimal place length', () => {
    const checkNumber = floatToFixed(1.23945847584748, 2)
    expect(checkNumber).toBe(1.24)
  })
})
