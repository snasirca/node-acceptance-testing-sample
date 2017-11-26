import chromedriver from 'chromedriver'
import { remote } from 'webdriverio'
import http from 'http'
import app from '../../app'

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

app.set('port', 3000)
const server = http.createServer(app)

const browser = remote(options)

function setupEnvironment () {
  beforeAll(async () => {
    await server.listen(3000)
    await chromedriver.start(args)
  })

  beforeEach(async () => {
    await browser.init()
  })

  afterEach(async () => {
    await browser.end()
  })

  afterAll(async () => {
    await server.close()
    await chromedriver.stop()
  })
}

export { setupEnvironment, browser }
