import { test } from "../fixtures/fixtures";

test.describe("Counter functionality tests", () => {
  test("Counter is intialized to zero and incremented to 1", async ({ counterPage }) => {
    await counterPage.clickOnIncrementButton();
    await counterPage.verifyCounterValueIs(1);
  });

  test("Counter should be Incremented multiple times", async ({ counterPage }) => {
    const numberOfclicks: number = 7;

    await counterPage.clickOnIncrementButton(numberOfclicks);
    await counterPage.verifyCounterValueIs(numberOfclicks);
  });

  test("counter is incremented and decremented above zero", async ({ counterPage }) => {
    const numberOfIncrements: number = 10;
    const numberOfDecrements: number = 5;

    await counterPage.clickOnIncrementButton(numberOfIncrements);
    await counterPage.clickOnDecrementButton(numberOfDecrements);
    await counterPage.verifyCounterValueIs(numberOfIncrements, numberOfDecrements);
  });

  test("counter is incremented and decremeneted until zero", async({counterPage})=>{
    const numberOfclicks:number = 5;

    await counterPage.clickOnIncrementButton(numberOfclicks);
    await  counterPage.clickOnDecrementButton(numberOfclicks);
    await counterPage.verifyCounterValueIs(0);
  })
});
