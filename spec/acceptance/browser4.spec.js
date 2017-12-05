import page from './support/home-page'

describe('browser4', function () {
  it('is able to retrieve the title of a page', async function () {
    await page.open()

    const result = await page.title

    expect(result).toEqual('Express')
  })
})
