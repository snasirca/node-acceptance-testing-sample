import { setupEnvironment, browser, _getPort } from './acceptance_spec_helper'

setupEnvironment()

describe('browser1', function () {
  it('is able to retrieve the title of a page', async function () {
    await browser.url('http://localhost:' + _getPort())

    const result = await browser.getTitle()
    // const result = 'Express'

    expect(result).toEqual('Express')
  })
})
