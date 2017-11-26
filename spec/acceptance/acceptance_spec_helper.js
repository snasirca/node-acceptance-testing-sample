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

const server = http.createServer(app)

const browser = remote(options)

function setupEnvironment () {
  beforeAll(async () => {
    await server.listen()
    app.set('port', server.address().port)
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

function getPort () {
  return server.address().port
}

export { setupEnvironment, browser, getPort }
