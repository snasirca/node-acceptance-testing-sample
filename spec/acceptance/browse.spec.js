import { environment, browser } from './acceptance_spec_helper'

beforeEach(async function () {
  await environment.setup()
})

afterEach(async function () {
  await environment.tearDown()
})

describe('browser', function () {
  it('is able to retrieve the title of a page', async function () {
    await browser.url('http://nayemanasir.com')

    const result = await browser.getTitle()

    expect(result).toEqual('Home | nayema.github.io')
  })

  it('is able to retrieve the title of another page', async function () {
    await browser.url('http://github.snasir.ca')

    const result = await browser.getTitle()

    expect(result).toEqual('Shahriyar Nasir')
  })
})
