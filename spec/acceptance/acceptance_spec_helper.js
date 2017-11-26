import chromedriver from 'chromedriver'
import { remote } from 'webdriverio'

const port = 9515
const args = [
  '--url-base=wd/hub',
  `--port=${port}`
]

const options = {
  host: 'localhost',
  port: port,
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

const browser = remote(options)

function setupEnvironment () {
  beforeAll(async () => {
    await chromedriver.start(args)
  })

  beforeEach(async () => {
    await browser.init()
  })

  afterEach(async () => {
    await browser.end()
  })

  afterAll(async () => {
    await chromedriver.stop()
  })
}

export { setupEnvironment, browser }
