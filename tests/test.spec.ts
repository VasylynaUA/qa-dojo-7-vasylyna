import { chromium } from "@playwright/test";
import test  from "node:test";

test("run", async () => {
const browser = await chromium.launch();
console.log(1);
const context = await browser.newContext();
console.log(2);
const page = await context.newPage();
console.log(3);
});