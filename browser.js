const webdriverio = require('webdriverio')
const options = {
  host: 'localhost',
  port: 9515,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

export const browser = webdriverio.remote(options)
