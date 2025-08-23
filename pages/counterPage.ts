import { expect, Locator, Page } from "@playwright/test";
import { error } from "console";

export class CounterPage {
  readonly page: Page;
  readonly defaultCounterHeading: Locator;
  readonly counterCount: Locator;
  readonly incrementButton: Locator;
  readonly decrementButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultCounterHeading = page.getByRole("heading", { name: "Counter: 0" });
    this.counterCount = page.locator("#counter");
    this.incrementButton = page.getByRole("button", { name: "Increment" });
    this.decrementButton = page.getByRole("button", { name: "Decrement" });
  }

  /**
   * Clicks the increment button a specified number of times
   * @param {number} numberOfclicks - Number of times to click the increment button (defaults to a single click)
   * @returns {Promise<void>}
   * @throws {Error} If numberOfclicks <= 0.
   */
  async clickOnIncrementButton(numberOfclicks: number = 1): Promise<void> {
    if (numberOfclicks <= 0) {
      throw error("Error: Number of clicks can only be greater than zero!");
    }
    for (let i = 0; i < numberOfclicks; i++) {
      await this.incrementButton.click();
    }
  }

  /**
   * Clicks the decrement button a specified number of times
   * @param {number} numberOfclicks - Number of times to click the decrement button (defaults to a single click)
   * @returns {Promise<void>}
   * @throws {Error} If numberOfclicks <= 0.
   */
  async clickOnDecrementButton(numberOfclicks: number = 1): Promise<void> {
    if (numberOfclicks <= 0) {
      throw error("Error: Number of clicks can only be greater than zero!");
    }
    for (let i = 0; i < numberOfclicks; i++) {
      await this.decrementButton.click();
    }
  }

  /**
   * Verifies that the counter displays the expected value based on increment and decrement clicks.
   *
   * @param {number} incrementClicks - The number of increment button clicks
   * @param {number} [decrementClicks] - The number of decrement button clicks (optional)
   * @returns {Promise<void>} A promise that resolves when the verification is complete
   *
   */
  async verifyCounterValueIs(incrementClicks: number, decrementClicks?: number): Promise<void> {
    if (typeof decrementClicks === "undefined") {
      await expect(this.counterCount).toHaveText(incrementClicks.toString());
    } else {
      let counterCount: number = incrementClicks - decrementClicks;
      await expect(this.counterCount).toHaveText(counterCount.toString());
    }
  }

  /**
   * Verifies that the initial counter heading is visible and starts at zero.
   */
  async verifyIntialCounterHeadingIsZero(): Promise<void> {
    await expect(this.defaultCounterHeading).toBeVisible();
  }
}
