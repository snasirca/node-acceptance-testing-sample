# Browser-Based Acceptance Testing with NodeJS

This sample project demonstrates how to use WebdriverIO, Chrome, and Jest to write browser-based acceptance specs.

## Steps:

1. Drop in the `acceptance_spec_helper` module into your project located currently in the `spec/acceptance` directory
2. Import it into each of the acceptance spec suites:
   ```javascript
   import { environment, browser } from './acceptance_spec_helper'
   ```
3. Add a `beforeEach` and `afterEach` clause to each acceptance spec to setup and tear down the environment:
   ```javascript
   beforeEach(async function () {
     await environment.setup()
   })

   afterEach(async function () {
     await environment.tearDown()
   })
   ```
   This will start and stop the WebdriverIO and `chromedriver`.
4. Use the `browser` import to drive the browser instance:
   ```javascript
   await browser.url('http://snasir.ca')
   const result = await browser.getTitle()
   ```
