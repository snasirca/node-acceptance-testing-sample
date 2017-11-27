# Browser-Based Acceptance Testing with NodeJS

This sample project demonstrates how to use Express, WebdriverIO, Chrome, and Jest to write browser-based acceptance 
specs.

## Steps:

1. Drop in the `acceptance_spec_helper` module into your project located currently in the `spec/acceptance` directory
2. Import it into each of the acceptance spec suites:
   ```javascript
   import { setupEnvironment, browser, localUrl } from './acceptance_spec_helper'
   ```
3. Before any test code such as a `describe` suite, add a call to the `setupEnvironment` function:
   ```javascript
   setupEnvironment()

   // rest of the test suite
   ```
   It will set up all the `before/after` calls. When those are called during test execution
   it will start and stop the `express` server, `chromedriver`, and `webdriverio`. It'll also use the `get-port`
   library to parallelize the execution of acceptance specs if `jest` decides it is more efficient.
4. Use the `browser` import and `localUrl` functions to drive the browser instance:
   ```javascript
   await browser.url(localUrl())
   const result = await browser.getTitle()
   ```
