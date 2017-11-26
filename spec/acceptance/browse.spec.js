import { setupEnvironment, browser } from './acceptance_spec_helper'

setupEnvironment()

describe('browser', function () {
  it('is able to retrieve the title of a page', async function () {
    await browser.url('http://localhost:3000')

    const result = await browser.getTitle()

    expect(result).toEqual('Express')
  })
})
