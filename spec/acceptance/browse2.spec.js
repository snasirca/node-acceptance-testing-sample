import { setupEnvironment, browser, localUrl } from './acceptance-spec-helper'

setupEnvironment()

describe('browser2', function () {
  it('is able to retrieve the title of a page', async function () {
    await browser.url(localUrl())

    const result = await browser.getTitle()
    // const result = 'Express'

    expect(result).toEqual('Express')
  })
})
