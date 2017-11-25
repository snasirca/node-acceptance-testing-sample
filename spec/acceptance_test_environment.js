const NodeEnvironment = require('jest-environment-node')

class AcceptanceTestEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup()
    await this.setupWebdriverIO()
  }

  setupWebdriverIO () {

  }

  async teardown () {
    await this.teardownWebdriverIO()
    await super.teardown()
  }

  teardownWebdriverIO () {

  }
}

module.exports = AcceptanceTestEnvironment
