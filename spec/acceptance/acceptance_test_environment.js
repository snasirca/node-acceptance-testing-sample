const NodeEnvironment = require('jest-environment-node')

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

class AcceptanceTestEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup()
    await chromedriver.start(args)
    this.global.browser = webdriverio.remote(options)
    await this.global.browser.init()
  }

  async teardown () {
    await this.global.browser.end()
    await chromedriver.stop()
    await super.teardown()
  }
}

module.exports = AcceptanceTestEnvironment
