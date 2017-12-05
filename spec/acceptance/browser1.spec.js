import page from './home-page'

describe('browser1', function () {
  it('is able to retrieve the title of a page', async function () {
    await page.open()

    const result = await page.title

    expect(result).toEqual('Express')
  })
})
