const chromedriver = require('chromedriver')
const port = 9515
const args = [
  '--url-base=wd/hub',
  `--port=${port}`
]

const webdriverio = require('webdriverio')
const options = {
  host: 'localhost',
  port: port,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

class AcceptanceTestEnvironment {
  constructor () {
    this.browser = webdriverio.remote(options)
  }

  async setup () {
    await chromedriver.start(args)
    await this.browser.init()
  }

  async tearDown () {
    await this.browser.end()
    await chromedriver.stop()
  }
}

const environment = new AcceptanceTestEnvironment()
const browser = environment.browser
export { environment, browser }
