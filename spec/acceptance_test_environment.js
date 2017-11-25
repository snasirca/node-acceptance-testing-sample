const NodeEnvironment = require('jest-environment-node')

const webdriverio = require('webdriverio')
const options = {
  host: 'localhost',
  port: 9515,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

class AcceptanceTestEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup()
    this.global.browser = webdriverio.remote(options)
    await this.global.browser.init()
  }

  async teardown () {
    await this.global.browser.end()
    await super.teardown()
  }
}

module.exports = AcceptanceTestEnvironment
