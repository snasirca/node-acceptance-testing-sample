import { setupEnvironment, browser, getPort } from './acceptance_spec_helper'

setupEnvironment()

describe('browser2', function () {
  it('is able to retrieve the title of a page', async function () {
    await browser.url('http://localhost:' + getPort())

    const result = await browser.getTitle()

    expect(result).toEqual('Express')
  })
})
