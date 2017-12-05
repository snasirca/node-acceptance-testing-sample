import getOpenPort from 'get-port'
import chromedriver from 'chromedriver'
import { remote } from 'webdriverio'
import http from 'http'
import app from '../../app'

class AcceptanceSpecHelper {
  constructor () {
    this._server = http.createServer(app)
  }

  setup () {
    beforeAll(async () => {
      await this._server.listen()
      app.set('port', this._server.address().port)
      // await this._startChromedriver()
      await this._createBrowser()
    })

    beforeEach(async () => {
      await this._browser.init()
    })

    afterEach(async () => {
      await this._browser.end()
    })

    afterAll(async () => {
      await this._server.close()
      // await chromedriver.stop()
    })
  }

  get browser () {
    return this._browser
  }

  get localUrl () {
    return 'http://localhost:' + this._server.address().port
  }

  async _startChromedriver () {
    const args = [
      '--url-base=wd/hub',
      `--port=${await this._getChromedriverPort()}`
    ]
    await chromedriver.start(args)
  }

  async _createBrowser () {
    const options = {
      host: 'localhost',
      port: await this._getChromedriverPort(),
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
    this._browser = remote(options)
  }

  async _getChromedriverPort () {
    return 9515
    // if (this._port === undefined) {
    //   this._port = await getOpenPort()
    //   return this._port
    // } else {
    //   return this._port
    // }
  }
}

export default new AcceptanceSpecHelper()
