// const chromedriver = require('chromedriver')
// const port = 9515
// const args = [
//   '--url-base=wd/hub',
//   `--port=${port}`
// ]

// const browser = require('../browser')

import { browser } from '../browser'

beforeEach(function () {
  return browser.init()
})

afterEach(function () {
  return browser.end()
})

describe('webdriver.io api page', function () {
  it('should be able to filter for commands', async function () {
    await browser.url('http://nayemanasir.com')

    const result = await browser.getTitle()

    expect(result).toEqual('WebdriverIO - WebDriver bindings for Node.js1111111111')
  })

  it('123should be able to filter for commands', async function () {
    await browser.url('http://github.snasir.ca')

    const result = await browser.getTitle()

    expect(result).toEqual('Shahriyar Nasir')
  })
})
