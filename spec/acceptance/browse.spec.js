import { environment, browser } from './acceptance_spec_helper'

beforeEach(async function () {
  await environment.setup()
})

afterEach(async function () {
  await environment.tearDown()
})

describe('webdriver.io api page', function () {
  it('should be able to filter for commands', async function () {
    await browser.url('http://nayemanasir.com')

    const result = await browser.getTitle()

    expect(result).toEqual('Home | nayema.github.io')
  })

  it('123should be able to filter for commands', async function () {
    await browser.url('http://github.snasir.ca')

    const result = await browser.getTitle()

    expect(result).toEqual('Shahriyar Nasir')
  })
})
