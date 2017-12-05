import acceptanceSpecHelper from './acceptance-spec-helper'

acceptanceSpecHelper.setup()

class Page {
  async open () {
    await Page.browser.url(Page.localUrl)
  }

  get title () {
    return Page.browser.getTitle()
  }

  static get browser () {
    return acceptanceSpecHelper.browser
  }

  static get localUrl () {
    return acceptanceSpecHelper.localUrl
  }
}

export default Page
