import { CounterPage } from "../pages/counterPage"; 
import { test as base } from "@playwright/test";

type Fixtures = {
  counterPage: CounterPage;
}; 

/**
 * Extended test fixture that provides a pre-configured CounterPage instance.
 * Automatically navigates to the homepage and verifies initial state before each test.
 * 
 * @param {Page} page - Playwright page object injected by the test runner
 * @param {Function} use - Fixture function to provide the counterPage instance to tests
 * @returns {Promise<void>} Promise that resolves when the fixture setup is complete
 * 
 */
export const test = base.extend<Fixtures>({
    counterPage:async({page},use)=>{
        const counterPage = new CounterPage(page);
        await page.goto("/");
        await counterPage.verifyIntialCounterHeadingIsZero();
        await use(counterPage);
    }
})

export { expect } from "@playwright/test";