import routes from './index'

describe('Checking routes count', () => {
  it('Counts routes', () => {
    expect(Object.keys(routes).length).toEqual(5)
  })
})