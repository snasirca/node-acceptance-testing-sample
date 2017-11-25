// var expect = require('chai').expect
const webdriverio = require('webdriverio')
const options = {
  host: 'localhost',
  port: 9515,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

const chromedriver = require('chromedriver')
const port = 9515
const args = [
  '--url-base=wd/hub',
  `--port=${port}`
]

let browser

beforeEach(function () {
  browser = webdriverio.remote(options)
  return browser.init()
})

afterEach(function () {
  return browser.end()
})

describe('webdriver.io api page', function () {
  it('should be able to filter for commands', async function () {
    await browser.url('http://webdriver.io')

    const result = await browser.getTitle()

    expect(result).toEqual('WebdriverIO - WebDriver bindings for Node.js1111111111')

    // return browser
    //   .url('http://www.google.com')
    //   .getTitle()
    //   .then(function (title) {
    //     console.log('Title was: ' + title)
    //   })
  })
})
//
//
// webdriverio
//   .remote(options)
//   .init()
//   .url('http://www.google.com')
//   .getTitle()
//   .then(function (title) {
//     console.log('Title was: ' + title)
//   })
//   .end()
//   .catch(function (err) {
//     console.log(err)
//   })
