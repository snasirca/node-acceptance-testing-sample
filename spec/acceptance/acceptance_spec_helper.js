import getPort from 'get-port'
import chromedriver from 'chromedriver'
import { remote } from 'webdriverio'
import http from 'http'
import app from '../../app'

const server = http.createServer(app)

let port
let browser

function setupEnvironment () {
  beforeAll(async () => {
    await server.listen()
    app.set('port', server.address().port)

    port = await getPort()
    const args = [
      '--url-base=wd/hub',
      `--port=${port}`
    ]
    await chromedriver.start(args)

    const options = {
      host: 'localhost',
      port: port,
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
    browser = remote(options)
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

function _getPort () {
  return server.address().port
}

export { setupEnvironment, browser, _getPort }
