import { CounterPage } from "../pages/CounterPage";
import { test as base } from "@playwright/test";

type Fixtures = {
  counterPage: CounterPage;
}; 

export const test = base.extend<Fixtures>({
    counterPage:async({page},use)=>{
        const counterPage = new CounterPage(page);
        await page.goto("/");
        await counterPage.verifyIntialCounterHeadingIsZero();
        await use(counterPage);
    }
})

export { expect } from "@playwright/test";